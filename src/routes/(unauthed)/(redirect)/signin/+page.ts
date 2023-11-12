import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const { signUpMethods } = await event.parent();
	return {
		signUpMethods
	};
};
