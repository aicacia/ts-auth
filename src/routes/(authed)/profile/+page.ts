import { waitForSignUpMethods } from '$lib/stores/system';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const [{ user }, signUpMethods] = await Promise.all([event.parent(), waitForSignUpMethods()]);
	return { user, signUpMethods };
};
