---
id: load-entities-json-
title: Load Entities (JSON)
sidebar_label: Load Entities (JSON)
---


Loads the objects in the given JSON input string (JsonModel) into a list of entities that can then be iterated, executing actions for each entity. You can find the number of loaded entities in the [&lt;EntityName&gt;:Count] token.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| JSON Model | The JSON string that will be parsed. This field supports My Tokens. | Yes | None |
| Entity Name | Name this entity so you can reference it later by name. This field supports My Tokens. | Yes | None |
| On Error | Define a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on. | No | [] |
| Enforce ISO DateTime | Enforces DateTime values from the JSON to be parsed as full ISO DateTtime values. | No | None |
