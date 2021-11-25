---
id: create-list-from-a-csv-source
title: Create List from a CSV source
sidebar_label: Create List from a CSV source
---


Create a list from a CSV source. You can find the number of loaded list entries in the [&lt;ListName&gt;:Count] token.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| CSV Source | Choose the source of the CSV that will be used for list creation. | No | csvText |
| CSV | The CSV that will be converted into an list. | No | None |
| FilePath | Path to the excel file. Can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath. | No | None |
| FilePath | Path to the excel file. Can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath. | No | None |
| Field Separator | Use semicolon if you open CSV Files with Excel and your region Format is set to other than English (United States). Left unselected, defaults to comma. You can use the expression setting to dynamically pass a delimiter from the given list to the action, you can use both the punctuation mark (i.e. ';') or the noun that describes that punctuation mark (i.e. 'semicolon') as values when passing the delimiter as a token, this applies to all options except 'tab'. Supports My Tokens. | Yes | None |
| List Name | Name the list so you can reference it later by name. Can contain My Tokens. | Yes | None |
| Use first row as column names | Use first row of the CSV as column names.If this option is not checked the list will assign the names: Field Index.Ex: Field0, Field1, ... | No | None |
| On Error | Define a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on. | No | [] |
