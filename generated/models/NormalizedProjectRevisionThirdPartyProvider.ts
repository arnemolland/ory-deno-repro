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

export class NormalizedProjectRevisionThirdPartyProvider {
    'apple_private_key'?: string;
    /**
    * Apple Private Key Identifier  Sign In with Apple Private Key Identifier needed for generating a JWT token for client secret
    */
    'apple_private_key_id'?: string;
    /**
    * Apple Developer Team ID  Apple Developer Team ID needed for generating a JWT token for client secret
    */
    'apple_team_id'?: string;
    /**
    * AuthURL is the authorize url, typically something like: https://example.org/oauth2/auth Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when `provider` is set to `generic`.
    */
    'auth_url'?: string;
    /**
    * Tenant is the Azure AD Tenant to use for authentication, and must be set when `provider` is set to `microsoft`.  Can be either `common`, `organizations`, `consumers` for a multitenant application or a specific tenant like `8eaef023-2b34-4da1-9baa-8bc8c9d6a490` or `contoso.onmicrosoft.com`.
    */
    'azure_tenant'?: string;
    /**
    * ClientID is the application's Client ID.
    */
    'client_id'?: string;
    'client_secret'?: string;
    /**
    * The Project's Revision Creation Date
    */
    'created_at'?: Date;
    'id'?: string;
    /**
    * IssuerURL is the OpenID Connect Server URL. You can leave this empty if `provider` is not set to `generic`. If set, neither `auth_url` nor `token_url` are required.
    */
    'issuer_url'?: string;
    /**
    * Label represents an optional label which can be used in the UI generation.
    */
    'label'?: string;
    /**
    * Mapper specifies the JSONNet code snippet which uses the OpenID Connect Provider's data (e.g. GitHub or Google profile information) to hydrate the identity's data.  It can be either a URL (file://, http(s)://, base64://) or an inline JSONNet code snippet.
    */
    'mapper_url'?: string;
    'project_revision_id'?: string;
    /**
    * Provider is either \"generic\" for a generic OAuth 2.0 / OpenID Connect Provider or one of: generic google github gitlab microsoft discord slack facebook vk yandex apple
    */
    'provider'?: string;
    /**
    * ID is the provider's ID
    */
    'provider_id'?: string;
    'requested_claims'?: any;
    'scope'?: Array<string>;
    /**
    * TokenURL is the token url, typically something like: https://example.org/oauth2/token  Should only be used when the OAuth2 / OpenID Connect server is not supporting OpenID Connect Discovery and when `provider` is set to `generic`.
    */
    'token_url'?: string;
    /**
    * Last Time Project's Revision was Updated
    */
    'updated_at'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apple_private_key",
            "baseName": "apple_private_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "apple_private_key_id",
            "baseName": "apple_private_key_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "apple_team_id",
            "baseName": "apple_team_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "auth_url",
            "baseName": "auth_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "azure_tenant",
            "baseName": "azure_tenant",
            "type": "string",
            "format": ""
        },
        {
            "name": "client_id",
            "baseName": "client_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "client_secret",
            "baseName": "client_secret",
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
            "name": "issuer_url",
            "baseName": "issuer_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "mapper_url",
            "baseName": "mapper_url",
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
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "provider_id",
            "baseName": "provider_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "requested_claims",
            "baseName": "requested_claims",
            "type": "any",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "token_url",
            "baseName": "token_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return NormalizedProjectRevisionThirdPartyProvider.attributeTypeMap;
    }

    public constructor() {
    }
}
