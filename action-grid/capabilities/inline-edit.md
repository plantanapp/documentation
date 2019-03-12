---
layout: default
---

# Inline Edit

Inline edit fields appear when using Inline Edit or Inline Add actions. The grid turns into editable fields that are updated in the datasource when saved using the specified INSERT or UPDATE datasource fields (if exists). Some datasources (like `Server Request (JSON)` datasource) do not support add or edit.

## Field Type

You can select from a variety of field types which enforces a data format and display:

![Field Type](/action-grid\capabilities\images\field-type.png)

* -- Auto determine from data source --
* Checkbox
* Colorpicker
* Datepicker
  
![Datepicker](/action-grid\capabilities\images\datepicker.png)

* Dropdown
  
![Dropdown](/action-grid\capabilities\images\dropdown.png)

* Dropdown with Checkboxex
* Password
* Textarea
* Textbox

## Initial Value

If the value of the input field is computed from other grid fields, use this field to map to it's value. One common scenario is using a dropdown which has an ID value contained in another field. Supports [MyTokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens) and grid tokens.

**Note:** `Initial Value` does NOT work with `Inline Add` action!

## Validation

To ensure your data integrity, you can also validate the inputs, by selecting one or more validators fom the following predefined list:

* Date US (mm/dd/yyyy)
* Email Address
* Floating Point Number
* Integer Number
* One Word
* No Whitespace
* US Phone (###) ###-####
* RegEx
* Required Field
* Web Address
* User exists (by email)
* Username is Available
* Words Only