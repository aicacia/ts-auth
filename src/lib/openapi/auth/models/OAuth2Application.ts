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
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
} from './Application';

/**
 * 
 * @export
 * @interface OAuth2Application
 */
export interface OAuth2Application {
    /**
     * 
     * @type {Application}
     * @memberof OAuth2Application
     */
    application: Application;
    /**
     * 
     * @type {string}
     * @memberof OAuth2Application
     */
    redirect_uri: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OAuth2Application
     */
    scope: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof OAuth2Application
     */
    state?: string | null;
}

/**
 * Check if a given object implements the OAuth2Application interface.
 */
export function instanceOfOAuth2Application(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "application" in value;
    isInstance = isInstance && "redirect_uri" in value;
    isInstance = isInstance && "scope" in value;

    return isInstance;
}

export function OAuth2ApplicationFromJSON(json: any): OAuth2Application {
    return OAuth2ApplicationFromJSONTyped(json, false);
}

export function OAuth2ApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2Application {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'application': ApplicationFromJSON(json['application']),
        'redirect_uri': json['redirect_uri'],
        'scope': json['scope'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function OAuth2ApplicationToJSON(value?: OAuth2Application | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'application': ApplicationToJSON(value.application),
        'redirect_uri': value.redirect_uri,
        'scope': value.scope,
        'state': value.state,
    };
}
