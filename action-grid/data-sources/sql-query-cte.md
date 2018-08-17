---
layout: default
---

# SQL Select

The data source iterates through the database tables, gets data row by row and populates the configured properties with the specified value.

This data source is optimized using Common Table Expressions (CTE) and can make your Grid load almost instantly! See the <a href="https://www.youtube.com/watch?v=tpUOEIriD9o&feature=youtu.be" target="_blank">video</a>.

A common table expression (CTE) can be thought of as a temporary result set that is defined within the execution scope of a single SELECT, INSERT, UPDATE or DELETE statement. A CTE is similar to a derived table in that it is not stored as an object and lasts only for the duration of the query. Unlike a derived table, a CTE can be self-referencing and can be referenced multiple times in the same query.

* Connection String - it provides the possibility to connect to a different database by providing the name of a connection string from web.config or a connection string (read <a href="https://www.connectionstrings.com/" target="_blank">connectionstrings.com</a> for more info). Leave empty to connect to the current DNN Database.
* SQL Select for Retrieving Items - the SQL query set that will return the grid data.
    * <strong>Warning!</strong> This option doesn't support tokenization; all tokens needed there should be replaced by bind tokens. Use @name syntax instead of '[name]', where the @name it's a bind token declared below. e.g. SELECT * FROM table WHERE Column = @name. The SQL injection can be avoided using bind tokens.
* Bind Tokens - it binds the parameters used above with a constant value or a token.
    * Parameter Name - the name of the parameter used in the SQL Select Query
    * Parameter Value - the value of the @name, that can be a constant sting 'name' or a token '[name]'
* Sql Query Columns - specifies the list of columns that will be extracted from data source. Accepts only one column per row. If the list of columns is empty, Action Grid will attempt to execute the query, which might fail if it depends on page state such as query string.
* SQL Query for Inserting Items - the SQL statement used to insert new records in the datasource table. The INSERT INTO syntax would be as follows: INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...). Can contain My Tokens and tokens that refer to field names (for example [Id], [Firstname], etc).
* SQL Query for Updating Items - the SQL statement used to to modify the existing records in the datasource table. The UPDATE syntax would be as follows: UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE _idColumn=[IdColumnToken]. _Can contain My Tokens and tokens that refer to field names (for example [Id], [Firstname], etc).
    * <strong>Note: </strong>Be careful when updating records in a table! Notice the WHERE clause in the UPDATE statement. The WHERE clause specifies which record(s) that should be updated. If you omit the WHERE clause, all records in the table will be updated!
* SQL Query for Deleting Items - The SQL statement used to delete existing records in the datasource table. The DELETE syntax would be as follows: DELETE FROM _table_name _WHERE _idColumn=[IdColumnToken]. _Can contain My Tokens and tokens that refer to field names (for example [Id], [Firstname], etc).
    * <strong>Note: </strong>Be careful when deleting records in a table! Notice the WHERE clause in the DELETE statement. The WHERE clause specifies which record(s) that should be deleted. If you omit the WHERE clause, all recods in the table will be deleted!
* ID Column - the column that uniquely identifies each row from the database.
* Order By - the ORDER BY clause used to sort the result-set in ascending or descending order. The ORDER BY syntax would be as follows: Column1 DESC. Can contain My Tokens.
* Add Url - it offers the possibility to provide an URL where new rows can be inserted. Note that you'll also have to create an ADD button in the Buttons section.
* Edit Url - it offers the possibility to provide an URL where a selected row can be edited. Can contain My Tokens and tokens that refer to field names (for example [Id], [Firstname], etc). Note that you'll also have to create an EDIT button in the Buttons section.
* View Url - it offers the possibility to provide an URL where an entry can be viewed. Can contain My Tokens and tokens that refer to field names (for example [Id], [Firstname], etc). Note that you'll also have to create a VIEW button in the Buttons section.