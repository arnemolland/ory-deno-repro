import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { ActiveProject } from '../models/ActiveProject.ts';
import { AdminCreateIdentityBody } from '../models/AdminCreateIdentityBody.ts';
import { AdminCreateIdentityImportCredentialsOidc } from '../models/AdminCreateIdentityImportCredentialsOidc.ts';
import { AdminCreateIdentityImportCredentialsOidcConfig } from '../models/AdminCreateIdentityImportCredentialsOidcConfig.ts';
import { AdminCreateIdentityImportCredentialsOidcProvider } from '../models/AdminCreateIdentityImportCredentialsOidcProvider.ts';
import { AdminCreateIdentityImportCredentialsPassword } from '../models/AdminCreateIdentityImportCredentialsPassword.ts';
import { AdminCreateIdentityImportCredentialsPasswordConfig } from '../models/AdminCreateIdentityImportCredentialsPasswordConfig.ts';
import { AdminCreateSelfServiceRecoveryLinkBody } from '../models/AdminCreateSelfServiceRecoveryLinkBody.ts';
import { AdminIdentityImportCredentials } from '../models/AdminIdentityImportCredentials.ts';
import { AdminUpdateIdentityBody } from '../models/AdminUpdateIdentityBody.ts';
import { ApiToken } from '../models/ApiToken.ts';
import { AuthenticatorAssuranceLevel } from '../models/AuthenticatorAssuranceLevel.ts';
import { CloudAccount } from '../models/CloudAccount.ts';
import { CnameSettings } from '../models/CnameSettings.ts';
import { CreateCustomHostnameBody } from '../models/CreateCustomHostnameBody.ts';
import { CreateProjectBody } from '../models/CreateProjectBody.ts';
import { CreateSubscriptionPayload } from '../models/CreateSubscriptionPayload.ts';
import { ErrorAuthenticatorAssuranceLevelNotSatisfied } from '../models/ErrorAuthenticatorAssuranceLevelNotSatisfied.ts';
import { ExpandTree } from '../models/ExpandTree.ts';
import { GenericError } from '../models/GenericError.ts';
import { GenericErrorContent } from '../models/GenericErrorContent.ts';
import { GetCheckResponse } from '../models/GetCheckResponse.ts';
import { GetRelationTuplesResponse } from '../models/GetRelationTuplesResponse.ts';
import { GetVersion200Response } from '../models/GetVersion200Response.ts';
import { HealthNotReadyStatus } from '../models/HealthNotReadyStatus.ts';
import { HealthStatus } from '../models/HealthStatus.ts';
import { Identity } from '../models/Identity.ts';
import { IdentityCredentials } from '../models/IdentityCredentials.ts';
import { IdentityCredentialsOidc } from '../models/IdentityCredentialsOidc.ts';
import { IdentityCredentialsOidcProvider } from '../models/IdentityCredentialsOidcProvider.ts';
import { IdentityCredentialsPassword } from '../models/IdentityCredentialsPassword.ts';
import { IdentityCredentialsType } from '../models/IdentityCredentialsType.ts';
import { IdentitySchema } from '../models/IdentitySchema.ts';
import { IdentitySchemaLocation } from '../models/IdentitySchemaLocation.ts';
import { IdentitySchemaPreset } from '../models/IdentitySchemaPreset.ts';
import { IdentitySchemaValidationResult } from '../models/IdentitySchemaValidationResult.ts';
import { IdentityState } from '../models/IdentityState.ts';
import { InternalRelationTuple } from '../models/InternalRelationTuple.ts';
import { InvitePayload } from '../models/InvitePayload.ts';
import { IsAlive200Response } from '../models/IsAlive200Response.ts';
import { IsOwnerForProjectBySlug } from '../models/IsOwnerForProjectBySlug.ts';
import { IsOwnerForProjectBySlugPayload } from '../models/IsOwnerForProjectBySlugPayload.ts';
import { IsReady503Response } from '../models/IsReady503Response.ts';
import { JsonError } from '../models/JsonError.ts';
import { JsonPatch } from '../models/JsonPatch.ts';
import { KetoNamespace } from '../models/KetoNamespace.ts';
import { NeedsPrivilegedSessionError } from '../models/NeedsPrivilegedSessionError.ts';
import { NormalizedProject } from '../models/NormalizedProject.ts';
import { NormalizedProjectRevision } from '../models/NormalizedProjectRevision.ts';
import { NormalizedProjectRevisionHook } from '../models/NormalizedProjectRevisionHook.ts';
import { NormalizedProjectRevisionIdentitySchema } from '../models/NormalizedProjectRevisionIdentitySchema.ts';
import { NormalizedProjectRevisionThirdPartyProvider } from '../models/NormalizedProjectRevisionThirdPartyProvider.ts';
import { NullPlan } from '../models/NullPlan.ts';
import { Pagination } from '../models/Pagination.ts';
import { PatchDelta } from '../models/PatchDelta.ts';
import { Project } from '../models/Project.ts';
import { ProjectHost } from '../models/ProjectHost.ts';
import { ProjectInvite } from '../models/ProjectInvite.ts';
import { ProjectMetadata } from '../models/ProjectMetadata.ts';
import { ProjectServiceIdentity } from '../models/ProjectServiceIdentity.ts';
import { ProjectServicePermission } from '../models/ProjectServicePermission.ts';
import { ProjectServices } from '../models/ProjectServices.ts';
import { ProvisionMockSubscriptionPayload } from '../models/ProvisionMockSubscriptionPayload.ts';
import { QuotaCustomDomains } from '../models/QuotaCustomDomains.ts';
import { QuotaProjectMemberSeats } from '../models/QuotaProjectMemberSeats.ts';
import { RecoveryAddress } from '../models/RecoveryAddress.ts';
import { RelationQuery } from '../models/RelationQuery.ts';
import { RevokedSessions } from '../models/RevokedSessions.ts';
import { SchemaPatch } from '../models/SchemaPatch.ts';
import { SelfServiceBrowserLocationChangeRequiredError } from '../models/SelfServiceBrowserLocationChangeRequiredError.ts';
import { SelfServiceError } from '../models/SelfServiceError.ts';
import { SelfServiceFlowExpiredError } from '../models/SelfServiceFlowExpiredError.ts';
import { SelfServiceLoginFlow } from '../models/SelfServiceLoginFlow.ts';
import { SelfServiceLogoutUrl } from '../models/SelfServiceLogoutUrl.ts';
import { SelfServiceRecoveryFlow } from '../models/SelfServiceRecoveryFlow.ts';
import { SelfServiceRecoveryFlowState } from '../models/SelfServiceRecoveryFlowState.ts';
import { SelfServiceRecoveryLink } from '../models/SelfServiceRecoveryLink.ts';
import { SelfServiceRegistrationFlow } from '../models/SelfServiceRegistrationFlow.ts';
import { SelfServiceSettingsFlow } from '../models/SelfServiceSettingsFlow.ts';
import { SelfServiceSettingsFlowState } from '../models/SelfServiceSettingsFlowState.ts';
import { SelfServiceVerificationFlow } from '../models/SelfServiceVerificationFlow.ts';
import { SelfServiceVerificationFlowState } from '../models/SelfServiceVerificationFlowState.ts';
import { Session } from '../models/Session.ts';
import { SessionAuthenticationMethod } from '../models/SessionAuthenticationMethod.ts';
import { SessionDevice } from '../models/SessionDevice.ts';
import { SettingsProfileFormConfig } from '../models/SettingsProfileFormConfig.ts';
import { StripeCustomerResponse } from '../models/StripeCustomerResponse.ts';
import { SubjectSet } from '../models/SubjectSet.ts';
import { SubmitSelfServiceFlowWithWebAuthnRegistrationMethod } from '../models/SubmitSelfServiceFlowWithWebAuthnRegistrationMethod.ts';
import { SubmitSelfServiceLoginFlowBody } from '../models/SubmitSelfServiceLoginFlowBody.ts';
import { SubmitSelfServiceLoginFlowWithLookupSecretMethodBody } from '../models/SubmitSelfServiceLoginFlowWithLookupSecretMethodBody.ts';
import { SubmitSelfServiceLoginFlowWithOidcMethodBody } from '../models/SubmitSelfServiceLoginFlowWithOidcMethodBody.ts';
import { SubmitSelfServiceLoginFlowWithPasswordMethodBody } from '../models/SubmitSelfServiceLoginFlowWithPasswordMethodBody.ts';
import { SubmitSelfServiceLoginFlowWithTotpMethodBody } from '../models/SubmitSelfServiceLoginFlowWithTotpMethodBody.ts';
import { SubmitSelfServiceLoginFlowWithWebAuthnMethodBody } from '../models/SubmitSelfServiceLoginFlowWithWebAuthnMethodBody.ts';
import { SubmitSelfServiceLogoutFlowWithoutBrowserBody } from '../models/SubmitSelfServiceLogoutFlowWithoutBrowserBody.ts';
import { SubmitSelfServiceRecoveryFlowBody } from '../models/SubmitSelfServiceRecoveryFlowBody.ts';
import { SubmitSelfServiceRecoveryFlowWithLinkMethodBody } from '../models/SubmitSelfServiceRecoveryFlowWithLinkMethodBody.ts';
import { SubmitSelfServiceRegistrationFlowBody } from '../models/SubmitSelfServiceRegistrationFlowBody.ts';
import { SubmitSelfServiceRegistrationFlowWithOidcMethodBody } from '../models/SubmitSelfServiceRegistrationFlowWithOidcMethodBody.ts';
import { SubmitSelfServiceRegistrationFlowWithPasswordMethodBody } from '../models/SubmitSelfServiceRegistrationFlowWithPasswordMethodBody.ts';
import { SubmitSelfServiceRegistrationFlowWithWebAuthnMethodBody } from '../models/SubmitSelfServiceRegistrationFlowWithWebAuthnMethodBody.ts';
import { SubmitSelfServiceSettingsFlowBody } from '../models/SubmitSelfServiceSettingsFlowBody.ts';
import { SubmitSelfServiceSettingsFlowWithLookupMethodBody } from '../models/SubmitSelfServiceSettingsFlowWithLookupMethodBody.ts';
import { SubmitSelfServiceSettingsFlowWithOidcMethodBody } from '../models/SubmitSelfServiceSettingsFlowWithOidcMethodBody.ts';
import { SubmitSelfServiceSettingsFlowWithPasswordMethodBody } from '../models/SubmitSelfServiceSettingsFlowWithPasswordMethodBody.ts';
import { SubmitSelfServiceSettingsFlowWithProfileMethodBody } from '../models/SubmitSelfServiceSettingsFlowWithProfileMethodBody.ts';
import { SubmitSelfServiceSettingsFlowWithTotpMethodBody } from '../models/SubmitSelfServiceSettingsFlowWithTotpMethodBody.ts';
import { SubmitSelfServiceSettingsFlowWithWebAuthnMethodBody } from '../models/SubmitSelfServiceSettingsFlowWithWebAuthnMethodBody.ts';
import { SubmitSelfServiceVerificationFlowBody } from '../models/SubmitSelfServiceVerificationFlowBody.ts';
import { SubmitSelfServiceVerificationFlowWithLinkMethodBody } from '../models/SubmitSelfServiceVerificationFlowWithLinkMethodBody.ts';
import { Subscription } from '../models/Subscription.ts';
import { SuccessfulProjectUpdate } from '../models/SuccessfulProjectUpdate.ts';
import { SuccessfulSelfServiceLoginWithoutBrowser } from '../models/SuccessfulSelfServiceLoginWithoutBrowser.ts';
import { SuccessfulSelfServiceRegistrationWithoutBrowser } from '../models/SuccessfulSelfServiceRegistrationWithoutBrowser.ts';
import { UiContainer } from '../models/UiContainer.ts';
import { UiNode } from '../models/UiNode.ts';
import { UiNodeAnchorAttributes } from '../models/UiNodeAnchorAttributes.ts';
import { UiNodeAttributes } from '../models/UiNodeAttributes.ts';
import { UiNodeImageAttributes } from '../models/UiNodeImageAttributes.ts';
import { UiNodeInputAttributes } from '../models/UiNodeInputAttributes.ts';
import { UiNodeMeta } from '../models/UiNodeMeta.ts';
import { UiNodeScriptAttributes } from '../models/UiNodeScriptAttributes.ts';
import { UiNodeTextAttributes } from '../models/UiNodeTextAttributes.ts';
import { UiText } from '../models/UiText.ts';
import { UpdateCustomHostnameBody } from '../models/UpdateCustomHostnameBody.ts';
import { UpdateProject } from '../models/UpdateProject.ts';
import { UpdateSubscriptionPayload } from '../models/UpdateSubscriptionPayload.ts';
import { VerifiableIdentityAddress } from '../models/VerifiableIdentityAddress.ts';
import { Version } from '../models/Version.ts';
import { Warning } from '../models/Warning.ts';

