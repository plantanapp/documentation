---
id: execute-actions-on-entity-list
title: Execute actions on entity list
sidebar_label: Execute actions on entity list
---


This action will execute the actions in the action list below for each entity from the EntityName entity collection.To access field values from the currently iterated entity, in the actions from the list, you can use tokens that look like this: [&lt;EntityName&gt;:&lt;EntityFieldName&gt;].To find the current item index use [&lt;EntityName&gt;:$EntityIndex] token which is 0-based.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Entity Name | Name of the entity list on which the actions execute. Can contain My Tokens. | Yes | None |
| Filters | Filter the entities in the list | No | None |
| Context Behavior | Depending on how you use this action, you might want to change the scope of the generated tokensUpdate all tokens in the original context option will copy all the tokens generated in each iteration to the original context that was before this actionDon't save the iteration tokens option will NOT keep any tokens generated in this action, not even from one iteration to the other.Update the tokens in the initial context option will allow you to save the tokens in the original context (before this action) and from one iteration to another IF the tokens exists in original context, meaning that you have to initialize them before this action. | No | None |
| Action List | Actions that will be executed on each entity in the list | No | None |
| Continue on error | Continues to the next iteration even if the current one failed to execute. | No | None |
| On Error | Actions that will be executed if an error is caught in one iteration. If Continue On Error is checked final actions like Display Message / Error won't be executed. | No | None |
