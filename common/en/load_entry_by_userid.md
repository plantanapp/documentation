### Load Entry \(by UserID\)

This action looks up the most recent submission of a user and redirects to the form with a specific record already loaded. Submiting the form will update that record instead of creating a new one.

Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is \[SomeField\] == "Some Value". This field supports My Tokens.
* **UserId**. An user ID, username or email address that identifies the user. Leave blank to load data for current user. Can contain form tokens \(for example **\[Email\]**\) and **My Tokens**.

![](http://static.dnnsharp.com/documentation/load_entry_user_ID.png)

