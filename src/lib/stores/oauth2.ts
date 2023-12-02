import { oauth2Api } from '$lib/openapi';
import type { OAuth2Application } from '$lib/openapi/auth';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { derived, get } from 'svelte/store';

const oauth2ApplicationWritable = localstorageWritable<OAuth2Application | null>(
	'oauth2-application',
	null
);

export const oauth2Application = derived(oauth2ApplicationWritable, (state) => state);

export function isOAuth2Authorize() {
	return !!get(oauth2Application);
}

export async function getOAuth2Application(code: string) {
	const oauth2Application = await oauth2Api.application(code);
	oauth2ApplicationWritable.set(oauth2Application);
}

export function resetOAuth2Application() {
	oauth2ApplicationWritable.set(null);
}
