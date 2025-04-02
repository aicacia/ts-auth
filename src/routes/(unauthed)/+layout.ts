import type { LayoutLoad } from './$types';
import { base } from '$app/paths';
import { token } from '$lib/state/token.svelte';
import { redirect } from '@sveltejs/kit';
import { api } from '$lib/state/api.svelte';

export const load: LayoutLoad = async (event) => {
	await event.parent();

	if (!api.connected) {
		redirect(302, `${base}/api`);
	}
	if (token.validToken) {
		redirect(302, `${base}/`);
	}
};
