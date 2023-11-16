import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const load: PageLoad = async (event) => {
	const { user } = await event.parent();
	if (user.permissions.includes('admin')) {
		throw redirect(302, `${base}/applications`);
	}
	throw redirect(302, `${base}/profile`);
};
