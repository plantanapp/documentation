# Add-Large-Text

This action will add a large text to the specified dynamic container.

## Container Id

This is the Container Id to place this checkbox into. Eg. Add a Dynamic Field Container having id DynamicFieldContainer. "DynamicFieldContainer" is the ID of the field.
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Field

Required. Give this field an id so you can reference it later.
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Field Title

Give this field an title/name which is a label.
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Field Description

Give this field a description.
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Initial Value

Give this field an initial value.
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## CSS Class

Set CSS classes on the input control. This is appended to the container's UI settings!
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## CSS Style

Set inline styles on the input control. This is appended to the container's UI settings!
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Label CSS Class

Set CSS classes on the input label. This is appended to the container's UI settings!
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Label CSS Styles

Set inline styles on the input label. This is appended to the container's UI settings!
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Field ID Token Name

Similarly to normal fields, the ID is the name/inputted id sanitized. This means that if you dynamically generate id's, they might contain spaces or other invalid characters. For this, we output the sanitized id of the field. Give a name to this token which holds the sanitized ID.

## Bind Expression - Show

Dynamically show or hide this field. This must be a boolean expression. Use standard javascript boolean operators (==, !=, <,> , !). For example, use [PaymentMethod] == 'CreditCard' to show the credit card field only when the Payment Method is set accordingly.
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Bind Expression - Value

Dynamically compute the value of this field. So when other fields change this fields updates automatically. Use standard javascript operators where needed (+, -, *, /). For example, use [FirstName] + ' ' + [LastName] to automatically fill the Display Name field. Note that once the value is edited manually, the automatic synchronization stops.
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Bind Expression - On Change/Click

Bind some javascript code to execute when the value in this field changes or when a button is clicked. Access the form fields by using syntax [FieldId] which maps to the js object form.fields.FieldId.value. For buttons, you can "return false;" to prevent the form from submitting.
Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

* Tokenize Bind Expressions?
    * Check this box in order to tokenize the Bind Expressions fields. This is useful when you dynamically compute the id values so you need to tokenize and obtain the real IDs first.