import type * as Event from "./Event";
import type {StorageData} from "./StorageData";

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

export const TickIndex = {
	Frame: 0,
	Events: 1,
	StorageData: 2
} as const;
export type TickIndex = typeof TickIndex[keyof typeof TickIndex];

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

export const TickListIndex = {
	From: 0,
	To: 1,
	Ticks: 2
} as const;
export type TickListIndex = typeof TickListIndex[keyof typeof TickListIndex];
