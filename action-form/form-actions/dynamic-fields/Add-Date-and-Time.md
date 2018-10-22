# Add-Date-and-Time

This action will add a slider to the specified dynamic container.

## DateTime Picker Type

Choose a picker type. If dynamic, input as expression, one of following values:

"MM/dd/yyyy" for Date,

"HH:mm" for Time,

"MM/dd/yyyy HH:mm" for both Date and Time.

Supports [My Tokens](/my-tokens/index.html)

## DateTime Format

Optionally, provide a custom date/time format, the default format is MM/dd/yyyy HH:mm. Leave empty to take the server locale default format.

Supports [My Tokens](/my-tokens/index.html)

## Other Options for Datepicker (JSON)

Optionally provide a JSON object with other options to pass into the Date Picker options.

For example, write { showWeeks: true }, please check the [documentation](https://github.com/Gillardo/bootstrap-ui-datetime-picker){:target="_blank"}

Supports [My Tokens](/my-tokens/index.html)

## Other Options for Timepicker (JSON)

Optionally provide a JSON object with other options to pass into the Time Picker options.

Please check the [documentation](https://github.com/Gillardo/bootstrap-ui-datetime-picker){:target="_blank"}

Supports [My Tokens](/my-tokens/index.html)

## Is Required

Specify if this field is required.

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