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

export class SubmitSelfServiceSettingsFlowWithTotpMethodBody {
    /**
    * CSRFToken is the anti-CSRF token
    */
    'csrf_token'?: string;
    /**
    * Method  Should be set to \"totp\" when trying to add, update, or remove a totp pairing.
    */
    'method': string;
    /**
    * ValidationTOTP must contain a valid TOTP based on the
    */
    'totp_code'?: string;
    /**
    * UnlinkTOTP if true will remove the TOTP pairing, effectively removing the credential. This can be used to set up a new TOTP device.
    */
    'totp_unlink'?: boolean;

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
            "name": "totp_code",
            "baseName": "totp_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "totp_unlink",
            "baseName": "totp_unlink",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubmitSelfServiceSettingsFlowWithTotpMethodBody.attributeTypeMap;
    }

    public constructor() {
    }
}
