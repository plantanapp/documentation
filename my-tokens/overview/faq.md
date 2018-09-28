# FAQs

**Q:** I have noticed a large number of files created in the folder “/Portals/0/Cache/MyTokens/Razor/”. What's up with these?

**A:** Razor scripts are compiled into .NET assemblies dynamically and placed into this folder. My Tokens compiles a .NET assembly for every script. But notice that if you use tokens inside razor scripts, don't use the square bracket syntax, e.g. [User:UserID]. This is merely string replacement that happens before the script is compiled. So what happens is that My Tokens will create an assembly for each User ID. That's why you might end up with lots of assemblies. The solution is to switch to real variables, e.g. @User.UserID.

**Q:** I get a "A critical error has occurred" after I add the My Tokens module to a page

**A:** In case the URL contains the following "error=Page+Exists+in+portal"

Go to Admin - Page Management

Under the Admin Pages delete the "My Tokens" page.

Go to Admin - Recycle Bin

Under Pages - Empty Recycle Bin

**Q:** Can I create database tokens that connect to non-DNN databases?

**A:** While creating a database token you get the chance to specify a connection string (or the name of a connection string defined in web.config), making it possible to connect to other databases. If specified through web.config, My Tokens will also use the provider, so it's possible to connect to non-SQL databases as well.

**Q:** How can I clear token cache programatically?

**A:** Using DNN API, you can clear the cache through the provider like this:

``DotNetNuke.Services.Cache.CachingProvider.Instance().Remove("avt.MyTokens")``

Or using My Tokens API:

``avt.MyTokens.MyTokensController.ClearAllCache()``

**Q:** How to delete file Razor code

**A:** Here is some C# code for MyTokens Razor scripts to delete a file by FileId.
```c#
int fileID = [TknParams:FileID];
DotNetNuke.Services.FileSystem.FileManager.Instance.DeleteFile(DotNetNuke.Services.FileSystem.FileManager.Instance.GetFile(fileID));
}
```

**Q:** Executable tokens with Razor script

**A:** Scenario: you need to display different paragraphs in your HTML module based on tokens that are "Execute type"; use these tokens in Razor script inside the HTML module to conditionally display content based on token values.

There are 2 solutions to this:

1. Using Razor scripts (which can call your code from assembly directly)
2. Implementing IPropertySource interface from DNN and placing a config file under ``/DesktopModules/avt.MyTokens/Config.``

The first option provides the most flexibility because you can reference your assembly and have real objects.

