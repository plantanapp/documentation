---
id: add-hidden-field-with-custom-value
title: Add Hidden Field with Custom Value
sidebar_label: Add Hidden Field with Custom Value
---


This action will add a hidden field with custom value to the specified dynamic container.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Container Id | This is the Container Id to place this hidden field into. Eg. Add a Dynamic Field Container having id DynamicFieldContainer. "DynamicFieldContainer" is the ID of the field. Supports Tokens. | No | None |
| Field Id | Required. Give this field an id so you can reference it later. Supports Tokens. | No | None |
| Field Description | Give this field a description. Supports Tokens. | No | None |
| Field Title | Give this field an title/name which is a label. Supports Tokens. | No | None |
| Initial Value | Give this field an initial value. Supports Tokens. | No | None |
| Secure Input | The value of the input will be HTML sanitized upon submit. For more information check the documentation. | No | true |
| Bind Expression - Show | Dynamically show or hide this field. This must be a boolean expression. Use standard javascript boolean operators (==, !=, &#x3C;,&#x3E; , !). For example, use [PaymentMethod] == &#x27;CreditCard&#x27; to show the credit card field only when the Payment Method is set accordingly. Supports Tokens. | No | None |
| Preserve Layout? | Check this box in order to make sure hiding/showing fields will not affect the layout of the form. | No | None |
| Bind Expression - Value | Dynamically compute the value of this field. So when other fields change this fields updates automatically. Use standard javascript operators where needed (+, -, *, /). For example, use [FirstName] &#x27; &#x27; [LastName] to automatically fill the Display Name field. Note that once the value is edited manually, the automatic synchronization stops. Supports Tokens. | No | None |
| Bind Expression - On Change/Click | Bind some javascript code to execute when the value in this field changes or when a button is clicked. Access the form fields by using syntax [FieldId] which maps to the js object form.fields.FieldId.value. For buttons, you can &#x22;return false;&#x22; to prevent the form from submitting. Supports Tokens. | No | None |
| Tokenize Bind Expressions? | Check this box in order to tokenize the Bind Expressions fields. This is useful when you dynamically compute the id values so you need to tokenize and obtain the real IDs first. | No | None |
| Field ID Token Name | Similarly to normal fields, the ID is the name/inputted id sanitized. This means that if you dynamically generate id's, they might contain spaces or other invalid characters. For this, we output the sanitized id of the field. Give a name to this token which holds the sanitized ID. | No | None |
