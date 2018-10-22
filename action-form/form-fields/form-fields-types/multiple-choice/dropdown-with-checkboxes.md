# Dropdown with Checkboxes

This field adds an attractive dropdown list which displays Items with a Check Box in front of their names.

It allows users to select values from a list. On submit, this field will generate the following tokens: \[&lt;FieldName&gt;\] \(which yields the value\), \[&lt;FieldName&gt;:Text\], \[&lt;FieldName&gt;:Value\], \[&lt;FieldName&gt;:JsonArray\]. Note that if your options don't have a value \(there's nothing after the pipe character in the list below\), then all will return the same value.

### Options:

* Link To 
  * Link this to another multi-select field that when changed will cause this control to update with different items. For example, imagine Category and Subcategory selection. When this option is used, prefix each item below with the name of the parent category like this: "Value Of Parent Item/This Item". 
* Datasource 
  * Choose from existing data sources or provide values into the Item List area; Input one item per line. If you need to provide different text and value, then separate them by pipe. Can contain [My Tokens](/my-tokens/index.html).
* Initially Checked

  * Determines which of the check boxes are initially selected. Possible values are from the  Item list. Separate multiple values with semicolon \(;\) characters. Supports [My Tokens](/my-tokens/index.html) so you can pull data from various sources such as user profile.

* Count selections

  * Checked - The input will show the number of selected items.

  * Unchecked - The input will show the text of the selected items, separated by comma.

  ![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-10_16-08-11.png)



