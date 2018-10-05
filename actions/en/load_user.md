### Load User

A form runs in the context of a user, it could be the current user performing the submit or it could be the result of other actions. This lets you manually set a user. Note that this is only valid for current action list - it does not persist until next list of actions executes, for example, on submit.

Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is \[SomeField\] == "Some Value". This field supports My Tokens.
* **User Identifier**. This could be the user ID, username or email. Can contain form tokens \(for example **\[Email\]**\) and **My Tokens**. One common scenario is to use **\[QueryString:UserId\]** to read the user from the URL via My Tokens.
* **Portal**. This could be the portal ID, portalname. Can contain form tokens \(for example \[Email\]\) and My Tokens. One common scenario is to use \[QueryString:UserId\] to read the user from the URL via My Tokens.

![](https://static.dnnsharp.com/documentation/load_user.png)

