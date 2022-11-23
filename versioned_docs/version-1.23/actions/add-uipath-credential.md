---
id: add-uipath-credential
title: Add UiPath Credential
sidebar_label: Add UiPath Credential
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Portal | The portal of the Credential Group given below. Leave empty for global group (not bound to a portal). When using expressions, the value must be the PortalId. | No | None |
| Group Title | When using expressions, the value needs to be the GroupId. A GroupId can be retrieved from a Group Title and Portal combination using the Credential Store > Find Group action | No | None |
| User Id |  | No | None |
| Entry title |  | No | None |
| Tenant Name | The tenant name to authenticate against. | No | None |
| Username or Email |  | No | None |
| Password |  | No | None |
| EntryId Token Name | Specify a token name to save the EntryId response into. You can access it later using the token syntax, for example [MyNamedEntryIdToken] | No | None |
