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
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    ApplicationToJSONTyped,
} from './Application';

/**
 * 
 * @export
 * @interface ApplicationPagination
 */
export interface ApplicationPagination {
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationPagination
     */
    hasMore: boolean;
    /**
     * 
     * @type {Array<Application>}
     * @memberof ApplicationPagination
     */
    items: Array<Application>;
}

/**
 * Check if a given object implements the ApplicationPagination interface.
 */
export function instanceOfApplicationPagination(value: object): value is ApplicationPagination {
    if (!('hasMore' in value) || value['hasMore'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function ApplicationPaginationFromJSON(json: any): ApplicationPagination {
    return ApplicationPaginationFromJSONTyped(json, false);
}

export function ApplicationPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationPagination {
    if (json == null) {
        return json;
    }
    return {
        
        'hasMore': json['has_more'],
        'items': ((json['items'] as Array<any>).map(ApplicationFromJSON)),
    };
}

export function ApplicationPaginationToJSON(json: any): ApplicationPagination {
    return ApplicationPaginationToJSONTyped(json, false);
}

export function ApplicationPaginationToJSONTyped(value?: ApplicationPagination | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'has_more': value['hasMore'],
        'items': ((value['items'] as Array<any>).map(ApplicationToJSON)),
    };
}

