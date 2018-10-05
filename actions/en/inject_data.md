### Inject Data

This action lets you add to data manually into the context. You can use the data afterwards using the token syntax, for example **\[Name\]**.

Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is \[SomeField\] == "Some Value". This field supports My Tokens.
* **Data**. Input the Name and Value for each data you want to inject. It can be accessed later by using \[NameHere\] tokens. Note that if data with same name already exists, it will get overwritten. Can contain tokens \(for example \[Email\]\) and My Tokens.

![](https://static.dnnsharp.com/documentation/inject_data.png)

