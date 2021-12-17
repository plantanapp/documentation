---
id: create-excel-from-list
title: Create Excel from List
sidebar_label: Create Excel from List
---


Serializes a list from the context into Excel format. Requires XLSX.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| List Name | Determines which list entries are serialized. Can contain My Tokens. | Yes | None |
| Fields | Provide a list of fields to serialize. | No | None |
| Include All Fields | Or select this option to serialize all fields. | No | None |
| Remove Field Names | Remove the field names from the serialization. | No | None |
| Use excel formulas | When a cell has a value that starts with = it will write it as a excel formula. Example: =Sum(A1,A2)To escape the = add a ' in front of it. | No | None |
| Criteria | Provide criteria to determine which entries are serialized. | No | None |
| Pattern | Optionally provide a pattern to use for filenames on the server. For example &quot;[User:Username]-avatar&quot;. Leave blank to use the original filename. Supports My Tokens  | Yes | None |
| Handle Duplicates |  | No | Rename |
| File Password | Add a password to the file. Use this if you don't want other to see the data. Supports My Tokens  | Yes | None |
| Worksheet Password | Add a password to the worksheet. Use this if you want other to see the data but not change it. Supports My Tokens  | Yes | None |
| Folder | Folder to write the Excel file into. | No | None |
| Store Absolute URL | Optionally provide a token name where to Store Absolute URL. The token can be used in next actions down the stack. | No | None |
| Store Relative URL | Optionally provide a token name where to Store Relative URL. The token can be used in next actions down the stack. | No | None |
| Store Physical Path | Optionally provide a token name where to Store Physical Path. The token can be used in next actions down the stack. | No | None |
| Store LinkClick Url | Optionally provide a token name where to Store the LinkClick Url. The token can be used in next actions down the stack. | No | None |
| Disable Force Download | Disables LinkClick URL force download feature. | No | None |
