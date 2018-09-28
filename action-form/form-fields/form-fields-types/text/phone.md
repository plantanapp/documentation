# Phone

This field allows users to input a phone number while auto-detecting the country and showing its flag, validation is integrated by default. On submit, it will generate the following tokens:`[<FieldName>]` (which yields the value).

## Initial Value

Initial phone number.This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Initial Country

Initial country code. You need to set this if you use initial value.This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Preferred Countries

The countries to be shown at the top of the country dropdown. Input comma-separated values.This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

#### International Mode

Check this to enable international mode (which shows country dial codes in the input).Leaving this off provides a better experience for national sites.

#### Validation

Uncheck to disable phone field's own validation.