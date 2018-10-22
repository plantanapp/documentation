# Browse Data from Action Grid

This action will allow you to open an Action Grid module in popup and retrieve data from it to populate Action Form fields.

You can edit the following fields:

* **Description**
  . A short description for the action. Only admins will be able to see this field.
* **Error Message**
  . An error message that will be displayed in case if a error occurs in this action.
* **Condition**
  . This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is \[SomeField\] == "Some Value". This field supports My Tokens.
* **Action Grid Module**
  . The selected grid will be opened in a popup where you can pick the row to get values for Action Form fields.
* **Mappings**
  . Link Grid columns to Form fields: this will determine which Grid data will go to which Form field.    

![](//static.dnnsharp.com/documentation/browse_data_from_grid.png)



