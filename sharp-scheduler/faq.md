# FAQ

**How to send email using Load Users into context Action**

1. create a cron job
2. optionally add a trigger
3. add Load Users from SQL action
4. use ``SELECT * from Users``
5. add Send Email action
6. check "Send mail to all users" option
7. run the cron

**How to use external databases on Run SQL Query**

1. create a cron job
2. optionally set a trigger
3. add Run SQL Query action
4. set on "Other Connection String" field the connection string details from the web.config file of the site you want to use. What you are looking for is this:
``Data Source=(local);Initial Catalog=test;User ID=myuser;Password=mypassword!``

**How to schedule tasks for tables created in different database schema**

1. create a schema
2. create a new database table > change the schema to the previously created schema
3. create a cron job
4. add some Database triggers
5. select on Table Name the table previously created on the new schema