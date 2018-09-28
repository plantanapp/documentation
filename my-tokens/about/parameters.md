# Parameters

My Tokens extends [standard DotNetNuke replacer syntax](../overview/about.html) to support passing parameters into the token definition. The syntax is as follows:

    [Namespace:TokenName(ParamName1=123)]  (ParamName1 is a number)
    [Namespace:TokenName(ParamName1=[Other:Token])]  (nested tokens allowed)
    [Namespace:TokenName(ParamName1=123, ParamName2="Some text")]  (ParamName2 is a string)

Note the parameters named *ParamName1* and *ParamName2*. The value of each parameter follows after the equal sign. Parameters can be numbers or texts. Notice how text parameters need to be enclosed withing quotation marks. There is no type checking so you can actually put numbers between quotes too, or miss the quotes for single words, but it's recommended you follow the good practices and always use the quotes for text.

A parameter can also contain other tokens making it very powerful to build dynamic tokens and also write modular tokens. For example, when creating a token against a private Web Service it's recommended that you create a token that gets the authentication token, then another token that gets the value passing the authentication token with the request. For more information take a look at [Using Google API](../how-to/google-api.html).

There is no limit on the number of parameters you can pass to a token definition. They're all available through a new data source called *TknParams*. In the example above, the parameters are access using ``[TknParams:ParamName1]`` and ``[TknParams:ParamName2]`` token. Note that this will be a simple text replace. There is no syntax or type checking, so based on what you're trying to achieve you may need to apply additional elements. For example, don't forget to add quotes to an SQL query that looks like:

```sql
Select Column1 from Table where TextColumn='[TknParams:ParamName2]'
```

Important: When defining custom tokens and passing parameters around, make sure you don't create infinite recursion by having token call each other.

The token parameters also accept default values using same syntax as regular tokens. For example, ``[TknParams:Name="Something"]`` will default to "*Something*" when nothing is passed in.

## Parameter Delimiters

Parameters can have support different types of delimiters for different scenarios you might need. MyTokens currently supports the following delimiters:

* "
* '  
* &#34; 
* &#39; 
* &quot; 
* or no separator at all

A parameter value is considered everything between the delimiter in front of it until the first delimiter of the same type found. A token parameter can contain any of the other delimiters it is not using (for example if you use the " " delimiters your parameter can contain ',  &#34;,  &#39;  or   &quot;

Note that if you do not use a delimiter and your token parameter contains , or ) it will break since when it finds the , it will expect another parameter and when it finds ) it expects to finish parsing the token parameters.

## Parameters in Razor Scripts

Razor scripts also accept parameters. These will be available through the ``@TknParams`` object. So, if you were to call the razor token like this ``[My:Script(Message="This is it")]``, then the parameter can be used inside the token using @TknParams.Message construct.

You can also call a token with parameters from inside a razor script. For example to call this token ``[My:Script(Message="This is it")]`` from inside a razorscript, the syntax is: ``@My.Script(Message:"This is it")``.

It's also possible to specify default values for Razor tokens. The syntax is different than how you set default values in regular tokens, because Razor scripts need to follow C# or VB.NET gramatic. The solution we came with is ti invoke the token as a function, like this: ``@TknParams.Message("Default value")``.

#### Default Value Alternatives
```c#
@{
string firstValue = namespace.token.ToString();
string defaultValue = TknParams.DefaultValue.ToString();
}

@if (@firstValue != "")
 @firstValue
else
 @defaultValue
```

or

```c#
@{
string value = namespace.token.ToString();
if (value == "")
 value = TknParams.DefaultValue.ToString();
}

@value
```

or

```c#
@if (@namespace.token.ToString() != "") // here a .ToString() is needed for the comparison
 @namespace.token
else
 @TknParams.DefaultValue
```

And use *"[namespace:NoValue(DefaultValue=YourDefaultValue)]"* to parse a value.