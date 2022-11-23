---
id: tkn-overview
title: Tokens Overview
sidebar_label: Overview
---

## General Description and Usage

Tokens are variables that are used in your application and that are replaced with a value specific to the context in which they are called in. They allow including dynamic content in otherwise static spots and achieving seamless integration between isolated components. 

You can define tokens to access all objects in an application: cookies, sessions, to query string, post data, etc. Additionally, you can define tokens directly against the database, HTTP Web Services or web pages, local or remote files, emails from POP3 or IMAP Servers, a <a href="https://learn.microsoft.com/en-us/aspnet/web-pages/overview/getting-started/introducing-razor-syntax-c" target="_blank">Razor Script</a>, or a <a href="https://learn.plantanapp.com/docs/next/workflows/wf-overview" target="_blank">Plant an App Workflow</a>. 

You can, for example, define a token that runs a query and returns its result as a token as well, or a token that loads an <a href="https://learn.microsoft.com/en-us/dotnet/standard/data/xml/types-of-xml-nodes" target="_blank">XML node</a> or <a href="https://jsonapi.org/" target="_blank">JSON Response</a> and sets the result where you need it. You can also initiate a Plant an App workflow through a token - the result/response of which can replace the initial token itself. Token sources (SQL queries, URLs, Constant Strings, etc.) can invoke other tokens, therefore recursively replacing them. Tokens allow for endless possibilities and flexibility. 

## Syntax and Types

The most basic token syntax is: `[DataSource:TokenName]`. 

The ***Data Source*** is basically a token collection in which each element can be called by its *Token Name*. 

- For the *Core Tokens*, the collection usually represents a Data Source such as a *User Object* or *Module Info*. 
- For *Custom Tokens*, the data source represents a <a href="https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/namespaces" target="_blank">*namespace*</a>, a method to group tokens together based on any criteria you find relevant - by topic or audience for example.

### Examples

Some examples of Core Tokens:

`[User:UserName]` - displays the username of the current user

`[Tab:Title]` - displays the title of the current page

`[DateTime:Now]` - displays current date and time

A complete list of available Core Tokens can be found under the `Core Tokens` page of this section.

Note that this syntax is merely a basis to be buit upon in order to suit different needs  It can evolve into something more complex (and <a href="https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-6.0" target="_blank">Razor Scripts use a different syntax altogether</a>), as it  is thought out to support additional features such as passing parameters to tokens.

These points will be covered in detail in subsequent sections.

### Adding text to Tokens

You can specify some text to be displayed with your token - for example: 

    [DataSource:TokenName|If it exists, this text is displayed along with the token {0}]

In the example above, the text string is displayed only if the token exists, and `{0}` is replaced with the actual token value.

As another example, the token `[User:UserName|Your Username is {0}.]` would not be replaced for a user that is not authenticated on your site. However, if the page is shown to a logged in user, it would be replaced with: "**Your Username is** `<LoggedinUserUsername>`".