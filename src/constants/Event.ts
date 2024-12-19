/**
 * イベントコード
 */
export const EventCodeJoin: 0x0 = 0x0;
export const EventCodeLeave: 0x1 = 0x1;
export const EventCodeTimestamp: 0x2 = 0x2;
export const EventCodePlayerInfo: 0x3 = 0x3;
export const EventCodeMessage: 0x20 = 0x20;
export const EventCodePointDown: 0x21 = 0x21;
export const EventCodePointMove: 0x22 = 0x22;
export const EventCodePointUp: 0x23 = 0x23;
export const EventCodeOperation: 0x40 = 0x40;

export type EventCodeType =
	typeof EventCodeJoin |
	typeof EventCodeLeave |
	typeof EventCodeTimestamp |
	typeof EventCodePlayerInfo |
	typeof EventCodeMessage |
	typeof EventCodePointDown |
	typeof EventCodePointMove |
	typeof EventCodePointUp;


export const EventIndexCode: 0 = 0;
export const EventIndexEventFlags: 1 = 1;
export const EventIndexPlayerId: 2 = 2;
export type EventIndexType = typeof EventIndexCode | typeof EventIndexEventFlags | typeof EventIndexPlayerId;

export const EventFlagsMaskPriority: 0b00011 = 0b00011;
export const EventFlagsMaskTransient: 0b01000 = 0b01000;
export const EventFlagsMaskIgnorable: 0b10000 = 0b10000;
export type EventFlagsMaskType = typeof EventFlagsMaskPriority | typeof EventFlagsMaskTransient | typeof EventFlagsMaskIgnorable;

export const JoinEventIndexCode: 0 = 0;
export const JoinEventIndexEventFlags: 1 = 1;
export const JoinEventIndexPlayerId: 2 = 2;
export const JoinEventIndexPlayerName: 3 = 3;
export const JoinEventIndexStorageData: 4 = 4;
export type JoinEventIndexType =
	typeof JoinEventIndexCode |
	typeof JoinEventIndexEventFlags |
	typeof JoinEventIndexPlayerId |
	typeof JoinEventIndexPlayerName |
	typeof JoinEventIndexStorageData;

export const LeaveEventIndexCode: 0 = 0;
export const LeaveEventIndexEventFlags: 1 = 1;
export const LeaveEventIndexPlayerId: 2 = 2;
export type LeaveEventIndexType = typeof LeaveEventIndexCode | typeof LeaveEventIndexEventFlags | typeof LeaveEventIndexPlayerId;

export const TimestampEventIndexCode: 0 = 0;
export const TimestampEventIndexEventFlags: 1 = 1;
export const TimestampEventIndexPlayerId: 2 = 2;
export const TimestampEventIndexTimeStamp: 3 = 3;
export type TimestampEventIndexType =
	typeof TimestampEventIndexCode |
	typeof TimestampEventIndexEventFlags |
	typeof TimestampEventIndexEventFlags |
	typeof TimestampEventIndexTimeStamp;

export const PlayerInfoEventIndexCode: 0 = 0;
export const PlayerInfoEventIndexEventFlags: 1 = 1;
export const PlayerInfoEventIndexPlayerId: 2 = 2;
export const PlayerInfoEventIndexPlayerName: 3 = 3;
export const PlayerInfoEventIndexUserData: 4 = 4;
export type PlayerInfoEventIndexType =
	typeof PlayerInfoEventIndexCode |
	typeof PlayerInfoEventIndexEventFlags |
	typeof PlayerInfoEventIndexPlayerId |
	typeof PlayerInfoEventIndexPlayerName |
	typeof PlayerInfoEventIndexUserData;

export const MessageEventIndexCode: 0 = 0;
export const MessageEventIndexEventFlags: 1 = 1;
export const MessageEventIndexPlayerId: 2 = 2;
export const MessageEventIndexData: 3 = 3;
export type MessageEventIndexType =
	typeof MessageEventIndexCode |
	typeof MessageEventIndexEventFlags |
	typeof MessageEventIndexPlayerId |
	typeof MessageEventIndexData;

