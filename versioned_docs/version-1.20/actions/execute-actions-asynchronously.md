---
id: execute-actions-asynchronously
title: Execute Actions Asynchronously
sidebar_label: Execute Actions Asynchronously
---


Executes a list of actions on a different server thread, so execution is not blocked. Note that the result of execting the actions can't be sent back to the browser. Use the 'On Error' actions of modules that support it to handle unexpected errors.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Actions | Define the list of actions to execute asynchronously. | No | None |
