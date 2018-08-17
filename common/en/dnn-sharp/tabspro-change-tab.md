# TabsPro Integration - Change Tab

This action will allow you to change tabs in a TabsPro module on a Form/Grid's button press.

Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **\[SomeField\] == "Some Value"**. This field supports **My Tokens**. 
* **TabsPro Module**. Select the TabsPro module to which the action refers to; if an expression is passed you will need to pass the TabsPro ModuleID. Supports My Tokens.
* **Tab**.  Select the tab to which you wish to change; if an expression is passed you will need to pass the TabsPro tabID. Supports My Tokens.

![](http://static.dnnsharp.com/documentation/change_tab.png)

