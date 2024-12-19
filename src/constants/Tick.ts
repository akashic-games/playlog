export const TickIndexFrame = 0;
export const TickIndexEvents = 1;
export const TickIndexStorageData = 2;
export type TickIndexType =
	typeof TickIndexFrame |
	typeof TickIndexEvents |
	typeof TickIndexStorageData;

export const TickListIndexFrom = 0;
export const TickListIndexTo = 1;
export const TickListIndexTicks = 2;
export type TickListIndexType =
	typeof TickListIndexFrom |
	typeof TickListIndexTo |
	typeof TickListIndexTicks;
