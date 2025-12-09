---
id: get-credential
title: Get Credential
sidebar_label: Get Credential
---


This action generates the following tokens with the information requested: [CredentialEntryInfo:EntryId], [CredentialEntryInfo:EntryName], [CredentialEntryInfo:GroupId], [CredentialEntryInfo:GroupName], [CredentialEntryData:&lt;Fieldname&gt;] tokens (those field names in the "Add Credentials"), [CredentialEntryData:&lt;CustomDataKey&gt;] tokens for the CustomData of your credentials. The fields marked as Secure (e.g. password field) will be set to value '******'

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Selection Mode |  | No | byname |
| Entry Id | Specify an Entry Id to bring the credential information for. Can contain form tokens (for example [FirstName]) and My Tokens. | Yes | None |
| Credential type |  | No | None |
| Credential group |  | No | None |
| Credential entry |  | No | None |
