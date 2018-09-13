# Load Users from SQL

A job can run in the context of one or more users. Related actions such as granting roles or sending emails will be performed for every user loaded in context. This letes you load additional users into the context. For example, make a selection of users, then send a tokenzied email to all of them.

Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **\[SomeField\] == "Some Value**". This field supports **My Tokens**.
* **SQL Query**. SQL to execute. It should return only one column, which is the **UserID**. A common query is S**ELECT UserId from Users Where FirstName LIKE '%John%'**. Can contain context tokens \(for example **\[ContextTokenName\]**\) and **My Tokens**.

![](http://static.dnnsharp.com/documentation/load_users_from_sql.png)

