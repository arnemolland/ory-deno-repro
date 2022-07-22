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
* Is sent when a flow is expired
*/
export class SelfServiceFlowExpiredError {
    /**
    * The status code
    */
    'code'?: number;
    /**
    * Debug information  This field is often not exposed to protect against leaking sensitive information.
    */
    'debug'?: string;
    /**
    * Further error details
    */
    'details'?: any;
    /**
    * The error ID  Useful when trying to identify various errors in application logic.
    */
    'id'?: string;
    /**
    * Error message  The error's message.
    */
    'message': string;
    /**
    * A human-readable reason for the error
    */
    'reason'?: string;
    /**
    * The request ID  The request ID is often exposed internally in order to trace errors across service architectures. This is often a UUID.
    */
    'request'?: string;
    /**
    * A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
    */
    'since'?: number;
    /**
    * The status description
    */
    'status'?: string;
    'use_flow_id'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "debug",
            "baseName": "debug",
            "type": "string",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "any",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string",
            "format": ""
        },
        {
            "name": "request",
            "baseName": "request",
            "type": "string",
            "format": ""
        },
        {
            "name": "since",
            "baseName": "since",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "use_flow_id",
            "baseName": "use_flow_id",
            "type": "string",
            "format": "uuid4"
        }    ];

    static getAttributeTypeMap() {
        return SelfServiceFlowExpiredError.attributeTypeMap;
    }

    public constructor() {
    }
}
