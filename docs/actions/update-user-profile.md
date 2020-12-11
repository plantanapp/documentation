---
id: update-user-profile
title: Update User Profile
sidebar_label: Update User Profile
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `User Management`

This action updates the profile data for a user. It updates the User Profile that is matched (by UserId, Username, or Email) to the value specified in the **User Identifier** field. It only updates properties that contain values. Both the standard user properties and custom-defined properties can be updated, but the properties must already be defined in the DNN **Site Settings** at **Site Behavior**>**User Profiles**.

## `Typical Use Cases`

- Use on a form that allows users to update their User Profile.
- Use in a custom User Management Grid to update a selected user's profile.

## `Don't use it to`

- Create a new user. Use [User Registration](/docs/actions/user-registration) instead.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [User Registration](/docs/actions/user-registration) | Creates a new user. Use in conjunction with Update User Profile to capture all data from a registration form in the correct place in the database. |
| [Send Email](/docs/actions/send-email) | Sends an email to one or multiple recipients. Use to notify a user of the profile update. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| User Identifier | The user identifier (UserId, username, or email) that you want to update. Leave empty to update the current user. | Yes | `empty string` | No |
| Password Field | Select a form field from the dropdown to update the user's password or use expressions (`EXPR` button) to input a custom password or a token. | Yes | Not Selected | No |
| Also update Display Name with | Select a form field from the dropdown to update the Display Name of the user or use expressions (`EXPR` button) to input a custom display name or a token. | Yes | Not Selected | No |
| Update Email with | Select a form field from the dropdown to update the user's Email or use expressions (`EXPR` button) to use a token. | Yes | Not Selected | No |
| Additional User Properties | Set additional user profile properties that should be included in the update process. Click the `Add` button and then select a User Profile Property from the left dropdown and a form field from the right dropdown to use as the value for the property. Use the `EXPR` button on either field to specify a custom value or token. | Yes | None Specified | No |
