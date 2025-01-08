export * from "../EventCommon";

/**
 * イベントコード
 */
export const EventCodeJoin = 0x0;
export const EventCodeLeave = 0x1;
export const EventCodeTimestamp = 0x2;
export const EventCodePlayerInfo = 0x3;
export const EventCodeMessage = 0x20;
export const EventCodePointDown = 0x21;
export const EventCodePointMove = 0x22;
export const EventCodePointUp = 0x23;
export const EventCodeOperation = 0x40;

export type EventCodeJoin = typeof EventCodeJoin;
export type EventCodeLeave = typeof EventCodeLeave;
export type EventCodeTimestamp = typeof EventCodeTimestamp;
export type EventCodePlayerInfo = typeof EventCodePlayerInfo;
export type EventCodeMessage = typeof EventCodeMessage;
export type EventCodePointDown = typeof EventCodePointDown;
export type EventCodePointMove = typeof EventCodePointMove;
export type EventCodePointUp = typeof EventCodePointUp;
export type EventCodeOperation = typeof EventCodeOperation;

export type EventCode =
	EventCodeJoin |
	EventCodeLeave |
	EventCodeTimestamp |
	EventCodePlayerInfo |
	EventCodeMessage |
	EventCodePointDown |
	EventCodePointMove |
	EventCodePointUp |
	EventCodeOperation;

export const EventIndexCode = 0;
export const EventIndexEventFlags = 1;
export const EventIndexPlayerId = 2;

export type EventIndexCode = typeof EventIndexCode;
export type EventIndexEventFlags = typeof EventIndexEventFlags;
export type EventIndexPlayerId = typeof EventIndexPlayerId;

export type EventIndexType = EventIndexCode | EventIndexEventFlags | EventIndexPlayerId;

export const EventFlagsMaskPriority = 0b00011;
export const EventFlagsMaskTransient = 0b01000;
export const EventFlagsMaskIgnorable = 0b10000;

export type EventFlagsMaskPriority = typeof EventFlagsMaskPriority;
export type EventFlagsMaskTransient = typeof EventFlagsMaskTransient;
export type EventFlagsMaskIgnorable = typeof EventFlagsMaskIgnorable;

export type EventFlagsMaskType = EventFlagsMaskPriority | EventFlagsMaskTransient | EventFlagsMaskIgnorable;

export const JoinEventIndexCode = 0;
export const JoinEventIndexEventFlags = 1;
export const JoinEventIndexPlayerId = 2;
export const JoinEventIndexPlayerName = 3;
export const JoinEventIndexStorageData = 4;

export type JoinEventIndexCode = typeof JoinEventIndexCode;
export type JoinEventIndexEventFlags = typeof JoinEventIndexEventFlags;
export type JoinEventIndexPlayerId = typeof JoinEventIndexPlayerId;
export type JoinEventIndexPlayerName = typeof JoinEventIndexPlayerName;
export type JoinEventIndexStorageData = typeof JoinEventIndexStorageData;

export type JoinEventIndexType =
	JoinEventIndexCode |
	JoinEventIndexEventFlags |
	JoinEventIndexPlayerId |
	JoinEventIndexPlayerName |
	JoinEventIndexStorageData;

export const LeaveEventIndexCode = 0;
export const LeaveEventIndexEventFlags = 1;
export const LeaveEventIndexPlayerId = 2;

export type LeaveEventIndexCode = typeof LeaveEventIndexCode;
export type LeaveEventIndexEventFlags = typeof LeaveEventIndexEventFlags;
export type LeaveEventIndexPlayerId = typeof LeaveEventIndexPlayerId;

export type LeaveEventIndexType = LeaveEventIndexCode | LeaveEventIndexEventFlags | LeaveEventIndexPlayerId;

export const TimestampEventIndexCode = 0;
export const TimestampEventIndexEventFlags = 1;
export const TimestampEventIndexPlayerId = 2;
export const TimestampEventIndexTimeStamp = 3;

export type TimestampEventIndexCode = typeof TimestampEventIndexCode;
export type TimestampEventIndexEventFlags = typeof TimestampEventIndexEventFlags;
export type TimestampEventIndexPlayerId = typeof TimestampEventIndexPlayerId;
export type TimestampEventIndexTimeStamp = typeof TimestampEventIndexTimeStamp;

