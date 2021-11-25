---
id: execute-actions-for-each-list-entry
title: Execute Actions for each List Entry
sidebar_label: Execute Actions for each List Entry
---


This action will execute the 'Action List' for each list entry from the ListName.To access field values from the currently iterated list entry in the actions you can use tokens that look like this: [&lt;ListName&gt;:&lt;ListFieldName&gt;].To find the current entry index use [&lt;ListName&gt;:$Index] token which is 0-based.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| List Name | Name of the list on which the actions execute. Can contain My Tokens. | Yes | None |
| Filters | Filter the entries in the list | No | None |
| Context Behavior | Depending on how you use this action, you might want to change the scope of the generated tokensUpdate all tokens in the original context option will copy all the tokens generated in each iteration to the original context that was before this actionDon't save the iteration tokens option will NOT keep any tokens generated in this action, not even from one iteration to the other.Update the tokens in the initial context option will allow you to save the tokens in the original context (before this action) and from one iteration to another IF the tokens exists in original context, meaning that you have to initialize them before this action. | No | None |
| Action List | Actions that will be executed on each entry in the list | No | None |
| Continue on error | Continues to the next iteration even if the current one failed to execute. | No | None |
| On Error | Actions that will be executed if an error is caught in one iteration. If Continue On Error is checked final actions like Display Message / Error won't be executed. The tokens [Exception], [ExceptionType], [ExceptionMessage], [ExceptionStack] will give details about the exception that was thrown in each iteration. | No | None |
