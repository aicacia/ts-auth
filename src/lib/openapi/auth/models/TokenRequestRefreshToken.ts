/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * Aicacia Auth API provides authentication services for applications.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TokenRequestRefreshToken
 */
export interface TokenRequestRefreshToken {
    /**
     * 
     * @type {string}
     * @memberof TokenRequestRefreshToken
     */
    grantType: TokenRequestRefreshTokenGrantTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TokenRequestRefreshToken
     */
    refreshToken: string;
}


/**
 * @export
 */
export const TokenRequestRefreshTokenGrantTypeEnum = {
    RefreshToken: 'refresh-token'
} as const;
export type TokenRequestRefreshTokenGrantTypeEnum = typeof TokenRequestRefreshTokenGrantTypeEnum[keyof typeof TokenRequestRefreshTokenGrantTypeEnum];


/**
 * Check if a given object implements the TokenRequestRefreshToken interface.
 */
export function instanceOfTokenRequestRefreshToken(value: object): value is TokenRequestRefreshToken {
    if (!('grantType' in value) || value['grantType'] === undefined) return false;
    if (!('refreshToken' in value) || value['refreshToken'] === undefined) return false;
    return true;
}

export function TokenRequestRefreshTokenFromJSON(json: any): TokenRequestRefreshToken {
    return TokenRequestRefreshTokenFromJSONTyped(json, false);
}

export function TokenRequestRefreshTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenRequestRefreshToken {
    if (json == null) {
        return json;
    }
    return {
        
        'grantType': json['grant_type'],
        'refreshToken': json['refresh_token'],
    };
}

export function TokenRequestRefreshTokenToJSON(json: any): TokenRequestRefreshToken {
    return TokenRequestRefreshTokenToJSONTyped(json, false);
}

export function TokenRequestRefreshTokenToJSONTyped(value?: TokenRequestRefreshToken | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'grant_type': value['grantType'],
        'refresh_token': value['refreshToken'],
    };
}

