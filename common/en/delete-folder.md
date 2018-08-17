# Delete Folder

This action allows you to delete a specific folder\(and all subfolders - optionally\).

You can edit the following fields:

* **Description**
  . A short description for the action. Only admins will be able to see this field.
* **Error Message**
  . An error message that will be displayed in case if a error occurs in this action.
* **Condition**
  . This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is \[SomeField\] == "Some Value". This field supports My Tokens.
* **Identifier**
  . It can be: The folder ID \(Example: 77\), the folder path \(Example: Images/Cars/\) or the folder path from current portal \(Example: Portals/0/Images/Cars/\). Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).
* **Recursive**
  . Enable this checkbox to enable deleting subfolders and their content.    

![](http://static.dnnsharp.com/documentation/delete_folder.png)

