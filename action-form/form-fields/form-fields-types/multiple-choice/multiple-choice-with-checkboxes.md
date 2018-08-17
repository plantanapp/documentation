# Multiple Choice \(with Checkboxes\)

The Checkboxes field is a checkbox group, which contains a list of items, and the label of the group is the title displayed on front-end. The most common scenario of its using is to ask the user a question and give the user the opportunity to select one or more of the predefined answers.

On submit, this field will generate the following tokens: \[&lt;FieldName&gt;\] \(which yields the value\), \[&lt;FieldName&gt;:Text\], \[&lt;FieldName&gt;:Value\], \[&lt;FieldName&gt;:JsonArray\]. Note that if your options don't have a value \(there's nothing after the pipe character in the list below\), then all the tokens above will return same value.

### Options:

* Display Horizontally

  * this option enables you to display checkboxes next to each other on the same line.

* Link To

  * Link this to another multi-select field that when changed will cause this control to update with different items. For example, imagine Category and Subcategory selection. When this option is used, prefix each item below with the name of the parent category like this: "Value Of Parent Item/This Item". 

* Datasource

  * Choose from existing data sources or provide values into the Item List area; Input one item per line. If you need to provide different text and value, then separate them by pipe. Can contain [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

* Initially Checked

  * Determines which of the check boxes are initially selected. Possible values are from the  Item list. Separate multiple values with semicolon \(;\) characters. Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens) so you can pull data from various sources such as user profile.

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_14-07-14.png)

