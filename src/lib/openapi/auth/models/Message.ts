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
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Message
     */
    args: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    key: string;
}

/**
 * Check if a given object implements the Message interface.
 */
export function instanceOfMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "args" in value;
    isInstance = isInstance && "key" in value;

    return isInstance;
}

export function MessageFromJSON(json: any): Message {
    return MessageFromJSONTyped(json, false);
}

export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'args': json['args'],
        'key': json['key'],
    };
}

export function MessageToJSON(value?: Message | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'args': value.args,
        'key': value.key,
    };
}
