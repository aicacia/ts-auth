import { getCurrentUser } from '$lib/stores/user';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const load: PageLoad = async (event) => {
	const currentUser = await getCurrentUser();
	const code = event.url.searchParams.get('code');

	if (currentUser) {
		throw redirect(302, `${base}/oauth2/authorize?code=${code}`);
	} else {
		throw redirect(302, `${base}/signin?code=${code}`);
	}
};
