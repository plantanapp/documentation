---
id: run-soql-query
title: Run SOQL Query
sidebar_label: Run SOQL Query
---


Executes the specified SOQL query, optionally storing the output for use in other actions.WARNING: We changed the way we connect to the Salesforce service. For security reasons please read this documentation entry to learn how to setup your account.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials | Required. A valid Username, Password and Security Token must be passed to Salesforce in order to authenticate and establish a secure session. | No | None |
| SOQL Query | SOQL to execute. Can contain My Tokens. | Yes | None |
| Extract Columns | Optionally provide an association table to parse columns into context data. Can contain other context tokens, for example [Name], and My Tokens. | Yes | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can use the [ErrorMessage] token to show the error message. | No | None |
