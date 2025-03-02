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
 * @interface ServiceAccountCreateUserPhoneNumber
 */
export interface ServiceAccountCreateUserPhoneNumber {
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountCreateUserPhoneNumber
     */
    phoneNumber: string;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceAccountCreateUserPhoneNumber
     */
    primary?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ServiceAccountCreateUserPhoneNumber
     */
    verified?: boolean | null;
}

/**
 * Check if a given object implements the ServiceAccountCreateUserPhoneNumber interface.
 */
export function instanceOfServiceAccountCreateUserPhoneNumber(value: object): value is ServiceAccountCreateUserPhoneNumber {
    if (!('phoneNumber' in value) || value['phoneNumber'] === undefined) return false;
    return true;
}

export function ServiceAccountCreateUserPhoneNumberFromJSON(json: any): ServiceAccountCreateUserPhoneNumber {
    return ServiceAccountCreateUserPhoneNumberFromJSONTyped(json, false);
}

export function ServiceAccountCreateUserPhoneNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceAccountCreateUserPhoneNumber {
    if (json == null) {
        return json;
    }
    return {
        
        'phoneNumber': json['phone_number'],
        'primary': json['primary'] == null ? undefined : json['primary'],
        'verified': json['verified'] == null ? undefined : json['verified'],
    };
}

export function ServiceAccountCreateUserPhoneNumberToJSON(json: any): ServiceAccountCreateUserPhoneNumber {
    return ServiceAccountCreateUserPhoneNumberToJSONTyped(json, false);
}

export function ServiceAccountCreateUserPhoneNumberToJSONTyped(value?: ServiceAccountCreateUserPhoneNumber | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'phone_number': value['phoneNumber'],
        'primary': value['primary'],
        'verified': value['verified'],
    };
}

