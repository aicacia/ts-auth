import { env } from '$env/dynamic/public';
import { PUBLIC_AUTH_URL } from '$env/static/public';
import { building, browser } from '$app/environment';

export const DEFAULT_SIZE = 20;

export function unsafeId() {
	return Math.random().toString(36).substring(2);
}

export function getOrigin() {
	if (typeof __DEV_AUTH_URL__ !== 'undefined') {
		return __DEV_AUTH_URL__;
	}
	if (browser) {
		return window.location.origin;
	}
	if (building) {
		return PUBLIC_AUTH_URL;
	}
	return env.PUBLIC_AUTH_URL;
}

export async function copyToClipboard(value: string) {
	if (!navigator.clipboard) {
		throw new Error("Browser don't have support for native clipboard.");
	}
	await navigator.clipboard.writeText(value);
};