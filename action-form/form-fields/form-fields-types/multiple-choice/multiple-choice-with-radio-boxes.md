# Multiple Choice \(with Radio boxes\)

A multi-purpose field used to allow the user to "choose" one or more options. It can be rendered as radio boxes or as radio buttons.  
On submit, this field will generate the following tokens: \[&lt;FieldName&gt;\] \(which yields the value\), \[&lt;FieldName&gt;:Text\], \[&lt;FieldName&gt;:Value\]. Note that if your options don't have a value \(there's nothing after the pipe character in the item list\), then all the tokens above will return same value.

### Options:

* Display Horizontally

  * this option enables you to display radioboxes next to each other on the same line.

* Link To

  * Link this to another multi-select field that when changed will cause this control to update with different items. For example, imagine Category and Subcategory selection. When this option is used, prefix each item below with the name of the parent category like this: "Value Of Parent Item/This Item". 

* Datasource

  * Choose from existing data sources or provide values into the Item List area; Input one item per line. If you need to provide different text and value, then separate them by pipe. Can contain [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

* Radio Buttons

  * this option transforms the circles into inline-buttons.

* Radio Buttons CSS Classes

  * beautifies the radio buttons using Bootstrap classes. It supports Bootstrap brand button classes \(eg: btn-default, btn-primary, btn-success, btn-info , btn-warning, btn-danger, btn-link\). Available only if "Radio Buttons" is checked.

* Radio Buttons styles

  * stylizes the radio buttons using CSS. It supports multiple css attributes separated by semicolon \(eg: border:2px groove; border-radius:25px; color:\#e42f43; font-family:Georgia\). Available only if "Radio Buttons" is checked.

* Word between buttons

  * displays a text between the radio buttons. Available only if "Radio Buttons" is checked.

* Word styles

  * stylizes the word beetween buttons using CSS. It supports multiple CSS attributes separated by semicolon \(eg: color:\#e42f43; font-family:Georgia\). Accepts the font-size only in px. Available only if "Radio Buttons" is checked.

* Initially Checked

  * Determines which of the radio boxes is initially selected. Possible values are from the list above. Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens) so you can pull data from various sources such as user profile.   

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_15-14-07.png)

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_15-14-57.png)

