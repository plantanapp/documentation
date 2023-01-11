---
id: add-to-campaign
title: Add to campaign
sidebar_label: Add to campaign
---


Add a Lead to one or more campaigns.WARNING: We changed the way we connect to the Salesforce service. For security reasons please read this documentation entry to learn how to setup your account.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials | Required. A valid Username, Password and Security Token must be passed to Salesforce in order to authenticate and establish a secure session. | No | None |
| Salesforce Entity Type | Entity, such as a Lead, a Case, a Contact, etc. | No | None |
| Entity Id | The entity id that will be added to the campaign. Can contain Tokens. | No | None |
| Campaign Ids | A list of campaign ids separated by commas. | No | None |
| Campaign Member Token Name | Here will be stored the id of the newly created binding between the entity and the campaign. | No | None |
| Campaign Member URL Token Name | Here will be stored the URL to the newly created binding between the entity and the campaign. | No | None |
| On Successful Add | Define a list of actions that should execute when an entity is successfully added to a campaign. | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can use the [ErrorMessage] token to show the error message. | No | None |
