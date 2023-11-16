import {
	Configuration,
	AuthApi,
	UserApi,
	UtilApi,
	type ConfigurationParameters,
	ApplicationApi
} from './auth';
import { PUBLIC_AUTH_API_URL } from '$env/static/public';

export const defaultConfiguration: ConfigurationParameters = {
	middleware: [
		{
			pre: async (context) => ({ ...context, init: { ...context.init, mode: 'cors' } })
		}
	],
	credentials: 'same-origin'
};

export const defaultAuthConfiguration: ConfigurationParameters = {
	...defaultConfiguration,
	basePath: typeof __DEV_AUTH_API_URL__ !== 'undefined' ? __DEV_AUTH_API_URL__ : PUBLIC_AUTH_API_URL
};
export const authConfiguration = new Configuration(defaultAuthConfiguration);

export const utilApi = new UtilApi(authConfiguration);
export const authApi = new AuthApi(authConfiguration);
export const userApi = new UserApi(authConfiguration);
export const applicationApi = new ApplicationApi(authConfiguration);

export function setAccessToken(accessToken?: string) {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	authConfiguration.configuration.accessToken = accessToken;
}
export function getAccessToken() {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return authConfiguration.configuration?.accessToken as string | undefined;
}
