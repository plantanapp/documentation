## Apply Tokens

The Apply Token action can be used when a form is submitted, and it can be very useful when used with My Tokens, where tokens can contain business logic that generates and saves data.

Using this Action you can edit the following fields:

* **Description**
  . A short description for the action. Only admins will be able to see this field.
* **Error Message**
  . An error message that will be displayed in case if a error occurs in this action.
* **Condition**
  . This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is \[SomeField\] == "Some Value". This field supports My Tokens.
* **Tokens**
  . Token expressions to execute. Supports My Tokens.
* **Number of Recursions**
  . Specify how many times to apply tokenization for each token above.    

![](https://static.dnnsharp.com/documentation/apply_tokens.png)

