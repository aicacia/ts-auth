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
import type { UserMFAType } from './UserMFAType';
import {
    UserMFATypeFromJSON,
    UserMFATypeFromJSONTyped,
    UserMFATypeToJSON,
    UserMFATypeToJSONTyped,
} from './UserMFAType';
import type { UserInfo } from './UserInfo';
import {
    UserInfoFromJSON,
    UserInfoFromJSONTyped,
    UserInfoToJSON,
    UserInfoToJSONTyped,
} from './UserInfo';
import type { UserPhoneNumber } from './UserPhoneNumber';
import {
    UserPhoneNumberFromJSON,
    UserPhoneNumberFromJSONTyped,
    UserPhoneNumberToJSON,
    UserPhoneNumberToJSONTyped,
} from './UserPhoneNumber';
import type { UserConfig } from './UserConfig';
import {
    UserConfigFromJSON,
    UserConfigFromJSONTyped,
    UserConfigToJSON,
    UserConfigToJSONTyped,
} from './UserConfig';
import type { UserEmail } from './UserEmail';
import {
    UserEmailFromJSON,
    UserEmailFromJSONTyped,
    UserEmailToJSON,
    UserEmailToJSONTyped,
} from './UserEmail';
import type { UserOAuth2Provider } from './UserOAuth2Provider';
import {
    UserOAuth2ProviderFromJSON,
    UserOAuth2ProviderFromJSONTyped,
    UserOAuth2ProviderToJSON,
    UserOAuth2ProviderToJSONTyped,
} from './UserOAuth2Provider';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    active: boolean;
    /**
     * 
     * @type {UserConfig}
     * @memberof User
     */
    config?: UserConfig | null;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    createdAt: Date;
    /**
     * 
     * @type {UserEmail}
     * @memberof User
     */
    email?: UserEmail | null;
    /**
     * 
     * @type {Array<UserEmail>}
     * @memberof User
     */
    emails: Array<UserEmail>;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * 
     * @type {UserInfo}
     * @memberof User
     */
    info: UserInfo;
    /**
     * 
     * @type {Array<UserMFAType>}
     * @memberof User
     */
    mfaTypes: Array<UserMFAType>;
    /**
     * 
     * @type {Array<UserOAuth2Provider>}
     * @memberof User
     */
    oauth2Providers: Array<UserOAuth2Provider>;
    /**
     * 
     * @type {UserPhoneNumber}
     * @memberof User
     */
    phoneNumber?: UserPhoneNumber | null;
    /**
     * 
     * @type {Array<UserPhoneNumber>}
     * @memberof User
     */
    phoneNumbers: Array<UserPhoneNumber>;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username: string;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    if (!('active' in value) || value['active'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('emails' in value) || value['emails'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('info' in value) || value['info'] === undefined) return false;
    if (!('mfaTypes' in value) || value['mfaTypes'] === undefined) return false;
    if (!('oauth2Providers' in value) || value['oauth2Providers'] === undefined) return false;
    if (!('phoneNumbers' in value) || value['phoneNumbers'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'active': json['active'],
        'config': json['config'] == null ? undefined : UserConfigFromJSON(json['config']),
        'createdAt': (new Date(json['created_at'])),
        'email': json['email'] == null ? undefined : UserEmailFromJSON(json['email']),
        'emails': ((json['emails'] as Array<any>).map(UserEmailFromJSON)),
        'id': json['id'],
        'info': UserInfoFromJSON(json['info']),
        'mfaTypes': ((json['mfa_types'] as Array<any>).map(UserMFATypeFromJSON)),
        'oauth2Providers': ((json['oauth2_providers'] as Array<any>).map(UserOAuth2ProviderFromJSON)),
        'phoneNumber': json['phone_number'] == null ? undefined : UserPhoneNumberFromJSON(json['phone_number']),
        'phoneNumbers': ((json['phone_numbers'] as Array<any>).map(UserPhoneNumberFromJSON)),
        'updatedAt': (new Date(json['updated_at'])),
        'username': json['username'],
    };
}

export function UserToJSON(json: any): User {
    return UserToJSONTyped(json, false);
}

export function UserToJSONTyped(value?: User | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'active': value['active'],
        'config': UserConfigToJSON(value['config']),
        'created_at': ((value['createdAt']).toISOString()),
        'email': UserEmailToJSON(value['email']),
        'emails': ((value['emails'] as Array<any>).map(UserEmailToJSON)),
        'id': value['id'],
        'info': UserInfoToJSON(value['info']),
        'mfa_types': ((value['mfaTypes'] as Array<any>).map(UserMFATypeToJSON)),
        'oauth2_providers': ((value['oauth2Providers'] as Array<any>).map(UserOAuth2ProviderToJSON)),
        'phone_number': UserPhoneNumberToJSON(value['phoneNumber']),
        'phone_numbers': ((value['phoneNumbers'] as Array<any>).map(UserPhoneNumberToJSON)),
        'updated_at': ((value['updatedAt']).toISOString()),
        'username': value['username'],
    };
}

