---
layout: default
---

# Formula Fields

![add-formula](\action-grid\fields\assets\add-formula.png)

## Title

Modify the title of this field.

## Visible On

Select the device resolution for the field.

## Capabilities

Pick which proprieties the field should have.

## Template

Create a specific template for the field.

Compute a numeric value by referencing grid fields and tokens. For example, [Qty] * [Price] + [MyCustomToken:ThatReturnsTaxes].
This is a server side expression (C# and My Tokens. See More examples.)

## Formating

![formatting](/action-grid\fields\assets\formatting.png)

## Field Condition

This is a server side expression (C# and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens)) that programatically hides an entire column. As it applies to entire the column, specific tokens that relate to a particular row are not available. See [More examples](/common/conditions.html).

## Cell Condition

This is a server side expression (C# and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens)) that programatically hides an entire column. As it applies to entire the column, specific tokens that relate to a particular row are not available. See [More examples](/common/conditions.html).

## Enable Conditionally

This boolean expression is used to determine if this field will be enabled (accepting input). A common example is [SomeField] == "Some Value". This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).


## Enable Field Tooltip

![tooltip](/action-grid\fields\assets\enable-tooltip.png)