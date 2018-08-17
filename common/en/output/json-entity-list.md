# JSON Entity List

This action will allow you to to display/output the content of a JSON entity list \(in an array format\).

Here's what you can configure:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **\[SomeField\] == "Some Value"**. This field supports **My Tokens**. 
* **Entity Name**. Name of entity to serialize. Can contain context tokens, for example \[FieldId\], and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).
* **Http Code**. The http code that will be returned.
* **Criteria**. Provide criteria to determine which entries are removed.
* **HTTP Headers**. Can contain context tokens, for example \[FieldId\], and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

![](http://static.dnnsharp.com/documentation/output_json_entity_list.png)

