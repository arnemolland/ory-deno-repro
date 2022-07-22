/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * OpenAPI spec version: v0.1.0-alpha.12
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class IdentityCredentialsOidcProvider {
    'initial_access_token'?: string;
    'initial_id_token'?: string;
    'initial_refresh_token'?: string;
    'provider'?: string;
    'subject'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "initial_access_token",
            "baseName": "initial_access_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "initial_id_token",
            "baseName": "initial_id_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "initial_refresh_token",
            "baseName": "initial_refresh_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IdentityCredentialsOidcProvider.attributeTypeMap;
    }

    public constructor() {
    }
}