import { ObservableMetadataApi } from "./ObservableAPI.ts";
import { MetadataApiRequestFactory, MetadataApiResponseProcessor} from "../apis/MetadataApi.ts";

export interface MetadataApiGetVersionRequest {
}

export interface MetadataApiIsAliveRequest {
}

export interface MetadataApiIsReadyRequest {
}

export class ObjectMetadataApi {
    private api: ObservableMetadataApi

    public constructor(configuration: Configuration, requestFactory?: MetadataApiRequestFactory, responseProcessor?: MetadataApiResponseProcessor) {
        this.api = new ObservableMetadataApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint returns the version of Ory Kratos.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the version will never refer to the cluster state, only to a single instance.
     * Return Running Software Version.
     * @param param the request object
     */
    public getVersion(param: MetadataApiGetVersionRequest = {}, options?: Configuration): Promise<GetVersion200Response> {
        return this.api.getVersion( options).toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is accepting incoming HTTP requests. This status does currently not include checks whether the database connection is working.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of this service, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server Status
     * @param param the request object
     */
    public isAlive(param: MetadataApiIsAliveRequest = {}, options?: Configuration): Promise<IsAlive200Response> {
        return this.api.isAlive( options).toPromise();
    }

    /**
     * This endpoint returns a HTTP 200 status code when Ory Kratos is up running and the environment dependencies (e.g. the database) are responsive as well.  If the service supports TLS Edge Termination, this endpoint does not require the `X-Forwarded-Proto` header to be set.  Be aware that if you are running multiple nodes of Ory Kratos, the health status will never refer to the cluster state, only to a single instance.
     * Check HTTP Server and Database Status
     * @param param the request object
     */
    public isReady(param: MetadataApiIsReadyRequest = {}, options?: Configuration): Promise<IsAlive200Response> {
        return this.api.isReady( options).toPromise();
    }

}

import { ObservableReadApi } from "./ObservableAPI.ts";
import { ReadApiRequestFactory, ReadApiResponseProcessor} from "../apis/ReadApi.ts";

export interface ReadApiGetCheckRequest {
    /**
     * Namespace of the Relation Tuple
     * @type string
     * @memberof ReadApigetCheck
     */
    namespace?: string
    /**
     * Object of the Relation Tuple
     * @type string
     * @memberof ReadApigetCheck
     */
    object?: string
    /**
     * Relation of the Relation Tuple
     * @type string
     * @memberof ReadApigetCheck
     */
    relation?: string
    /**
     * SubjectID of the Relation Tuple
     * @type string
     * @memberof ReadApigetCheck
     */
    subject_id?: string
    /**
     * Namespace of the Subject Set
     * @type string
     * @memberof ReadApigetCheck
     */
    subject_set_namespace?: string
    /**
     * Object of the Subject Set
     * @type string
     * @memberof ReadApigetCheck
     */
    subject_set_object?: string
    /**
     * Relation of the Subject Set
     * @type string
     * @memberof ReadApigetCheck
     */
    subject_set_relation?: string
    /**
     * 
     * @type number
     * @memberof ReadApigetCheck
     */
    max_depth?: number
}

export interface ReadApiGetCheckMirrorStatusRequest {
}

export interface ReadApiGetExpandRequest {
    /**
     * Namespace of the Subject Set
     * @type string
     * @memberof ReadApigetExpand
     */
    namespace: string
    /**
     * Object of the Subject Set
     * @type string
     * @memberof ReadApigetExpand
     */
    object: string
    /**
     * Relation of the Subject Set
     * @type string
     * @memberof ReadApigetExpand
     */
    relation: string
    /**
     * 
     * @type number
     * @memberof ReadApigetExpand
     */
    max_depth?: number
}

export interface ReadApiGetRelationTuplesRequest {
    /**
     * 
     * @type string
     * @memberof ReadApigetRelationTuples
     */
    page_token?: string
    /**
     * 
     * @type number
     * @memberof ReadApigetRelationTuples
     */
    page_size?: number
    /**
     * Namespace of the Relation Tuple
     * @type string
     * @memberof ReadApigetRelationTuples
     */
    namespace?: string
    /**
     * Object of the Relation Tuple
     * @type string
     * @memberof ReadApigetRelationTuples
     */
    object?: string
    /**
     * Relation of the Relation Tuple
     * @type string
     * @memberof ReadApigetRelationTuples
     */
    relation?: string
    /**
     * SubjectID of the Relation Tuple
     * @type string
     * @memberof ReadApigetRelationTuples
     */
    subject_id?: string
    /**
     * Namespace of the Subject Set
     * @type string
     * @memberof ReadApigetRelationTuples
     */
    subject_set_namespace?: string
    /**
     * Object of the Subject Set
     * @type string
     * @memberof ReadApigetRelationTuples
     */
    subject_set_object?: string
    /**
     * Relation of the Subject Set
     * @type string
     * @memberof ReadApigetRelationTuples
     */
    subject_set_relation?: string
}

export interface ReadApiPostCheckRequest {
    /**
     * 
     * @type number
     * @memberof ReadApipostCheck
     */
    max_depth?: number
    /**
     * 
     * @type RelationQuery
     * @memberof ReadApipostCheck
     */
    RelationQuery?: RelationQuery
}

export interface ReadApiPostCheckMirrorStatusRequest {
}

export class ObjectReadApi {
    private api: ObservableReadApi

    public constructor(configuration: Configuration, requestFactory?: ReadApiRequestFactory, responseProcessor?: ReadApiResponseProcessor) {
        this.api = new ObservableReadApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).
     * Check a relation tuple
     * @param param the request object
     */
    public getCheck(param: ReadApiGetCheckRequest = {}, options?: Configuration): Promise<GetCheckResponse> {
        return this.api.getCheck(param.namespace, param.object, param.relation, param.subject_id, param.subject_set_namespace, param.subject_set_object, param.subject_set_relation, param.max_depth,  options).toPromise();
    }

    /**
     * To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).
     * Check a relation tuple
     * @param param the request object
     */
    public getCheckMirrorStatus(param: ReadApiGetCheckMirrorStatusRequest = {}, options?: Configuration): Promise<GetCheckResponse> {
        return this.api.getCheckMirrorStatus( options).toPromise();
    }

    /**
     * Use this endpoint to expand a relation tuple.
     * Expand a Relation Tuple
     * @param param the request object
     */
    public getExpand(param: ReadApiGetExpandRequest, options?: Configuration): Promise<ExpandTree> {
        return this.api.getExpand(param.namespace, param.object, param.relation, param.max_depth,  options).toPromise();
    }

    /**
     * Get all relation tuples that match the query. Only the namespace field is required.
     * Query relation tuples
     * @param param the request object
     */
    public getRelationTuples(param: ReadApiGetRelationTuplesRequest = {}, options?: Configuration): Promise<GetRelationTuplesResponse> {
        return this.api.getRelationTuples(param.page_token, param.page_size, param.namespace, param.object, param.relation, param.subject_id, param.subject_set_namespace, param.subject_set_object, param.subject_set_relation,  options).toPromise();
    }

    /**
     * To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).
     * Check a relation tuple
     * @param param the request object
     */
    public postCheck(param: ReadApiPostCheckRequest = {}, options?: Configuration): Promise<GetCheckResponse> {
        return this.api.postCheck(param.max_depth, param.RelationQuery,  options).toPromise();
    }

    /**
     * To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).
     * Check a relation tuple
     * @param param the request object
     */
    public postCheckMirrorStatus(param: ReadApiPostCheckMirrorStatusRequest = {}, options?: Configuration): Promise<GetCheckResponse> {
        return this.api.postCheckMirrorStatus( options).toPromise();
    }

}

import { ObservableV0alpha2Api } from "./ObservableAPI.ts";
import { V0alpha2ApiRequestFactory, V0alpha2ApiResponseProcessor} from "../apis/V0alpha2Api.ts";

export interface V0alpha2ApiAdminCreateIdentityRequest {
    /**
     * 
     * @type AdminCreateIdentityBody
     * @memberof V0alpha2ApiadminCreateIdentity
     */
    AdminCreateIdentityBody?: AdminCreateIdentityBody
}

export interface V0alpha2ApiAdminCreateSelfServiceRecoveryLinkRequest {
    /**
     * 
     * @type AdminCreateSelfServiceRecoveryLinkBody
     * @memberof V0alpha2ApiadminCreateSelfServiceRecoveryLink
     */
    AdminCreateSelfServiceRecoveryLinkBody?: AdminCreateSelfServiceRecoveryLinkBody
}

export interface V0alpha2ApiAdminDeleteIdentityRequest {
    /**
     * ID is the identity&#39;s ID.
     * @type string
     * @memberof V0alpha2ApiadminDeleteIdentity
     */
    id: string
}

export interface V0alpha2ApiAdminDeleteIdentitySessionsRequest {
    /**
     * ID is the identity&#39;s ID.
     * @type string
     * @memberof V0alpha2ApiadminDeleteIdentitySessions
     */
    id: string
}

export interface V0alpha2ApiAdminExtendSessionRequest {
    /**
     * ID is the session&#39;s ID.
     * @type string
     * @memberof V0alpha2ApiadminExtendSession
     */
    id: string
}

export interface V0alpha2ApiAdminGetIdentityRequest {
    /**
     * ID must be set to the ID of identity you want to get
     * @type string
     * @memberof V0alpha2ApiadminGetIdentity
     */
    id: string
    /**
     * DeclassifyCredentials will declassify one or more identity&#39;s credentials  Currently, only &#x60;oidc&#x60; is supported. This will return the initial OAuth 2.0 Access, Refresh and (optionally) OpenID Connect ID Token.
     * @type Array&lt;string&gt;
     * @memberof V0alpha2ApiadminGetIdentity
     */
    include_credential?: Array<string>
}

export interface V0alpha2ApiAdminListIdentitiesRequest {
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof V0alpha2ApiadminListIdentities
     */
    per_page?: number
    /**
     * Pagination Page
     * @type number
     * @memberof V0alpha2ApiadminListIdentities
     */
    page?: number
}

export interface V0alpha2ApiAdminListIdentitySessionsRequest {
    /**
     * ID is the identity&#39;s ID.
     * @type string
     * @memberof V0alpha2ApiadminListIdentitySessions
     */
    id: string
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof V0alpha2ApiadminListIdentitySessions
     */
    per_page?: number
    /**
     * Pagination Page
     * @type number
     * @memberof V0alpha2ApiadminListIdentitySessions
     */
    page?: number
    /**
     * Active is a boolean flag that filters out sessions based on the state. If no value is provided, all sessions are returned.
     * @type boolean
     * @memberof V0alpha2ApiadminListIdentitySessions
     */
    active?: boolean
}

export interface V0alpha2ApiAdminUpdateIdentityRequest {
    /**
     * ID must be set to the ID of identity you want to update
     * @type string
     * @memberof V0alpha2ApiadminUpdateIdentity
     */
    id: string
    /**
     * 
     * @type AdminUpdateIdentityBody
     * @memberof V0alpha2ApiadminUpdateIdentity
     */
    AdminUpdateIdentityBody?: AdminUpdateIdentityBody
}

export interface V0alpha2ApiCreateProjectRequest {
    /**
     * 
     * @type CreateProjectBody
     * @memberof V0alpha2ApicreateProject
     */
    CreateProjectBody?: CreateProjectBody
}

export interface V0alpha2ApiCreateSelfServiceLogoutFlowUrlForBrowsersRequest {
    /**
     * HTTP Cookies  If you call this endpoint from a backend, please include the original Cookie header in the request.
     * @type string
     * @memberof V0alpha2ApicreateSelfServiceLogoutFlowUrlForBrowsers
     */
    cookie?: string
}

export interface V0alpha2ApiGetJsonSchemaRequest {
    /**
     * ID must be set to the ID of schema you want to get
     * @type string
     * @memberof V0alpha2ApigetJsonSchema
     */
    id: string
}

export interface V0alpha2ApiGetProjectRequest {
    /**
     * Project ID  The project&#39;s ID.
     * @type string
     * @memberof V0alpha2ApigetProject
     */
    project_id: string
}

export interface V0alpha2ApiGetProjectMembersRequest {
    /**
     * Project ID  The project&#39;s ID.
     * @type string
     * @memberof V0alpha2ApigetProjectMembers
     */
    project_id: string
}

export interface V0alpha2ApiGetSelfServiceErrorRequest {
    /**
     * Error is the error&#39;s ID
     * @type string
     * @memberof V0alpha2ApigetSelfServiceError
     */
    id: string
}

export interface V0alpha2ApiGetSelfServiceLoginFlowRequest {
    /**
     * The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApigetSelfServiceLoginFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof V0alpha2ApigetSelfServiceLoginFlow
     */
    Cookie?: string
}

export interface V0alpha2ApiGetSelfServiceRecoveryFlowRequest {
    /**
     * The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApigetSelfServiceRecoveryFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof V0alpha2ApigetSelfServiceRecoveryFlow
     */
    Cookie?: string
}

export interface V0alpha2ApiGetSelfServiceRegistrationFlowRequest {
    /**
     * The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApigetSelfServiceRegistrationFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof V0alpha2ApigetSelfServiceRegistrationFlow
     */
    Cookie?: string
}

export interface V0alpha2ApiGetSelfServiceSettingsFlowRequest {
    /**
     * ID is the Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApigetSelfServiceSettingsFlow
     */
    id: string
    /**
     * The Session Token  When using the SDK in an app without a browser, please include the session token here.
     * @type string
     * @memberof V0alpha2ApigetSelfServiceSettingsFlow
     */
    X_Session_Token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof V0alpha2ApigetSelfServiceSettingsFlow
     */
    Cookie?: string
}

export interface V0alpha2ApiGetSelfServiceVerificationFlowRequest {
    /**
     * The Flow ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApigetSelfServiceVerificationFlow
     */
    id: string
    /**
     * HTTP Cookies  When using the SDK on the server side you must include the HTTP Cookie Header originally sent to your HTTP handler here.
     * @type string
     * @memberof V0alpha2ApigetSelfServiceVerificationFlow
     */
    cookie?: string
}

export interface V0alpha2ApiGetWebAuthnJavaScriptRequest {
}

export interface V0alpha2ApiInitializeSelfServiceLoginFlowForBrowsersRequest {
    /**
     * Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @type boolean
     * @memberof V0alpha2ApiinitializeSelfServiceLoginFlowForBrowsers
     */
    refresh?: boolean
    /**
     * Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @type string
     * @memberof V0alpha2ApiinitializeSelfServiceLoginFlowForBrowsers
     */
    aal?: string
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof V0alpha2ApiinitializeSelfServiceLoginFlowForBrowsers
     */
    return_to?: string
}

export interface V0alpha2ApiInitializeSelfServiceLoginFlowWithoutBrowserRequest {
    /**
     * Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
     * @type boolean
     * @memberof V0alpha2ApiinitializeSelfServiceLoginFlowWithoutBrowser
     */
    refresh?: boolean
    /**
     * Request a Specific AuthenticationMethod Assurance Level  Use this parameter to upgrade an existing session&#39;s authenticator assurance level (AAL). This allows you to ask for multi-factor authentication. When an identity sign in using e.g. username+password, the AAL is 1. If you wish to \&quot;upgrade\&quot; the session&#39;s security by asking the user to perform TOTP / WebAuth/ ... you would set this to \&quot;aal2\&quot;.
     * @type string
     * @memberof V0alpha2ApiinitializeSelfServiceLoginFlowWithoutBrowser
     */
    aal?: string
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof V0alpha2ApiinitializeSelfServiceLoginFlowWithoutBrowser
     */
    X_Session_Token?: string
}

export interface V0alpha2ApiInitializeSelfServiceRecoveryFlowForBrowsersRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof V0alpha2ApiinitializeSelfServiceRecoveryFlowForBrowsers
     */
    return_to?: string
}

export interface V0alpha2ApiInitializeSelfServiceRecoveryFlowWithoutBrowserRequest {
}

export interface V0alpha2ApiInitializeSelfServiceRegistrationFlowForBrowsersRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof V0alpha2ApiinitializeSelfServiceRegistrationFlowForBrowsers
     */
    return_to?: string
}

