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

export const enum EventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2
}

export const enum EventFlagsMask {
	Priority = 0b00011,
	Transient = 0b01000,
	Ignorable = 0b10000
}

export const enum JoinEventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2,
	PlayerName = 3,
	StorageData = 4
}


export const enum LeaveEventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2
}

export const enum TimestampEventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2,
	Timestamp = 3
}


export const enum PlayerInfoEventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2,
	PlayerName = 3,
	UserData = 4
}


export const enum MessageEventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2,
	Data = 3
}


export const enum PointDownEventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2,
	PointerId = 3,
	X = 4,
	Y = 5,
	EntityId = 6,
	Button = 7
}


export const enum PointMoveEventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2,
	PointerId = 3,
	X = 4,
	Y = 5,
	StartDeltaX = 6,
	StartDeltaY = 7,
	PrevDeltaX = 8,
	PrevDeltaY = 9,
	EntityId = 10,
	Button = 11,
}

export const enum PointUpEventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2,
	PointerId = 3,
	X = 4,
	Y = 5,
	StartDeltaX = 6,
	StartDeltaY = 7,
	PrevDeltaX = 8,
	PrevDeltaY = 9,
	EntityId = 10,
	Button = 11
}


export const enum OperationEventIndex {
	Code = 0,
	EventFlags = 1,
	PlayerId = 2,
	OperationCode = 3,
	Data = 4
}
