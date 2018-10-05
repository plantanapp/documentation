### Unauthorize User

It does exactly what it says, with the click of a button. For this action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **\[SomeField\] == "Some Value"**. This field supports **My Tokens**. 
* **EntryId**. A guid that uniquely identifies an entry. Can contain form tokens \(for example **\[Email\]**\) and **My Tokens**.
* **Input**. Can contain form tokens \(for example **\[Email\]**\) and **My Tokens**.

![](http://static.dnnsharp.com/documentation/UnauthorizeUser.png)

