# Close module Popup

This action will allow you to manually trigger a close popup action for the specified module\(Action Form/TabsPro\).

Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **\[SomeField\] == "Some Value"**. This field supports **My Tokens**. 
* **Select Module**. Select the module for which you want to trigger a close popup action \(Form or TabsPro based on the action selected: Close Action Form Popup, Close TabsPro Popup\).

![](http://static.dnnsharp.com/documentation/close_module_popup.png)

