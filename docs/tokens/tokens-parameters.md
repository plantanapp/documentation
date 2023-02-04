---
id: tokens-parameters
title: Parameters
sidebar_label: Parameters
---

### General Parameters

Plant an App supports passing parameters into the token definition. The syntax is as follows:

    [Namespace:TokenName(ParamName1=123)]  

Where `ParamName1` is a number.

    [Namespace:TokenName(ParamName1=[Other:Token])]

Nested tokens allowed.

    [Namespace:TokenName(ParamName1=123, ParamName2="Some text")]

Where `ParamName2` is a string.

Note the parameters named `ParamName1` and `ParamName2`. The value of each parameter is preceded by the equal ("`=`") sign. Parameters can be numbers or text. Notice how text parameters need to be enclosed within quotation marks: `" "`. Since there is no type checking, you can insert numbers between quotes or miss the quotes for single words. However, it is recommended that you follow good practices and always use the quotes for text.

A parameter can also contain other tokens, making it a powerful tool to build dynamic tokens and write modular tokens. For example, when creating a token against a private Web Service it is recommended that you create a token to get the authentication security token, then another token to pass the authentication token with the request. For more information take a look at the "**Using Google API**" page in the "**How To**" section.

There is no limit on the number of parameters you can pass with a token definition. They will all be available through a new data source called `TknParams`. In the example above, the parameters are accessed by using the `[TknParams:ParamName1]` and `[TknParams:ParamName2]` tokens. Note that this will be a simple text replace. There is no syntax or type checking, so based on what you are trying to achieve you might need to apply additional elements. For example, you will need to add quotes to an SQL query:

    Select Column1 from Table where TextColumn='[TknParams:ParamName2]'


:::caution

When defining custom tokens and passing parameters around, make sure that you don’t generate an infinite recursion by having tokens call each other.

:::

The token parameters also accept default values by using the same syntax as the regular tokens. For example: "`[TknParams:Name="Something"]`" will default to “Something” when no value is passed in.

### Parameter Delimiters

Parameters support different types of delimiters characters according to the various  scenarios in which you might want to use them. Plant an App tokens support the following delimiters:

    ”
    ’
    "
    '
    "

 -or no separator at all.


A *parameter value* is considered to be everything between two delimiters of the same type. A token parameter can contain any of the other delimiters it is not using. For example, if you use the `“ “` delimiters, your parameter can contain the following characters:


    ‘
    ,
    "
    '
    "


:::note

If you do not use a delimiter and your token parameter contains "`,`" or "`)`", it will break. When the "`,`" character is found, the token interpreter will expect another parameter, and when it finds "`)`", it will expect to end parsing the token parameters.

:::

### Parameters in Razor Scripts

Razor scripts also accept parameters. These will be available through the `@TknParams` object. As such, if you were to call the razor token like this: "`[My:Script(Message="This is it")]`", the parameter can be used inside the token by using the `@TknParams.Message` construct.

You can also call a token with parameters from inside a Razor script. For example, to call this token: "`[My:Script(Message="This is it")]`" from a Razor script, the syntax will be:

    @My.Script(Message:"This is it")

It is also possible to specify default values for Razor tokens. The syntax will be different in regards to how you'd set default values in regular tokens, because Razor scripts need to follow the C# or VB.NET syntax. The solution would be to invoke the token as a function, such as:

    @TknParams.Message("Default value").

### Default Value Alternatives

Here are a few "Default Value" alternatives that you can use - while using  “`[namespace:NoValue(DefaultValue=YourDefaultValue)]`” to parse a value.

    @{
    string firstValue = namespace.token.ToString();
    string defaultValue = TknParams.DefaultValue.ToString();
    }

    @if (@firstValue != "")
    @firstValue
    else
    @defaultValue

or

    @{
    string value = namespace.token.ToString();
    if (value == "")
    value = TknParams.DefaultValue.ToString();
    }

    @value

or

    @if (@namespace.token.ToString() != "") // here a .ToString() is needed for the comparison
    @namespace.token
    else
    @TknParams.DefaultValue