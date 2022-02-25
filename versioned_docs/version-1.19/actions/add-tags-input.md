---
id: add-tags-input
title: Add  Tags Input
sidebar_label: Add  Tags Input
---


This action will add a tags input field to the specified dynamic container.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Container Id | This is the Container Id to place this hidden field into. Eg. Add a Dynamic Field Container having id DynamicFieldContainer. "DynamicFieldContainer" is the ID of the field. Supports My Tokens. | Yes | None |
| Field Id | Required. Give this field an id so you can reference it later. Supports My Tokens. | Yes | None |
| Field Description | Give this field a description. Supports My Tokens. | Yes | None |
| Field Title | Give this field an title/name which is a label. Supports My Tokens. | Yes | None |
| Data Source | Required. Choose from existing data sources to bring items from | No | None |
| Tokenize Datasource Parameters | Tokenize the parameters of the datasource when generating the field. (Otherwise the tokenization happens when the initialization process ends.) If you are generating fields using tokens from an Execute Actions on Entity list the token replacement will happen after all initialization actions so tokens used in datasource parameters (eg. SQL Query with a query containing tokens from current context) might not be replaced correctly. | No | True |
| Initial Tags | Comma delimited list with tags to load into the control initially. Supports My Tokens so you can pull data from various sources such as user profile. | Yes | None |
| Limit Number of Tags | Limit the number of tags a user is allowed to submit. Supports My Tokens. | Yes | None |
| Bind Expression - Show | Dynamically show or hide this field. This must be a boolean expression. Use standard javascript boolean operators (==, !=, &#x3C;,&#x3E; , !). For example, use [PaymentMethod] == &#x27;CreditCard&#x27; to show the credit card field only when the Payment Method is set accordingly. Supports My Tokens. | Yes | None |
| Bind Expression - Value | Dynamically compute the value of this field. So when other fields change this fields updates automatically. Use standard javascript operators where needed (+, -, *, /). For example, use [FirstName] &#x27; &#x27; [LastName] to automatically fill the Display Name field. Note that once the value is edited manually, the automatic synchronization stops. Supports My Tokens. | Yes | None |
| Bind Expression - On Change/Click | Bind some javascript code to execute when the value in this field changes or when a button is clicked. Access the form fields by using syntax [FieldId] which maps to the js object form.fields.FieldId.value. For buttons, you can &#x22;return false;&#x22; to prevent the form from submitting. Supports My Tokens. | Yes | None |
| Tokenize Bind Expressions? | Check this box in order to tokenize the Bind Expressions fields. This is useful when you dynamically compute the id values so you need to tokenize and obtain the real IDs first. | No | None |
| Field ID Token Name | Similarly to normal fields, the ID is the name/inputted id sanitized. This means that if you dynamically generate id's, they might contain spaces or other invalid characters. For this, we output the sanitized id of the field. Give a name to this token which holds the sanitized ID. | No | None |
