import type * as storage from "./StorageData";
import { Event } from "./EventCommon";

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
	1?: Event[] | null;

	/**
	 * @param ストレージデータ
	 */
	2?: storage.StorageData[];
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
