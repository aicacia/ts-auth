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
import type { ApplicationWithSecret } from './ApplicationWithSecret';
import {
    ApplicationWithSecretFromJSON,
    ApplicationWithSecretFromJSONTyped,
    ApplicationWithSecretToJSON,
} from './ApplicationWithSecret';

/**
 * 
 * @export
 * @interface PaginationApplicationWithSecret
 */
export interface PaginationApplicationWithSecret {
    /**
     * 
     * @type {Array<ApplicationWithSecret>}
     * @memberof PaginationApplicationWithSecret
     */
    data: Array<ApplicationWithSecret>;
    /**
     * 
     * @type {boolean}
     * @memberof PaginationApplicationWithSecret
     */
    has_more: boolean;
}

/**
 * Check if a given object implements the PaginationApplicationWithSecret interface.
 */
export function instanceOfPaginationApplicationWithSecret(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "has_more" in value;

    return isInstance;
}

export function PaginationApplicationWithSecretFromJSON(json: any): PaginationApplicationWithSecret {
    return PaginationApplicationWithSecretFromJSONTyped(json, false);
}

export function PaginationApplicationWithSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationApplicationWithSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ApplicationWithSecretFromJSON)),
        'has_more': json['has_more'],
    };
}

export function PaginationApplicationWithSecretToJSON(value?: PaginationApplicationWithSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ApplicationWithSecretToJSON)),
        'has_more': value.has_more,
    };
}
