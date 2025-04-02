import { tryGetToken } from '$lib/state/token.svelte';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const ssr = true;

export const load: LayoutLoad = async (event) => {
	await event.parent();
	await tryGetToken();
};