export const PointDownEventIndexCode: 0 = 0;
export const PointDownEventIndexEventFlags: 1 = 1;
export const PointDownEventIndexPlayerId: 2 = 2;
export const PointDownEventIndexPointerId: 3 = 3;
export const PointDownEventIndexX: 4 = 4;
export const PointDownEventIndexY: 5 = 5;
export const PointDownEventIndexEntityId: 6 =6;
export const PointDownEventIndexButton: 7 = 7;
export type PointDownEventIndexType =
	typeof PointDownEventIndexCode |
	typeof PointDownEventIndexEventFlags |
	typeof PointDownEventIndexPlayerId |
	typeof PointDownEventIndexPointerId |
	typeof PointDownEventIndexX |
	typeof PointDownEventIndexY |
	typeof PointDownEventIndexEntityId |
	typeof PointDownEventIndexButton;

export const PointMoveEventIndexCode: 0 = 0;
export const PointMoveEventIndexEventFlags: 1 = 1
export const PointMoveEventIndexPlayerId:2  = 2;
export const PointMoveEventIndexPointerId:3  = 3;
export const PointMoveEventIndexX:4  = 4;
export const PointMoveEventIndexY: 5 = 5;
export const PointMoveEventIndexStartDeltaX: 6 = 6;
export const PointMoveEventIndexStartDeltaY: 7 = 7;
export const PointMoveEventIndexPrevDeltaX: 8 = 8;
export const PointMoveEventIndexPrevDeltaY: 9 = 9;
export const PointMoveEventIndexEntityId: 10 = 10;
export const PointMoveEventIndexButton: 11 = 11;
export type PointMoveEventIndexType =
	typeof PointMoveEventIndexCode |
	typeof PointMoveEventIndexEventFlags |
	typeof PointMoveEventIndexPlayerId |
	typeof PointMoveEventIndexPointerId |
	typeof PointMoveEventIndexX |
	typeof PointMoveEventIndexY |
	typeof PointMoveEventIndexStartDeltaX |
	typeof PointMoveEventIndexStartDeltaY |
	typeof PointMoveEventIndexPrevDeltaX |
	typeof PointMoveEventIndexPrevDeltaY |
	typeof PointMoveEventIndexEntityId |
	typeof PointMoveEventIndexButton;

export const PointUpEventIndexCode: 0 = 0;
export const PointUpEventIndexEventFlags: 1 = 1;
export const PointUpEventIndexPlayerId: 2 = 2;
export const PointUpEventIndexPointerId: 3 = 3;
export const PointUpEventIndexX: 4 = 4;
export const PointUpEventIndexY: 5 = 5;
export const PointUpEventIndexStartDeltaX: 6 = 6;
export const PointUpEventIndexStartDeltaY: 7 = 7;
export const PointUpEventIndexPrevDeltaX: 8 = 8;
export const PointUpEventIndexPrevDeltaY: 9 = 9;
export const PointUpEventIndexEntityId: 10 = 10;
export const PointUpEventIndexButton: 11 = 11;
export type PointUpEventIndexType =
	typeof PointUpEventIndexCode |
	typeof PointUpEventIndexEventFlags |
	typeof PointUpEventIndexPlayerId |
	typeof PointUpEventIndexPointerId |
	typeof PointUpEventIndexX |
	typeof PointUpEventIndexY |
	typeof PointUpEventIndexPrevDeltaX |
	typeof PointUpEventIndexPrevDeltaY |
	typeof PointUpEventIndexPrevDeltaX |
	typeof PointUpEventIndexPrevDeltaY |
	typeof PointUpEventIndexEntityId |
	typeof PointUpEventIndexButton;

export const OperationEventIndexCode: 0 = 0;
export const OperationEventIndexEventFlags: 1 = 1;
export const OperationEventIndexPlayerId: 2 = 2;
export const OperationEventIndexOperatonCode: 3 = 3;
export const OperationEventIndexData: 4 = 4;
export type OperationEventIndexType =
	typeof OperationEventIndexCode |
	typeof OperationEventIndexEventFlags |
	typeof OperationEventIndexPlayerId |
	typeof OperationEventIndexOperatonCode |
	typeof OperationEventIndexData;
