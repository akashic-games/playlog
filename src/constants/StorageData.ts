/**
 * ストレージキー
 */
export interface StorageKey {
	region: number;
	regionKey: string;
	gameId?: string;
	userId?: string;
}

/**
 * ストレージから取得した値
 */
export interface StorageValue {
	data: string|number;
	tag?: string;
	storageKey?: StorageKey;
}

/**
 * 読み込み時に指定したストレージキー
 */
export interface StorageReadKey extends StorageKey {
	options?: {
		keyOrder?: number;
		valueOrder?: number;
	};
}

/**
 * ストレージデータ
 */
export interface StorageData {
	readKey: StorageReadKey;
	values: StorageValue[];
}
