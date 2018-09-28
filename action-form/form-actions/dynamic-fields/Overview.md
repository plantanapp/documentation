# Dynamic Fields

Is a feature that allows the user to create on the initialization of the form different fields depending on what they what to display for a specific reason.

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