export interface V0alpha2ApiInitializeSelfServiceRegistrationFlowWithoutBrowserRequest {
}

export interface V0alpha2ApiInitializeSelfServiceSettingsFlowForBrowsersRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof V0alpha2ApiinitializeSelfServiceSettingsFlowForBrowsers
     */
    return_to?: string
}

export interface V0alpha2ApiInitializeSelfServiceSettingsFlowWithoutBrowserRequest {
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof V0alpha2ApiinitializeSelfServiceSettingsFlowWithoutBrowser
     */
    X_Session_Token?: string
}

export interface V0alpha2ApiInitializeSelfServiceVerificationFlowForBrowsersRequest {
    /**
     * The URL to return the browser to after the flow was completed.
     * @type string
     * @memberof V0alpha2ApiinitializeSelfServiceVerificationFlowForBrowsers
     */
    return_to?: string
}

export interface V0alpha2ApiInitializeSelfServiceVerificationFlowWithoutBrowserRequest {
}

export interface V0alpha2ApiListIdentitySchemasRequest {
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof V0alpha2ApilistIdentitySchemas
     */
    per_page?: number
    /**
     * Pagination Page
     * @type number
     * @memberof V0alpha2ApilistIdentitySchemas
     */
    page?: number
}

export interface V0alpha2ApiListProjectsRequest {
}

