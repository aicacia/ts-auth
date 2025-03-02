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
 * @interface CreateUserEmail
 */
export interface CreateUserEmail {
    /**
     * 
     * @type {string}
     * @memberof CreateUserEmail
     */
    email: string;
}

/**
 * Check if a given object implements the CreateUserEmail interface.
 */
export function instanceOfCreateUserEmail(value: object): value is CreateUserEmail {
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function CreateUserEmailFromJSON(json: any): CreateUserEmail {
    return CreateUserEmailFromJSONTyped(json, false);
}

export function CreateUserEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserEmail {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
    };
}

export function CreateUserEmailToJSON(json: any): CreateUserEmail {
    return CreateUserEmailToJSONTyped(json, false);
}

export function CreateUserEmailToJSONTyped(value?: CreateUserEmail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
    };
}

