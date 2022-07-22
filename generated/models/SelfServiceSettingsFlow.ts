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

import { Identity } from './Identity.ts';
import { SelfServiceSettingsFlowState } from './SelfServiceSettingsFlowState.ts';
import { UiContainer } from './UiContainer.ts';
import { HttpFile } from '../http/http.ts';

/**
* This flow is used when an identity wants to update settings (e.g. profile data, passwords, ...) in a selfservice manner.  We recommend reading the [User Settings Documentation](../self-service/flows/user-settings)
*/
export class SelfServiceSettingsFlow {
    /**
    * Active, if set, contains the registration method that is being used. It is initially not set.
    */
    'active'?: string;
    /**
    * ExpiresAt is the time (UTC) when the flow expires. If the user still wishes to update the setting, a new flow has to be initiated.
    */
    'expires_at': Date;
    'id': string;
    'identity': Identity;
    /**
    * IssuedAt is the time (UTC) when the flow occurred.
    */
    'issued_at': Date;
    /**
    * RequestURL is the initial URL that was requested from Ory Kratos. It can be used to forward information contained in the URL's path or query for example.
    */
    'request_url': string;
    /**
    * ReturnTo contains the requested return_to URL.
    */
    'return_to'?: string;
    'state': SelfServiceSettingsFlowState;
    /**
    * The flow type can either be `api` or `browser`.
    */
    'type': string;
    'ui': UiContainer;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "string",
            "format": ""
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
            "name": "identity",
            "baseName": "identity",
            "type": "Identity",
            "format": ""
        },
        {
            "name": "issued_at",
            "baseName": "issued_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "request_url",
            "baseName": "request_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "return_to",
            "baseName": "return_to",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SelfServiceSettingsFlowState",
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
        }    ];

    static getAttributeTypeMap() {
        return SelfServiceSettingsFlow.attributeTypeMap;
    }

    public constructor() {
    }
}

