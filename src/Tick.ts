import type * as Event from "./Event";
import type {StorageData} from "./StorageData";

export const enum TickIndex {
	Frame = 0,
	Events = 1,
	StorageData = 2
}


export const enum TickListIndex {
	From = 0,
	To = 1,
	Ticks = 2
}
