# Currency

This field displays a floating point value as a currency amount. Tokens generated: `[<FieldName>]` - with the floating point value, `[<FieldName>:Currency]`, `[<FieldName>:Precision]`. When in manual formatting mode, additional tokens are generated: `[<FieldName>:ThousandsSeparator]`, `[<FieldName>:DecimalSeparator]`.

## Initial Value

The fields loads initially having this value. Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"} so you can pull data from various sources such as user profile.

## Formatter Type

Here you can select if you want to manually set the format type or if you want to be determinated automatically.

## Currency Type

For auto formatter please check the [supported currency code list](https://www.currency-iso.org/en/home/tables/table-a1.html){:target="_blank"}. Can contain form tokens (for example [Email]) and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Currency symbol position

You can set if you want the symbol to be shown first or after the amount.

## Thousands separator

Can contain form tokens (for example [Email]) and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Decimal separator

Can contain form tokens (for example [Email]) and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Precision

How many decimal places are allowed. Can contain form tokens (for example [Email]) and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

#### Symbol visible on blur

Set if the symbol will stay in the field after the user exits the field.

#### Caret at the end

Place caret at the end of the input on focus.

#### Format on blur

Delay formatting of text field until focus leaves the field.

#### Allow zero

Allow users to put the input zero in the field.

#### Allow negative

Allow users to input negative values.

#### Allow empty

Allow empty input values, so that when you delete the number it doesn't reset to 0.00.

#### Double click selection
  
Select text in the input on double click.

#### Select all on focus

Select all text in the input when the element fires the focus event.

#### Readonly

The field will be Readonly.

#### Save to Report

The field will be saved in Reports.