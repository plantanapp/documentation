# Filter Action Grid

This action refresh an Action Grid module without page reload \(if it's on same page\) with the option to change sorting, pagination and filtering.

You can edit the following fields:

* **Description**
  . A short description for the action. Only admins will be able to see this field.
* **Error Message**
  . An error message that will be displayed in case if a error occurs in this action.
* **Condition**
  . This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is \[SomeField\] == "Some Value". This field supports My Tokens.

![](//static.dnnsharp.com/documentation/filter_ag_1.png)

* **Action Grid Module**
  . The selected grid will be refreshed/filtered.
* **Page Size**
  . Change the number of elements\(rows\) that will be shown in grid after refresh.    
* **Sort By**
  . Field that you want the Grid to be sorted by\(ascending\); enable the Descending checkbox in order to sort descending by the same column.
* **Search Terms**
  . Grid will automatically search for the characters passed by this field.  

![](//s3.amazonaws.com/static.dnnsharp.com/documentation/filter_ag_2.png)



