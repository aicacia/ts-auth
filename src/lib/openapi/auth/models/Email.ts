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
 * @interface Email
 */
export interface Email {
    /**
     * 
     * @type {boolean}
     * @memberof Email
     */
    confirmed: boolean;
    /**
     * 
     * @type {Date}
     * @memberof Email
     */
    created_at: Date;
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    email: string;
    /**
     * 
     * @type {number}
     * @memberof Email
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof Email
     */
    updated_at: Date;
}

/**
 * Check if a given object implements the Email interface.
 */
export function instanceOfEmail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "confirmed" in value;
    isInstance = isInstance && "created_at" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "updated_at" in value;

    return isInstance;
}

export function EmailFromJSON(json: any): Email {
    return EmailFromJSONTyped(json, false);
}

export function EmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): Email {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'confirmed': json['confirmed'],
        'created_at': (new Date(json['created_at'])),
        'email': json['email'],
        'id': json['id'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function EmailToJSON(value?: Email | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'confirmed': value.confirmed,
        'created_at': (value.created_at.toISOString()),
        'email': value.email,
        'id': value.id,
        'updated_at': (value.updated_at.toISOString()),
    };
}
