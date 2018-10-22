# Exposing Token Interface

#### Important notice

Support for MyTokens_ReplaceToken in 3rd party business controllers has been dropped in since version 2.6.31. So documentation below only applies to previous versions. Use razor tokens or ITokenSource interface instead.

My Tokens provides a mechanism for 3rd party modules to expose their own tokens which are available to any other modules that are My Tokens aware. By using this mechanism, My Tokens can become a powerful communication channel between any unrelated components.

## How It Works

First time a token is invoked after an Application Pool restart, My Tokens checks the Business Controller Class of each installed module to see if it implements special method *MyTokens_ReplaceToken*. This check is made using reflection. If this method is implemented, My Tokens automatically creates a namespace from the Module Name and forwards token requests matching the namespace to appropriate method.
My Tokens will cache information about modules that expose tokens so subsequent calls are not affected by the overhead involved when using reflection.

If our module is named *FAQMaster*, My Tokens will automatically create a new namespace called *FAQMaster*. Every time a token such as *[FAQMaster:TokenName]* is invoked, FAQMaster Bussiness Controller will handle it and provide the output.

### A Word About Syntax

Syntax for invoking tokens exposed by modules is much more powerful that standard syntax. This syntax is a direct effect to the need of parametrization. Except the token names, the modules also need to receive more information from the user, such as a ModuleId.

The syntax includes examples below:

* ``[ModuleNamespace:TokenName]``
  - *no parameters*
* ``[ModuleNamespace:TokenName(p1=123)]``
  - *receives a parameter named p1 and equal to 123*
* ``[ModuleNamespace:TokenName(p1=123,p1="Some String Value",p3=4.1)]``
  - *receives 3 parameters of different types: integer, string and real*

Note that tokens can also be **nested**, so basically other tokens can be sent as parameters. For examples:

* ``[ModuleNamespace:TokenName(UserId=[User:UserId],UserName="[User:UserName]")]``
  - *receives two parameters that are other tokens; note the quotes around the second parameter which is of type string*
* ``[ModuleNamespace:TokenName(CountryCode='[GET:country]',CountryName='[MyOtherNamespace:CountryNameFromDbBasedOnUrlParam]')]``
  - *receives two parameters, one comes from the URL and the other from a database query*

## Basic Implementation

Integration with My Tokens is very easy to achieve, yet it provide powerful functionalities. There are two methods to implement in the Business Controller Class, one of which is optional and will be covered later.

The required method has the following prototype:

**VB.NET**

```vb  
Public Function MyTokens_ReplaceToken( _
    ByVal tokenNamespace As String, _
    ByVal tokenName As String, _
    ByVal tokenParams As IDictionary(Of String, Object), _
    ByVal formatProvider As CultureInfo, _
    ByVal AccessingUser As UserInfo, _
    ByRef PropertyNotFound As Boolean, _
ByRef bRecursivelyReplaceTokens As Boolean, ByRef cacheTimeSeconds As Integer _
) As String
```

**C#**

```C#
public string MyTokens_ReplaceToken(
  string tokenNamespace, 
  string tokenName, 
  IDictionary<string, object> tokenParams, 
  CultureInfo formatProvider, 
  UserInfo AccessingUser, 
  ref bool PropertyNotFound, 
  ref bool bRecursivelyReplaceTokens, 
  ref int cacheTimeSeconds
);
```

#### Parameters

* ``string tokenNamespace``

The Token Namespace is computed by My Tokens based on Module Name by stripping whitespace. For example, if module is called My Module, the namespace will be MyModule.
My Tokens send the namespace back because the Business Controller Class could actually serve two or more modules, each having its own namespace.

* ``string tokenName``

This parameter is usually used to differentiate between supported functions. For example, if a module exposes two tokens GetById and GetNewest, then they can be invoked as [MyModule:GetById] and [MyModule:GetNewest]. Based on this parameter value, the module will return specific content.

Note that this property is case insensitive, the value passed to the method will always be lowercase.

* ``IDictionary<string, object> tokenParams``

Any parameter supplied in the token syntax will be present in this dictionary where the key represents the parameter name. Note that the parameter name is case insensitive, the key in the dictionary will always be lowercase.
For more information about passing parameters into tokens read Syntax Section.

* ``CultureInfo formatProvider``

