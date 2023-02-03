---
id: tokens-overview
title: Tokens Overview
sidebar_label: Overview
---

## General Description and Usage

Tokens are variables that are used in your application and that are replaced with a value specific to the context in which they are called in. They allow including dynamic content in otherwise static spots and achieving seamless integration between isolated components. 

You can define tokens to access all objects in an application: cookies, sessions, to query string, post data, etc. Additionally, you can define tokens directly against the database, HTTP Web Services or web pages, remote files, a <a href="https://learn.microsoft.com/en-us/aspnet/web-pages/overview/getting-started/introducing-razor-syntax-c" target="_blank">Razor Script</a>, or a <a href="https://learn.plantanapp.com/docs/next/workflows/wf-overview" target="_blank">Plant an App Workflow</a>. 

You can, for example, define a token that runs a query and returns its result as a token as well, or a token that loads an <a href="https://learn.microsoft.com/en-us/dotnet/standard/data/xml/types-of-xml-nodes" target="_blank">XML node</a> or <a href="https://jsonapi.org/" target="_blank">JSON Response</a> and sets the result where you need it. You can also initiate a Plant an App workflow through a token - the result/response of which can replace the initial token itself. Token sources (SQL queries, URLs, Constant Strings, etc.) can invoke other tokens, therefore recursively replacing them. Tokens allow for endless possibilities and flexibility. 

## Syntax and Types

The most basic token syntax is: `[DataSource:TokenName]`. 

The ***Data Source*** is basically a token collection in which each element can be called by its *Token Name*. For <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces#custom-tokens" target="_blank">Custom Tokens</a> the Data Source is a namespace which basically means it’s used to group tokens together by anything you find relevant - topic, audience and so on.

- For the *Core Tokens*, the collection usually represents a Data Source such as a *User Object* or *Module Info*. 
- For *Custom Tokens*, the data source represents a <a href="https://en.wikipedia.org/wiki/Namespace" target="_blank">*namespace*</a>, a method to group tokens together based on any criteria you find relevant - by topic or audience for example.

For added flexibility, the syntax supports two more parts: default value and parameters. Here are token examples - with increasing complexity to underline the differences:

    [Namespace:TokenName]

    [Namespace:TokenName(ParamName1=123)]

(where `ParamName1` is a number)

    [Namespace:TokenName(ParamName1=[Other:Token])]

(nested tokens allowed)

    [Namespace:TokenName(ParamName1=123,ParamName2="Some text")]

(`ParamName2` is a string)

    [Namespace:TokenName(ParamName1=123,ParamName2="Some text")=default text]

(with default value)

    [Namespace:TokenName(ParamName1=123,ParamName2="Some text")=default text|Format this {0}]

### Default values 

You can specify the text to return when the token doesn’t return any value (for example when a Database Query returns no rows). This is very useful for displaying friendly content to the users, especially since the default value can contain other tokens.

There are two ways to specify default values:

- **Define the Default Values when you create/edit a token**

<img src="/img/token_default_value.png" alt="token_default_value.png" ></img>

This method only works for custom tokens

- **Define Default Values Inline**

Default values are supplied when the token is invoked. This method works for any token and it will override the default value that is specified for custom tokens when they are defined.

The syntax is: `[MyNamespace:MyToken = My text value that is displayed if there is data returned by the token]`

For example, the "`[GET:SomeParam=21]`" will return "`21`" if a parameter with name `SomeParam` doesn’t exist in the Query String.

### Adding text to Tokens

You can specify some text to be displayed with your token - for example: 

    [DataSource:TokenName|If it exists, this text is displayed along with the token {0}]

In the example above, the text string is displayed only if the token exists, and `{0}` is replaced with the actual token value.

As another example, the token `[User:UserName|Your Username is {0}.]` would not be replaced for a user that is not authenticated on your site. However, if the page is shown to a logged in user, it would be replaced with: "**Your Username is** `<LoggedinUserUsername>`".

## Parameters 

The token parameters allow you to build dynamic, custom tokens that vary based on input: this enables you to create only one token for multiple uses in the same context. Note that the input can also contain nested tokens. All the parameters are available in the token definition fields in the `[TknParams:<ParamName>]` tokens (in the examples above that would be `[TknParams:ParamName1]` and `[TknParams:ParamName2]`. This is a very powerful feature available to all custom tokens. Please see the "**Parameters**" page in this section for more information.

Note that in the mentioned examples, the special characters delimit syntax. If you need to use those characters inside the content, follow the instructions from the "**Escaping Special Characters**" page.


### Examples

Some examples of Core (or "standard") Tokens:

`[User:UserName]` - displays the username of the current user

`[Tab:Title]` - displays the title of the current page

`[DateTime:Now]` - displays current date and time

A complete list of available Core Tokens can be found under the `Core Tokens` page of this section.

Note that this syntax is merely a basis to be built upon in order to suit different needs. It can evolve into something more complex (and <a href="https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-6.0" target="_blank">Razor Scripts</a> use a different syntax altogether), as it  is thought out to support additional features such as passing parameters to tokens.

These points will be covered in detail in subsequent sections.