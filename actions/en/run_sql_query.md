### Run SQL Query {#run-sql-query}

This action executes an SQL statement, optionally capturing the output. This action supports context tokens and **My Tokens **inside the SQL query and it is not restricted to SQL Server \(can run on any DB with ODBC support, currently being successfully used on MySQL, Oracle DB, IBM DB\)

We also recommend you to bind parameters instead of using tokens directly in sql queries in order to prevent SQL Injection \(example in image below\)

![](http://static.dnnsharp.com/documentation/runsql1.png)

Here are some common scenarios when you would use this action:

* Use an \_**UPDATE **\_statement to calculate some statistics for large databases on an interval, instead of calculating them on every call
* Execute a \_**SELECT **\_statement to retrieve data to be used with other actions down the stack
* Flush old temporary data using a **DELETE **statement
* Execute a stored procedure that calculates commissions paid through a referral program



You can capture one or more data by:

* either using the _**Store Scalar Result**_ field\(first row-first column\) 
* or the _**Extract More Data**_ area\(first row from specified columns\)

![](https://static.dnnsharp.com/documentation/runsql2.png)

If you want to update a table with changed form data, what you have to do is create an SQL action on the button with insert statement. Then, you can reference fields using token syntax. For example:

`INSERT INTO MyTable(FirstName, LastName) VALUES('[FirstNameFieldId]', '[LastNameFieldId]').`

If you need the **ID **of your insert, also do a select **scope\_identity\(\) **and store the output in a token for later use.

Here's basic example on how to insert values in the database using Action Form:

1. create a form with let's say three fields: Product, Color and Size \(these fields can be either drop downs or text boxes or whatever fields you need\) - notice that the form fields should exist as columns in the table you want them to be inserted;
2. add a button with Run SQL Query action on which add the insert statement as follows:

`INSERT INTO Products (Product ,Color ,Size) VALUES ('[Product]' ,'[Color]' ,'[Size]')`

Where _Products_ is the name of the table from the database, the values are placed between square brackets because here I reference the form fields using token syntax, value_ _\[Product\] means that whatever value I set in the form field Product, it will be inserted in the column Product.

