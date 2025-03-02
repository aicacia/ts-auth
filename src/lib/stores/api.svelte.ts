import { localStorageState } from '$lib/localStorageState.svelte';

export interface API {
	url: string;
	tenant: string;
}

const apiState = localStorageState<API | null>('api', null);

export const api = {
	get url() {
		return apiState.value?.url;
	},
	get tenant() {
		return apiState.value?.tenant;
	},
}

export function clearApi() {
	apiState.reset();
}

export function hasApi() {
	if (!apiState.value) {
		return false;
	}
	return !!apiState.value.url && !!apiState.value.tenant;
}

export function getApi() {
	return apiState.value;
}

export function setApi(api: API) {
	apiState.value = api;
}