export interface V0alpha2ApiListSessionsRequest {
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof V0alpha2ApilistSessions
     */
    X_Session_Token?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof V0alpha2ApilistSessions
     */
    Cookie?: string
    /**
     * Items per Page  This is the number of items per page.
     * @type number
     * @memberof V0alpha2ApilistSessions
     */
    per_page?: number
    /**
     * Pagination Page
     * @type number
     * @memberof V0alpha2ApilistSessions
     */
    page?: number
}

export interface V0alpha2ApiPatchProjectRequest {
    /**
     * Project ID  The project&#39;s ID.
     * @type string
     * @memberof V0alpha2ApipatchProject
     */
    project_id: string
    /**
     * 
     * @type Array&lt;JsonPatch&gt;
     * @memberof V0alpha2ApipatchProject
     */
    JsonPatch?: Array<JsonPatch>
}

export interface V0alpha2ApiPurgeProjectRequest {
    /**
     * Project ID  The project&#39;s ID.
     * @type string
     * @memberof V0alpha2ApipurgeProject
     */
    project_id: string
}

export interface V0alpha2ApiRemoveProjectMemberRequest {
    /**
     * Project ID  The project&#39;s ID.
     * @type string
     * @memberof V0alpha2ApiremoveProjectMember
     */
    project_id: string
    /**
     * Member ID
     * @type string
     * @memberof V0alpha2ApiremoveProjectMember
     */
    member_id: string
}

export interface V0alpha2ApiRevokeSessionRequest {
    /**
     * ID is the session&#39;s ID.
     * @type string
     * @memberof V0alpha2ApirevokeSession
     */
    id: string
}

export interface V0alpha2ApiRevokeSessionsRequest {
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof V0alpha2ApirevokeSessions
     */
    X_Session_Token?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof V0alpha2ApirevokeSessions
     */
    Cookie?: string
}

export interface V0alpha2ApiSubmitSelfServiceLoginFlowRequest {
    /**
     * The Login Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceLoginFlow
     */
    flow: string
    /**
     * 
     * @type SubmitSelfServiceLoginFlowBody
     * @memberof V0alpha2ApisubmitSelfServiceLoginFlow
     */
    SubmitSelfServiceLoginFlowBody: SubmitSelfServiceLoginFlowBody
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceLoginFlow
     */
    X_Session_Token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceLoginFlow
     */
    Cookie?: string
}

export interface V0alpha2ApiSubmitSelfServiceLogoutFlowRequest {
    /**
     * A Valid Logout Token  If you do not have a logout token because you only have a session cookie, call &#x60;/self-service/logout/urls&#x60; to generate a URL for this endpoint.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceLogoutFlow
     */
    token?: string
    /**
     * The URL to return to after the logout was completed.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceLogoutFlow
     */
    return_to?: string
}

export interface V0alpha2ApiSubmitSelfServiceLogoutFlowWithoutBrowserRequest {
    /**
     * 
     * @type SubmitSelfServiceLogoutFlowWithoutBrowserBody
     * @memberof V0alpha2ApisubmitSelfServiceLogoutFlowWithoutBrowser
     */
    SubmitSelfServiceLogoutFlowWithoutBrowserBody: SubmitSelfServiceLogoutFlowWithoutBrowserBody
}

export interface V0alpha2ApiSubmitSelfServiceRecoveryFlowRequest {
    /**
     * The Recovery Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/recovery?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceRecoveryFlow
     */
    flow: string
    /**
     * 
     * @type SubmitSelfServiceRecoveryFlowBody
     * @memberof V0alpha2ApisubmitSelfServiceRecoveryFlow
     */
    SubmitSelfServiceRecoveryFlowBody: SubmitSelfServiceRecoveryFlowBody
    /**
     * Recovery Token  The recovery token which completes the recovery request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceRecoveryFlow
     */
    token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceRecoveryFlow
     */
    Cookie?: string
}

export interface V0alpha2ApiSubmitSelfServiceRegistrationFlowRequest {
    /**
     * The Registration Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceRegistrationFlow
     */
    flow: string
    /**
     * 
     * @type SubmitSelfServiceRegistrationFlowBody
     * @memberof V0alpha2ApisubmitSelfServiceRegistrationFlow
     */
    SubmitSelfServiceRegistrationFlowBody: SubmitSelfServiceRegistrationFlowBody
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceRegistrationFlow
     */
    Cookie?: string
}

export interface V0alpha2ApiSubmitSelfServiceSettingsFlowRequest {
    /**
     * The Settings Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/settings?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceSettingsFlow
     */
    flow: string
    /**
     * 
     * @type SubmitSelfServiceSettingsFlowBody
     * @memberof V0alpha2ApisubmitSelfServiceSettingsFlow
     */
    SubmitSelfServiceSettingsFlowBody: SubmitSelfServiceSettingsFlowBody
    /**
     * The Session Token of the Identity performing the settings flow.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceSettingsFlow
     */
    X_Session_Token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceSettingsFlow
     */
    Cookie?: string
}

export interface V0alpha2ApiSubmitSelfServiceVerificationFlowRequest {
    /**
     * The Verification Flow ID  The value for this parameter comes from &#x60;flow&#x60; URL Query parameter sent to your application (e.g. &#x60;/verification?flow&#x3D;abcde&#x60;).
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceVerificationFlow
     */
    flow: string
    /**
     * 
     * @type SubmitSelfServiceVerificationFlowBody
     * @memberof V0alpha2ApisubmitSelfServiceVerificationFlow
     */
    SubmitSelfServiceVerificationFlowBody: SubmitSelfServiceVerificationFlowBody
    /**
     * Verification Token  The verification token which completes the verification request. If the token is invalid (e.g. expired) an error will be shown to the end-user.  This parameter is usually set in a link and not used by any direct API call.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceVerificationFlow
     */
    token?: string
    /**
     * HTTP Cookies  When using the SDK in a browser app, on the server side you must include the HTTP Cookie Header sent by the client to your server here. This ensures that CSRF and session cookies are respected.
     * @type string
     * @memberof V0alpha2ApisubmitSelfServiceVerificationFlow
     */
    Cookie?: string
}

