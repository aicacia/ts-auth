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
 * @interface CreateApplicationRequest
 */
export interface CreateApplicationRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateApplicationRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateApplicationRequest
     */
    uri: string;
}

/**
 * Check if a given object implements the CreateApplicationRequest interface.
 */
export function instanceOfCreateApplicationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "uri" in value;

    return isInstance;
}

export function CreateApplicationRequestFromJSON(json: any): CreateApplicationRequest {
    return CreateApplicationRequestFromJSONTyped(json, false);
}

export function CreateApplicationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateApplicationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'uri': json['uri'],
    };
}

export function CreateApplicationRequestToJSON(value?: CreateApplicationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'uri': value.uri,
    };
}
