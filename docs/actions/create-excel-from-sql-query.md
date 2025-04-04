---
id: create-excel-from-sql-query
title: Create Excel from SQL query 
sidebar_label: Create Excel from SQL query 
---


Serializes the result of an SQL Query into Excel format. Optimized to use with large amounts of data.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Database |  | No | None |
| Override Connection String | By default, the SQL will run against the built-in database or the selected Connection. Use this field to override the connection string. Also supports the name of a connection string from the web.config. It will respect the Provider (ODBC, SqlClient, etc.). Can contain Tokens. | No | None |
| Query Timeout | Set a time in seconds after which a query will time out. The default is set to 10 minutes or 600 seconds. This parameter can't be negative or under 10 seconds. Can contain Tokens. | No | None |
| SQL Query | SQL to execute. Can contain Tokens. WARNING! We encourage using binding parameters instead of using the tokens directly on sql query. Just use @param instead of [token] and bind below values as shown: Parameter Name: param ; Parameter Value: [token]. This will keep your database safe. | No | None |
| Bind Tokens | Bind the parameters above with a value or token. e.g. P. Name:param, P. Value:[token]  | No | None |
| Add Column Names | Remove the field names from the serialization. | No | True |
| Folder | Folder to write the Excel file into. | No | None |
| Pattern | Optionally provide a pattern to use for filenames on the server. For example &quot;[User:Username]-avatar&quot;. Leave blank to use the original filename. Supports Tokens | No | None |
| Handle Duplicates |  | No | Rename |
| File Password | Add a password to the file. Use this if you don't want other to see the data. Supports Tokens | No | None |
| Worksheet Password | Add a password to the worksheet. Use this if you want other to see the data but not change it. Supports Tokens | No | None |
| Store Absolute URL | Optionally provide a token name where to Store Absolute URL. The token can be used in next actions down the stack. | No | None |
| Store Relative URL | Optionally provide a token name where to Store Relative URL. The token can be used in next actions down the stack. | No | None |
| Store Physical Path | Optionally provide a token name where to Store Physical Path. The token can be used in next actions down the stack. | No | None |
| Store LinkClick Url | Optionally provide a token name where to Store the LinkClick Url. The token can be used in next actions down the stack. | No | None |
| Store File ID | Optionally provide a token name where to Store the DNN File ID. The token can be used in next actions down the stack. | No | None |
| Disable Force Download | Disables LinkClick URL force download feature. | No | None |
