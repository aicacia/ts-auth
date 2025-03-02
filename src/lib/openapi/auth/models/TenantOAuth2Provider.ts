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
 * @interface TenantOAuth2Provider
 */
export interface TenantOAuth2Provider {
    /**
     * 
     * @type {boolean}
     * @memberof TenantOAuth2Provider
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof TenantOAuth2Provider
     */
    authUrl: string;
    /**
     * 
     * @type {string}
     * @memberof TenantOAuth2Provider
     */
    callbackUrl: string;
    /**
     * 
     * @type {string}
     * @memberof TenantOAuth2Provider
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof TenantOAuth2Provider
     */
    clientSecret: string;
    /**
     * 
     * @type {Date}
     * @memberof TenantOAuth2Provider
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof TenantOAuth2Provider
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof TenantOAuth2Provider
     */
    provider: string;
    /**
     * 
     * @type {string}
     * @memberof TenantOAuth2Provider
     */
    redirectUrl: string;
    /**
     * 
     * @type {string}
     * @memberof TenantOAuth2Provider
     */
    scope: string;
    /**
     * 
     * @type {number}
     * @memberof TenantOAuth2Provider
     */
    tenantId: number;
    /**
     * 
     * @type {string}
     * @memberof TenantOAuth2Provider
     */
    tokenUrl: string;
    /**
     * 
     * @type {Date}
     * @memberof TenantOAuth2Provider
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the TenantOAuth2Provider interface.
 */
export function instanceOfTenantOAuth2Provider(value: object): value is TenantOAuth2Provider {
    if (!('active' in value) || value['active'] === undefined) return false;
    if (!('authUrl' in value) || value['authUrl'] === undefined) return false;
    if (!('callbackUrl' in value) || value['callbackUrl'] === undefined) return false;
    if (!('clientId' in value) || value['clientId'] === undefined) return false;
    if (!('clientSecret' in value) || value['clientSecret'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('provider' in value) || value['provider'] === undefined) return false;
    if (!('redirectUrl' in value) || value['redirectUrl'] === undefined) return false;
    if (!('scope' in value) || value['scope'] === undefined) return false;
    if (!('tenantId' in value) || value['tenantId'] === undefined) return false;
    if (!('tokenUrl' in value) || value['tokenUrl'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function TenantOAuth2ProviderFromJSON(json: any): TenantOAuth2Provider {
    return TenantOAuth2ProviderFromJSONTyped(json, false);
}

export function TenantOAuth2ProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantOAuth2Provider {
    if (json == null) {
        return json;
    }
    return {
        
        'active': json['active'],
        'authUrl': json['auth_url'],
        'callbackUrl': json['callback_url'],
        'clientId': json['client_id'],
        'clientSecret': json['client_secret'],
        'createdAt': (new Date(json['created_at'])),
        'id': json['id'],
        'provider': json['provider'],
        'redirectUrl': json['redirect_url'],
        'scope': json['scope'],
        'tenantId': json['tenant_id'],
        'tokenUrl': json['token_url'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function TenantOAuth2ProviderToJSON(json: any): TenantOAuth2Provider {
    return TenantOAuth2ProviderToJSONTyped(json, false);
}

export function TenantOAuth2ProviderToJSONTyped(value?: TenantOAuth2Provider | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'active': value['active'],
        'auth_url': value['authUrl'],
        'callback_url': value['callbackUrl'],
        'client_id': value['clientId'],
        'client_secret': value['clientSecret'],
        'created_at': ((value['createdAt']).toISOString()),
        'id': value['id'],
        'provider': value['provider'],
        'redirect_url': value['redirectUrl'],
        'scope': value['scope'],
        'tenant_id': value['tenantId'],
        'token_url': value['tokenUrl'],
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}

