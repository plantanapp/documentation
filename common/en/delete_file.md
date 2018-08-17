### Delete File

Using this action you can set the module to delete a file on a specific action. Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **\[SomeField\] == "Some Value"**. This field supports **My Tokens**. 
* **Identifier**. Identifier for the file. It can be: The file ID. \(Example: 77\) The file path \(Example: Images/Cars/Ford.jpg\) The file path from current portal \(Example: Portals/0/Images/Cars/Ford.jpg\). Supports My Tokens.

![](http://static.dnnsharp.com/documentation/delete_file.png)

