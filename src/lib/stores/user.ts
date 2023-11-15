import { derived, get } from 'svelte/store';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { isOnline } from './online';
import { authApi, getAccessToken, setAccessToken, userApi } from '$lib/openapi';
import type { User } from '$lib/openapi/auth';
import EventEmitter from 'eventemitter3';
import { parseJWTClaims } from '$lib/util';

const tokenWritable = localstorageWritable<string | null>('token', null);
const userWritable = localstorageWritable<User | null>('user', null);
export const user = derived(userWritable, (user) => user);
export const signedIn = derived(userWritable, (user) => !!user);

const emitter = new EventEmitter<{ user: User }>();
export function waitForUser() {
	if (getAccessToken()) {
		return Promise.resolve(get(userWritable));
	} else {
		return new Promise<User>((resolve) => emitter.once('user', resolve));
	}
}

export function isSignedIn() {
	return !!get(user) && !!get(tokenWritable);
}

export async function signIn(usernameOrEmail: string, password: string) {
	const token = await authApi.signInWithPassword({
		application_id: 1,
		username_or_email: usernameOrEmail,
		password
	});
	return signInWithToken(token);
}

export async function signUp(
	username: string,
	password: string,
	passwordConfirmation: string,
	email: string
) {
	const token = await authApi.signUpWithPassword({
		application_id: 1,
		username,
		email,
		password,
		password_confirmation: passwordConfirmation
	});
	return signInWithToken(token);
}

async function signInWithToken(token: string) {
	setAccessToken(token);
	const user = await userApi.current();
	userWritable.set(user);
	tokenWritable.set(token);
	emitter.emit('user', user);
	return user;
}

export function signOut() {
	userWritable.set(null);
	tokenWritable.set(null);
	setAccessToken(undefined);
}

async function refreshToken() {
	const newToken = await userApi.refreshToken();
	setAccessToken(newToken);
	tokenWritable.set(newToken);
	return newToken;
}

export async function changeUsername(username: string) {
	await userApi.changeUsername({ username });
	userWritable.update((user) => (user ? { ...user, username } : null));
}

export async function setPrimaryEmail(emailId: number) {
	await userApi.setPrimaryEmail(emailId);
	userWritable.update((user) => {
		if (user) {
			const emailIndex = user.emails.findIndex((e) => e.id === emailId);
			if (emailIndex !== -1) {
				const newEmails = user.emails.slice();
				const newEmail = newEmails[emailIndex];
				if (user.email) {
					newEmails[emailIndex] = user.email;
				} else {
					newEmails.splice(emailIndex, 1);
				}
				return { ...user, email: newEmail, emails: newEmails };
			}
		}
		return user;
	});
}

export async function confirmEmail(emailId: number, confirmationToken: string) {
	await authApi.confirmEmail(confirmationToken);
	userWritable.update((user) => {
		if (user) {
			if (user.email?.id === emailId) {
				return { ...user, email: { ...user.email, confirmed: true } };
			}
			const emailIndex = user.emails.findIndex((e) => e.id === emailId);
			if (emailIndex !== -1) {
				const newEmails = user.emails.slice();
				newEmails[emailIndex] = { ...newEmails[emailIndex], confirmed: true };
				return { ...user, emails: newEmails };
			}
		}
		return user;
	});
}

export async function createEmail(email: string) {
	const newEmail = await userApi.createEmail({ email });
	userWritable.update((user) => {
		if (user) {
			const newEmails = user.emails.slice();
			newEmails.push(newEmail);
			return { ...user, emails: newEmails };
		}
		return user;
	});
}

let initialCall = true;
export async function getCurrentUser() {
	try {
		let user = get(userWritable);
		if (initialCall) {
			if (isOnline()) {
				const token = get(tokenWritable);
				if (token) {
					setAccessToken(token);
					user = await userApi.current();
					userWritable.set(user);
					const claims = parseJWTClaims(token);
					const total = claims.exp - claims.iat;
					const timeRemaining = claims.exp - Date.now() * 0.001;
					const percent = (total - timeRemaining) / total;
					if (percent > 0.5) {
						refreshToken();
					}
					emitter.emit('user', user);
				} else {
					signOut();
					user = null;
				}
			} else if (user) {
				emitter.emit('user', user);
			}
			initialCall = false;
		}
		return user;
	} catch (e) {
		console.error(e);
		signOut();
		return null;
	}
}
