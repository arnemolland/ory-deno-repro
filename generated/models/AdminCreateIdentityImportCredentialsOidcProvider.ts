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

export class AdminCreateIdentityImportCredentialsOidcProvider {
    /**
    * The OpenID Connect provider to link the subject to. Usually something like `google` or `github`.
    */
    'provider': string;
    /**
    * The subject (`sub`) of the OpenID Connect connection. Usually the `sub` field of the ID Token.
    */
    'subject': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        return AdminCreateIdentityImportCredentialsOidcProvider.attributeTypeMap;
    }

    public constructor() {
    }
}
