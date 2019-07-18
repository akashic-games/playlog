import * as Event from "./Event";
import {StorageData} from "./StorageData";

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
	1?: Event.Event[] | null;

	/**
	 * @param ストレージデータ
	 */
	2?: StorageData[];
}

export const enum TickIndex {
	Frame = 0,
	Events = 1,
	StorageData = 2
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

export const enum TickListIndex {
	From = 0,
	To = 1,
	Ticks = 2
}
