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


import * as runtime from '../runtime';
import type {
  ErrorMessage,
  Token,
} from '../models/index';
import {
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    TokenFromJSON,
    TokenToJSON,
} from '../models/index';

export interface CreateJwtRequest {
    requestBody: { [key: string]: any; };
}

export interface JwtIsValidRequest {
    tenantID: string;
}

/**
 * JwtApi - interface
 * 
 * @export
 * @interface JwtApiInterface
 */
export interface JwtApiInterface {
    /**
     * 
     * @param {{ [key: string]: any; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JwtApiInterface
     */
    createJwtRaw(requestParameters: CreateJwtRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>>;

    /**
     */
    createJwt(requestBody: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token>;

    /**
     * 
     * @param {string} tenantID Tenant UUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JwtApiInterface
     */
    jwtIsValidRaw(requestParameters: JwtIsValidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>>;

    /**
     */
    jwtIsValid(tenantID: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }>;

}

/**
 * 
 */
export class JwtApi extends runtime.BaseAPI implements JwtApiInterface {

    /**
     */
    async createJwtRaw(requestParameters: CreateJwtRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters['requestBody'] == null) {
            throw new runtime.RequiredError(
                'requestBody',
                'Required parameter "requestBody" was null or undefined when calling createJwt().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/jwt`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['requestBody'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     */
    async createJwt(requestBody: { [key: string]: any; }, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.createJwtRaw({ requestBody: requestBody }, initOverrides);
        return await response.value();
    }

    /**
     */
    async jwtIsValidRaw(requestParameters: JwtIsValidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        if (requestParameters['tenantID'] == null) {
            throw new runtime.RequiredError(
                'tenantID',
                'Required parameter "tenantID" was null or undefined when calling jwtIsValid().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters['tenantID'] != null) {
            headerParameters['Tenant-ID'] = String(requestParameters['tenantID']);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/jwt`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async jwtIsValid(tenantID: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.jwtIsValidRaw({ tenantID: tenantID }, initOverrides);
        return await response.value();
    }

}
