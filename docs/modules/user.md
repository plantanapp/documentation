---
id: user
title: User
sidebar_label: User
---

Allow you to define user-specific Fields in the form - namely e-mail address and username.

- [Email](#email)
- [Username](#username)

Note that only the field-specific parameters will be listed below. Please <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">see here</a> for a list of **common parameters** to all fields and <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-configuration-sections-bind-expressions-ui-settings-validation" target="_blank">here</a> for the **common configuration** elements to all fields.

## Email

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | Provide an initial value for the email address to be preloaded into the Form. You can use <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>, so you can pull the email address data from various sources such as user profile. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |
|*Allow Tokens*|Check to box to enable the use of tokens (i.e. replacing the  tokens in the input submitted by the users).|

## Username

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | You can provide an initial Username for the Form to preload. You can use <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>, so you can pull the Username data from various sources such as user profile. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

<br /><br /><a href="#top">Back to the top &#10548;</a>