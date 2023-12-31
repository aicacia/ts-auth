import type { LayoutLoad } from './$types';
import { base } from '$app/paths';
import { getCurrentUser } from '$lib/stores/user';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async () => {
	const currentUser = await getCurrentUser();

	if (currentUser) {
		return {
			user: currentUser
		};
	} else {
		redirect(302, `${base}/signin`);
	}
};
