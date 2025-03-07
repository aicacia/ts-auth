import { tenantApi } from '$lib/openapi';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
  const parent = await event.parent();
  const tenantId = parseInt(event.params.tenantId);
  const tenant = await tenantApi.getTenantById(tenantId, true, parent.applicationId);
  return {
    ...parent,
    tenantId,
    tenant
  };
};
