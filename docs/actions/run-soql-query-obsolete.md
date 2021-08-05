---
id: run-soql-query-obsolete
title: Run SOQL Query (obsolete)
sidebar_label: Run SOQL Query (obsolete)
---


Executes the specified SOQL query, optionally storing the output for use in other actions.WARNING: We changed the way we connect to the Salesforce service. For security reasons please read this documentation entry to learn how to setup your account.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Salesforce Login URL | Salesforce Login domain. Example: https://ap1.salesforce.com/ or https://ap1.salesforce.com/services/oauth2/token. Leave empty to use https://login.salesforce.com/services/oauth2/token | No | None |
| Salesforce Username | Required. A valid Username, Password and Security Token must be passed to Salesforce in order to authenticate and establish a secure session. | No | None |
| Salesforce Password | Required. A valid Username, Password and Security Token must be passed to Salesforce in order to authenticate and establish a secure session. | No | None |
| Salesforce Security Token | Required. A valid Username, Password and Security Token must be passed to Salesforce in order to authenticate and establish a secure session. | No | None |
| SOQL Query | SOQL to execute. Can contain My Tokens. | Yes | None |
| Extract Columns | Optionally provide an association table to parse columns into context data. Can contain other context tokens, for example [Name], and My Tokens. | Yes | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can use the [ErrorMessage] token to show the error message. | No | None |
