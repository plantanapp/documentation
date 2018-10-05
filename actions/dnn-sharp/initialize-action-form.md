# Initialize Action Form

This action will allow you to manually trigger an Action Form module initialization.

It is very useful in situations when you have multiple Form modules on the same page and you set their state to not be initially visible; this way the forms do not load and therefore they do not take up bandwidth \(your page will load a lot faster\) while allowing you initialize them\(wake them up\) when they are needed.

IMPORTANT! The page will not be refreshed when form is initialized.

Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **\[SomeField\] == "Some Value"**. This field supports **My Tokens**. 
* **Select Module**. Select the Action Form module that you wish to initialize.
* **QueryString Parameters**.  Optionally you can pass parameters through querystrings that can then be used in other modules.

![](http://static.dnnsharp.com/documentation/init_form.png)

