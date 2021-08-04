---
id: admin-reset-user-password
title: Admin Reset User Password
sidebar_label: Admin Reset User Password
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials Key Prefix | The prefix used for the keys in the web.config appSettings section to declare the credentials. Required keys are: AccessKey, SecretKey, Region and UserPoolId. Example if the prefix is myapp_ the AccessKey will be myapp_AccessKey. Can contain My Tokens and context tokens. | Yes | None |
| Use Server Credentials | This will use all the AWS SDK fallback options to retrieve the credentials (AccessKey and SecretKey). See AWS docs | No | None |
| Username | Can contain My Tokens and context tokens. | Yes | None |
| Client Metadata | The provided items will be passed to the Cognito Custom message Trigger when processing the password reset message action (CustomMessage_ForgotPassword trigger source). Can contain My Tokens and context tokens. | Yes | None |
