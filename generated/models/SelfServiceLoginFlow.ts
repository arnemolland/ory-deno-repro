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

import { AuthenticatorAssuranceLevel } from './AuthenticatorAssuranceLevel.ts';
import { IdentityCredentialsType } from './IdentityCredentialsType.ts';
import { UiContainer } from './UiContainer.ts';
import { HttpFile } from '../http/http.ts';

/**
* This object represents a login flow. A login flow is initiated at the \"Initiate Login API / Browser Flow\" endpoint by a client.  Once a login flow is completed successfully, a session cookie or session token will be issued.
*/
export class SelfServiceLoginFlow {
    'active'?: IdentityCredentialsType;
    /**
    * CreatedAt is a helper struct field for gobuffalo.pop.
    */
    'created_at'?: Date;
    /**
    * ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to log in, a new flow has to be initiated.
    */
    'expires_at': Date;
    'id': string;
    /**
    * IssuedAt is the time (UTC) when the flow started.
    */
    'issued_at': Date;
    /**
    * Refresh stores whether this login flow should enforce re-authentication.
    */
    'refresh'?: boolean;
    /**
    * RequestURL is the initial URL that was requested from Ory Kratos. It can be used to forward information contained in the URL's path or query for example.
    */
    'request_url': string;
    'requested_aal'?: AuthenticatorAssuranceLevel;
    /**
    * ReturnTo contains the requested return_to URL.
    */
    'return_to'?: string;
    /**
    * The flow type can either be `api` or `browser`.
    */
    'type': string;
    'ui': UiContainer;
    /**
    * UpdatedAt is a helper struct field for gobuffalo.pop.
    */
    'updated_at'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "IdentityCredentialsType",
            "format": ""
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expires_at",
            "baseName": "expires_at",
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
            "name": "issued_at",
            "baseName": "issued_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "refresh",
            "baseName": "refresh",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "request_url",
            "baseName": "request_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "requested_aal",
            "baseName": "requested_aal",
            "type": "AuthenticatorAssuranceLevel",
            "format": ""
        },
        {
            "name": "return_to",
            "baseName": "return_to",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "ui",
            "baseName": "ui",
            "type": "UiContainer",
            "format": ""
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SelfServiceLoginFlow.attributeTypeMap;
    }

    public constructor() {
    }
}