export type TimestampEventIndexType =
	TimestampEventIndexCode |
	TimestampEventIndexEventFlags |
	TimestampEventIndexPlayerId |
	TimestampEventIndexTimeStamp;

export const PlayerInfoEventIndexCode = 0;
export const PlayerInfoEventIndexEventFlags = 1;
export const PlayerInfoEventIndexPlayerId = 2;
export const PlayerInfoEventIndexPlayerName = 3;
export const PlayerInfoEventIndexUserData = 4;

export type PlayerInfoEventIndexCode = typeof PlayerInfoEventIndexCode;
export type PlayerInfoEventIndexEventFlags = typeof PlayerInfoEventIndexEventFlags;
export type PlayerInfoEventIndexPlayerId = typeof PlayerInfoEventIndexPlayerId;
export type PlayerInfoEventIndexPlayerName = typeof PlayerInfoEventIndexPlayerName;
export type PlayerInfoEventIndexUserData = typeof PlayerInfoEventIndexUserData;

export type PlayerInfoEventIndexType =
	PlayerInfoEventIndexCode |
	PlayerInfoEventIndexEventFlags |
	PlayerInfoEventIndexPlayerId |
	PlayerInfoEventIndexPlayerName |
	PlayerInfoEventIndexUserData;

export const MessageEventIndexCode = 0;
export const MessageEventIndexEventFlags = 1;
export const MessageEventIndexPlayerId = 2;
export const MessageEventIndexData = 3;

export type MessageEventIndexCode = typeof MessageEventIndexCode;
export type MessageEventIndexEventFlags = typeof MessageEventIndexEventFlags;
export type MessageEventIndexPlayerId = typeof MessageEventIndexPlayerId;
export type MessageEventIndexData = typeof MessageEventIndexData;

export type MessageEventIndexType =
	MessageEventIndexCode |
	MessageEventIndexEventFlags |
	MessageEventIndexPlayerId |
	MessageEventIndexData;

export const PointDownEventIndexCode = 0;
export const PointDownEventIndexEventFlags = 1;
export const PointDownEventIndexPlayerId = 2;
export const PointDownEventIndexPointerId = 3;
export const PointDownEventIndexX = 4;
export const PointDownEventIndexY = 5;
export const PointDownEventIndexEntityId = 6;
export const PointDownEventIndexButton = 7;

export type PointDownEventIndexCode = typeof PointDownEventIndexCode;
export type PointDownEventIndexEventFlags = typeof PointDownEventIndexEventFlags;
export type PointDownEventIndexPlayerId = typeof PointDownEventIndexPlayerId;
export type PointDownEventIndexPointerId = typeof PointDownEventIndexPointerId;
export type PointDownEventIndexX = typeof PointDownEventIndexX;
export type PointDownEventIndexY = typeof PointDownEventIndexY;
export type PointDownEventIndexEntityId = typeof PointDownEventIndexEntityId;
export type PointDownEventIndexButton = typeof PointDownEventIndexButton;

export type PointDownEventIndexType =
	PointDownEventIndexCode |
	PointDownEventIndexEventFlags |
	PointDownEventIndexPlayerId |
	PointDownEventIndexPointerId |
	PointDownEventIndexX |
	PointDownEventIndexY |
	PointDownEventIndexEntityId |
	PointDownEventIndexButton;

export const PointMoveEventIndexCode = 0;
export const PointMoveEventIndexEventFlags = 1;
export const PointMoveEventIndexPlayerId  = 2;
export const PointMoveEventIndexPointerId  = 3;
export const PointMoveEventIndexX = 4;
export const PointMoveEventIndexY = 5;
export const PointMoveEventIndexStartDeltaX = 6;
export const PointMoveEventIndexStartDeltaY = 7;
export const PointMoveEventIndexPrevDeltaX = 8;
export const PointMoveEventIndexPrevDeltaY = 9;
export const PointMoveEventIndexEntityId = 10;
export const PointMoveEventIndexButton = 11;

