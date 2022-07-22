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

/**
* Together the name and identity uuid are a unique index constraint. This prevents a user from having schemas with the same name. This also allows schemas to have the same name across the system.
*/
export class IdentitySchema {
    /**
    * The gcs file name  This is a randomly generated name which is used to uniquely identify the file on the blob storage
    */
    'blob_name': string;
    /**
    * The publicly accessible url of the schema
    */
    'blob_url': string;
    /**
    * The Content Hash  Contains a hash of the schema's content.
    */
    'content_hash'?: string;
    /**
    * The Schema's Creation Date
    */
    'created_at': Date;
    'id': string;
    /**
    * The schema name  This is set by the user and is for them to easily recognise their schema
    */
    'name': string;
    /**
    * The actual Identity JSON Schema
    */
    'schema'?: any;
    /**
    * Last Time Schema was Updated
    */
    'updated_at': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "blob_name",
            "baseName": "blob_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "blob_url",
            "baseName": "blob_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "content_hash",
            "baseName": "content_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid4"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "schema",
            "baseName": "schema",
            "type": "any",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return IdentitySchema.attributeTypeMap;
    }

    public constructor() {
    }
}

