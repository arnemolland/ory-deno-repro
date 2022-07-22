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

import { IdentitySchema } from './IdentitySchema.ts';
import { HttpFile } from '../http/http.ts';

export class NormalizedProjectRevisionIdentitySchema {
    /**
    * The Project's Revision Creation Date
    */
    'created_at'?: Date;
    'id'?: string;
    'identity_schema'?: IdentitySchema;
    'identity_schema_id'?: string;
    /**
    * The imported (named) ID of the Identity Schema referenced in the Ory Kratos config.
    */
    'import_id'?: string;
    /**
    * The ImportURL can be used to import an Identity Schema from a bse64 encoded string. In the future, this key also support HTTPS and other sources!  If you import an Ory Kratos configuration, this would be akin to the `identity.schemas.#.url` key.  The configuration will always return the import URL when you fetch it from the API.
    */
    'import_url'?: string;
    /**
    * If true sets the default schema for identities  Only one schema can ever be the default schema. If you try to add two schemas with default to true, the request will fail.
    */
    'is_default'?: boolean;
    /**
    * Use a preset instead of a custom identity schema.
    */
    'preset'?: string;
    'project_revision_id'?: string;
    /**
    * Last Time Project's Revision was Updated
    */
    'updated_at'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "identity_schema",
            "baseName": "identity_schema",
            "type": "IdentitySchema",
            "format": ""
        },
        {
            "name": "identity_schema_id",
            "baseName": "identity_schema_id",
            "type": "string",
            "format": "uuid4"
        },
        {
            "name": "import_id",
            "baseName": "import_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "import_url",
            "baseName": "import_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "is_default",
            "baseName": "is_default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "preset",
            "baseName": "preset",
            "type": "string",
            "format": ""
        },
        {
            "name": "project_revision_id",
            "baseName": "project_revision_id",
            "type": "string",
            "format": "uuid4"
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return NormalizedProjectRevisionIdentitySchema.attributeTypeMap;
    }

    public constructor() {
    }
}
