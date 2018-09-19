# Add-Checkbox(True/False)

This action will add a checkbox to the specified dynamic container.

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