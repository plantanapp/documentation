---
id: serialize-to-excel-from-text-xslx
title: Serialize to Excel from Text XSLX
sidebar_label: Serialize to Excel from Text XSLX
---


Serializes a list of entities from the context into Excel format. Requires XLSX.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Pattern | Optionally provide a pattern to use for filenames on the server. For example &quot;[User:Username]-avatar&quot;. Leave blank to use the original filename. Supports My Tokens  | Yes | None |
| Field Separator | Use semicolon if you open CSV Files with Excel and your region Format is set to other than English (United States). Left unselected, defaults to comma. You can use the expression setting to dynamically pass a delimiter from the given list to the action, you can use both the punctuation mark (i.e. ';') or the noun that describes that punctuation mark (i.e. 'semicolon') as values when passing the delimiter as a token, this applies to all options except 'tab'. Supports My Tokens. | Yes | None |
| Handle Duplicates |  | No | Rename |
| Text | The text that will be serialized. Can contain My Tokens. | Yes | None |
| Use excel formulas | When a cell has a value that starts with = it will write it as a excel formula. Example: =Sum(A1,A2)To escape the = add a ' in front of it. | No | None |
| File Password | Add a password to the file. Use this if you don't want other to see the data. Supports My Tokens  | Yes | None |
| Worksheet Password | Add a password to the worksheet. Use this if you want other to see the data but not change it. Supports My Tokens | Yes | None |
| Folder | Folder to write the Excel file into. | No | None |
| Store Absolute URL | Optionally provide a token name where to Store Absolute URL. The token can be used in next actions down the stack. | No | None |
| Store Relative URL | Optionally provide a token name where to Store Relative URL. The token can be used in next actions down the stack. | No | None |
| Store Physical Path | Optionally provide a token name where to Store Physical Path. The token can be used in next actions down the stack. | No | None |
| Store LinkClick Url | Optionally provide a token name where to Store the LinkClick Url. The token can be used in next actions down the stack. | No | None |
| Disable Force Download | Disables LinkClick URL force download feature. | No | None |
