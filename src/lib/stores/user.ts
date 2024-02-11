import { derived, get } from 'svelte/store';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { isOnline } from './online';
import { authApi, authConfiguration, getAuthToken, setAuthToken, userApi } from '$lib/openapi';
import type { User } from '$lib/openapi/auth';
import EventEmitter from 'eventemitter3';
import { goto } from '$app/navigation';
import { base } from '$app/paths';
import { PUBLIC_APPLICATION_ID } from '$env/static/public';

const tokenWritable = localstorageWritable<string | null>('token', null);
const userWritable = localstorageWritable<User | null>('user', null);

export const user = derived(userWritable, (user) => user);
export const signedIn = derived(userWritable, (user) => !!user);
export const admin = derived(userWritable, (user) => user?.permissions.includes('admin') === true);

export const userEmitter = new EventEmitter<{ user(user: User): void; signOut(): void }>();

export function waitForUser() {
	const user = get(userWritable);
	if (getAuthToken() && user) {
		return Promise.resolve(user);
	} else {
		return new Promise<User>((resolve) => userEmitter.once('user', resolve));
	}
}

export function isSignedIn() {
	return get(signedIn);
}

export function getUser() {
	return get(user);
}

export async function signIn(usernameOrEmail: string, password: string) {
	const token = await authApi.signInWithPassword({
		application_id: parseInt(PUBLIC_APPLICATION_ID),
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
		application_id: parseInt(PUBLIC_APPLICATION_ID),
		username,
		email,
		password,
		password_confirmation: passwordConfirmation
	});
	return signInWithToken(token);
}

async function signInWithToken(token: string) {
	setAuthToken(token);
	const user = await userApi.current();
	userWritable.set(user);
	tokenWritable.set(token);
	userEmitter.emit('user', user);
	return user;
}

export function signOut() {
	userWritable.set(null);
	tokenWritable.set(null);
	setAuthToken(undefined);
	userEmitter.emit('signOut');
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

export async function deleteEmail(emailId: number) {
	await userApi.deleteEmail(emailId);
	userWritable.update((user) => {
		if (user) {
			const emailIndex = user.emails.findIndex((e) => e.id === emailId);
			if (emailIndex !== -1) {
				const newEmails = user.emails.slice();
				newEmails.splice(emailIndex, 1);
				return { ...user, emails: newEmails };
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
					setAuthToken(token);
					user = await userApi.current();
					userWritable.set(user);
					userEmitter.emit('user', user);
				} else {
					signOut();
					user = null;
				}
			} else if (user) {
				userEmitter.emit('user', user);
			}
			initialCall = false;
		}
		return user;
	} catch (error) {
		console.error(error);
		signOut();
		return null;
	}
}
authConfiguration.middleware?.push({
	async post(context) {
		switch (context.response.status) {
			case 401:
				signOut();
				await goto(`${base}/signin`);
				break;
			case 503:
				await goto(`${base}/maintenance`);
		}
	}
});
