# Use Tokens in DNN Skins

Starting with version 1.5, it's possible to call My Tokens from DNN Skins by use of *My Tokens Skin Object*. Same principle applies for integrating My Tokens in any ascx or aspx file, including 3rd party modules.

To include My Tokens in DNN skins follow instructions below.

* Open the (skin).ascx file that you want to display tokens.
* Include following line at beginning of file:

```
<%@ Register TagPrefix="DnnSharp" TagName="MyTokens" 
 Src="~/DesktopModules/DnnSharp/MyTokens/SkinObjectReplacer.ascx" %>
```

* Put this line where you want the token to appear (token is just an example, replace with any token available) 

``<DnnSharp:MyTokens runat = "server" Token = "[User:UserName]" />``

The syntax above has the limitation that it only allows static content inside the Token parameter. What if you need to pass a parameter like the current user ID? Starting with version 2.4.52 it's possible to pass the content that needs tokenized like this:

```xml
    <DnnSharp:MyTokens runat = "server">
        <Content>[My:Token(WithParam="<%= MyId %>")]</Content>
    </DnnSharp:MyTokens>
```

Furthermore, the Skin Object can be replaced with a direct invocation of the My Tokens API. Here is a C# example (so language needs to be "C#" in the control definition).

```
<%= DnnSharp.MyTokens.MyTokensController.Tokenize("[My:Token(WithParam='"+ MyId +"')]",
              UserController.GetCurrentUserInfo(), null, false) %>
```
