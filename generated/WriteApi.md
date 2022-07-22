# .WriteApi

All URIs are relative to *https://playground.projects.oryapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRelationTuple**](WriteApi.md#createRelationTuple) | **PUT** /admin/relation-tuples | Create a Relation Tuple
[**deleteRelationTuples**](WriteApi.md#deleteRelationTuples) | **DELETE** /admin/relation-tuples | Delete Relation Tuples
[**patchRelationTuples**](WriteApi.md#patchRelationTuples) | **PATCH** /admin/relation-tuples | Patch Multiple Relation Tuples


# **createRelationTuple**
> RelationQuery createRelationTuple()

Use this endpoint to create a relation tuple.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WriteApi(configuration);

let body:.WriteApiCreateRelationTupleRequest = {
  // RelationQuery (optional)
  RelationQuery: {
    namespace: "namespace_example",
    object: "object_example",
    relation: "relation_example",
    subject_id: "subject_id_example",
    subject_set: {
      namespace: "namespace_example",
      object: "object_example",
      relation: "relation_example",
    },
  },
};

apiInstance.createRelationTuple(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RelationQuery** | **RelationQuery**|  |


### Return type

**RelationQuery**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | RelationQuery |  -  |
**400** | genericError |  -  |
**500** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRelationTuples**
> void deleteRelationTuples()

Use this endpoint to delete relation tuples

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WriteApi(configuration);

let body:.WriteApiDeleteRelationTuplesRequest = {
  // string | Namespace of the Relation Tuple (optional)
  namespace: "namespace_example",
  // string | Object of the Relation Tuple (optional)
  object: "object_example",
  // string | Relation of the Relation Tuple (optional)
  relation: "relation_example",
  // string | SubjectID of the Relation Tuple (optional)
  subject_id: "subject_id_example",
  // string | Namespace of the Subject Set (optional)
  subject_set_namespace: "subject_set.namespace_example",
  // string | Object of the Subject Set (optional)
  subject_set_object: "subject_set.object_example",
  // string | Relation of the Subject Set (optional)
  subject_set_relation: "subject_set.relation_example",
};

apiInstance.deleteRelationTuples(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | Namespace of the Relation Tuple | (optional) defaults to undefined
 **object** | [**string**] | Object of the Relation Tuple | (optional) defaults to undefined
 **relation** | [**string**] | Relation of the Relation Tuple | (optional) defaults to undefined
 **subject_id** | [**string**] | SubjectID of the Relation Tuple | (optional) defaults to undefined
 **subject_set_namespace** | [**string**] | Namespace of the Subject Set | (optional) defaults to undefined
 **subject_set_object** | [**string**] | Object of the Subject Set | (optional) defaults to undefined
 **subject_set_relation** | [**string**] | Relation of the Subject Set | (optional) defaults to undefined


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**400** | genericError |  -  |
**500** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchRelationTuples**
> void patchRelationTuples()

Use this endpoint to patch one or more relation tuples.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WriteApi(configuration);

let body:.WriteApiPatchRelationTuplesRequest = {
  // Array<PatchDelta> (optional)
  PatchDelta: [
    {
      action: "insert",
      relation_tuple: {
        namespace: "namespace_example",
        object: "object_example",
        relation: "relation_example",
        subject_id: "subject_id_example",
        subject_set: {
          namespace: "namespace_example",
          object: "object_example",
          relation: "relation_example",
        },
      },
    },
  ],
};

apiInstance.patchRelationTuples(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **PatchDelta** | **Array<PatchDelta>**|  |


### Return type

**void**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**400** | genericError |  -  |
**404** | genericError |  -  |
**500** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


