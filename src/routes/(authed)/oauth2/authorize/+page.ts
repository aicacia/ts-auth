import { getCurrentUser } from '$lib/stores/user';
import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async (event) => {
	await getCurrentUser();
	const code = event.url.searchParams.get('code');

	return { code };
};
