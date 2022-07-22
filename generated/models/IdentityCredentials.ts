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

import { IdentityCredentialsType } from './IdentityCredentialsType.ts';
import { HttpFile } from '../http/http.ts';

/**
* Credentials represents a specific credential type
*/
export class IdentityCredentials {
    'config'?: any;
    /**
    * CreatedAt is a helper struct field for gobuffalo.pop.
    */
    'created_at'?: Date;
    /**
    * Identifiers represents a list of unique identifiers this credential type matches.
    */
    'identifiers'?: Array<string>;
    'type'?: IdentityCredentialsType;
    /**
    * UpdatedAt is a helper struct field for gobuffalo.pop.
    */
    'updated_at'?: Date;
    /**
    * Version refers to the version of the credential. Useful when changing the config schema.
    */
    'version'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "any",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IdentityCredentialsType",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return IdentityCredentials.attributeTypeMap;
    }

    public constructor() {
    }
}

