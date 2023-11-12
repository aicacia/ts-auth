import { MAX_INT, random } from '@aicacia/rand';

export function createInsecureID() {
	return (random() * MAX_INT) | 0;
}

export function parseJWTClaims(token: string): {
	exp: number;
	iat: number;
	iss: string;
	nonce: string;
	user_id: number;
} {
	const [, claimsString] = token.split('.');
	const claims = JSON.parse(atob(claimsString));
	return claims;
}

export function getSearchTerms(search: string): string[] {
	return search
		.toLowerCase()
		.trim()
		.split(/\s+/)
		.filter((t) => !!t);
}

export function getId<T extends { id: number }>(value: T) {
	return value.id;
}
export function getName<T extends { name: string }>(value: T) {
	return value.name;
}
