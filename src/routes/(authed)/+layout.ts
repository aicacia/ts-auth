import type { LayoutLoad } from './$types';
import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import { isValidToken } from '$lib/stores/token.svelte';
import { hasApi } from '$lib/stores/api.svelte';

export const prerender = false;
export const ssr = false;

export const load: LayoutLoad = async (event) => {
	await event.parent();

	if (!hasApi()) {
		redirect(302, `${base}/api`);
	}
	if (!isValidToken()) {
		redirect(302, `${base}/signin`);
	}
};
