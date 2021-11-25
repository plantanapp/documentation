---
id: create-list-from-json
title: Create List from JSON
sidebar_label: Create List from JSON
---


Loads the objects in the given JSON input string (JsonModel) into a list that can then be iterated, executing actions for each list entry. You can find the number of loaded list entries in the [&lt;ListName&gt;:Count] token.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| JSON Model | The JSON string that will be parsed. This field supports My Tokens. | Yes | None |
| List Name | Name this list so you can reference it later by name. This field supports My Tokens. | Yes | None |
| On Error | Define a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on. | No | [] |
| Enforce ISO DateTime | Enforces DateTime values from the JSON to be parsed as full ISO DateTtime values. | No | None |