export interface V0alpha2ApiToSessionRequest {
    /**
     * Set the Session Token when calling from non-browser clients. A session token has a format of &#x60;MP2YWEMeM8MxjkGKpH4dqOQ4Q4DlSPaj&#x60;.
     * @type string
     * @memberof V0alpha2ApitoSession
     */
    X_Session_Token?: string
    /**
     * Set the Cookie Header. This is especially useful when calling this endpoint from a server-side application. In that scenario you must include the HTTP Cookie Header which originally was included in the request to your server. An example of a session in the HTTP Cookie Header is: &#x60;ory_kratos_session&#x3D;a19iOVAbdzdgl70Rq1QZmrKmcjDtdsviCTZx7m9a9yHIUS8Wa9T7hvqyGTsLHi6Qifn2WUfpAKx9DWp0SJGleIn9vh2YF4A16id93kXFTgIgmwIOvbVAScyrx7yVl6bPZnCx27ec4WQDtaTewC1CpgudeDV2jQQnSaCP6ny3xa8qLH-QUgYqdQuoA_LF1phxgRCUfIrCLQOkolX5nv3ze_f&#x3D;&#x3D;&#x60;.  It is ok if more than one cookie are included here as all other cookies will be ignored.
     * @type string
     * @memberof V0alpha2ApitoSession
     */
    Cookie?: string
}

export interface V0alpha2ApiUpdateProjectRequest {
    /**
     * Project ID  The project&#39;s ID.
     * @type string
     * @memberof V0alpha2ApiupdateProject
     */
    project_id: string
    /**
     * 
     * @type UpdateProject
     * @memberof V0alpha2ApiupdateProject
     */
    UpdateProject?: UpdateProject
}

export class ObjectV0alpha2Api {
    private api: ObservableV0alpha2Api

