---
id: execute-actions
title: Execute Actions
sidebar_label: Execute Actions
---


Executes a list of actions.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Actions | Define the list of actions to execute. Changes to the User context via Load User are local to this Action list. | No | None |
| On Error | Actions that will be executed if an error is caught. The tokens [Exception], [ExceptionType], [ExceptionMessage], [ExceptionStack] will give details about the exception that was thrown . | No | None |
