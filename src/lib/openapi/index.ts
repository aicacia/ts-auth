import {
	Configuration as AuthConfiguration,
	CurrentUserApi,
	RegisterApi,
	TokenApi,
	ApplicationApi,
	TenantApi,
	TenantOauth2ProviderApi,
	ServiceAccountApi,
	UserApi,
	JwtApi,
	type ConfigurationParameters as AuthConfigurationParameters,
	type Token
} from './auth';
import { building } from '$app/environment';
import { api } from '$lib/state/api.svelte';

let authToken: Token | null = null;

const defaultConfiguration: AuthConfigurationParameters = {
	middleware: [
		{
			pre: async (context) => ({ ...context, init: { ...context.init, mode: 'cors' } })
		}
	],
	credentials: 'same-origin'
};

const defaultAuthConfiguration: AuthConfigurationParameters = {
	...defaultConfiguration,
	apiKey(name: string) {
		switch (name) {
			case 'Tenant-ID': {
				const tenant = api.tenant;
				if (tenant) {
					return tenant;
				}
			}
		}
		console.warn(`Unknown API key ${name}`);
		return '';
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	accessToken(name?: string, scopes?: string[]) {
		return authToken?.accessToken || '';
	},
	get basePath() {
		if (building) {
			console.warn(`Tried to access basePath while building`);
			return "";
		}
		return api.url;
	}
};

export const authConfiguration = new AuthConfiguration(defaultAuthConfiguration);

export const currentUserApi = new CurrentUserApi(authConfiguration);
export const registerApi = new RegisterApi(authConfiguration);
export const tokenApi = new TokenApi(authConfiguration);
export const applicationApi = new ApplicationApi(authConfiguration);
export const tenantApi = new TenantApi(authConfiguration);
export const tenantOauth2ProviderApi = new TenantOauth2ProviderApi(authConfiguration);
export const serviceAccountApi = new ServiceAccountApi(authConfiguration);
export const userApi = new UserApi(authConfiguration);
export const jwtApi = new JwtApi(authConfiguration);

export function setAuthToken(newAuthToken: Token | null) {
	authToken = newAuthToken;
}
export function getAuthToken() {
	return authToken;
}
