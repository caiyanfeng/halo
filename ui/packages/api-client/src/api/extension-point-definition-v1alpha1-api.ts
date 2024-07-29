/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.18.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { ExtensionPointDefinition } from '../models';
// @ts-ignore
import { ExtensionPointDefinitionList } from '../models';
// @ts-ignore
import { JsonPatchInner } from '../models';
/**
 * ExtensionPointDefinitionV1alpha1Api - axios parameter creator
 * @export
 */
export const ExtensionPointDefinitionV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create ExtensionPointDefinition
         * @param {ExtensionPointDefinition} [extensionPointDefinition] Fresh extensionpointdefinition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExtensionPointDefinition: async (extensionPointDefinition?: ExtensionPointDefinition, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(extensionPointDefinition, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete ExtensionPointDefinition
         * @param {string} name Name of extensionpointdefinition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteExtensionPointDefinition: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteExtensionPointDefinition', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get ExtensionPointDefinition
         * @param {string} name Name of extensionpointdefinition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExtensionPointDefinition: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getExtensionPointDefinition', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List ExtensionPointDefinition
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listExtensionPointDefinition: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch ExtensionPointDefinition
         * @param {string} name Name of extensionpointdefinition
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchExtensionPointDefinition: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchExtensionPointDefinition', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update ExtensionPointDefinition
         * @param {string} name Name of extensionpointdefinition
         * @param {ExtensionPointDefinition} [extensionPointDefinition] Updated extensionpointdefinition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExtensionPointDefinition: async (name: string, extensionPointDefinition?: ExtensionPointDefinition, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateExtensionPointDefinition', 'name', name)
            const localVarPath = `/apis/plugin.halo.run/v1alpha1/extensionpointdefinitions/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(extensionPointDefinition, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExtensionPointDefinitionV1alpha1Api - functional programming interface
 * @export
 */
export const ExtensionPointDefinitionV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExtensionPointDefinitionV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create ExtensionPointDefinition
         * @param {ExtensionPointDefinition} [extensionPointDefinition] Fresh extensionpointdefinition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createExtensionPointDefinition(extensionPointDefinition?: ExtensionPointDefinition, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExtensionPointDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createExtensionPointDefinition(extensionPointDefinition, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ExtensionPointDefinitionV1alpha1Api.createExtensionPointDefinition']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete ExtensionPointDefinition
         * @param {string} name Name of extensionpointdefinition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteExtensionPointDefinition(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteExtensionPointDefinition(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ExtensionPointDefinitionV1alpha1Api.deleteExtensionPointDefinition']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get ExtensionPointDefinition
         * @param {string} name Name of extensionpointdefinition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExtensionPointDefinition(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExtensionPointDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExtensionPointDefinition(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ExtensionPointDefinitionV1alpha1Api.getExtensionPointDefinition']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List ExtensionPointDefinition
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listExtensionPointDefinition(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExtensionPointDefinitionList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listExtensionPointDefinition(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ExtensionPointDefinitionV1alpha1Api.listExtensionPointDefinition']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch ExtensionPointDefinition
         * @param {string} name Name of extensionpointdefinition
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchExtensionPointDefinition(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExtensionPointDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchExtensionPointDefinition(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ExtensionPointDefinitionV1alpha1Api.patchExtensionPointDefinition']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update ExtensionPointDefinition
         * @param {string} name Name of extensionpointdefinition
         * @param {ExtensionPointDefinition} [extensionPointDefinition] Updated extensionpointdefinition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateExtensionPointDefinition(name: string, extensionPointDefinition?: ExtensionPointDefinition, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExtensionPointDefinition>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateExtensionPointDefinition(name, extensionPointDefinition, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ExtensionPointDefinitionV1alpha1Api.updateExtensionPointDefinition']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ExtensionPointDefinitionV1alpha1Api - factory interface
 * @export
 */
export const ExtensionPointDefinitionV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExtensionPointDefinitionV1alpha1ApiFp(configuration)
    return {
        /**
         * Create ExtensionPointDefinition
         * @param {ExtensionPointDefinitionV1alpha1ApiCreateExtensionPointDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiCreateExtensionPointDefinitionRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ExtensionPointDefinition> {
            return localVarFp.createExtensionPointDefinition(requestParameters.extensionPointDefinition, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete ExtensionPointDefinition
         * @param {ExtensionPointDefinitionV1alpha1ApiDeleteExtensionPointDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiDeleteExtensionPointDefinitionRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteExtensionPointDefinition(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get ExtensionPointDefinition
         * @param {ExtensionPointDefinitionV1alpha1ApiGetExtensionPointDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiGetExtensionPointDefinitionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExtensionPointDefinition> {
            return localVarFp.getExtensionPointDefinition(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List ExtensionPointDefinition
         * @param {ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinitionRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ExtensionPointDefinitionList> {
            return localVarFp.listExtensionPointDefinition(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch ExtensionPointDefinition
         * @param {ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinitionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExtensionPointDefinition> {
            return localVarFp.patchExtensionPointDefinition(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update ExtensionPointDefinition
         * @param {ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinitionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinitionRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExtensionPointDefinition> {
            return localVarFp.updateExtensionPointDefinition(requestParameters.name, requestParameters.extensionPointDefinition, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createExtensionPointDefinition operation in ExtensionPointDefinitionV1alpha1Api.
 * @export
 * @interface ExtensionPointDefinitionV1alpha1ApiCreateExtensionPointDefinitionRequest
 */
export interface ExtensionPointDefinitionV1alpha1ApiCreateExtensionPointDefinitionRequest {
    /**
     * Fresh extensionpointdefinition
     * @type {ExtensionPointDefinition}
     * @memberof ExtensionPointDefinitionV1alpha1ApiCreateExtensionPointDefinition
     */
    readonly extensionPointDefinition?: ExtensionPointDefinition
}

/**
 * Request parameters for deleteExtensionPointDefinition operation in ExtensionPointDefinitionV1alpha1Api.
 * @export
 * @interface ExtensionPointDefinitionV1alpha1ApiDeleteExtensionPointDefinitionRequest
 */
export interface ExtensionPointDefinitionV1alpha1ApiDeleteExtensionPointDefinitionRequest {
    /**
     * Name of extensionpointdefinition
     * @type {string}
     * @memberof ExtensionPointDefinitionV1alpha1ApiDeleteExtensionPointDefinition
     */
    readonly name: string
}

/**
 * Request parameters for getExtensionPointDefinition operation in ExtensionPointDefinitionV1alpha1Api.
 * @export
 * @interface ExtensionPointDefinitionV1alpha1ApiGetExtensionPointDefinitionRequest
 */
export interface ExtensionPointDefinitionV1alpha1ApiGetExtensionPointDefinitionRequest {
    /**
     * Name of extensionpointdefinition
     * @type {string}
     * @memberof ExtensionPointDefinitionV1alpha1ApiGetExtensionPointDefinition
     */
    readonly name: string
}

/**
 * Request parameters for listExtensionPointDefinition operation in ExtensionPointDefinitionV1alpha1Api.
 * @export
 * @interface ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinitionRequest
 */
export interface ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinitionRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinition
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinition
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinition
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinition
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinition
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchExtensionPointDefinition operation in ExtensionPointDefinitionV1alpha1Api.
 * @export
 * @interface ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinitionRequest
 */
export interface ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinitionRequest {
    /**
     * Name of extensionpointdefinition
     * @type {string}
     * @memberof ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinition
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinition
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateExtensionPointDefinition operation in ExtensionPointDefinitionV1alpha1Api.
 * @export
 * @interface ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinitionRequest
 */
export interface ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinitionRequest {
    /**
     * Name of extensionpointdefinition
     * @type {string}
     * @memberof ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinition
     */
    readonly name: string

    /**
     * Updated extensionpointdefinition
     * @type {ExtensionPointDefinition}
     * @memberof ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinition
     */
    readonly extensionPointDefinition?: ExtensionPointDefinition
}

/**
 * ExtensionPointDefinitionV1alpha1Api - object-oriented interface
 * @export
 * @class ExtensionPointDefinitionV1alpha1Api
 * @extends {BaseAPI}
 */
export class ExtensionPointDefinitionV1alpha1Api extends BaseAPI {
    /**
     * Create ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiCreateExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExtensionPointDefinitionV1alpha1Api
     */
    public createExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiCreateExtensionPointDefinitionRequest = {}, options?: RawAxiosRequestConfig) {
        return ExtensionPointDefinitionV1alpha1ApiFp(this.configuration).createExtensionPointDefinition(requestParameters.extensionPointDefinition, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiDeleteExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExtensionPointDefinitionV1alpha1Api
     */
    public deleteExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiDeleteExtensionPointDefinitionRequest, options?: RawAxiosRequestConfig) {
        return ExtensionPointDefinitionV1alpha1ApiFp(this.configuration).deleteExtensionPointDefinition(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiGetExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExtensionPointDefinitionV1alpha1Api
     */
    public getExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiGetExtensionPointDefinitionRequest, options?: RawAxiosRequestConfig) {
        return ExtensionPointDefinitionV1alpha1ApiFp(this.configuration).getExtensionPointDefinition(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExtensionPointDefinitionV1alpha1Api
     */
    public listExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiListExtensionPointDefinitionRequest = {}, options?: RawAxiosRequestConfig) {
        return ExtensionPointDefinitionV1alpha1ApiFp(this.configuration).listExtensionPointDefinition(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExtensionPointDefinitionV1alpha1Api
     */
    public patchExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiPatchExtensionPointDefinitionRequest, options?: RawAxiosRequestConfig) {
        return ExtensionPointDefinitionV1alpha1ApiFp(this.configuration).patchExtensionPointDefinition(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update ExtensionPointDefinition
     * @param {ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinitionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExtensionPointDefinitionV1alpha1Api
     */
    public updateExtensionPointDefinition(requestParameters: ExtensionPointDefinitionV1alpha1ApiUpdateExtensionPointDefinitionRequest, options?: RawAxiosRequestConfig) {
        return ExtensionPointDefinitionV1alpha1ApiFp(this.configuration).updateExtensionPointDefinition(requestParameters.name, requestParameters.extensionPointDefinition, options).then((request) => request(this.axios, this.basePath));
    }
}
