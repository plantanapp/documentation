# Tokenize Page Title & Meta Tags

DotNetNuke doesn't support tokens in page titles or meta attribute. My Tokens fixes this with another skin object that parses the HTML head structure after DNN finished generating it.

To have My Tokens replace Page Titles and Meta Tags:

* Open the (DNN skin).ascx file that you want to display tokens.
* Include following line at beginning of file:

```
<%@ Register TagPrefix="DnnSharp" TagName="MyTokensPageTokens" 
    Src="~/DesktopModules/DnnSharp/MyTokens/SkinObjectPageTokens.ascx" %>
```

* Put this line where anywhere in the document

``<DnnSharp:MyTokensPageTokens runat = "server"  />``

See [this tutorial](https://www.youtube.com/watch?v=v35Hs-93574){:target="_blank"} for more information.