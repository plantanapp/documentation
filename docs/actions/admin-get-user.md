---
id: admin-get-user
title: Admin Get User
sidebar_label: Admin Get User
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials Key Prefix | The prefix used for the keys in the web.config appSettings section to declare the credentials. Required keys are: AccessKey, SecretKey, Region and UserPoolId. Example if the prefix is myapp_ the AccessKey will be myapp_AccessKey. Can contain My Tokens and context tokens. | Yes | None |
| Use Server Credentials | This will use all the AWS SDK fallback options to retrieve the credentials (AccessKey and SecretKey). See AWS docs | No | None |
| Username | Can contain My Tokens and context tokens. | Yes | None |
| Output Token Name | The name of the base token where the user info will be stored. Resulting tokens: [&lt;OutputTokenName&gt;:&lt;AttributeName&gt;]. Special fields: Metadata_Enabled, Metadata_UserCreatedDate, Metadata_UserStatus, Metadata_UserLastModifiedDate. | No | None |
