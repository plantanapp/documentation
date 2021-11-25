---
id: serialize-to-csv
title: Serialize to CSV
sidebar_label: Serialize to CSV
---


Serializes a list of entities from the context into CSV (Comma Separated Values) format.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Entity Name | Determines which entities are serialized. Can contain My Tokens. | Yes | None |
| Fields | Provide a list of fields to serialize. | No | None |
| Include All Fields | Or, select this option to serialize all fields. | No | None |
| Remove Field Names | Remove the field names from the serialization. | No | None |
| Field Separator | Use semicolon if you open CSV Files with Excel and your region Format is set to other than English (United States). Left unselected, defaults to comma. You can use the expression setting to dynamically pass a delimiter from the given list to the action, you can use both the punctuation mark (i.e. ';') or the noun that describes that punctuation mark (i.e. 'semicolon') as values when passing the delimiter as a token, this applies to all options except 'tab'. Supports My Tokens. | Yes | None |
| Add inline separetor | Inserts 'sep=' on the first line of Excel to specify '' as a CSV separator. | No | None |
| Criteria | Provide criteria to determine which entries are serialized. | No | None |
| Storage Location | Select the location where the output is stored. | No | File |
| Output Token Name | Input a token name that will hold the resulting CSV string. | No | None |
| Ensure CSV file type is allowed in DNN File System. |  | No | None |
| Encoding | Choose the Encoding option. Default is UTF-8. | No | None |
| Folder | Folder to write the CSV file into. | No | None |
| Pattern | Optionally provide a pattern to use for filenames on the server. For example &quot;[User:Username]-avatar&quot;. Leave blank to use the original filename. Supports My Tokens | Yes | None |
| Handle Duplicates |  | No | None |
| Store Absolute URL | Optionally provide a token name where to Store Absolute URL. The token can be used in next actions down the stack. | No | None |
| Store Relative URL | Optionally provide a token name where to Store Relative URL. The token can be used in next actions down the stack. | No | None |
| Store Physical Path | Optionally provide a token name where to Store Physical Path. The token can be used in next actions down the stack. | No | None |
| Store LinkClick Url | Optionally provide a token name where to Store the LinkClick Url. The token can be used in next actions down the stack. | No | None |
| Disable Force Download | Disables LinkClick URL force download feature. | No | None |