A video on how to extend MyTokens with new property sources is available [here](https://www.youtube.com/watch?v=SoglzIWgMEg){:target="_blank"}

If you're using Razor scripts, you simply add a reference to your assembly and then write your C# code in the script body. [Example]( http://screencast.com/t/j0lhd92Wz){:target="_blank"}

**Q:** What is the String Replace Token?

**A:** The syntax is``[String:Replace(Input=<text>, Match=<text>, Replacement=<text>)]``. For example, when you use ``[String:Replace(Input=1 1 1 8 3 1, Match=1, Replacement=3)]`` 1 will be replaced by 3 . The result will be 3 3 3 8 3 3.

**Q:** Implement localized tokens

**A:** Scenario: you would like to implement custom database tokens such that the value they render varies depending on the culture code of the page in a localized site. In other words, if we had a token ``[mysite:greeting]`` on the English page, it would replace with "Hello" and on the Spanish version of that page, the same token would render as "Hola". For example, if there was some way that the page could automatically submit the culture code in use as a parameter, etc.

Solution:

There are 2 options: Razor tokens or SQL tokens. 

For Razor, you can do something like
```c#
@if (Request.QueryString["language"] == "en-us") { 

<text>show this</text> 

} else { 

<text>show that</text> 

} 
```

There are many ways to get current language such as ``System.Threading.Thread.CurrentThread.CurrentUICulture`` or using the DNN APIs. 

For SQL, you'd build a translation table, then do something like ``select TranslatedText from Table where Key="Hello" and Language="[QueryString:language]"``.

**Q:** Class for active tab

**A:** If you would like to style the active tab in CSS, do note that the current tab will get the "active" class.

![](../assets/faq 1.png)

**Q:** I'm trying to grab this complete URL from a page, and it only gets it up to the query string
The part after # doesn't get to the server side, that's why My Tokens doesn't see it. More info at [en.wikipedia.org/wiki/Fragment_identifier](en.wikipedia.org/wiki/Fragment_identifier).

**A:** "The fragment identifier functions differently than the rest of the URI: namely, its processing is exclusively client-side with no participation from the web server."

**Q:** How to use tokens to display date

**A:** There are several tokens which you can use to display the date:

To extract only the day, you can use:

``[String:Substring(Input="25 feb 2015",Start=0,Length=2)]``

or this token:

``[String:RegexMatch(Input="25 feb 2015",Match="\d{2}")]``

To display something like:  ”this is a two-day course and is held 1 feb 2015 - 25 feb 2015”, you can use:

``[String:Replace(Input="25 feb 2015", Match="25", Replacement="01")] - 25 feb 2015``

or

``[String:RegexReplace(Input="25 feb 2015", Match="^\d{2}", Replacement="01")] - 25 feb 2015``

**Q:** How to check for the latest Ventrian articles via token

**A:** If you want to send your users the latest news articles from your Ventrian News Article module you can easily do that with My-Tokens. Copy the xml below and import in myTokens. It will generate a token to select all approved news items of the last 7 days. And it will generate a razorscript to list that items.
```xml
<namespaces>
  <ns>
    <name>News</name>
    <desc />
    <allPortals>false</allPortals>
    <tokens>
      <tkn>
        <name>ListLaatsteNews</name>
        <desc />
        <src>&lt;src&gt;&lt;type&gt;razor&lt;/type&gt;&lt;lang&gt;csharp&lt;/lang&gt;&lt;script&gt;@foreach (var Newsbericht in News.selecteerafgelopenweek) {
&amp;lt;h2&amp;gt;
@Newsbericht.Title
&amp;lt;/h2&amp;gt;
&amp;lt;text&amp;gt;geplaatst op:&amp;lt;/text&amp;gt;
@Newsbericht.StartDate
&amp;lt;br&amp;gt;&amp;lt;a href=&amp;quot;
@Newsbericht.NewsURL
&amp;quot;&amp;gt;link naar dit bericht&amp;lt;/a&amp;gt;&amp;lt;/text&amp;gt;
&amp;lt;hr&amp;gt;
}&lt;/script&gt;&lt;assemblies&gt;&lt;/assemblies&gt;&lt;/src&gt;</src>
        <parser />
        <default />
        <cacheTime>0</cacheTime>
        <cacheLayer>Global</cacheLayer>
        <server>-1</server>
      </tkn>
      <tkn>
        <name>selecteerafgelopenweek</name>
        <desc />
        <src>&lt;src&gt;&lt;type&gt;db&lt;/type&gt;&lt;syncTknId&gt;-1&lt;/syncTknId&gt;&lt;connStr&gt;&lt;/connStr&gt;&lt;sql&gt;SELECT TOP (1000) ArticleID, Title,  IsApproved, StartDate, CONCAT('http://YOURDOMAINNAMEHERE.COM/News?id=',ArticleID) AS NewsURL
FROM     dbo.DnnForge_NewsArticles_Article
WHERE (IsApproved = 1) AND (StartDate &amp;gt; (GETDATE()-7))&lt;/sql&gt;&lt;cols&gt;ArticleID
Title
IsApproved
StartDate
NewsURL&lt;/cols&gt;&lt;col&gt;&lt;/col&gt;&lt;/src&gt;</src>
        <parser>&lt;parser&gt;&lt;type&gt;string&lt;/type&gt;&lt;replace&gt;true&lt;/replace&gt;&lt;decodeHtml&gt;true&lt;/decodeHtml&gt;&lt;/parser&gt;</parser>
        <default />
        <cacheTime>0</cacheTime>
        <cacheLayer>Global</cacheLayer>
        <server>-1</server>
      </tkn>
    </tokens>
  </ns>
</namespaces>
```