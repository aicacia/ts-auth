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
 * @interface Health
 */
export interface Health {
    /**
     * 
     * @type {boolean}
     * @memberof Health
     */
    db: boolean;
}

/**
 * Check if a given object implements the Health interface.
 */
export function instanceOfHealth(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "db" in value;

    return isInstance;
}

export function HealthFromJSON(json: any): Health {
    return HealthFromJSONTyped(json, false);
}

export function HealthFromJSONTyped(json: any, ignoreDiscriminator: boolean): Health {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'db': json['db'],
    };
}

export function HealthToJSON(value?: Health | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'db': value.db,
    };
}
