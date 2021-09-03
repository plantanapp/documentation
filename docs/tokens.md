---
id: tokens 
title: Tokens
sidebar_label: Tokens
---

## `General Description`

Tokens are variables in your application that are replaced with a value specific to the context in which the token is called. They allow including dynamic content in static places and achieving seamless integration between otherwise isolated components. You can define tokens to access all objects in the application: cookies, session, application, query string, post data, etc. Additionally, you can define tokens directly against the database, HTTP Web Services or web pages, files on local disk or on FTP Servers or emails from POP3 or IMAP Servers, a Razor Script, or a Plant an App Workflow. This means, for example, you can define a token that runs a query and returns the result to a token, or a token that loads a node from an XML or JSON Response and puts the result where you need it. Even Workflows can be initiated from a token and the response replaces the token! Furthermore, token sources (SQL queries, URLs, Constant Strings, etc) can invoke other tokens, therefore recursively replacing them.

## `Usage`

The most basic token syntax is: [DataSource:TokenName]. This syntax can become more complex and in Razor Scripts there is a different syntax, but these will be covered more in subsequent sections.

The DataSource is like a collection of tokens in which Each element can be accessed by its TokenName. For core tokens the collection usually represents a data source such as User Object, Module Info and so on. For custom tokens, the data source represents a namespace, which is basically a method to group tokens together based on any criteria you find relevant - you could group tokens by topic, audience and so on.

Here are some examples of core tokens:

```
[User:UserName] - displays the username of the current user
[Tab:Title] - displays the title of the current page
[DateTime:Now] - displays current date and time
```

See a complete list of core tokens here.

You can also specify some text to be displayed along with the token replacement using this syntax: 

```
[DataSource:TokenName|If it exists, this text is displayed along with the token {0}]
```
In this format, the string after the token is displayed only if the token exists and {0} is replaced with the actual value of the token.

For example, `[User:UserName|Your Username is {0}.]` would not be replaced for a user not logged into your site. However, if the page is shown to a logged in user, it would be replaced with `Your Username is LoggedinUserUsername.`

This syntax is further built out to support additional features such as passing parameters to tokens. This will be covered more in the section on Syntax. 