# Conditions

This features provide the ability to show/enable fields/actions based on a boolean expression. Depending on the condition type it will be executed real time or on the server side. All condition options support [MyTokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens)
Please note that all server side conditions will also put the value between quotation marks so the following expression might break:
`"SomeValue" = "[SomeToken] something else"`

### Actions

The Condition option runs on server side, is C# code and can contains tokens (default tokens or custom tokens). Based on the result of this expression the action will be either executed or ignored.

### Fields

In other words, "Show Conditionally" applies from the server side, it supports C# syntax. It's not real time. It evaluates on form load and on button clicks. But you have the power of everything that's on the server, including My Tokens.     

Please note that if "Show Conditionally" returns false then the field value will not be saved in the reports.

Enable Conditionally option applies from the server side, it supports C# syntax. It's not real time. It evaluates on form load and on button clicks. But you have the power of everything that's on the server, including My Tokens.

### Fields - Bind Expressions

The Show option runs on client side, is JavaScript code, you can use `[FieldId]` from your form. In this option you can display the field depending on other fields from your form.

"Bind Show" applies from client side, through JavaScript and Angular JS. It's real time. But obviously you don't have access to server side objects, such as My Tokens. This is good to show/hide fields based on values in other fields.

Please note that if the "Show" condition returns false then the field value will not be saved in the reports.

### Examples

Using tokens
- `[User:UserId] == 2`  The field will be displayed if the `UserId = 2` (default token)
- `[HasRole:MyRole|true]` The field will be displayed if the user has the role "MyRole". The HasRole token requires MyTokens

Using fields
- having a text box SomeText: `[SomeText] == "Some Value"`
- having a check box CheckboxFieldId : `[CheckboxFieldId] == true`

Using complex expressions
-    `[AgreedToTerms] && [Signature] == [Name]`
-    `[AgreedToTerms] && ([Signature] == [Name] || [SignLaterAtYourOffice])`