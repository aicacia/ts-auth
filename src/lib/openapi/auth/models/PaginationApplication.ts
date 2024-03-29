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
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
} from './Application';

/**
 * 
 * @export
 * @interface PaginationApplication
 */
export interface PaginationApplication {
    /**
     * 
     * @type {Array<Application>}
     * @memberof PaginationApplication
     */
    data: Array<Application>;
    /**
     * 
     * @type {boolean}
     * @memberof PaginationApplication
     */
    has_more: boolean;
}

/**
 * Check if a given object implements the PaginationApplication interface.
 */
export function instanceOfPaginationApplication(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "has_more" in value;

    return isInstance;
}

export function PaginationApplicationFromJSON(json: any): PaginationApplication {
    return PaginationApplicationFromJSONTyped(json, false);
}

export function PaginationApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationApplication {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ApplicationFromJSON)),
        'has_more': json['has_more'],
    };
}

export function PaginationApplicationToJSON(value?: PaginationApplication | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(ApplicationToJSON)),
        'has_more': value.has_more,
    };
}

