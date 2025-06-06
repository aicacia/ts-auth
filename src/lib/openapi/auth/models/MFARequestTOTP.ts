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
 * @interface MFARequestTOTP
 */
export interface MFARequestTOTP {
    /**
     * 
     * @type {string}
     * @memberof MFARequestTOTP
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof MFARequestTOTP
     */
    type: MFARequestTOTPTypeEnum;
}


/**
 * @export
 */
export const MFARequestTOTPTypeEnum = {
    Totp: 'totp'
} as const;
export type MFARequestTOTPTypeEnum = typeof MFARequestTOTPTypeEnum[keyof typeof MFARequestTOTPTypeEnum];


/**
 * Check if a given object implements the MFARequestTOTP interface.
 */
export function instanceOfMFARequestTOTP(value: object): value is MFARequestTOTP {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function MFARequestTOTPFromJSON(json: any): MFARequestTOTP {
    return MFARequestTOTPFromJSONTyped(json, false);
}

export function MFARequestTOTPFromJSONTyped(json: any, ignoreDiscriminator: boolean): MFARequestTOTP {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'type': json['type'],
    };
}

export function MFARequestTOTPToJSON(json: any): MFARequestTOTP {
    return MFARequestTOTPToJSONTyped(json, false);
}

export function MFARequestTOTPToJSONTyped(value?: MFARequestTOTP | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'type': value['type'],
    };
}

