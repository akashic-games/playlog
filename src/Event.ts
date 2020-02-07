import * as storage from "./StorageData";

/**
 * イベントコード
 */
export const enum EventCode {
	Join = 0x0,
	Leave = 0x1,
	Timestamp = 0x2,
	PlayerInfo = 0x3,
	Message= 0x20,
	PointDown = 0x21,
	PointMove = 0x22,
	PointUp = 0x23,
	Operation = 0x40
}

/**
 * イベント共通のインターフェース。
 */
export interface Event extends Array<any> {
	[index: number]: any;
	/**
	 * @param EventCode
	 */
	0: EventCode;
	/**
	 * @param プライオリティ
	 */
	1: number;
	/**
	 * @param プレイヤーID
	 */
	2: string | null;
}

export const enum EventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2
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

export const enum JoinEventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2,
	PlayerName = 3,
	StorageData = 4
}

/**
 * LeaveEvent (0x1)
 * プレイヤーの離脱イベント。
 */
export interface LeaveEvent extends Event {
}

export const enum LeaveEventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2
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

export const enum TimestampEventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2,
	Timestamp = 3
}

export interface PlayerInfoEvent extends Event {
	/**
	 * @param プレイヤー名
	 */
	3: string;
}

export const enum PlayerInfoEventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2,
	PlayerName = 3
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

export const enum MessageEventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2,
	Data = 3
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
}

export const enum PointDownEventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2,
	PointerId = 3,
	X = 4,
	Y = 5,
	EntityId = 6
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
}

export const enum PointMoveEventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2,
	PointerId = 3,
	X = 4,
	Y = 5,
	StartDeltaX = 6,
	StartDeltaY = 7,
	PrevDeltaX = 8,
	PrevDeltaY = 9,
	EntityId = 10
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
}

export const enum PointUpEventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2,
	PointerId = 3,
	X = 4,
	Y = 5,
	StartDeltaX = 6,
	StartDeltaY = 7,
	PrevDeltaX = 8,
	PrevDeltaY = 9,
	EntityId = 10
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

export const enum OperationEventIndex {
	Code = 0,
	Priority = 1,
	PlayerId = 2,
	OperationCode = 3,
	Data = 4
}
