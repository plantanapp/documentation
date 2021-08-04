---
id: load-entities-csv-
title: Load Entities (CSV)
sidebar_label: Load Entities (CSV)
---


Create an entity list from a CSV. You can find the number of loaded entities in the [&lt;EntityName&gt;:Count] token.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| CSV | The CSV that will be converted into an entity list. | No | None |
| Field Separator | Use semicolon if you open CSV Files with Excel and your region Format is set to other than English (United States). Left unselected, defaults to comma. You can use the expression setting to dynamically pass a delimiter from the given list to the action, you can use both the punctuation mark (i.e. ';') or the noun that describes that punctuation mark (i.e. 'semicolon') as values when passing the delimiter as a token, this applies to all options except 'tab'. Supports My Tokens. | Yes | None |
| Entity Name | Name the entity so you can reference it later by name. Can contain My Tokens. | Yes | None |
| Use first row as column names | Use first row of the CSV as column names.If this option is not checked the entity will assign the names: Field Index.Ex: Field0, Field1, ... | No | None |
| On Error | Define a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on. | No | [] |
