/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * Aicacia Auth
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RequestResetPasswordRequest
 */
export interface RequestResetPasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof RequestResetPasswordRequest
     */
    application_id: string;
    /**
     * 
     * @type {string}
     * @memberof RequestResetPasswordRequest
     */
    email: string;
}

/**
 * Check if a given object implements the RequestResetPasswordRequest interface.
 */
export function instanceOfRequestResetPasswordRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "application_id" in value;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function RequestResetPasswordRequestFromJSON(json: any): RequestResetPasswordRequest {
    return RequestResetPasswordRequestFromJSONTyped(json, false);
}

export function RequestResetPasswordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestResetPasswordRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'application_id': json['application_id'],
        'email': json['email'],
    };
}

export function RequestResetPasswordRequestToJSON(value?: RequestResetPasswordRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'application_id': value.application_id,
        'email': value.email,
    };
}
