import type { LayoutLoad } from './$types';
import { base } from '$app/paths';
import { isValidToken } from '$lib/stores/token.svelte';
import { redirect } from '@sveltejs/kit';
import { hasApi } from '$lib/stores/api.svelte';

export const load: LayoutLoad = async (event) => {
	await event.parent();

	if (!hasApi()) {
		redirect(302, `${base}/api`);
	}
	if (isValidToken()) {
		redirect(302, `${base}/`);
	}
};
