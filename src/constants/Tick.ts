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

export const TickIndexFrame: 0 = 0;
export const TickIndexEvents: 1 = 1;
export const TickIndexStorageData: 2 = 2;
export type TickIndexType =
	typeof TickIndexFrame |
	typeof TickIndexEvents |
	typeof TickIndexStorageData;

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

export const TickListIndexFrom: 0 = 0;
export const TickListIndexTo: 1 = 1;
export const TickListIndexTicks: 2 = 2;
export type TickListIndexType =
	typeof TickListIndexFrom |
	typeof TickListIndexTo |
	typeof TickListIndexTicks;
