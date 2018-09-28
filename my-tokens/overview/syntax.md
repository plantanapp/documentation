# Syntax

In order to stay compatible with DotNetNuke token replacer, My Tokens enforces same syntax ``[DataSource:TokenName|Format {0}]`` (see [About DotNetNuke Tokens](about.html){:target="_blank"} for more info). For custom tokens the Data Source is a namespace which basically means it's used to group tokens together by anything you find relevant - topic, audience and so on.

But My Tokens needed more flexibility, so we extended the syntax to support two more parts: default value and parameters. The syntax (progressively so you see the different parts) is:

    [Namespace:TokenName]
    [Namespace:TokenName(ParamName1=123)]  (ParamName1 is a number)
    [Namespace:TokenName(ParamName1=[Other:Token])]  (nested tokens allowed)
    [Namespace:TokenName(ParamName1=123,ParamName2="Some text")]  (ParamName2 is a string)
    [Namespace:TokenName(ParamName1=123,ParamName2="Some text")=default text]  (with default value)
    [Namespace:TokenName(ParamName1=123,ParamName2="Some text")=default text|Format this {0}]

Default values allow specifying a text to return when the token doesn't return any value (for example when a Database Query returns no rows). This is very useful for displaying friendly content to the users, especially since the default value can contain other tokens. [Read more...](../about/default-values.html)

Parameters allow building dynamic custom tokens that vary based on input so you only have to write one token. Note that the input can also contain nested tokens. All the parameters are available in the token definition fields in the ``[TknParams:<ParamName>]`` tokens (in the examples above that would be ``[TknParams:ParamName1]`` and ``[TknParams:ParamName2]``. This is a very powerful feature available to all custom tokens [Read more...](../about/parameters.html)

Note in the examples below that special characters delimit syntax. If you need to use those characters inside the content, follow instructions from [Escaping Special Characters page](../how-to/escape.html).
