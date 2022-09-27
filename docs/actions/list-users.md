---
id: list-users
title: List Users
sidebar_label: List Users
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials Key Prefix | The prefix used for the keys in the web.config appSettings section to declare the credentials. Required keys are: AccessKey, SecretKey, Region and UserPoolId. Example if the prefix is myapp_ the AccessKey will be myapp_AccessKey. Can contain My Tokens and context tokens. | Yes | None |
| Use Server Credentials | This will use all the AWS SDK fallback options to retrieve the credentials (AccessKey and SecretKey). See AWS docs | No | None |
| Attributes to get | Optional. A list of strings, where each string is the name of a user attribute to be returned for each user in the search results. If the list is empty, all attributes are returned. Minimum length of 1. Maximum length of 32. Can contain My Tokens and context tokens. | Yes | None |
| Limit | Optional. Maximum number of users to be returned. Minimum value of 0. Maximum value of 60. Can contain My Tokens and context tokens. | Yes | None |
| Pagination Token | Optional. An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. Can contain My Tokens and context tokens. | Yes | None |
| Output Entity Name | The name of the entity list to return the results in. Each entity will contain the requested attributes and some special user properties: Metadata_UserCreatedDate, Metadata_UserStatus, Metadata_UserLastModifiedDate. A token [&lt;OutputEntityName&gt;:PaginationToken] will be created to store the token for the next page. | No | None |
