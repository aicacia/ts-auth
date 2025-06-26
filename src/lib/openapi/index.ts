import {
	Configuration,
	CurrentUserApi,
	RegisterApi,
	TokenApi,
	ApplicationApi,
	TenantApi,
	TenantOauth2ProviderApi,
	ServiceAccountApi,
	UserApi,
	JwtApi,
	UtilApi,
	type ConfigurationParameters,
	type Token
} from './auth';
import { building } from '$app/environment';
import { api } from '$lib/state/api.svelte';

let authToken: Token | null = null;

export const defaultConfigurationParameters: ConfigurationParameters = {
	middleware: [
		{
			pre: async (context) => ({ ...context, init: { ...context.init, mode: 'cors' } })
		}
	],
	credentials: 'same-origin'
};

export const configurationParameters: ConfigurationParameters = {
	...defaultConfigurationParameters,
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
			console.warn("Tried to access basePath while building");
			return "";
		}
		return api.url;
	}
};

export const configuration = new Configuration(configurationParameters);

export const currentUserApi = new CurrentUserApi(configuration);
export const registerApi = new RegisterApi(configuration);
export const tokenApi = new TokenApi(configuration);
export const applicationApi = new ApplicationApi(configuration);
export const tenantApi = new TenantApi(configuration);
export const tenantOauth2ProviderApi = new TenantOauth2ProviderApi(configuration);
export const serviceAccountApi = new ServiceAccountApi(configuration);
export const userApi = new UserApi(configuration);
export const jwtApi = new JwtApi(configuration);
export const utilApi = new UtilApi(configuration);

export function setAuthToken(newAuthToken: Token | null) {
	authToken = newAuthToken;
}
export function getAuthToken() {
	return authToken;
}