Provides information about current culture. If module is multi-language, use this parameter to determine the output. Otherwise, it can be ignored.

* ``UserInfo AccessingUser``

Provides information about current user accessing the token.

* ``ref bool PropertyNotFound``

This parameter is sent to the method as false. If value of parameter tokenName is not recognized, set this option to true. My Tokens will replace the token with a corresponding message if the user has Admin privileges, otherwise empty text is returned. Alternatively, the module can return own text if the property doesn't exist and ignore this parameter. 

* ``ref bool bRecursivelyReplaceTokens``

This parameter is sent to the method as false. It instructs My Tokens whether to recursively apply tokens to the output. Set it to true if text returned by token execution may contain other tokens.

* ``ref int cacheTimeSeconds``

Default cache time is **0**. Set this to a higher value will improve performances, since My Tokens will not call the method in the Business Object again until the cache expires.
However, often the content depends on dynamic information, such as current user or time events, and caching is only possible for small periods of times. Or, the module could implement its own caching mechanism that is more relevant.

Here is a very simple example that ignores most of the parameters.

**C#**

```c#
public string MyTokens_ReplaceToken(
    string tokenNamespace, 
    string tokenName, 
    IDictionary<string, object> tokenParams, 
    CultureInfo formatProvider, 
    UserInfo AccessingUser, 
    ref bool PropertyNotFound, 
    ref bool bRecursivelyReplaceTokens, 
    ref int cacheTimeSeconds) 
{
    switch (tokenName) {
        case "Token1":
            return InvokeToken1();
        case "Token2":
            int moduleId = -1;
            try {
                moduleId = Convert.ToInt32(tokenParams["moduleid"]); // remember, parameter names are lowercase
            } catch {
                throw new Exception("Invalid module ID passed into " + tokenNamespace + ":" + tokenName + " token");
                // MyTokens will catch exceptions thrown and replace the token with exception message only if current user has Admin privileges 
            }
            return InvokeToken2(moduleId);
    }

    PropertyNotFound = true;
    return "";
}
```

Now, go into My Tokens Studio and click the 3rdParty tab in the left pane. Provided everything went well, you should see your module in the list.

Note that clicking the Module Name will show a page informing there not documentation about supported tokens. We'll get to this in next section.

To test that tokens work, click Test Tokens in the toolbar and try some tokens:

* ``[MyModule:Token1]`` - calls method InvokeToken1() and displays the result
* ``[MyModule:Token2]`` - throws an error since ModuleId was not provided
* ``[MyModule:Token2(ModuleId=123)]`` - calls method InvokeToken2(moduleId) and displays the result

## XML Definition

The second method (that is optional) returns an XML definition of supported tokens. The definition serves two purposes:

1. **Data Constraints** - defines parameter types, whether they are required and have a default value, etc. When user invokes a token, My Tokens takes care of validating input and casting parameters to appropriate data types before passing data into the Business Controller replacement method
2. **User Documentation** - in My Tokens Studio, users can read about supported tokens, parameters, usage, examples, etc

In order to provide the Token Definition a second method needs to be implemented which has the following prototype:

**VB.NET**

``Public Function MyTokens_GetDefinition() as XmlDocument``

**C#**

``public XmlDocument MyTokens_GetDefinition();``

Note that the XMLDocument returned by the function can be either loaded from an XML file, created inline withing the function or created dynamically by querying some component capabilities.

#### XML Definition Format

The XML Document returned by the method has the following format:

```
mytokens - root for definition
  receiveOnlyKnownTokens - Determines whether MyTokens should also call replacement method if the token is not documented; possible values are true and false

  cacheTimeSeconds - Instructs MyTokens to cache this token definition for specified amount of time; set to 0 to disable caching if token definitions are dynamic (for example, changes based on roles of current user or based on time events)

  docurl - Documentation Page where users can read more about supported tokens

  token - root of token definition, repeat once for each supported token
    name - Determines the name of the token, must not contain spaces. The name is the second part after the : in token syntax, [MyModule:TokenName]; case insensitive
    desc - Optional, provide information about what tokens does, special instructions, notes, etc
    cacheTimeSeconds - Determines how long will MyTokens cache the output generated by this token. Note that the cache takes into account the parameters. This parameter can be later override in replacement method
    docurl - Optional, token specific URL
    param - root of parameter definition, repeat once for each supported token
      name - Parameter name, must be unique; case insensitive
      desc - Description of the parameter, what does it mean
      type - Parameter type; supported values: int,double,bool,string,enum
      values -Only relevant for enum type, comma delimited list of possible values
      default - Determines the value to pass to replacement method if parameter is not supplied by user
      required - Determines if the parameter is required. MyTokens
    param - next param
      …………………………………………………….
    example - root of example node, repeat once for each example
      codeSnippet - Token Invocation Example
      desc - Describes what the example does
    example - next example
      …………………………………………………….

  token - next supported token
    ………………………………………………………
```

