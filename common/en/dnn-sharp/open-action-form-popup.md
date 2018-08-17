# Open module Popup

This action will allow you to manually trigger an open popup action for the specified module\(Form/TabsPro\).

Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **\[SomeField\] == "Some Value"**. This field supports **My Tokens**. 
* **Select Module**. Select the module that you wish to open in popup \(Form or TabsPro based on the action selected: Open Action Form Popup, Open TabsPro Popup\).
* **QueryString Parameters**.  Optionally you can pass parameters through querystrings that can then be used in the module that is currently being opened in popup; their values can be referenced as tokens with 'QueryString:' namespace.

![](http://static.dnnsharp.com/documentation/open_module_popup.png)

Using the javascript API you can open Action Form in popup by calling the next javascript method

**dnnsf.api.actionForm.openPopupById\('1234', {'param':'valueofparam','param2':'valueofparam2'},true\)**

First parameter is required and is the module id of the Action Form

The second parameter is optional and it is a JS object. After the Action Form init the values can be used by calling the QueryString token \(eg. \[QueryString:param\]\).

The third parameter is optional and tells Action Form if the module should be reinitialized \(refreshed\). This can be used when you want to refresh the form so it can use the values from the second parameters. Show Condition and Enable Condition are refreshed as well. Default is false.

