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


$effect.root(() => {
	$effect(() => {
		setAuthToken(tokenStore.value);
	});
});

export const token = {
	get current() {
		return tokenStore.value;
	},
	get validToken() {
		return !isExpired(tokenStore.value);
	}
};

export function isExpired(token: Token | null) {
	if (!token) {
		return true;
	}
	return (token.issuedAt.getTime() + (token.expiresIn * 1000)) <= Date.now();
}

export function isRefreshExpired(token: Token | null) {
	if (!token || !token.refreshTokenExpiresIn) {
		return true;
	}
	return (token.issuedAt.getTime() + (token.refreshTokenExpiresIn * 1000)) <= Date.now();
}

export async function signIn(clientId: string, clientSecret: string) {
	return signInWithToken(await tokenApi.token({
		grantType: 'service-account',
		clientId,
		clientSecret
	}));
}

export async function signInWithToken(token: Token) {
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
}

let initialCall = true;
export async function tryGetToken() {
	try {
		if (initialCall) {
			if (tokenStore.value) {
				if (isExpired(tokenStore.value)) {
					if (isRefreshExpired(tokenStore.value)) {
						signOut();
					} else {
						await signInWithRefreshToken(tokenStore.value.refreshToken as string);
					}
				}
			}
			initialCall = false;
		}
		return tokenStore.value;
	} catch (error) {
		console.error(error);
		signOut();
		return null;
	}
}