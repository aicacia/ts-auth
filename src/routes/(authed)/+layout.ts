import type { LayoutLoad } from './$types';
import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import { token } from '$lib/stores/token.svelte';
import { api } from '$lib/stores/api.svelte';

export const prerender = false;
export const ssr = false;

export const load: LayoutLoad = async (event) => {
	await event.parent();

	if (!api.connected) {
		redirect(302, `${base}/api`);
	}
	if (!token.validToken) {
		redirect(302, `${base}/signin`);
	}
};
