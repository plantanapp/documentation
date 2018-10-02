# About DotNetNuke Tokens

Tokens in DotNetNuke are relatively new. They have been added with version 4.5. Today, lots of standard and commercial modules support tokens, such as the standard Html, Forms and List, Newsletter, NavXp and others. For modules that support tokens, refer to their respective documentation to understand where the tokens are supported and how they affect functionalities.

For example, **to enable tokens in the Html module**, open the settings window, go to Text/Html Settings at the end of the page and select Replace Tokens checkbox.

Keep in mind that enabling tokens has two downfalls:

  1. Inline editing is disabled
  2. Module caching is disabled or in some cases in needs to vary by user

Inline editing has other problems as well, so most DNN portals have this feature off anyway. However, disabling caching could lead to performance issues for high activity sites, so they have to be used carefully. With My Tokens this basically means leveraging the Cache Time attribute for each token so for time consuming operations (such as connecting to an Web Service) the response is cached long enough so it doesn't slow things down but still brings accurate results. 

Another powerful feature in DotNetNuke is to use Output Caching which eliminates the caching issue almost completely.

## Usage

Provided everything is set up (tokens are supported and enabled for current module), using tokens is very easy. 

A token has the following format: ``[DataSource:TokenName]``

The DataSource is like a collection of tokens in which Each element can be accessed by its TokenName. For core tokens the collection usually represents a data source such as User Object, Module Info and so on. For custom tokens, the data source represents a namespace, which is basically a method to group tokens together based on any criteria you find relevant - you could group tokens by topic, audience and so on.

Here are some token examples

    [User:UserName] - displays the username of the current user
    [Tab:Title] - displays the title of the current page
    [DateTime:Now] - displays current date and time

To learn more about various tokens supported by DotNetNuke or My Tokens read the page about [Core Tokens](../about/core-tokens.html).

There is a second format that allows further customization of the output.

    [DataSource:TokenName|If it exists, this text is displayed along with the token {0}]

In this format, the string after the token is displayed only if the token exists. Also, *{0}* is replaced with the actual value of the token. 

My Tokens build on this syntax further to support even more features, such as passing parameters into the token definition. Read the page on [Syntax](syntax.html) for more information.