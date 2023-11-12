import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';

export const load: PageLoad = async (_event) => {
	// TODO check access to dashboard
	throw redirect(302, `${base}/dashboard`);
};
