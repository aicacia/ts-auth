/* tslint:disable */
/* eslint-disable */
/**
 * auth
 * Aicacia Auth.
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: nathanfaucett@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface PaginationUser
 */
export interface PaginationUser {
    /**
     * 
     * @type {Array<User>}
     * @memberof PaginationUser
     */
    data: Array<User>;
    /**
     * 
     * @type {boolean}
     * @memberof PaginationUser
     */
    has_more: boolean;
}

/**
 * Check if a given object implements the PaginationUser interface.
 */
export function instanceOfPaginationUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "has_more" in value;

    return isInstance;
}

export function PaginationUserFromJSON(json: any): PaginationUser {
    return PaginationUserFromJSONTyped(json, false);
}

export function PaginationUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(UserFromJSON)),
        'has_more': json['has_more'],
    };
}

export function PaginationUserToJSON(value?: PaginationUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(UserToJSON)),
        'has_more': value.has_more,
    };
}

