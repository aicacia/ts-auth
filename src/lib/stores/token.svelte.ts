import { TokenFromJSON, TokenToJSON, type Token } from '$lib/openapi/auth';
import { setAuthToken, tokenApi } from '$lib/openapi';
import { localStorageState } from '$lib/localStorageState.svelte';

const tokenStore = localStorageState<Token | null>('token', null, {
	serializer: {
		parse(json: string) {
			return TokenFromJSON(JSON.parse(json));
		},
		stringify(token: Token | null) {
			return JSON.stringify(TokenToJSON(token));
		}
	}
});

export function isValidToken() {
	return !isExpired();
}

export function isExpired() {
	if (!tokenStore.value) {
		return true;
	}
	return (tokenStore.value.issuedAt.getTime() + (tokenStore.value.expiresIn * 1000)) <= Date.now();
}

export function isRefreshExpired() {
	if (!tokenStore.value || !tokenStore.value.refreshTokenExpiresIn) {
		return true;
	}
	return (tokenStore.value.issuedAt.getTime() + (tokenStore.value.refreshTokenExpiresIn * 1000)) <= Date.now();
}

export async function signIn(clientId: string, clientSecret: string) {
	return signInWithToken(await tokenApi.token({
		grantType: 'service-account',
		clientId,
		clientSecret
	}));
}

export async function signInWithToken(token: Token) {
	setAuthToken(token);
	tokenStore.value = token;
	return token;
}

export async function signInWithRefreshToken(refreshToken: string) {
	return signInWithToken(
		await tokenApi.token({
			grantType: 'refresh-token',
			refreshToken
		})
	);
}

export function signOut() {
	tokenStore.value = null;
	setAuthToken(undefined);
}

let initialCall = true;
export async function tryGetToken() {
	try {
		let token = tokenStore.value;
		if (initialCall) {
			if (token) {
				if (isExpired()) {
					if (isRefreshExpired()) {
						signOut();
						token = null;
					} else {
						token = await signInWithRefreshToken(token.refreshToken as string);
					}
				}
			}
			initialCall = false;
		}
		if (token) {
			setAuthToken(token);
		}
		return token;
	} catch (error) {
		console.error(error);
		signOut();
		return null;
	}
}