    public constructor(configuration: Configuration, requestFactory?: V0alpha2ApiRequestFactory, responseProcessor?: V0alpha2ApiResponseProcessor) {
        this.api = new ObservableV0alpha2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint creates an identity. Learn how identities work in [Ory Kratos' User And Identity Model Documentation](https://www.ory.sh/docs/next/kratos/concepts/identity-user-model).
     * Create an Identity
     * @param param the request object
     */
    public adminCreateIdentity(param: V0alpha2ApiAdminCreateIdentityRequest = {}, options?: Configuration): Promise<Identity> {
        return this.api.adminCreateIdentity(param.AdminCreateIdentityBody,  options).toPromise();
    }

    /**
     * This endpoint creates a recovery link which should be given to the user in order for them to recover (or activate) their account.
     * Create a Recovery Link
     * @param param the request object
     */
    public adminCreateSelfServiceRecoveryLink(param: V0alpha2ApiAdminCreateSelfServiceRecoveryLinkRequest = {}, options?: Configuration): Promise<SelfServiceRecoveryLink> {
        return this.api.adminCreateSelfServiceRecoveryLink(param.AdminCreateSelfServiceRecoveryLinkBody,  options).toPromise();
    }

    /**
     * Calling this endpoint irrecoverably and permanently deletes the identity given its ID. This action can not be undone. This endpoint returns 204 when the identity was deleted or when the identity was not found, in which case it is assumed that is has been deleted already.  Learn how identities work in [Ory Kratos' User And Identity Model Documentation](https://www.ory.sh/docs/next/kratos/concepts/identity-user-model).
     * Delete an Identity
     * @param param the request object
     */
    public adminDeleteIdentity(param: V0alpha2ApiAdminDeleteIdentityRequest, options?: Configuration): Promise<void> {
        return this.api.adminDeleteIdentity(param.id,  options).toPromise();
    }

    /**
     * This endpoint is useful for:  To forcefully logout Identity from all devices and sessions
     * Calling this endpoint irrecoverably and permanently deletes and invalidates all sessions that belong to the given Identity.
     * @param param the request object
     */
    public adminDeleteIdentitySessions(param: V0alpha2ApiAdminDeleteIdentitySessionsRequest, options?: Configuration): Promise<void> {
        return this.api.adminDeleteIdentitySessions(param.id,  options).toPromise();
    }

    /**
     * Retrieve the session ID from the `/sessions/whoami` endpoint / `toSession` SDK method.
     * Calling this endpoint extends the given session ID. If `session.earliest_possible_extend` is set it will only extend the session after the specified time has passed.
     * @param param the request object
     */
    public adminExtendSession(param: V0alpha2ApiAdminExtendSessionRequest, options?: Configuration): Promise<Session> {
        return this.api.adminExtendSession(param.id,  options).toPromise();
    }

    /**
     * Learn how identities work in [Ory Kratos' User And Identity Model Documentation](https://www.ory.sh/docs/next/kratos/concepts/identity-user-model).
     * Get an Identity
     * @param param the request object
     */
    public adminGetIdentity(param: V0alpha2ApiAdminGetIdentityRequest, options?: Configuration): Promise<Identity> {
        return this.api.adminGetIdentity(param.id, param.include_credential,  options).toPromise();
    }

    /**
     * Lists all identities. Does not support search at the moment.  Learn how identities work in [Ory Kratos' User And Identity Model Documentation](https://www.ory.sh/docs/next/kratos/concepts/identity-user-model).
     * List Identities
     * @param param the request object
     */
    public adminListIdentities(param: V0alpha2ApiAdminListIdentitiesRequest = {}, options?: Configuration): Promise<Array<Identity>> {
        return this.api.adminListIdentities(param.per_page, param.page,  options).toPromise();
    }

    /**
     * This endpoint is useful for:  Listing all sessions that belong to an Identity in an administrative context.
     * This endpoint returns all sessions that belong to the given Identity.
     * @param param the request object
     */
    public adminListIdentitySessions(param: V0alpha2ApiAdminListIdentitySessionsRequest, options?: Configuration): Promise<Array<Session>> {
        return this.api.adminListIdentitySessions(param.id, param.per_page, param.page, param.active,  options).toPromise();
    }

    /**
     * This endpoint updates an identity. The full identity payload (except credentials) is expected. This endpoint does not support patching.  Learn how identities work in [Ory Kratos' User And Identity Model Documentation](https://www.ory.sh/docs/next/kratos/concepts/identity-user-model).
     * Update an Identity
     * @param param the request object
     */
    public adminUpdateIdentity(param: V0alpha2ApiAdminUpdateIdentityRequest, options?: Configuration): Promise<Identity> {
        return this.api.adminUpdateIdentity(param.id, param.AdminUpdateIdentityBody,  options).toPromise();
    }

    /**
     * Creates a new project.
     * Create a Project
     * @param param the request object
     */
    public createProject(param: V0alpha2ApiCreateProjectRequest = {}, options?: Configuration): Promise<Project> {
        return this.api.createProject(param.CreateProjectBody,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user logout flow and a URL which can be used to log out the user.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  The URL is only valid for the currently signed in user. If no user is signed in, this endpoint returns a 401 error.  When calling this endpoint from a backend, please ensure to properly forward the HTTP cookies.
     * Create a Logout URL for Browsers
     * @param param the request object
     */
    public createSelfServiceLogoutFlowUrlForBrowsers(param: V0alpha2ApiCreateSelfServiceLogoutFlowUrlForBrowsersRequest = {}, options?: Configuration): Promise<SelfServiceLogoutUrl> {
        return this.api.createSelfServiceLogoutFlowUrlForBrowsers(param.cookie,  options).toPromise();
    }

    /**
     * Get a JSON Schema
     * @param param the request object
     */
    public getJsonSchema(param: V0alpha2ApiGetJsonSchemaRequest, options?: Configuration): Promise<any> {
        return this.api.getJsonSchema(param.id,  options).toPromise();
    }

    /**
     * Get a projects you have access to by its ID.
     * Get a Project
     * @param param the request object
     */
    public getProject(param: V0alpha2ApiGetProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.getProject(param.project_id,  options).toPromise();
    }

    /**
     * This endpoint requires the user to be a member of the project with the role `OWNER` or `DEVELOPER`.
     * Get all members associated with this project.
     * @param param the request object
     */
    public getProjectMembers(param: V0alpha2ApiGetProjectMembersRequest, options?: Configuration): Promise<Array<CloudAccount>> {
        return this.api.getProjectMembers(param.project_id,  options).toPromise();
    }

    /**
     * This endpoint returns the error associated with a user-facing self service errors.  This endpoint supports stub values to help you implement the error UI:  `?id=stub:500` - returns a stub 500 (Internal Server Error) error.  More information can be found at [Ory Kratos User User Facing Error Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-facing-errors).
     * Get Self-Service Errors
     * @param param the request object
     */
    public getSelfServiceError(param: V0alpha2ApiGetSelfServiceErrorRequest, options?: Configuration): Promise<SelfServiceError> {
        return this.api.getSelfServiceError(param.id,  options).toPromise();
    }

    /**
     * This endpoint returns a login flow's context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get('/login', async function (req, res) { const flow = await client.getSelfServiceLoginFlow(req.header('cookie'), req.query['flow'])  res.render('login', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Login Flow
     * @param param the request object
     */
    public getSelfServiceLoginFlow(param: V0alpha2ApiGetSelfServiceLoginFlowRequest, options?: Configuration): Promise<SelfServiceLoginFlow> {
        return this.api.getSelfServiceLoginFlow(param.id, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoint returns a recovery flow's context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get('/recovery', async function (req, res) { const flow = await client.getSelfServiceRecoveryFlow(req.header('Cookie'), req.query['flow'])  res.render('recovery', flow) }) ```  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Get Recovery Flow
     * @param param the request object
     */
    public getSelfServiceRecoveryFlow(param: V0alpha2ApiGetSelfServiceRecoveryFlowRequest, options?: Configuration): Promise<SelfServiceRecoveryFlow> {
        return this.api.getSelfServiceRecoveryFlow(param.id, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoint returns a registration flow's context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get('/registration', async function (req, res) { const flow = await client.getSelfServiceRegistrationFlow(req.header('cookie'), req.query['flow'])  res.render('registration', flow) }) ```  This request may fail due to several reasons. The `error.id` can be one of:  `session_already_available`: The user is already signed in. `self_service_flow_expired`: The flow is expired and you should request a new one.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get Registration Flow
     * @param param the request object
     */
    public getSelfServiceRegistrationFlow(param: V0alpha2ApiGetSelfServiceRegistrationFlowRequest, options?: Configuration): Promise<SelfServiceRegistrationFlow> {
        return this.api.getSelfServiceRegistrationFlow(param.id, param.Cookie,  options).toPromise();
    }

    /**
     * When accessing this endpoint through Ory Kratos' Public API you must ensure that either the Ory Kratos Session Cookie or the Ory Kratos Session Token are set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  You can access this endpoint without credentials when using Ory Kratos' Admin API.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Get Settings Flow
     * @param param the request object
     */
    public getSelfServiceSettingsFlow(param: V0alpha2ApiGetSelfServiceSettingsFlowRequest, options?: Configuration): Promise<SelfServiceSettingsFlow> {
        return this.api.getSelfServiceSettingsFlow(param.id, param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoint returns a verification flow's context with, for example, error details and other information.  Browser flows expect the anti-CSRF cookie to be included in the request's HTTP Cookie Header. For AJAX requests you must ensure that cookies are included in the request or requests will fail.  If you use the browser-flow for server-side apps, the services need to run on a common top-level-domain and you need to forward the incoming HTTP Cookie header to this endpoint:  ```js pseudo-code example router.get('/recovery', async function (req, res) { const flow = await client.getSelfServiceVerificationFlow(req.header('cookie'), req.query['flow'])  res.render('verification', flow) })  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/selfservice/flows/verify-email-account-activation).
     * Get Verification Flow
     * @param param the request object
     */
    public getSelfServiceVerificationFlow(param: V0alpha2ApiGetSelfServiceVerificationFlowRequest, options?: Configuration): Promise<SelfServiceVerificationFlow> {
        return this.api.getSelfServiceVerificationFlow(param.id, param.cookie,  options).toPromise();
    }

    /**
     * This endpoint provides JavaScript which is needed in order to perform WebAuthn login and registration.  If you are building a JavaScript Browser App (e.g. in ReactJS or AngularJS) you will need to load this file:  ```html <script src=\"https://public-kratos.example.org/.well-known/ory/webauthn.js\" type=\"script\" async /> ```  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Get WebAuthn JavaScript
     * @param param the request object
     */
    public getWebAuthnJavaScript(param: V0alpha2ApiGetWebAuthnJavaScriptRequest = {}, options?: Configuration): Promise<string> {
        return this.api.getWebAuthnJavaScript( options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user login flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.login.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url` unless the query parameter `?refresh=true` was set.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Initialize Login Flow for Browsers
     * @param param the request object
     */
    public initializeSelfServiceLoginFlowForBrowsers(param: V0alpha2ApiInitializeSelfServiceLoginFlowForBrowsersRequest = {}, options?: Configuration): Promise<SelfServiceLoginFlow> {
        return this.api.initializeSelfServiceLoginFlowForBrowsers(param.refresh, param.aal, param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initiates a login flow for API clients that do not use a browser, such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing login flow call `/self-service/login/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks, including CSRF login attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `session_aal1_required`: Multi-factor auth (e.g. 2fa) was requested but the user has no session yet. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Initialize Login Flow for APIs, Services, Apps, ...
     * @param param the request object
     */
    public initializeSelfServiceLoginFlowWithoutBrowser(param: V0alpha2ApiInitializeSelfServiceLoginFlowWithoutBrowserRequest = {}, options?: Configuration): Promise<SelfServiceLoginFlow> {
        return this.api.initializeSelfServiceLoginFlowWithoutBrowser(param.refresh, param.aal, param.X_Session_Token,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based account recovery flow. Once initialized, the browser will be redirected to `selfservice.flows.recovery.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists, the browser is returned to the configured return URL.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects or a 400 bad request error if the user is already authenticated.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Initialize Recovery Flow for Browsers
     * @param param the request object
     */
    public initializeSelfServiceRecoveryFlowForBrowsers(param: V0alpha2ApiInitializeSelfServiceRecoveryFlowForBrowsersRequest = {}, options?: Configuration): Promise<SelfServiceRecoveryFlow> {
        return this.api.initializeSelfServiceRecoveryFlowForBrowsers(param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initiates a recovery flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error.  To fetch an existing recovery flow call `/self-service/recovery/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).   More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Initialize Recovery Flow for APIs, Services, Apps, ...
     * @param param the request object
     */
    public initializeSelfServiceRecoveryFlowWithoutBrowser(param: V0alpha2ApiInitializeSelfServiceRecoveryFlowWithoutBrowserRequest = {}, options?: Configuration): Promise<SelfServiceRecoveryFlow> {
        return this.api.initializeSelfServiceRecoveryFlowWithoutBrowser( options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user registration flow. This endpoint will set the appropriate cookies and anti-CSRF measures required for browser-based flows.  :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.registration.ui_url` with the flow ID set as the query parameter `?flow=`. If a valid user session exists already, the browser will be redirected to `urls.default_redirect_url`.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  If this endpoint is called via an AJAX request, the response contains the registration flow without a redirect.  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Initialize Registration Flow for Browsers
     * @param param the request object
     */
    public initializeSelfServiceRegistrationFlowForBrowsers(param: V0alpha2ApiInitializeSelfServiceRegistrationFlowForBrowsersRequest = {}, options?: Configuration): Promise<SelfServiceRegistrationFlow> {
        return this.api.initializeSelfServiceRegistrationFlowForBrowsers(param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initiates a registration flow for API clients such as mobile devices, smart TVs, and so on.  If a valid provided session cookie or session token is provided, a 400 Bad Request error will be returned unless the URL query parameter `?refresh=true` is set.  To fetch an existing registration flow call `/self-service/registration/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Initialize Registration Flow for APIs, Services, Apps, ...
     * @param param the request object
     */
    public initializeSelfServiceRegistrationFlowWithoutBrowser(param: V0alpha2ApiInitializeSelfServiceRegistrationFlowWithoutBrowserRequest = {}, options?: Configuration): Promise<SelfServiceRegistrationFlow> {
        return this.api.initializeSelfServiceRegistrationFlowWithoutBrowser( options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based user settings flow. Once initialized, the browser will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid Ory Kratos Session Cookie is included in the request, a login flow will be initialized.  If this endpoint is opened as a link in the browser, it will be redirected to `selfservice.flows.settings.ui_url` with the flow ID set as the query parameter `?flow=`. If no valid user session was set, the browser will be redirected to the login endpoint.  If this endpoint is called via an AJAX request, the response contains the settings flow without any redirects or a 401 forbidden error if no valid session was set.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called via an AJAX request, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration!  This endpoint is NOT INTENDED for clients that do not have a browser (Chrome, Firefox, ...) as cookies are needed.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Initialize Settings Flow for Browsers
     * @param param the request object
     */
    public initializeSelfServiceSettingsFlowForBrowsers(param: V0alpha2ApiInitializeSelfServiceSettingsFlowForBrowsersRequest = {}, options?: Configuration): Promise<SelfServiceSettingsFlow> {
        return this.api.initializeSelfServiceSettingsFlowForBrowsers(param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initiates a settings flow for API clients such as mobile devices, smart TVs, and so on. You must provide a valid Ory Kratos Session Token for this endpoint to respond with HTTP 200 OK.  To fetch an existing settings flow call `/self-service/settings/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  In the case of an error, the `error.id` of the JSON response body can be one of:  `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Initialize Settings Flow for APIs, Services, Apps, ...
     * @param param the request object
     */
    public initializeSelfServiceSettingsFlowWithoutBrowser(param: V0alpha2ApiInitializeSelfServiceSettingsFlowWithoutBrowserRequest = {}, options?: Configuration): Promise<SelfServiceSettingsFlow> {
        return this.api.initializeSelfServiceSettingsFlowWithoutBrowser(param.X_Session_Token,  options).toPromise();
    }

    /**
     * This endpoint initializes a browser-based account verification flow. Once initialized, the browser will be redirected to `selfservice.flows.verification.ui_url` with the flow ID set as the query parameter `?flow=`.  If this endpoint is called via an AJAX request, the response contains the recovery flow without any redirects.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/selfservice/flows/verify-email-account-activation).
     * Initialize Verification Flow for Browser Clients
     * @param param the request object
     */
    public initializeSelfServiceVerificationFlowForBrowsers(param: V0alpha2ApiInitializeSelfServiceVerificationFlowForBrowsersRequest = {}, options?: Configuration): Promise<SelfServiceVerificationFlow> {
        return this.api.initializeSelfServiceVerificationFlowForBrowsers(param.return_to,  options).toPromise();
    }

    /**
     * This endpoint initiates a verification flow for API clients such as mobile devices, smart TVs, and so on.  To fetch an existing verification flow call `/self-service/verification/flows?flow=<flow_id>`.  You MUST NOT use this endpoint in client-side (Single Page Apps, ReactJS, AngularJS) nor server-side (Java Server Pages, NodeJS, PHP, Golang, ...) browser applications. Using this endpoint in these applications will make you vulnerable to a variety of CSRF attacks.  This endpoint MUST ONLY be used in scenarios such as native mobile apps (React Native, Objective C, Swift, Java, ...).  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/selfservice/flows/verify-email-account-activation).
     * Initialize Verification Flow for APIs, Services, Apps, ...
     * @param param the request object
     */
    public initializeSelfServiceVerificationFlowWithoutBrowser(param: V0alpha2ApiInitializeSelfServiceVerificationFlowWithoutBrowserRequest = {}, options?: Configuration): Promise<SelfServiceVerificationFlow> {
        return this.api.initializeSelfServiceVerificationFlowWithoutBrowser( options).toPromise();
    }

    /**
     * Get all Identity Schemas
     * @param param the request object
     */
    public listIdentitySchemas(param: V0alpha2ApiListIdentitySchemasRequest = {}, options?: Configuration): Promise<Array<IdentitySchema>> {
        return this.api.listIdentitySchemas(param.per_page, param.page,  options).toPromise();
    }

    /**
     * Lists all projects you have access to.
     * List All Projects
     * @param param the request object
     */
    public listProjects(param: V0alpha2ApiListProjectsRequest = {}, options?: Configuration): Promise<Array<ProjectMetadata>> {
        return this.api.listProjects( options).toPromise();
    }

    /**
     * This endpoint is useful for:  Displaying all other sessions that belong to the logged-in user
     * This endpoints returns all other active sessions that belong to the logged-in user. The current session can be retrieved by calling the `/sessions/whoami` endpoint.
     * @param param the request object
     */
    public listSessions(param: V0alpha2ApiListSessionsRequest = {}, options?: Configuration): Promise<Array<Session>> {
        return this.api.listSessions(param.X_Session_Token, param.Cookie, param.per_page, param.page,  options).toPromise();
    }

    /**
     * This endpoints allows you to patch individual Ory Cloud Project configuration keys for Ory's services (identity, permission, ...). The configuration format is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to Ory Cloud, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.
     * Patch an Ory Cloud Project Configuration
     * @param param the request object
     */
    public patchProject(param: V0alpha2ApiPatchProjectRequest, options?: Configuration): Promise<SuccessfulProjectUpdate> {
        return this.api.patchProject(param.project_id, param.JsonPatch,  options).toPromise();
    }

    /**
     * !! Use with extreme caution !!  Using this API endpoint you can purge (completely delete) a project and its data. This action can not be undone and will delete ALL your data.  !! Use with extreme caution !!
     * Irrecoverably Purge a Project
     * @param param the request object
     */
    public purgeProject(param: V0alpha2ApiPurgeProjectRequest, options?: Configuration): Promise<void> {
        return this.api.purgeProject(param.project_id,  options).toPromise();
    }

    /**
     * This endpoint requires the user to be a member of the project with the role `OWNER`.
     * Remove a member associated with this project. This also sets their invite status to `REMOVED`.
     * @param param the request object
     */
    public removeProjectMember(param: V0alpha2ApiRemoveProjectMemberRequest, options?: Configuration): Promise<void> {
        return this.api.removeProjectMember(param.project_id, param.member_id,  options).toPromise();
    }

    /**
     * This endpoint is useful for:  To forcefully logout the current user from another device or session
     * Calling this endpoint invalidates the specified session. The current session cannot be revoked. Session data are not deleted.
     * @param param the request object
     */
    public revokeSession(param: V0alpha2ApiRevokeSessionRequest, options?: Configuration): Promise<void> {
        return this.api.revokeSession(param.id,  options).toPromise();
    }

    /**
     * This endpoint is useful for:  To forcefully logout the current user from all other devices and sessions
     * Calling this endpoint invalidates all except the current session that belong to the logged-in user. Session data are not deleted.
     * @param param the request object
     */
    public revokeSessions(param: V0alpha2ApiRevokeSessionsRequest = {}, options?: Configuration): Promise<RevokedSessions> {
        return this.api.revokeSessions(param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * :::info  This endpoint is EXPERIMENTAL and subject to potential breaking changes in the future.  :::  Use this endpoint to complete a login flow. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and responds with HTTP 200 and a application/json body with the session token on success; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after login URL or the `return_to` value if it was set and if the login succeeded; a HTTP 303 redirect to the login UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Submit a Login Flow
     * @param param the request object
     */
    public submitSelfServiceLoginFlow(param: V0alpha2ApiSubmitSelfServiceLoginFlowRequest, options?: Configuration): Promise<SuccessfulSelfServiceLoginWithoutBrowser> {
        return this.api.submitSelfServiceLoginFlow(param.flow, param.SubmitSelfServiceLoginFlowBody, param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoint logs out an identity in a self-service manner.  If the `Accept` HTTP header is not set to `application/json`, the browser will be redirected (HTTP 303 See Other) to the `return_to` parameter of the initial request or fall back to `urls.default_return_to`.  If the `Accept` HTTP header is set to `application/json`, a 204 No Content response will be sent on successful logout instead.  This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...). For API clients you can call the `/self-service/logout/api` URL directly with the Ory Session Token.  More information can be found at [Ory Kratos User Logout Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-logout).
     * Complete Self-Service Logout
     * @param param the request object
     */
    public submitSelfServiceLogoutFlow(param: V0alpha2ApiSubmitSelfServiceLogoutFlowRequest = {}, options?: Configuration): Promise<void> {
        return this.api.submitSelfServiceLogoutFlow(param.token, param.return_to,  options).toPromise();
    }

    /**
     * Use this endpoint to log out an identity using an Ory Session Token. If the Ory Session Token was successfully revoked, the server returns a 204 No Content response. A 204 No Content response is also sent when the Ory Session Token has been revoked already before.  If the Ory Session Token is malformed or does not exist a 403 Forbidden response will be returned.  This endpoint does not remove any HTTP Cookies - use the Browser-Based Self-Service Logout Flow instead.
     * Perform Logout for APIs, Services, Apps, ...
     * @param param the request object
     */
    public submitSelfServiceLogoutFlowWithoutBrowser(param: V0alpha2ApiSubmitSelfServiceLogoutFlowWithoutBrowserRequest, options?: Configuration): Promise<void> {
        return this.api.submitSelfServiceLogoutFlowWithoutBrowser(param.SubmitSelfServiceLogoutFlowWithoutBrowserBody,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a recovery flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid. and a HTTP 303 See Other redirect with a fresh recovery flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Recovery UI URL with the Recovery Flow ID appended. `sent_email` is the success state after `choose_method` for the `link` method and allows the user to request another recovery email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a recovery link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Recover UI URL with a new Recovery Flow ID which contains an error message that the recovery link was invalid.  More information can be found at [Ory Kratos Account Recovery Documentation](../self-service/flows/account-recovery).
     * Complete Recovery Flow
     * @param param the request object
     */
    public submitSelfServiceRecoveryFlow(param: V0alpha2ApiSubmitSelfServiceRecoveryFlowRequest, options?: Configuration): Promise<SelfServiceRecoveryFlow> {
        return this.api.submitSelfServiceRecoveryFlow(param.flow, param.SubmitSelfServiceRecoveryFlowBody, param.token, param.Cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a registration flow by sending an identity's traits and password. This endpoint behaves differently for API and browser flows.  API flows expect `application/json` to be sent in the body and respond with HTTP 200 and a application/json body with the created identity success - if the session hook is configured the `session` and `session_token` will also be included; HTTP 410 if the original flow expired with the appropriate error messages set and optionally a `use_flow_id` parameter in the body; HTTP 400 on form validation errors.  Browser flows expect a Content-Type of `application/x-www-form-urlencoded` or `application/json` to be sent in the body and respond with a HTTP 303 redirect to the post/after registration URL or the `return_to` value if it was set and if the registration succeeded; a HTTP 303 redirect to the registration UI URL with the flow ID containing the validation errors otherwise.  Browser flows with an accept header of `application/json` will not redirect but instead respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors.  If this endpoint is called with `Accept: application/json` in the header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_already_available`: The user is already signed in. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Login](https://www.ory.sh/docs/kratos/self-service/flows/user-login) and [User Registration Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-registration).
     * Submit a Registration Flow
     * @param param the request object
     */
    public submitSelfServiceRegistrationFlow(param: V0alpha2ApiSubmitSelfServiceRegistrationFlowRequest, options?: Configuration): Promise<SuccessfulSelfServiceRegistrationWithoutBrowser> {
        return this.api.submitSelfServiceRegistrationFlow(param.flow, param.SubmitSelfServiceRegistrationFlowBody, param.Cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a settings flow by sending an identity's updated password. This endpoint behaves differently for API and browser flows.  API-initiated flows expect `application/json` to be sent in the body and respond with HTTP 200 and an application/json body with the session token on success; HTTP 303 redirect to a fresh settings flow if the original flow expired with the appropriate error messages set; HTTP 400 on form validation errors. HTTP 401 when the endpoint is called without a valid session token. HTTP 403 when `selfservice.flows.settings.privileged_session_max_age` was reached or the session's AAL is too low. Implies that the user needs to re-authenticate.  Browser flows without HTTP Header `Accept` or with `Accept: text/_*` respond with a HTTP 303 redirect to the post/after settings URL or the `return_to` value if it was set and if the flow succeeded; a HTTP 303 redirect to the Settings UI URL with the flow ID containing the validation errors otherwise. a HTTP 303 redirect to the login endpoint when `selfservice.flows.settings.privileged_session_max_age` was reached or the session's AAL is too low.  Browser flows with HTTP Header `Accept: application/json` respond with HTTP 200 and a application/json body with the signed in identity and a `Set-Cookie` header on success; HTTP 303 redirect to a fresh login flow if the original flow expired with the appropriate error messages set; HTTP 401 when the endpoint is called without a valid session cookie. HTTP 403 when the page is accessed without a session cookie or the session's AAL is too low. HTTP 400 on form validation errors.  Depending on your configuration this endpoint might return a 403 error if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor (happens automatically for server-side browser flows) or change the configuration.  If this endpoint is called with a `Accept: application/json` HTTP header, the response contains the flow without a redirect. In the case of an error, the `error.id` of the JSON response body can be one of:  `session_refresh_required`: The identity requested to change something that needs a privileged session. Redirect the identity to the login init endpoint with query parameters `?refresh=true&return_to=<the-current-browser-url>`, or initiate a refresh login flow otherwise. `security_csrf_violation`: Unable to fetch the flow because a CSRF violation occurred. `session_inactive`: No Ory Session was found - sign in a user first. `security_identity_mismatch`: The flow was interrupted with `session_refresh_required` but apparently some other identity logged in instead. `security_identity_mismatch`: The requested `?return_to` address is not allowed to be used. Adjust this in the configuration! `browser_location_change_required`: Usually sent when an AJAX request indicates that the browser needs to open a specific URL. Most likely used in Social Sign In flows.  More information can be found at [Ory Kratos User Settings & Profile Management Documentation](../self-service/flows/user-settings).
     * Complete Settings Flow
     * @param param the request object
     */
    public submitSelfServiceSettingsFlow(param: V0alpha2ApiSubmitSelfServiceSettingsFlowRequest, options?: Configuration): Promise<SelfServiceSettingsFlow> {
        return this.api.submitSelfServiceSettingsFlow(param.flow, param.SubmitSelfServiceSettingsFlowBody, param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * Use this endpoint to complete a verification flow. This endpoint behaves differently for API and browser flows and has several states:  `choose_method` expects `flow` (in the URL query) and `email` (in the body) to be sent and works with API- and Browser-initiated flows. For API clients and Browser clients with HTTP Header `Accept: application/json` it either returns a HTTP 200 OK when the form is valid and HTTP 400 OK when the form is invalid and a HTTP 303 See Other redirect with a fresh verification flow if the flow was otherwise invalid (e.g. expired). For Browser clients without HTTP Header `Accept` or with `Accept: text/_*` it returns a HTTP 303 See Other redirect to the Verification UI URL with the Verification Flow ID appended. `sent_email` is the success state after `choose_method` when using the `link` method and allows the user to request another verification email. It works for both API and Browser-initiated flows and returns the same responses as the flow in `choose_method` state. `passed_challenge` expects a `token` to be sent in the URL query and given the nature of the flow (\"sending a verification link\") does not have any API capabilities. The server responds with a HTTP 303 See Other redirect either to the Settings UI URL (if the link was valid) and instructs the user to update their password, or a redirect to the Verification UI URL with a new Verification Flow ID which contains an error message that the verification link was invalid.  More information can be found at [Ory Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/selfservice/flows/verify-email-account-activation).
     * Complete Verification Flow
     * @param param the request object
     */
    public submitSelfServiceVerificationFlow(param: V0alpha2ApiSubmitSelfServiceVerificationFlowRequest, options?: Configuration): Promise<SelfServiceVerificationFlow> {
        return this.api.submitSelfServiceVerificationFlow(param.flow, param.SubmitSelfServiceVerificationFlowBody, param.token, param.Cookie,  options).toPromise();
    }

    /**
     * Uses the HTTP Headers in the GET request to determine (e.g. by using checking the cookies) who is authenticated. Returns a session object in the body or 401 if the credentials are invalid or no credentials were sent. Additionally when the request it successful it adds the user ID to the 'X-Kratos-Authenticated-Identity-Id' header in the response.  If you call this endpoint from a server-side application, you must forward the HTTP Cookie Header to this endpoint:  ```js pseudo-code example router.get('/protected-endpoint', async function (req, res) { const session = await client.toSession(undefined, req.header('cookie'))  console.log(session) }) ```  When calling this endpoint from a non-browser application (e.g. mobile app) you must include the session token:  ```js pseudo-code example ... const session = await client.toSession(\"the-session-token\")  console.log(session) ```  Depending on your configuration this endpoint might return a 403 status code if the session has a lower Authenticator Assurance Level (AAL) than is possible for the identity. This can happen if the identity has password + webauthn credentials (which would result in AAL2) but the session has only AAL1. If this error occurs, ask the user to sign in with the second factor or change the configuration.  This endpoint is useful for:  AJAX calls. Remember to send credentials and set up CORS correctly! Reverse proxies and API Gateways Server-side calls - use the `X-Session-Token` header!  This endpoint authenticates users by checking  if the `Cookie` HTTP header was set containing an Ory Kratos Session Cookie; if the `Authorization: bearer <ory-session-token>` HTTP header was set with a valid Ory Kratos Session Token; if the `X-Session-Token` HTTP header was set with a valid Ory Kratos Session Token.  If none of these headers are set or the cooke or token are invalid, the endpoint returns a HTTP 401 status code.  As explained above, this request may fail due to several reasons. The `error.id` can be one of:  `session_inactive`: No active session was found in the request (e.g. no Ory Session Cookie / Ory Session Token). `session_aal2_required`: An active session was found but it does not fulfil the Authenticator Assurance Level, implying that the session must (e.g.) authenticate the second factor.
     * Check Who the Current HTTP Session Belongs To
     * @param param the request object
     */
    public toSession(param: V0alpha2ApiToSessionRequest = {}, options?: Configuration): Promise<Session> {
        return this.api.toSession(param.X_Session_Token, param.Cookie,  options).toPromise();
    }

    /**
     * This endpoints allows you to update the Ory Cloud Project configuration for individual services (identity, permission, ...). The configuration is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to Ory Cloud, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.  Be aware that updating any service's configuration will completely override your current configuration for that service!
     * Update an Ory Cloud Project Configuration
     * @param param the request object
     */
    public updateProject(param: V0alpha2ApiUpdateProjectRequest, options?: Configuration): Promise<SuccessfulProjectUpdate> {
        return this.api.updateProject(param.project_id, param.UpdateProject,  options).toPromise();
    }

}

import { ObservableWriteApi } from "./ObservableAPI.ts";
import { WriteApiRequestFactory, WriteApiResponseProcessor} from "../apis/WriteApi.ts";

export interface WriteApiCreateRelationTupleRequest {
    /**
     * 
     * @type RelationQuery
     * @memberof WriteApicreateRelationTuple
     */
    RelationQuery?: RelationQuery
}

export interface WriteApiDeleteRelationTuplesRequest {
    /**
     * Namespace of the Relation Tuple
     * @type string
     * @memberof WriteApideleteRelationTuples
     */
    namespace?: string
    /**
     * Object of the Relation Tuple
     * @type string
     * @memberof WriteApideleteRelationTuples
     */
    object?: string
    /**
     * Relation of the Relation Tuple
     * @type string
     * @memberof WriteApideleteRelationTuples
     */
    relation?: string
    /**
     * SubjectID of the Relation Tuple
     * @type string
     * @memberof WriteApideleteRelationTuples
     */
    subject_id?: string
    /**
     * Namespace of the Subject Set
     * @type string
     * @memberof WriteApideleteRelationTuples
     */
    subject_set_namespace?: string
    /**
     * Object of the Subject Set
     * @type string
     * @memberof WriteApideleteRelationTuples
     */
    subject_set_object?: string
    /**
     * Relation of the Subject Set
     * @type string
     * @memberof WriteApideleteRelationTuples
     */
    subject_set_relation?: string
}

export interface WriteApiPatchRelationTuplesRequest {
    /**
     * 
     * @type Array&lt;PatchDelta&gt;
     * @memberof WriteApipatchRelationTuples
     */
    PatchDelta?: Array<PatchDelta>
}

export class ObjectWriteApi {
    private api: ObservableWriteApi

    public constructor(configuration: Configuration, requestFactory?: WriteApiRequestFactory, responseProcessor?: WriteApiResponseProcessor) {
        this.api = new ObservableWriteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to create a relation tuple.
     * Create a Relation Tuple
     * @param param the request object
     */
    public createRelationTuple(param: WriteApiCreateRelationTupleRequest = {}, options?: Configuration): Promise<RelationQuery> {
        return this.api.createRelationTuple(param.RelationQuery,  options).toPromise();
    }

    /**
     * Use this endpoint to delete relation tuples
     * Delete Relation Tuples
     * @param param the request object
     */
    public deleteRelationTuples(param: WriteApiDeleteRelationTuplesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.deleteRelationTuples(param.namespace, param.object, param.relation, param.subject_id, param.subject_set_namespace, param.subject_set_object, param.subject_set_relation,  options).toPromise();
    }

    /**
     * Use this endpoint to patch one or more relation tuples.
     * Patch Multiple Relation Tuples
     * @param param the request object
     */
    public patchRelationTuples(param: WriteApiPatchRelationTuplesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.patchRelationTuples(param.PatchDelta,  options).toPromise();
    }

}
