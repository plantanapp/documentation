# Tokenize Module Title, Header, Footer

To replace tokens in module title, header and footer we've implemented a special base container class.

This is not a container you use directly. Instead, open the container file (.ascx) that you want to support My Tokens and change first line from

`<%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>` 

to

`<%@ Control language="vb" AutoEventWireup="false" Explicit="True" Inherits="avt.MyTokens.Core.TokenizableContainer" %>`.