import { applicationApi } from '$lib/openapi';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const { user } = await event.parent();
	const applicationId = parseInt(event.params.application_id);
	const application = await applicationApi.show(applicationId);
	return { user, application };
};
