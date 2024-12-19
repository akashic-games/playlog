import * as event from "./constants/Event";

/**
 * イベントコード
 */
export const enum EventCode {
	Join = event.EventCodeJoin,
	Leave = event.EventCodeLeave,
	Timestamp = event.EventCodeTimestamp,
	PlayerInfo = event.EventCodePlayerInfo,
	Message= event.EventCodeMessage,
	PointDown = event.EventCodePointDown,
	PointMove = event.EventCodePointMove,
	PointUp = event.EventCodePointUp,
	Operation = event.EventCodeOperation
}

export const enum EventIndex {
	Code = event.EventIndexCode,
	EventFlags = event.EventIndexEventFlags,
	PlayerId = event.EventIndexPlayerId
}

export const enum EventFlagsMask {
	Priority = event.EventFlagsMaskPriority,
	Transient = event.EventFlagsMaskTransient,
	Ignorable = event.EventFlagsMaskIgnorable
}

export const enum JoinEventIndex {
	Code = event.JoinEventIndexCode,
	EventFlags = event.JoinEventIndexEventFlags,
	PlayerId = event.JoinEventIndexPlayerId,
	PlayerName = event.PlayerInfoEventIndexPlayerName,
	StorageData = event.JoinEventIndexStorageData
}

export const enum LeaveEventIndex {
	Code = event.LeaveEventIndexCode,
	EventFlags = event.LeaveEventIndexEventFlags,
	PlayerId = event.LeaveEventIndexPlayerId
}

export const enum TimestampEventIndex {
	Code = event.TimestampEventIndexCode,
	EventFlags = event.TimestampEventIndexEventFlags,
	PlayerId = event.TimestampEventIndexPlayerId,
	Timestamp = event.TimestampEventIndexTimeStamp
}

export const enum PlayerInfoEventIndex {
	Code = event.PlayerInfoEventIndexCode,
	EventFlags = event.PlayerInfoEventIndexEventFlags,
	PlayerId = event.PlayerInfoEventIndexPlayerId,
	PlayerName = event.PlayerInfoEventIndexPlayerName,
	UserData = event.PlayerInfoEventIndexUserData
}

export const enum MessageEventIndex {
	Code = event.MessageEventIndexCode,
	EventFlags = event.MessageEventIndexEventFlags,
	PlayerId = event.MessageEventIndexPlayerId,
	Data = event.MessageEventIndexData
}

export const enum PointDownEventIndex {
	Code = event.PointDownEventIndexCode,
	EventFlags = event.PointDownEventIndexEventFlags,
	PlayerId = event.PointDownEventIndexPlayerId,
	PointerId = event.PointDownEventIndexPointerId,
	X = event.PointDownEventIndexX,
	Y = event.PointDownEventIndexY,
	EntityId = event.PointDownEventIndexEntityId,
	Button = event.PointDownEventIndexButton
}

export const enum PointMoveEventIndex {
	Code = event.PointMoveEventIndexCode,
	EventFlags = event.PointMoveEventIndexEventFlags,
	PlayerId = event.PointMoveEventIndexPlayerId,
	PointerId = event.PointMoveEventIndexPointerId,
	X = event.PointMoveEventIndexX,
	Y = event.PointMoveEventIndexY,
	StartDeltaX = event.PointMoveEventIndexStartDeltaX,
	StartDeltaY = event.PointMoveEventIndexStartDeltaY,
	PrevDeltaX = event.PointMoveEventIndexPrevDeltaX,
	PrevDeltaY = event.PointMoveEventIndexPrevDeltaY,
	EntityId = event.PointMoveEventIndexEntityId,
	Button = event.PointMoveEventIndexButton,
}

export const enum PointUpEventIndex {
	Code = event.PointUpEventIndexCode,
	EventFlags = event.PointUpEventIndexEventFlags,
	PlayerId = event.PointUpEventIndexPlayerId,
	PointerId = event.PointUpEventIndexPointerId,
	X = event.PointUpEventIndexX,
	Y = event.PointUpEventIndexY,
	StartDeltaX = event.PointUpEventIndexStartDeltaX,
	StartDeltaY = event.PointUpEventIndexStartDeltaY,
	PrevDeltaX = event.PointUpEventIndexPrevDeltaX,
	PrevDeltaY = event.PointUpEventIndexPrevDeltaY,
	EntityId = event.PointUpEventIndexEntityId,
	Button = event.PointUpEventIndexButton
}

export const enum OperationEventIndex {
	Code = event.OperationEventIndexCode,
	EventFlags = event.OperationEventIndexEventFlags,
	PlayerId = event.OperationEventIndexPlayerId,
	OperationCode = event.OperationEventIndexOperatonCode,
	Data = event.OperationEventIndexData
}
