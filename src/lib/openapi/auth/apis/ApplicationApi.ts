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
  Application,
  ApplicationPagination,
  CreateApplication,
  ErrorMessage,
  UpdateApplication,
} from '../models/index';
import {
    ApplicationFromJSON,
    ApplicationToJSON,
    ApplicationPaginationFromJSON,
    ApplicationPaginationToJSON,
    CreateApplicationFromJSON,
    CreateApplicationToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    UpdateApplicationFromJSON,
    UpdateApplicationToJSON,
} from '../models/index';

export interface AllApplicationsRequest {
    offset?: number | null;
    limit?: number | null;
}

export interface CreateApplicationRequest {
    createApplication: CreateApplication;
}

export interface DeleteApplicationRequest {
    applicationId: number;
}

export interface GetApplicationByIdRequest {
    applicationId: number;
}

export interface UpdateApplicationRequest {
    applicationId: number;
    updateApplication: UpdateApplication;
}

/**
 * ApplicationApi - interface
 * 
 * @export
 * @interface ApplicationApiInterface
 */
export interface ApplicationApiInterface {
    /**
     * 
     * @param {number} [offset] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiInterface
     */
    allApplicationsRaw(requestParameters: AllApplicationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationPagination>>;

    /**
     */
    allApplications(offset?: number | null, limit?: number | null, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationPagination>;

    /**
     * 
     * @param {CreateApplication} createApplication 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiInterface
     */
    createApplicationRaw(requestParameters: CreateApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Application>>;

    /**
     */
    createApplication(createApplication: CreateApplication, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Application>;

    /**
     * 
     * @param {number} applicationId Application ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiInterface
     */
    deleteApplicationRaw(requestParameters: DeleteApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    deleteApplication(applicationId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {number} applicationId Application ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiInterface
     */
    getApplicationByIdRaw(requestParameters: GetApplicationByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Application>>;

    /**
     */
    getApplicationById(applicationId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Application>;

    /**
     * 
     * @param {number} applicationId Application ID
     * @param {UpdateApplication} updateApplication 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationApiInterface
     */
    updateApplicationRaw(requestParameters: UpdateApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Application>>;

    /**
     */
    updateApplication(applicationId: number, updateApplication: UpdateApplication, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Application>;

}

/**
 * 
 */
export class ApplicationApi extends runtime.BaseAPI implements ApplicationApiInterface {

    /**
     */
    async allApplicationsRaw(requestParameters: AllApplicationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationPagination>> {
        const queryParameters: any = {};

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/applications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationPaginationFromJSON(jsonValue));
    }

    /**
     */
    async allApplications(offset?: number | null, limit?: number | null, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationPagination> {
        const response = await this.allApplicationsRaw({ offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     */
    async createApplicationRaw(requestParameters: CreateApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Application>> {
        if (requestParameters['createApplication'] == null) {
            throw new runtime.RequiredError(
                'createApplication',
                'Required parameter "createApplication" was null or undefined when calling createApplication().'
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
            path: `/applications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateApplicationToJSON(requestParameters['createApplication']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     */
    async createApplication(createApplication: CreateApplication, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Application> {
        const response = await this.createApplicationRaw({ createApplication: createApplication }, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteApplicationRaw(requestParameters: DeleteApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['applicationId'] == null) {
            throw new runtime.RequiredError(
                'applicationId',
                'Required parameter "applicationId" was null or undefined when calling deleteApplication().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/applications/{application_id}`.replace(`{${"application_id"}}`, encodeURIComponent(String(requestParameters['applicationId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteApplication(applicationId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteApplicationRaw({ applicationId: applicationId }, initOverrides);
    }

    /**
     */
    async getApplicationByIdRaw(requestParameters: GetApplicationByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Application>> {
        if (requestParameters['applicationId'] == null) {
            throw new runtime.RequiredError(
                'applicationId',
                'Required parameter "applicationId" was null or undefined when calling getApplicationById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/applications/{application_id}`.replace(`{${"application_id"}}`, encodeURIComponent(String(requestParameters['applicationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     */
    async getApplicationById(applicationId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Application> {
        const response = await this.getApplicationByIdRaw({ applicationId: applicationId }, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateApplicationRaw(requestParameters: UpdateApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Application>> {
        if (requestParameters['applicationId'] == null) {
            throw new runtime.RequiredError(
                'applicationId',
                'Required parameter "applicationId" was null or undefined when calling updateApplication().'
            );
        }

        if (requestParameters['updateApplication'] == null) {
            throw new runtime.RequiredError(
                'updateApplication',
                'Required parameter "updateApplication" was null or undefined when calling updateApplication().'
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
            path: `/applications/{application_id}`.replace(`{${"application_id"}}`, encodeURIComponent(String(requestParameters['applicationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateApplicationToJSON(requestParameters['updateApplication']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     */
    async updateApplication(applicationId: number, updateApplication: UpdateApplication, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Application> {
        const response = await this.updateApplicationRaw({ applicationId: applicationId, updateApplication: updateApplication }, initOverrides);
        return await response.value();
    }

}
