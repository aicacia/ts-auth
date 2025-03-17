import { application } from '$lib/stores/application.svelte';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { base } from '$app/paths';

export const load: LayoutLoad = async (event) => {
  await event.parent();
  if (!application.current) {
    redirect(302, `${base}`);
  }
  return {
    applicationId: application.current.id,
    application: application.current
  };
};
