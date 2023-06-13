/**
 * ビルドテスト
 * ビルドテストのため変数未使用の lint エラーは無効とする
 */
/* eslint @typescript-eslint/no-unused-vars: off */
import * as playlog from "../lib";

// JoinEvent
const joinEvent: playlog.JoinEvent = [playlog.EventCode.Join, 3, "100", "tom"];
joinEvent[playlog.JoinEventIndex.PlayerName] = "jack";

// JoinEvent with StorageData
const storageData: playlog.StorageData = {
	readKey: {
		region: 1, regionKey: "a001.b002", gameId: "foo", userId: "100"
	},
	values: [
		{data: "apple", tag: "fruit", storageKey: {region: 1, regionKey: "a001.b002", gameId: "foo", userId: "100"}}
	]
};
const joinEventWithStorage: playlog.JoinEvent = [playlog.EventCode.Join, 3, "100", "tom", [storageData]];

// LeaveEvent
const leaveEvent: playlog.LeaveEvent = [playlog.EventCode.Leave, 3, "100"];

// MessageEvent
const messageEvent: playlog.MessageEvent = [playlog.EventCode.Message, 1, "100", {name: "data1", data: "baz"}];

// TimestampEvent
const timestampEvent: playlog.TimestampEvent = [playlog.EventCode.Timestamp, 1, "100", 2000];

// PlayerInfoEvent
const playerInfoEvent: playlog.PlayerInfoEvent = [playlog.EventCode.PlayerInfo, 1, "100", "tom", { someAdditionalData: 100 }];
playerInfoEvent[playlog.PlayerInfoEventIndex.PlayerName] = "joe";

// PointDownEvent
const pointDownEvent: playlog.PointDownEvent = [playlog.EventCode.PointDown, 1, "100", 1, 100, 200, 500, 0];

// PointMoveEvent
const pointMoveEvent: playlog.PointMoveEvent = [playlog.EventCode.PointMove, 1, "100", 1, 100, 200, 10, 12, 20, 22, 500];

// PointUpEvent
const pointUpEvent: playlog.PointUpEvent = [playlog.EventCode.PointUp, 1, "100", 1, 100, 200, 30, 12, 200, 220, 500];

// OperationEvent
const operationEvent: playlog.OperationEvent = [playlog.EventCode.Operation, 1, "100", 32, [100, 200, 30, 12, 200, 220, "orange"]];

// Event playerId = null
const joinEventPlayerIdNull: playlog.Event = [playlog.EventCode.Join, 1, null];

// Transient event (priority=2)
const transientEvent: playlog.Event = [playlog.EventCode.Message, 2 | playlog.EventFlagsMask.Transient, "100", { transient: true }];
var priority = playlog.EventFlagsMask.Priority & transientEvent[playlog.EventIndex.EventFlags];
var transient = !!(playlog.EventFlagsMask.Transient & transientEvent[playlog.EventIndex.EventFlags]);
var ignorable = !!(playlog.EventFlagsMask.Ignorable & transientEvent[playlog.EventIndex.EventFlags]);

// Ignorable event (priority=1)
const skippableEvent: playlog.Event = [playlog.EventCode.Message, 1 | playlog.EventFlagsMask.Ignorable, "100", { ignorable: true }];
var priority = playlog.EventFlagsMask.Priority & skippableEvent[playlog.EventIndex.EventFlags];
var transient = !!(playlog.EventFlagsMask.Transient & skippableEvent[playlog.EventIndex.EventFlags]);
var ignorable = !!(playlog.EventFlagsMask.Ignorable & skippableEvent[playlog.EventIndex.EventFlags]);

// Tick
const tick: playlog.Tick = [100];

// Tick with Event
const tickWithEvent: playlog.Tick = [100, [pointDownEvent]];

// Tick with Storage
var tickWithStorage: playlog.Tick = [100, null, [storageData]];
tickWithStorage[playlog.TickIndex.Frame] = 101;

// Tick with Event and Storage
var tickWithStorage: playlog.Tick = [100, [pointDownEvent], [storageData]];

// TickList
const tickList: playlog.TickList = [0, 100, [tickWithStorage]];
tickList[playlog.TickListIndex.From] = 10;
