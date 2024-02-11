import type { LayoutLoad } from './$types';
import { base } from '$app/paths';
import { isSignedIn } from '$lib/stores/user';
import { redirect } from '@sveltejs/kit';
import { authApi } from '$lib/openapi';
import { PUBLIC_APPLICATION_ID } from '$env/static/public';

export const load: LayoutLoad = async (event) => {
  await event.parent();

	if (isSignedIn()) {
		redirect(302, `${base}/`);
	} else {
    const signUpMethods = await authApi.signUpMethods(parseInt(PUBLIC_APPLICATION_ID));
    return {
      signUpMethods
    }
  }
};
