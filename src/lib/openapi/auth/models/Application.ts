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
 * @interface Application
 */
export interface Application {
    /**
     * 
     * @type {Date}
     * @memberof Application
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof Application
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof Application
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the Application interface.
 */
export function instanceOfApplication(value: object): value is Application {
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function ApplicationFromJSON(json: any): Application {
    return ApplicationFromJSONTyped(json, false);
}

export function ApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Application {
    if (json == null) {
        return json;
    }
    return {
        
        'createdAt': (new Date(json['created_at'])),
        'id': json['id'],
        'name': json['name'],
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function ApplicationToJSON(json: any): Application {
    return ApplicationToJSONTyped(json, false);
}

export function ApplicationToJSONTyped(value?: Application | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created_at': ((value['createdAt']).toISOString()),
        'id': value['id'],
        'name': value['name'],
        'updated_at': ((value['updatedAt']).toISOString()),
    };
}

