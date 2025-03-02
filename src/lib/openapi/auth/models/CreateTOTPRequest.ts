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
 * @interface CreateTOTPRequest
 */
export interface CreateTOTPRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateTOTPRequest
     */
    algorithm?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTOTPRequest
     */
    digits?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTOTPRequest
     */
    step?: number | null;
}

/**
 * Check if a given object implements the CreateTOTPRequest interface.
 */
export function instanceOfCreateTOTPRequest(value: object): value is CreateTOTPRequest {
    return true;
}

export function CreateTOTPRequestFromJSON(json: any): CreateTOTPRequest {
    return CreateTOTPRequestFromJSONTyped(json, false);
}

export function CreateTOTPRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTOTPRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'digits': json['digits'] == null ? undefined : json['digits'],
        'step': json['step'] == null ? undefined : json['step'],
    };
}

export function CreateTOTPRequestToJSON(json: any): CreateTOTPRequest {
    return CreateTOTPRequestToJSONTyped(json, false);
}

export function CreateTOTPRequestToJSONTyped(value?: CreateTOTPRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'algorithm': value['algorithm'],
        'digits': value['digits'],
        'step': value['step'],
    };
}

