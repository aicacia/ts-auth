import { applicationApi } from '$lib/openapi';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
  await event.parent();
  const applicationId = parseInt(event.params.applicationId);
  const application = await applicationApi.getApplicationById(applicationId);
  return {
    applicationId,
    application
  };
};
