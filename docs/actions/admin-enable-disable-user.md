---
id: admin-enable-disable-user
title: Admin Enable/Disable User
sidebar_label: Admin Enable/Disable User
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials Key Prefix | The prefix used for the keys in the web.config appSettings section to declare the credentials. Required keys are: AccessKey, SecretKey, Region and UserPoolId. Example if the prefix is myapp_ the AccessKey will be myapp_AccessKey. Can contain My Tokens and context tokens. | Yes | None |
| Use Server Credentials | This will use all the AWS SDK fallback options to retrieve the credentials (AccessKey and SecretKey). See AWS docs | No | None |
| Username | Can contain My Tokens and context tokens. | Yes | None |
| Disable | Boolean value. If true the user will be disabled, otherwise it will be enabled. Can contain My Tokens and context tokens. | Yes | None |
