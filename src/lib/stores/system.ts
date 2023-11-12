import { browser } from '$app/environment';
import { handleError } from '$lib/errors';
import { authApi } from '$lib/openapi';
import type { SignUpMethods } from '$lib/openapi/auth';
import EventEmitter from 'eventemitter3';
import { get, derived, writable } from 'svelte/store';

const signUpMethodsWritable = writable<SignUpMethods>({
	enabled: false,
	password: false
});
const emitter = new EventEmitter<{ signUpMethods: SignUpMethods }>();
let signUpMethodsLoaded = false;

export const signUpMethods = derived(signUpMethodsWritable, (state) => state);

export function waitForSignUpMethods() {
	if (signUpMethodsLoaded) {
		return Promise.resolve(get(signUpMethods));
	} else {
		return new Promise<SignUpMethods>((resolve) => emitter.once('signUpMethods', resolve));
	}
}

async function fetchSignUpMethods() {
	try {
		const signUpMethods = await authApi.signUpMethods(1);
		signUpMethodsWritable.set(signUpMethods);
		signUpMethodsLoaded = true;
		emitter.emit('signUpMethods', signUpMethods);
	} catch (e) {
		handleError(e);
	}
}

if (browser) {
	fetchSignUpMethods();
}
