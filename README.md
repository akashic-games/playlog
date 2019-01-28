<p align="center">
<img src="https://github.com/akashic-games/playlog/blob/master/img/akashic.png"/>
</p>

# playlog

Akashicのゲームの実行ログの仕様及び、TypeScriptの型定義を提供します。
本リポジトリは型の定義のみを提供しています。
Akashic Engineの詳細な利用方法については、 [公式ページ](https://akashic-games.github.io/) を参照してください。

## 仕様

`Event`、 `Tick` の仕様を定義します。

これらは、通信路を流れる際のオーバヘッドを少なくするため、配列型のデータとなっています。

**オプショナル** が **YES** となっているものは、 `null` 又は配列末尾のデータであれば省略することができます。

numberは数値型、stringは文字列型を表します。

### Event

`Event` はゲームに発生した出来事を表すデータです。

| EventCode | イベント       |
|:----------|:---------------|
| 0x0       | プレイヤー参加 |
| 0x1       | プレイヤー離脱 |
| 0x2       | 時間の記録     |
| 0x20      | 汎用的なデータ |
| 0x21      | ポイントダウン |
| 0x22      | ポイントムーブ |
| 0x23      | ポイントアップ |
| 0x40      | 操作プラグイン |

`Event` 共通のデータ・フォーマットは以下のようになります。

| Index | 型     | オプショナル |  説明        |
|:------|:-------|:-------------|:-------------|
| 0     | number | NO           | EventCode    |
| 1     | number | NO           | プライオリティ    |
| 2     | string | NO           | プレイヤーID |

インデックス2番以降は各イベントのデータがセットされます。

#### JoinEvent (0x0)

プレイヤーの参加イベントを表します。

| Index | 型            | オプショナル |  説明            |
|:------|:--------------|:-------------|:-----------------|
| 3     | string        | NO           | プレイヤー名     |
| 4     | StorageData[] | YES          | ストレージデータ |

`StorageData[]` は 参加したプレイヤーに紐づくデータを表します。
`StorageData` のデータ・フォーマットは [TypeScriptの型定義](https://github.com/akashic-games/playlog/blob/master/src/StorageData.ts) を参照してください。

#### LeaveEvent (0x1)

プレイヤーの離脱イベントを表します。

#### TimestampEvent (0x2)

時間の記録を表すイベントです。

| Index | 型            | オプショナル |  説明            |
|:------|:--------------|:-------------|:-----------------|
| 3     | number        | NO           | 時間を示す値     |

時間を示す値同士を比較したときに、大きい値が未来の時間を表します。

#### MessageEvent (0x20)

汎用的なデータを表すイベントを表します。

| Index | 型            | オプショナル |  説明            |
|:------|:--------------|:-------------|:-----------------|
| 3     | any           | NO           | 汎用的なデータ   |

#### PointDownEvent (0x21)

ポイントダウンイベントを表します。

| Index | 型            | オプショナル |  説明            |
|:------|:--------------|:-------------|:-----------------|
| 3     | number        | NO           | ポインターID     |
| 4     | number        | NO           | X座標            |
| 5     | number        | NO           | Y座標            |
| 6     | number        | YES          | エンティティID   |

#### PointMoveEvent (0x22)

ポイントムーブイベントを表します。

| Index | 型            | オプショナル |  説明                                       |
|:------|:--------------|:-------------|:--------------------------------------------|
| 3     | number        | NO           | ポインターID                                |
| 4     | number        | NO           | X座標                                       |
| 5     | number        | NO           | Y座標                                       |
| 6     | number        | NO           | ポイントダウンイベントからのX座標の差       |
| 7     | number        | NO           | ポイントダウンイベントからのY座標の差       |
| 8     | number        | NO           | 直前のポイントムーブイベントからのX座標の差 |
| 9     | number        | NO           | 直前のポイントムーブイベントからのY座標の差 |
| 10    | number        | YES          | エンティティID                              |

#### PointUpEvent (0x23)

ポイントアップイベントを表します。

| Index | 型            | オプショナル |  説明                                       |
|:------|:--------------|:-------------|:--------------------------------------------|
| 3     | number        | NO           | ポインターID                                |
| 4     | number        | NO           | X座標                                       |
| 5     | number        | NO           | Y座標                                       |
| 6     | number        | NO           | ポイントダウンイベントからのX座標の差       |
| 7     | number        | NO           | ポイントダウンイベントからのY座標の差       |
| 8     | number        | NO           | 直前のポイントムーブイベントからのX座標の差 |
| 9     | number        | NO           | 直前のポイントムーブイベントからのY座標の差 |
| 10    | number        | YES          | エンティティID                              |

#### OperationEvent (0x40)

操作プラグインイベントを表します。

| Index | 型                     | オプショナル |  説明                                       |
|:------|:-----------------------|:-------------|:--------------------------------------------|
| 3     | number                 | NO           | 操作プラグインコード                        |
| 4     | (number&#124;string)[] | NO           | 操作プラグインデータ                        |

### Tick

`Tick` はゲームの1フレームを実行するために必要なデータです。

| Index | 型            | オプショナル |  説明            |
|:------|:--------------|:-------------|:-----------------|
| 0     | number        | NO           | フレーム番号     |
| 1     | Event[]       | YES          | イベント         |
| 2     | StorageData[] | YES          | ストレージデータ |

`StorageData` のデータ・フォーマットは [TypeScriptの型定義](https://github.com/akashic-games/playlog/blob/master/src/StorageData.ts) を参照してください。

`Tick` は通信路を流れる際に、以下のような最適化を実施することが望まれます。

#### number

`Tick` にフレーム番号しか含まない場合は、配列ではなくフレーム番号（number）のみを送信します。

#### TickList

`TickList` はフレーム番号の続く複数の `Tick` を表します。

| Index | 型     | オプショナル |  説明                            |
|:------|:-------|:-------------|:---------------------------------|
| 0     | number | NO           | 開始フレーム番号                 |
| 1     | number | NO           | 終了フレーム番号                 |
| 2     | Tick[] | YES          | Tick\[1]又はTick\[2]が存在するTick |

## TypeScript型定義

### インストール

```
npm install @akashic/playlog
```

### 利用方法

```
import * as playlog from "@akashic/playlog";
```

## 開発

### ビルドテスト

```
cd test
tsc
```

## ライセンス
本リポジトリは MIT License の元で公開されています。
詳しくは [LICENSE](https://github.com/akashic-games/playlog/blob/master/LICENSE) をご覧ください。

ただし、画像ファイルおよび音声ファイルは
[CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/) の元で公開されています。
