import type * as storage from "./StorageData";

/**
 * イベントコード
 */
export const EventCode = {
	Join: 0x0,
	Leave: 0x1,
	Timestamp: 0x2,
	PlayerInfo: 0x3,
	Message: 0x20,
	PointDown: 0x21,
	PointMove: 0x22,
	PointUp: 0x23,
	Operation: 0x40
} as const;
export type EventCode = typeof EventCode[keyof typeof EventCode];

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
	 * @param イベントフラグ
	 */
	1: number;
	/**
	 * @param プレイヤーID
	 */
	2: string | null;
}

export const EventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2
} as const;
export type EventIndex = typeof EventIndex[keyof typeof  EventIndex];

export const EventFlagsMask = {
	Priority: 0b00011,
	Transient: 0b01000,
	Ignorable: 0b10000
} as const;
export type EventFlagsMask = typeof EventFlagsMask[keyof typeof EventFlagsMask];

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

export const JoinEventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2,
	PlayerName: 3,
	StorageData: 4
} as const;
export type JoinEventIndex = typeof JoinEventIndex[keyof typeof JoinEventIndex];

/**
 * LeaveEvent (0x1)
 * プレイヤーの離脱イベント。
 */
export interface LeaveEvent extends Event {
}

export const LeaveEventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2
} as const;
export type LeaveEventIndex = typeof LeaveEventIndex[keyof typeof LeaveEventIndex];

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

export const TimestampEventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2,
	Timestamp: 3
} as const;
export type TimestampEventIndex = typeof TimestampEventIndex[keyof typeof TimestampEventIndex];

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

export const PlayerInfoEventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2,
	PlayerName: 3,
	UserData: 4
} as const;
export type PlayerInfoEventIndex = typeof PlayerInfoEventIndex[keyof typeof PlayerInfoEventIndex];

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

export const MessageEventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2,
	Data: 3
} as const;
export type MessageEventIndex = typeof MessageEventIndex[keyof typeof MessageEventIndex];

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

export const PointDownEventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2,
	PointerId: 3,
	X: 4,
	Y: 5,
	EntityId: 6,
	Button: 7
} as const;
export type PointDownEventIndex = typeof PointDownEventIndex[keyof typeof PointDownEventIndex];

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

export const PointMoveEventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2,
	PointerId: 3,
	X: 4,
	Y: 5,
	StartDeltaX: 6,
	StartDeltaY: 7,
	PrevDeltaX: 8,
	PrevDeltaY: 9,
	EntityId: 10,
	Button: 11
} as const;
export type PointMoveEventIndex = typeof PointMoveEventIndex[keyof typeof PointMoveEventIndex];

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

export const PointUpEventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2,
	PointerId: 3,
	X: 4,
	Y: 5,
	StartDeltaX: 6,
	StartDeltaY: 7,
	PrevDeltaX: 8,
	PrevDeltaY: 9,
	EntityId: 10,
	Button: 11
} as const;
export type PointUpEventIndex = typeof PointUpEventIndex[keyof typeof PointUpEventIndex];

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

export const OperationEventIndex = {
	Code: 0,
	EventFlags: 1,
	PlayerId: 2,
	OperationCode: 3,
	Data: 4
} as const;
export type OperationEventIndex = typeof OperationEventIndex[keyof typeof OperationEventIndex];
