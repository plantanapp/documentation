# Add-Dropdown-with-Checkboxes

This action will add a Dropdown with Checkboxes to the specified dynamic container.

## Data Source

Required. Choose from existing data sources to bring items from

* Tokenize Datasource Parameters
    * Tokenize the parameters of the datasource when generating the field. (Otherwise the tokenization happens when the initialization process ends.) If you are generating fields using tokens from an Execute Actions on Entity list the token replacement will happen after all initialization actions so tokens used in datasource parameters (eg. SQL Query with a query containing tokens from current context) might not be replaced correctly.

## Count Selections

Checked(input '1' or 'true' - case insensitive) - The input will show the number of selected items.
Unchecked(input '0' or 'false' - case insensitive) - The input will show the text of the selected items, separated by comma.
Supports [My Tokens](/my-tokens/index.html)

## Bind Expression - Show

Dynamically show or hide this field. This must be a boolean expression. Use standard javascript boolean operators (==, !=, <,> , !). For example, use [PaymentMethod] == 'CreditCard' to show the credit card field only when the Payment Method is set accordingly.
Supports [My Tokens](/my-tokens/index.html)

## Bind Expression - Value

Dynamically compute the value of this field. So when other fields change this fields updates automatically. Use standard javascript operators where needed (+, -, *, /). For example, use [FirstName] + ' ' + [LastName] to automatically fill the Display Name field. Note that once the value is edited manually, the automatic synchronization stops.
Supports [My Tokens](/my-tokens/index.html)

## Bind Expression - On Change/Click

Bind some javascript code to execute when the value in this field changes or when a button is clicked. Access the form fields by using syntax [FieldId] which maps to the js object form.fields.FieldId.value. For buttons, you can "return false;" to prevent the form from submitting.
Supports [My Tokens](/my-tokens/index.html)

* Tokenize Bind Expressions?
    * Check this box in order to tokenize the Bind Expressions fields. This is useful when you dynamically compute the id values so you need to tokenize and obtain the real IDs first.

## Custom Validator #1/#2

Here you select a custom validator for the specific field.