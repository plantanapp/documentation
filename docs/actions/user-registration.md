---
id: user-registration
title: User Registration
sidebar_label: User Registration
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `User Management`

This action will create a new user account. The form must contain a username or email address. The password can be user-created via a password field or randomly generated. On successful registration, an output token called `[NewUserId]` is created. Also, the context user is changed to the new user, so you have access to `[User:*]` tokens such as: `[User:UserID]` or `[User:FirstName]`.

## `Typical Use Cases`

- Use on a custom registration form to create the new user's account.
- Use in a custom User Management Grid to add new users.

## `Don't use it to`

- Update user properties. Use [Update User Profile](/docs/actions/update-user-profile) instead.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Update User Profile](/docs/actions/update-user-profile) | Updates a user's extended profile properties. Use in conjunction with User Registration to capture all data from a registration form in the correct place in the database. |
| [Send Email](/docs/actions/send-email) | Sends an email to one or more recipients. Use to notify a user of successful registration and provide information regarding their new account. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| UserName | Select the field that contains the new user's username or use expressions (`EXPR` button) to use a token.  | Yes | `empty string` | No |
| Register with email | When this option is enabled, the email field selected will be used as the username for registration. | No | false | No |
| Password | Select a form field from the dropdown to use as the password for the new user or use expressions (`EXPR` button) to input a custom password or a token. | Yes | Not Selected | No |
| Generate random password | When this option is enabled, a random password is generated and stored in a context token called `[RegRandomPass]` to be used in subsequent actions. This token can be used in an email action to send the password to the new user. | No | false | No |
| Email | Select a form field from the dropdown to use as the Email for the new user or use expressions (`EXPR` button) to use a token. | Yes | Not Selected | No |
| First Name | Select a form field from the dropdown to update the First Name of the user or use expressions (`EXPR` button) to use a token. | Yes | Not Selected | No |
| Last Name | Select a form field from the dropdown to update the Last Name of the user or use expressions (`EXPR` button) to use a token. | Yes | Not Selected | No |
| Send standard DNN registration email | When this option is enabled, our module will use the standard registration email as set in DNN. For custom emails, disable this option and add a [Send Email](/docs/actions/send-email) action. | No | false | No |
| Login if user already exists | When this option is enabled, instead of showing a "user already exists" error, this action will attempt to authenticate the user using the username and password provided. If authentication is successful, then subsequent actions are executed. | No | false | No |
| Authorize users who register with this form | When **Authorize** is selected, users that successfully register with this form will also be authorized. Selecting **Inherit DNN Settings** will use the standard DNN Setting for Authorizing new users. Select **Don't Authorize** if authorization is handled later, such as after a user clicks an email verification link. | No | Not Selected | No |
