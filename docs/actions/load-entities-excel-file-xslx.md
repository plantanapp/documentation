---
id: load-entities-excel-file-xslx
title: Load Entities (Excel File) XSLX
sidebar_label: Load Entities (Excel File) XSLX
---


Create an entity list from an excel file. Requires XLSX. You can find the number of loaded entities in the [&lt;EntityName&gt;:Count] token.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| FilePath | Path to the excel file. Can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath. | No | None |
| FilePath | Path to the excel file. Can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath. | No | None |
| Entity Name | Name the entity so you can reference it later by name. Can contain My Tokens. | Yes | None |
| Include All Fields | Select this option to include all fields. | No | None |
| Use first row as column names | Use first row of the Excel file as column names.If this option is not checked the entity will assign the names: Field Index.Ex: Field0, Field1, ... | No | None |
| Properties | Map columns to properties of the entity. | No | None |
| Sheet Name | Name of the sheet to use. | No | None |
| Start Row | Specify the row from where to start reading. If left empty it will get the first row. | No | None |
| EndRow | Specify the row from where to end the reading. If left empty it will get the last row. | No | None |
| On Error | Define a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on. | No | [] |
