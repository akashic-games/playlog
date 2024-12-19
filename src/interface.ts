import { EventCodeType } from "./constants";
import type * as storage from "./StorageData";

/**
 * イベント共通のインターフェース。
 */
export interface Event extends Array<any> {
	[index: number]: any;
	/**
	 * @param EventCode
	 */
	0: EventCodeType;
	/**
	 * @param イベントフラグ
	 */
	1: number;
	/**
	 * @param プレイヤーID
	 */
	2: string | null;
}

/**
 * JoinEvent (0x0)
 * プレイヤーの参加イベント。
 */
export interface JoinEvent extends Event {
	/**
	 * @param プレイヤー名
	 */
	3: string;
	/*
	 * @param ストレージデータ
	 */
	4?: storage.StorageData[];
}

/**
 * LeaveEvent (0x1)
 * プレイヤーの離脱イベント。
 */
export interface LeaveEvent extends Event {
}

/**
 * TimestampEvent（0x2）
 * 時間の記録を表すイベント。
 */
export interface TimestampEvent extends Event {
	/**
	 * @param 時間を表す値
	 */
	3: number;
}

export interface PlayerInfoEvent extends Event {
	/**
	 * @param プレイヤー名
	 */
	3: string;
	/**
	 * @param ユーザ定義データ
	 */
	4?: any;
}

/**
 * MessageEvent (0x20)
 * 汎用的なデータを表すイベント。
 */
export interface MessageEvent extends Event {
	/**
	 * @param データ
	 */
	3: any;
}

/**
 * PointDownEvent (0x21)
 * ポイントダウンイベント。
 */
export interface PointDownEvent extends Event {
	/**
	 * @param ポインターID
	 */
	3: number;
	/**
	 * @param X座標
	 */
	4: number;
	/**
	 * @param Y座標
	 */
	5: number;
	/**
	 * @param エンティティID
	 */
	6?: number;
	/**
	 * @param ボタンの種類
	 */
	7?: number;
}

/**
 * PointMoveEvent (0x22)
 * ポイントムーブイベント。
 */
export interface PointMoveEvent extends Event {
	/**
	 * @param ポインターID
	 */
	3: number;
	/**
	 * @param X座標
	 */
	4: number;
	/**
	 * @param Y座標
	 */
	5: number;
	/**
	 * @param ポイントダウンイベントからのX座標の差
	 */
	6: number;
	/**
	 * @param ポイントダウンイベントからのY座標の差
	 */
	7: number;
	/**
	 * @param 直前のポイントムーブイベントからのX座標の差
	 */
	8: number;
	/**
	 * @param 直前のポイントムーブイベントからのY座標の差
	 */
	9: number;
	/**
	 * @param エンティティID
	 */
	10?: number;
	/**
	 * @param ボタンの種類
	 */
	11?: number;
}

/**
 * PointUpEvent (0x23)
 * ポイントアップイベント。
 */
export interface PointUpEvent extends Event {
	/**
	 * @param ポインターID
	 */
	3: number;
	/**
	 * @param X座標
	 */
	4: number;
	/**
	 * @param Y座標
	 */
	5: number;
	/**
	 * @param ポイントダウンイベントからのX座標の差
	 */
	6: number;
	/**
	 * @param ポイントダウンイベントからのY座標の差
	 */
	7: number;
	/**
	 * @param 直前のポイントムーブイベントからのX座標の差
	 */
	8: number;
	/**
	 * @param 直前のポイントムーブイベントからのY座標の差
	 */
	9: number;
	/**
	 * @param エンティティID
	 */
	10?: number;
	/**
	 * @param ボタンの種類
	 */
	11?: number;
}

/**
 * OperationEvent (0x40)
 * 操作プラグインイベント。
 */
export interface OperationEvent extends Event {
	/**
	 * @param 操作プラグインコード
	 */
	3: number;
	/**
	 * @param 操作プラグインデータ
	 */
	4: (number|string)[];
}

/**
 * Tick
 */
export interface Tick extends Array<any> {
	[index: number]: any;
	/**
	 * @param フレーム番号
	 */
	0: number;

	/**
	 * @param イベント
	 */
	1?: Event[] | null;

	/**
	 * @param ストレージデータ
	 */
	2?: storage.StorageData[];
}

/**
 * TickList
 */
export interface TickList extends Array<any> {
	[index: number]: any;
	/**
	 * 開始フレーム番号
	 */
	0: number;

	/**
	 * 終了フレーム番号
	 */
	1: number;

	/**
	 * `Tick[1]` または `Tick[2]` が存在する `Tick`
	 */
	2?: Tick[];
}
