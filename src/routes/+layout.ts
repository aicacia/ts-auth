import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { get } from 'svelte/store';
import { locale } from '$lib/stores/locale';
import { detectLocale, i18nObject } from '$lib/i18n/i18n-util';

export const prerender = false; // TODO: redirect loop on build
export const ssr = false;

export const load: LayoutLoad = async (_event) => {
	const currentLocale = detectLocale(() => [get(locale)]);
	await loadLocaleAsync(currentLocale);
	setLocale(currentLocale);
};