export type PointMoveEventIndexCode = typeof PointMoveEventIndexCode;
export type PointMoveEventIndexEventFlags = typeof PointMoveEventIndexEventFlags;
export type PointMoveEventIndexPlayerId = typeof PointMoveEventIndexPlayerId;
export type PointMoveEventIndexPointerId = typeof PointMoveEventIndexPointerId;
export type PointMoveEventIndexX = typeof PointMoveEventIndexX;
export type PointMoveEventIndexY = typeof PointMoveEventIndexY;
export type PointMoveEventIndexStartDeltaX = typeof PointMoveEventIndexStartDeltaX;
export type PointMoveEventIndexStartDeltaY = typeof PointMoveEventIndexStartDeltaY;
export type PointMoveEventIndexPrevDeltaX = typeof PointMoveEventIndexPrevDeltaX;
export type PointMoveEventIndexPrevDeltaY = typeof PointMoveEventIndexPrevDeltaY;
export type PointMoveEventIndexEntityId = typeof PointMoveEventIndexEntityId;
export type PointMoveEventIndexButton = typeof PointMoveEventIndexButton;

export type PointMoveEventIndexType =
	PointMoveEventIndexCode |
	PointMoveEventIndexEventFlags |
	PointMoveEventIndexPlayerId |
	PointMoveEventIndexPointerId |
	PointMoveEventIndexX |
	PointMoveEventIndexY |
	PointMoveEventIndexStartDeltaX |
	PointMoveEventIndexStartDeltaY |
	PointMoveEventIndexPrevDeltaX |
	PointMoveEventIndexPrevDeltaY |
	PointMoveEventIndexEntityId |
	PointMoveEventIndexButton;

export const PointUpEventIndexCode = 0;
export const PointUpEventIndexEventFlags = 1;
export const PointUpEventIndexPlayerId = 2;
export const PointUpEventIndexPointerId = 3;
export const PointUpEventIndexX = 4;
export const PointUpEventIndexY = 5;
export const PointUpEventIndexStartDeltaX = 6;
export const PointUpEventIndexStartDeltaY = 7;
export const PointUpEventIndexPrevDeltaX = 8;
export const PointUpEventIndexPrevDeltaY = 9;
export const PointUpEventIndexEntityId = 10;
export const PointUpEventIndexButton = 11;

export type PointUpEventIndexCode = typeof PointUpEventIndexCode;
export type PointUpEventIndexEventFlags = typeof PointUpEventIndexEventFlags;
export type PointUpEventIndexPlayerId = typeof PointUpEventIndexPlayerId;
export type PointUpEventIndexPointerId = typeof PointUpEventIndexPointerId;
export type PointUpEventIndexX = typeof PointUpEventIndexX;
export type PointUpEventIndexY = typeof PointUpEventIndexY;
export type PointUpEventIndexStartDeltaX = typeof PointUpEventIndexStartDeltaX;
export type PointUpEventIndexStartDeltaY = typeof PointUpEventIndexStartDeltaY;
export type PointUpEventIndexPrevDeltaX = typeof PointUpEventIndexPrevDeltaX;
export type PointUpEventIndexPrevDeltaY = typeof PointUpEventIndexPrevDeltaY;
export type PointUpEventIndexEntityId = typeof PointUpEventIndexEntityId;
export type PointUpEventIndexButton = typeof PointUpEventIndexButton;

export type PointUpEventIndexType =
	 PointUpEventIndexCode |
	 PointUpEventIndexEventFlags |
	 PointUpEventIndexPlayerId |
	 PointUpEventIndexPointerId |
	 PointUpEventIndexX |
	 PointUpEventIndexY |
	 PointUpEventIndexStartDeltaX |
	PointUpEventIndexStartDeltaY |
	PointUpEventIndexPrevDeltaX |
	PointUpEventIndexPrevDeltaY |
	PointUpEventIndexEntityId |
	PointUpEventIndexButton;

export const OperationEventIndexCode = 0;
export const OperationEventIndexEventFlags = 1;
export const OperationEventIndexPlayerId = 2;
export const OperationEventIndexOperatonCode = 3;
export const OperationEventIndexData = 4;

export type OperationEventIndexCode = typeof OperationEventIndexCode;
export type OperationEventIndexEventFlags = typeof OperationEventIndexEventFlags;
export type OperationEventIndexPlayerId = typeof OperationEventIndexPlayerId;
export type OperationEventIndexOperatonCode = typeof OperationEventIndexOperatonCode;
export type OperationEventIndexData = typeof OperationEventIndexData;

export type OperationEventIndexType =
	OperationEventIndexCode |
	OperationEventIndexEventFlags |
	OperationEventIndexPlayerId |
	OperationEventIndexOperatonCode |
	OperationEventIndexData;
