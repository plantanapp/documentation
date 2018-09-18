# Data

## Run SQL Query

This action executes an SQL statement, optionally capturing the output. The SQL runs in the context of the DNN database, but there are plans to extend it to also allow a connection string or a connection string name that will make it possible to run in other databases as well – not restricted to SQL Server either. This action supports context tokens and [My Tokens](https://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"} inside the SQL query.

Here are some common scenarios when you would use this action:

* Use an UPDATE statement to calculate some statistics for large databases on an interval, instead of calculating them on every call. 
* Execute a SELECT statement to retrieve data to be used with other actions down the stack. 
* Flush old temporary data using a DELETE statement. 

Execute a stored procedure that calculates commissions paid through a referral program. Currently, only one field can be captured from an SQL action, so make sure that your query returns the data you need on first column of the first row. We may extend this in the future to be able to store multiple columns. As a work around, either create multiple SQL actions, or produce the final text output directly from the SQL query. For example, if you need the full name of a user, you can use something like:

``SELECT FirstName + ‘ ‘ + LastName from Users where UserId = [UserId]``

## Dynamic Connection String

If you want to use a token in the connection string field of the Run SQL Query action, you can use a connection string with the format

``Server=myServerAddress;Database=myDataBase;User Id=myUsername; Password=myPassword;``

## Server request

This action can be used to make an HTTP request to a different server, optionally sending data. Often, this means invoking a web service. Note that if you don’t run in Full Trust, this action requires that the Application Pool identity has Web Permission. The following fields can be configured: 

* URL. This represents the URL to make the request to. A common mistake is to forget to include the protocol. For example www.domain.com/webservice is wrong. Instead, use ``http://www.domain.com/websservice``. Optionally, append the query string directly to the URL after the question mark. For example ``http://www.domain.com/websservice?q=test&p=1``. This field supports context tokens and My Tokens.

* POST Data. This is data to send to the URL using POST operation. Put key=value pairs, each on a separate line. It’s also possible to post whole messages, for example and XML (that SOAP-like services expect) by simply putting the XML without any lines. This field supports context tokens and My Tokens.