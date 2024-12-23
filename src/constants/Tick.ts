export const TickIndexFrame = 0;
export const TickIndexEvents = 1;
export const TickIndexStorageData = 2;

export type TickIndexFrame = typeof TickIndexFrame;
export type TickIndexEvents = typeof TickIndexEvents;
export type TickIndexStorageData = typeof TickIndexStorageData;

export type TickIndexType =
	TickIndexFrame |
	TickIndexEvents |
	TickIndexStorageData;

export const TickListIndexFrom = 0;
export const TickListIndexTo = 1;
export const TickListIndexTicks = 2;

export type TickListIndexFrom = typeof TickListIndexFrom;
export type TickListIndexTo = typeof TickListIndexTo;
export type TickListIndexTicks = typeof TickListIndexTicks;

export type TickListIndexType =
	TickListIndexFrom |
	TickListIndexTo |
	TickListIndexTicks;
