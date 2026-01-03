import { createSyncState } from '$lib/core.svelte.js';
import type { StateSynchronizer } from '../types.js';

export const localStorageSync: StateSynchronizer = {
	read: (key: string) => {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : null;
	},
	write: (key: string, val: unknown) => localStorage.setItem(key, JSON.stringify(val))
};

export const lsSync = createSyncState(localStorageSync);
