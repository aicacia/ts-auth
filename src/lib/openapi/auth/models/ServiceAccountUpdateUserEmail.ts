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
 * @interface ServiceAccountUpdateUserEmail
 */
export interface ServiceAccountUpdateUserEmail {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountUpdateUserEmail
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceAccountUpdateUserEmail
     */
    primary?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceAccountUpdateUserEmail
     */
    verified?: boolean | null;
}

/**
 * Check if a given object implements the ServiceAccountUpdateUserEmail interface.
 */
export function instanceOfServiceAccountUpdateUserEmail(value: object): value is ServiceAccountUpdateUserEmail {
    return true;
}

export function ServiceAccountUpdateUserEmailFromJSON(json: any): ServiceAccountUpdateUserEmail {
    return ServiceAccountUpdateUserEmailFromJSONTyped(json, false);
}

export function ServiceAccountUpdateUserEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceAccountUpdateUserEmail {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'primary': json['primary'] == null ? undefined : json['primary'],
        'verified': json['verified'] == null ? undefined : json['verified'],
    };
}

export function ServiceAccountUpdateUserEmailToJSON(json: any): ServiceAccountUpdateUserEmail {
    return ServiceAccountUpdateUserEmailToJSONTyped(json, false);
}

export function ServiceAccountUpdateUserEmailToJSONTyped(value?: ServiceAccountUpdateUserEmail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
        'primary': value['primary'],
        'verified': value['verified'],
    };
}

