# .ReadApi

All URIs are relative to *https://playground.projects.oryapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCheck**](ReadApi.md#getCheck) | **GET** /relation-tuples/check/openapi | Check a relation tuple
[**getCheckMirrorStatus**](ReadApi.md#getCheckMirrorStatus) | **GET** /relation-tuples/check | Check a relation tuple
[**getExpand**](ReadApi.md#getExpand) | **GET** /relation-tuples/expand | Expand a Relation Tuple
[**getRelationTuples**](ReadApi.md#getRelationTuples) | **GET** /relation-tuples | Query relation tuples
[**postCheck**](ReadApi.md#postCheck) | **POST** /relation-tuples/check/openapi | Check a relation tuple
[**postCheckMirrorStatus**](ReadApi.md#postCheckMirrorStatus) | **POST** /relation-tuples/check | Check a relation tuple


# **getCheck**
> GetCheckResponse getCheck()

To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReadApi(configuration);

let body:.ReadApiGetCheckRequest = {
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
  // number (optional)
  max_depth: 1,
};

apiInstance.getCheck(body).then((data:any) => {
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
 **max_depth** | [**number**] |  | (optional) defaults to undefined


### Return type

**GetCheckResponse**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCheckResponse |  -  |
**400** | genericError |  -  |
**500** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCheckMirrorStatus**
> GetCheckResponse getCheckMirrorStatus()

To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReadApi(configuration);

let body:any = {};

apiInstance.getCheckMirrorStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetCheckResponse**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCheckResponse |  -  |
**400** | genericError |  -  |
**403** | getCheckResponse |  -  |
**500** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExpand**
> ExpandTree getExpand()

Use this endpoint to expand a relation tuple.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReadApi(configuration);

let body:.ReadApiGetExpandRequest = {
  // string | Namespace of the Subject Set
  namespace: "namespace_example",
  // string | Object of the Subject Set
  object: "object_example",
  // string | Relation of the Subject Set
  relation: "relation_example",
  // number (optional)
  max_depth: 1,
};

apiInstance.getExpand(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | Namespace of the Subject Set | defaults to undefined
 **object** | [**string**] | Object of the Subject Set | defaults to undefined
 **relation** | [**string**] | Relation of the Subject Set | defaults to undefined
 **max_depth** | [**number**] |  | (optional) defaults to undefined


### Return type

**ExpandTree**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | expandTree |  -  |
**400** | genericError |  -  |
**404** | genericError |  -  |
**500** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRelationTuples**
> GetRelationTuplesResponse getRelationTuples()

Get all relation tuples that match the query. Only the namespace field is required.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReadApi(configuration);

let body:.ReadApiGetRelationTuplesRequest = {
  // string (optional)
  page_token: "page_token_example",
  // number (optional)
  page_size: 1,
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

apiInstance.getRelationTuples(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_token** | [**string**] |  | (optional) defaults to undefined
 **page_size** | [**number**] |  | (optional) defaults to undefined
 **namespace** | [**string**] | Namespace of the Relation Tuple | (optional) defaults to undefined
 **object** | [**string**] | Object of the Relation Tuple | (optional) defaults to undefined
 **relation** | [**string**] | Relation of the Relation Tuple | (optional) defaults to undefined
 **subject_id** | [**string**] | SubjectID of the Relation Tuple | (optional) defaults to undefined
 **subject_set_namespace** | [**string**] | Namespace of the Subject Set | (optional) defaults to undefined
 **subject_set_object** | [**string**] | Object of the Subject Set | (optional) defaults to undefined
 **subject_set_relation** | [**string**] | Relation of the Subject Set | (optional) defaults to undefined


### Return type

**GetRelationTuplesResponse**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getRelationTuplesResponse |  -  |
**404** | genericError |  -  |
**500** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCheck**
> GetCheckResponse postCheck()

To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReadApi(configuration);

let body:.ReadApiPostCheckRequest = {
  // number (optional)
  max_depth: 1,
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

apiInstance.postCheck(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RelationQuery** | **RelationQuery**|  |
 **max_depth** | [**number**] |  | (optional) defaults to undefined


### Return type

**GetCheckResponse**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCheckResponse |  -  |
**400** | genericError |  -  |
**500** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postCheckMirrorStatus**
> GetCheckResponse postCheckMirrorStatus()

To learn how relation tuples and the check works, head over to [the documentation](../concepts/relation-tuples.mdx).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReadApi(configuration);

let body:any = {};

apiInstance.postCheckMirrorStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetCheckResponse**

### Authorization

[oryAccessToken](README.md#oryAccessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCheckResponse |  -  |
**400** | genericError |  -  |
**403** | getCheckResponse |  -  |
**500** | genericError |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