## Token Documentation

Using the XML Definition MyTokens can put in place a complete documentation for the users to consult. Let's take for example the following definition for FAQMaster that exposes two tokens: *[FAQMaster:GetById]* and *[FAQMaster:LatestFaq]*.

```xml
    <mytokens>
        <receiveOnlyKnownTokens>true</receiveOnlyKnownTokens>
        <cacheTimeSeconds>86400</cacheTimeSeconds><!-- XML Definition doesn't change -->
        <docurl>//docs.avatar-soft.ro</docurl>
        <token>
            <name>GetFaq</name><!-- case insensitive -->
            <desc>Returns a faq by its Id.</desc>
            <cacheTimeSeconds>0</cacheTimeSeconds><!-- FAQMaster handles the caching -->
            <docurl>//docs.avatar-soft.ro</docurl>
            <param>
                <name>id</name>
                <desc>Id of the Faq to retrieve.</desc>
                <type>int</type>
                <required>true</required>
            </param>
            <param>
                <name>item</name>
                <desc>
                    Tells to retreive either the Question or the Answer.
                </desc>
                <type>enum</type>
                <values>Question,Answer</values>              
                <default>Question</default>
                <required>false</required>
            </param>
        </token>
        <token>
            <name>LatestFaq</name>
            <desc>Returns latest faq.</desc>
            <cacheTimeSeconds>0</cacheTimeSeconds><!-- FAQMaster handles the caching -->
            <docurl>//docs.avatar-soft.ro</docurl>
            <param>
                <name>ModuleId</name>
                <desc>
                    Id of the module to extract latest faq for. 
                    Leave empty to retrieve latest FAQ from any FAQMaster module.
                </desc>
                <type>int</type>
                <default>-1</default>
                <required>false</required>
            </param>
            <param>
                <name>Item</name>
                <desc>
                    Tells to retrieve either the Question or the Answer.
                </desc>
                <type>enum</type>
                <values>Question,Answer</values>
                <default>Question</default>
                <required>false</required>
            </param>
            <example>
                <codeSnippet>[FAQMaster:LatestFaq]</codeSnippet>
                <desc>Returns question latest added FAQ from any FAQMaster module.</desc>
            </example>
            <example>
                <codeSnippet>[FAQMaster:LatestFaq(Item=Answer)]</codeSnippet>
                <desc>Returns answer of latest added FAQ from any FAQMaster module.</desc>
            </example>
            <example>
                <codeSnippet>[FAQMaster:LatestFaq(ModuleId=123)]</codeSnippet>
                <desc>Returns question latest added FAQ from FAQMaster module with id 123.</desc>
            </example>
            <example>
                <codeSnippet>[FAQMaster:LatestFaq(ModuleId=123, Item=Answer)]</codeSnippet>
                <desc>Returns answer of latest added FAQ from FAQMaster module with id 123.</desc>
            </example>
        </token>
    </mytokens>
```

## Data Validation

Using the same XML Definition files My Tokens also validates input before passing it to Business Controller replacement method.

The following rules apply:

* If parameter *receiveOnlyKnownTokens* is set to true, then calls to any tokens not included in the XML Definition will automatically return an error string without even calling the replacement method
* My Tokens will automatically send the default value for parameters that are not supplied by user
* If a parameter is required, My Tokens returns an error message if not supplied and no default value exists
* My Tokens will automatically check type of parameters and make the cast. This means that in the replacement method you can safely convert parameters to expected type without worrying about exceptions
* For *enum* types, My Tokens will check that the parameter has one of the possible values and return an error otherwise
* My Tokens will pass *Token Names* and *Parameter Names* in lowercase