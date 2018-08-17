## Import Into Database \(Entity\)

This action will allow you to insert/update data to a database table from a previously created entity.

Using this Action you can edit the following fields:

* **Description**
  . A short description for the action. Only admins will be able to see this field.
* **Condition**
  . This boolean expression is used to determine if this action will execute. 
* **Connection String**  
  . The name of the connection string to external DB as it appears in your web.config file.

* **Table Name**  
  . Click on EXPR and type in the name of the table you want to insert/update data into.

* **Entity Name**  
  . This is the name of the entity that you want to insert data from \(entity created in previous actions from the same thread\).

* **Properties**  
  . This will allow you to map entity property names to database column names. Mapping is not needed when entity properties names are identical to the database column names; they will be automatically matched in this situation.

* **Import options**  
  . When importing data in your table you will have 3 options:

  a. Merge Existing Values: Check this option if you want to try and update all values from the entity list that have a corresponding row in the database table \(matched by ID\).

  b. Only Update Values: Check this option if you do not want to insert new data rows into the table, only update. This option requires Merge Existing Values to be checked \(matched by ID\).

  c. Delete Non-Existing Values: Check this option if you want to try and delete all values from the database table that do not have a corresponding item in the entity list \(matched by ID\).

* **On Error**  
  . This is a list of actions that will be executed when the Import Into Database action fails to execute.

![](/assets/screencapture-mihai91-test-forest-dnnsharp-Home-ctl-Manage-mid-379-1499171178286.png)![](https://static.dnnsharp.com/documentation/import_into_database.png)

