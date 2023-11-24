import { applicationApi } from '$lib/openapi';
import type { ApplicationConfig } from '$lib/openapi/auth';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const { user } = await event.parent();
	const application = await applicationApi.show(event.params.application_id);
	const configs = (await applicationApi.config(event.params.application_id)).reduce(
		(acc, config) => {
			acc[config.key] = config;
			return acc;
		},
		{} as { [uri: string]: ApplicationConfig }
	);
	return { user, application, configs };
};
