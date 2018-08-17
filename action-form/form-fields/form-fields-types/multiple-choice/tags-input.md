### Tags Input

The Tag Input field allows users to type a list of keywords and an autocomplete suggestion list is displayed while typing matching values.

On submit, it will generate a comma-delimited list of tag and the following tokens are available: \[&lt;FieldName&gt;\] \(which yields the value\), \[&lt;FieldName&gt;:Text\], \[&lt;FieldName&gt;:Value\].

### Options

* Datasource
  * Choose from existing data sources or provide values into the Item List area; Input one item per line. If you need to provide different text and value, then separate them by pipe. Can contain [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).
* Initial Tags

  * Comma delimited list with tags to load into the control initially. Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens) so you can pull data from various sources such as user profile.

* Limit Number of Tags

  * this option limits the number of tags which a user is allowed to submit. Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

* Limit Number of Suggestions

  * this option limits the number of typeahead suggestions that appear in the suggestions panel. Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_15-39-15.png)

