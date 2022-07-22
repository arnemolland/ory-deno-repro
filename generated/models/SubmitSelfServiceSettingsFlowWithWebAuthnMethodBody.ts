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

export class SubmitSelfServiceSettingsFlowWithWebAuthnMethodBody {
    /**
    * CSRFToken is the anti-CSRF token
    */
    'csrf_token'?: string;
    /**
    * Method  Should be set to \"webauthn\" when trying to add, update, or remove a webAuthn pairing.
    */
    'method': string;
    /**
    * Register a WebAuthn Security Key  It is expected that the JSON returned by the WebAuthn registration process is included here.
    */
    'webauthn_register'?: string;
    /**
    * Name of the WebAuthn Security Key to be Added  A human-readable name for the security key which will be added.
    */
    'webauthn_register_displayname'?: string;
    /**
    * Remove a WebAuthn Security Key  This must contain the ID of the WebAuthN connection.
    */
    'webauthn_remove'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "csrf_token",
            "baseName": "csrf_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "webauthn_register",
            "baseName": "webauthn_register",
            "type": "string",
            "format": ""
        },
        {
            "name": "webauthn_register_displayname",
            "baseName": "webauthn_register_displayname",
            "type": "string",
            "format": ""
        },
        {
            "name": "webauthn_remove",
            "baseName": "webauthn_remove",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubmitSelfServiceSettingsFlowWithWebAuthnMethodBody.attributeTypeMap;
    }

    public constructor() {
    }
}

