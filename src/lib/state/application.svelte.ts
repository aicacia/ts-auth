import { goto, invalidateAll } from '$app/navigation';
import { base } from '$app/paths';
import { page } from '$app/state';
import { localStorageState } from '$lib/localStorageState.svelte';
import { applicationApi } from '$lib/openapi';
import type { Application } from '$lib/openapi/auth';
import { api } from './api.svelte';
import { token } from './token.svelte';

const currentApplicationId = localStorageState<number | null>('applicationId', null);
let currentApplicationPromise = $state<Promise<void> | null>(null);
let currentApplication = $state<Application | null>(null);

$effect.root(() => {
  $effect(() => {
    if (!currentApplicationId.value) {
      return;
    }
    if (currentApplication?.id === currentApplicationId.value) {
      return;
    }
    if (!api.connected) {
      return;
    }
    if (!token.validToken) {
      return;
    }
    if (currentApplicationPromise) {
      return;
    }
    currentApplicationPromise = applicationApi.getApplicationById(currentApplicationId.value)
      .then((application) => {
        currentApplication = application;
      })
      .finally(() => {
        currentApplicationPromise = null;
      })
  });
});

export const application = {
  get id() {
    return currentApplicationId.value;
  },
  get current() {
    return currentApplication;
  }
}

export function clearApplication() {
  currentApplicationId.reset();
}

export async function setApplication(application: Application) {
  currentApplication = application;
  currentApplicationId.value = application.id;

  const oldPath = `${base}/applications/${page.params.applicationId}`;
  if (page.url.pathname.startsWith(oldPath)) {
    const newUrl = new URL(page.url);
    newUrl.pathname = newUrl.pathname.replace(oldPath, `${base}/applications/${application.id}`);
    await goto(newUrl, {
      invalidateAll: true
    });
  }
}
