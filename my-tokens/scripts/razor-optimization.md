# RazorScript optimizations

**1) Debug Script**

When this option is turned on the token execution is a bit slower so the Debug Script Option should always be set to off after the token is ready for use.

**2) Script Body**

Here is the razor script body. You can also use other tokens here, preferably with the @TokenNamespace.TokenName syntax.

How MyTokens handles subtokens:

* [TokenNamespace:TokenName] subtokens
  - For this syntax MyTokens will tokenize the script body and with the result it creates an .dll file that will be used for tokenization.
* @TokenNamespace.TokenName syntax
  - For this syntax MyTokens recognizes the subtokens as variables inside the script to the .dll file associated will be created with the variables inside ( no tokenization beforehand)

All tokens inside the script body with the normal syntax [TokenNamespace:TokenName] should be replaced with the @ syntax.
This tokens run a little slower and depending on the script body MyTokens might need to create multiple .dll files for a token that contains subtokens written with this syntax.

As an example of how this optimization works:

* Syntax with []

Script example:

```c#
@{
string name = "Hello my name is " + "[TknParams:ParameterName]";
}
@name
```

Since the tokenization happens before the .dll file MyTokens creates a new file for each different parameter value it receives.

So if the token is used inside a module as *[TokenNamespace:TokenName(NameValue=[User:Username])]* , MyTokens will create a new .dll file for each user that needs/uses this token.
For 1000 users this means 1000 files.

* Syntax with @

Script example:

```c#
@{
string name = "Hello my name is " + @TknParams.ParameterName;
}
@name
```

Since the subtoken is seen as a variable a single .dll file is created.
So if the token is used inside a module as [TokenNamespace:TokenName(NameValue=[User:Username])] , MyTokens will create a single .dll file for all users that need/use this token.
For 1000 users this means only one file.