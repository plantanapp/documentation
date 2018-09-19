# Add-Multiple-Choice-with-Radio-Buttons

This action will add a Multiple Choice with Radio Buttons to the specified dynamic container.

## Display Horizontally

Turn on this option to display radioboxes next to one another on the same line. Use 1/0 or true/false .
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Data Source

Required. Choose from existing data sources to bring items from

* Tokenize Datasource Parameters
    * Tokenize the parameters of the datasource when generating the field. (Otherwise the tokenization happens when the initialization process ends.) If you are generating fields using tokens from an Execute Actions on Entity list the token replacement will happen after all initialization actions so tokens used in datasource parameters (eg. SQL Query with a query containing tokens from current context) might not be replaced correctly.

## Custom Validator #1/#2

Here you select a custom validator for the specific field.