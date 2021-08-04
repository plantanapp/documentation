---
id: admin-create-cognito-user
title: Admin Create Cognito User
sidebar_label: Admin Create Cognito User
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials Key Prefix | The prefix used for the keys in the web.config appSettings section to declare the credentials. Required keys are: AccessKey, SecretKey, Region and UserPoolId. Example if the prefix is myapp_ the UserPoolId will be myapp_UserPoolId. Can contain My Tokens and context tokens. | Yes | None |
| Use Server Credentials | This will use all the AWS SDK fallback options to retrieve the credentials (AccessKey and SecretKey). See AWS docs | No | None |
| Email Address | Can contain My Tokens and context tokens. | Yes | None |
| Email Verified | Boolean value. Sets if the provided email should be marked as verified. Can contain My Tokens and context tokens. | Yes | None |
| Send Account Creation Email | Boolean value. Specifies if an email is sent for the user creation. Can contain My Tokens and context tokens. | Yes | None |
| Resend Account Creation Email | Boolean value. When the specified user exists, if this is set to true the user creation email will be resent, otherwise the user creation will fail. Can contain My Tokens and context tokens. | Yes | None |
| User Attributes | The provided items will be added as user attributes in Cognito, which translates to user claims in OpenId Connect. The keys must be valid attributes defined in Cognito. The email and email_verified attributes will be ignored. Can contain My Tokens and context tokens. | Yes | None |
| Client Metadata | The provided items will be passed to the Cognito Custom message Trigger when processing the user creation message action (CustomMessage_AdminCreateUser trigger source). Can contain My Tokens and context tokens. | Yes | None |
| Output Token Name | Returns the sub claim of the newly created user. | No | None |
