# Run SQL Query

This action executes an SQL statement, optionally capturing the output. This action supports context tokens and My Tokens inside the SQL query. 

Here are some common scenarios when you would use this action:

Use an **UPDATE** statement to calculate some statistics for large databases on an interval, instead of calculating them on every call. 

Execute a **SELECT** statement to retrieve data to be used with other actions down the stack. 
Flush old temporary data using a DELETE statement. 

Execute a **stored procedure** that calculates commissions paid through a referral program. 


![](assets/Run SQL Query.png)
