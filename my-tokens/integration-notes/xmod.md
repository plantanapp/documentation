# XMod

It is possible to call My Tokens from XMod modules.

Simple add the following line at the top of the XMod template:

``<xmod:Register TagPrefix="MyTokens" Namespace="avt.MyTokens.Core" Assembly="avt.MyTokens.Core" />``

Next, invoke the tokens wherever you need using the following syntax:

``<MyTokens:TokenControl runat="server">Hello [User:FirstName]</dnnsharp:TokenControl>``