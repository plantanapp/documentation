---
id: import-into-database-entity-
title: Import Into Database (Entity)
sidebar_label: Import Into Database (Entity)
---


Import values from an Entity list into a database table. If the ID column is defined as an identity column in your database, row values for that column will be ignored during the insert. The insert action has a 10min Bulk Copy Timeout.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Connection String | Leave empty to conect to the DNN database. Connect to a different database by providing the name of a connection string from web.config or a connection string (read connectionstrings.com for more info). | No | None |
| Prefix Database Schema | Leave empty for the default database schema. | No | None |
| Table Name | Select the table to import data into. | No | None |
| Entity Name | Name the entity so you can reference it later by name. Can contain My Tokens. | Yes | None |
| Insert all values | Check this option if you want to try and insert all values from the entity list. | No | None |
| Properties | Map columns to properties of the entity. | No | None |
| Merge Existing Values | Check this option if you want to try and update all values from the entity list that have a corresponding row in the database table.If the primary key value is not specified it will try to automatically assign it which might lead to problems.This option can increase the execution time for large amounts of data. | No | None |
| Only Update Values | Check this option if you do not want to insert new data rows into the table, only update. This option requires Merge Existing Values to be checked.This option can increase the execution time for large amounts of data. | No | None |
| Delete Non-Existing Values | Check this option if you want to try and delete all values from the database table that do not have a corresponding item in the entity list.This option can increase the execution time for large amounts of data. | No | None |
| On Error | Define a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on. | No | [] |
