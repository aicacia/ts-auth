import type { LayoutLoad } from './$types';
import { base } from '$app/paths';
import { isSignedIn } from '$lib/stores/user';
import { redirect } from '@sveltejs/kit';
import { waitForSignUpMethods } from '$lib/stores/system';

export const load: LayoutLoad = async () => {
	const signUpMethods = await waitForSignUpMethods();

	if (isSignedIn()) {
		redirect(302, `${base}/`);
	} else {
		return {
			signUpMethods
		};
	}
};
