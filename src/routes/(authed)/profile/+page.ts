import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	await event.parent();
};
