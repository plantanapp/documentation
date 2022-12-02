---
id: tkn-core
title: Core Tokens
sidebar_label: Core Tokens 
---

These are standard, Plant an App-specific tokens. 

Below is a list of all *Core Tokens*, along with a description of the information each one them binds. Further information regarding accepted ***Values***, case ***Usage*** and usage ***Examples*** can be found directly **in the Plant an App interface**, under **Configuration** > **Tokens** > **Core Tokens**.

|Token|Description and information|
|---|---|
|*Host*|Binds `HostSettings` information.|
|*User*|Binds information about current user or the user identified by the `UserId`, `Username`, or `Email` parameters.|
|*Portal*|Binds information about the current portal.|
|*Browser*|Binds information about browser capabilities; please <a href="https://learn.microsoft.com/en-us/dotnet/api/system.web.httpbrowsercapabilities?redirectedfrom=MSDN&view=netframework-4.8" target="_blank">see here</a> for more information.|
|*Membership*|Binds membership information; please see the Plant an App interface, under **Configuration** > **Tokens** > **Core Tokens** > **Membership** for information about how to enable Online Users.|
|*Profile*|Binds profile information for current user.|
|*Tab*|Access information for current tab.|
|*Page*|Access information for current page.|
|*Module*|Binds information for current module.|
|*DateTime*|Binds `DateTime` information; please see the Plant an App interface, under **Configuration** > **Tokens** > **Core Tokens** > **DateTime** for accepted syntax and examples.|
|*Ticks*|Binds ticks information. A single tick represents one hundred nanoseconds or one ten-millionth of a second. There are 10,000 ticks in a millisecond and 10 million ticks in a second. Please <a href="https://learn.microsoft.com/en-us/dotnet/api/system.datetime.ticks?view=net-6.0" target="_blank">see here</a> for more information.|
|*Random*|Returns a random value from specified comma separated list.|
|*Application*|Binds `HttpApplicationState` collection. Please <a href="https://learn.microsoft.com/en-us/dotnet/api/system.web.httpapplicationstate?view=netframework-4.8" target="_blank">see here</a> for more information.|
|*AppSettings*|Binds to the "**App Settings**" ("`<appSettings>`") from the `web.config` file. Please <a href="https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/web-config?view=aspnetcore-6.0" target="_blank">see here</a> for more information. This token needs to be enabled from security settings.|
|*ServerVars*|Binds the `Request.ServerVariables` collection from ASP.NET. Please <a href="https://learn.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525396(v=vs.90)" target="_blank">see here</a> for more information.|
|*Session*|Binds the `HttpSessionState` collection; please <a href="https://learn.microsoft.com/en-us/dotnet/api/system.web.sessionstate.httpsessionstate?view=netframework-4.8" target="_blank">see here</a> for more information.|
|*Cookie*|Binds `HttpCookieCollection` from ASP.NET. Allows to set, remove or retrieve values for cookies. Please <a href="https://learn.microsoft.com/en-us/dotnet/api/system.web.httpcookiecollection?view=netframework-4.8" target="_blank">see here</a> for more information.|
|*Get*|Binds `Request.QueryString` collection from ASP.NET. Please <a href="https://learn.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms524784(v=vs.90)" target="_blank">see here</a> for more information.|
|*QueryString*|Binds `Request.QueryString` collection from ASP.NET. Please <a href="https://learn.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms524784(v=vs.90)" target="_blank">see here</a> for more information.|
|*Post*|Binds `Request.Form` collection from ASP.NET. Please <a href="https://learn.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525985(v=vs.90)" target="_blank">see here</a> for more information.|
|*Params*|Binds the `Request.Params` collection (`GET` + `POST` + `COOKIE` parameters).|
|*HttpContextItems*|Binds `HttpContext.Items` property. Please <a href="https://learn.microsoft.com/en-us/dotnet/api/system.web.httpcontext.items?view=netframework-4.8" target="_blank">see here</a> for more information.|
|*ContextItems*|Binds the `HttpContext.Items` property - **obsolete, use the** "*`HttpContextItems`*" **token instead** (see above).|
|*Context*|Binds the `HttpContext.Items` property - **obsolete, use the** "*`HttpContextItems`*" **token instead** (see above).|
|*SetSession*|Sets a value in the server session.|
|*SetCookie*|Sets a certain cookie value on the user's browser (along with its expiry).|
|*SetProfile*|Sets a value in the user's profile.|
|*GetOrSession*|Binds the `Request.QueryString` collection just like the *`Get`* token (see above) does; if the `<Key>` exists, it is saved it into the Session. Once the user leaves the page, this token will return the saved value from the Session.|
|*GetOrCookie*|Binds the `Request.QueryString` collection just like the *`Get`* token (see above) does; if the `<Key>` exists, it is saved it into the browser's cookies. After the user leaves the page, this token will return the saved value from the cookies.|
|*GetOrProfile*|Binds the `Request.QueryString` collection just like the *`Get`* token (see above) does; if the `<Key>` already exists, then it saves it into the User Profile under the property with the same name (must be created before the token is invoked). Once the user leaves the page, this token will return the values saved in the User Profile.|
|*PostOrSession*|Binds the `Request.Form` collection just like the *`Post`* token (see above) does; if the `<Key>` already exists, then it saves it into the Session. Once the user leaves the page, this token will return the saved value from the Session.|
|*PostOrCookie*|Binds the `Request.Form` collection just like the *`Post`* token (see above) does; if the `<Key>` already exists, then it saves it into the browser's cookies. Once the user leaves the page, this token will return the saved value from the cookies.|
|*PostOrProfile*|Binds the `Request.Form` collection just like the *`Post`* token (see above) does; if the `<Key>` already exists, then it saves it into the User Profile under the property with the same name (must be created before the token is invoked). Once the user leaves the page, this token will return the values saved in the User Profile.|
|*ProfileOrInit*|Binds a Profile Property. If the profile property doesn't have a value, it will get updated to the value in the `InitValue` parameter (which can be a token itself).|
|*SessionOrInit*|Binds a value from server session. If the server session doesn't contain a property with given `<key>`, it will get updated to the value in the `InitValue` parameter (which can be a token itself).|
|*CookieOrInit*|Binds a value from the browser's cookies. If the browser cookies don't contain a property with given `<key>`, it will get updated to the value in the `InitValue` parameter (which can be a token itself).|
|*UserRoles*|Provides access to membership for current user. Please see the Plant an App interface, under **Configuration** > **Tokens** > **Core Tokens** > **UserRoles** for accepted syntax.|
|*URL*|Provides access to information about current URL. Accepted values: `Domain`, `Port`, `DomainRoot`, `FullUrl`, `Relative`, `Referrer`, `PageName`, `PageNameWithoutExtension`, `Query`, `RewrittenQuery`.|
|*NavigateURL*|Helps build URLs from the page id or the page path. It will use the current URL Provider set in DNN, so the URLs will remain valid when the URL Provider changes. This is usually used inside `href` attributes of the HTML links.|
|*MD5*|Returns the <a href="https://en.wikipedia.org/wiki/MD5" target="_blank">MD5 hash</a> of any text.|
|*Base64*|Encodes and decodes text in <a href="https://en.wikipedia.org/wiki/Base64" target="_blank">Base64</a>.|
|*EncodeSQL*|Encodes a text against SQL injection - **obsolete, use the**  *"`SQL`"* **token instead** (see below).|
|*SQL*|Encodes a text to protect against SQL injection attacks.|
|*GUID*|Generates a new GUID (*Globally Unique IDentifier*, a 128-bit text string that allows unique application identification).|
|*SiteAdmin*|Binds information about administrator of current portal. Please see the Plant an App interface, under **Configuration** > **Tokens** > **Core Tokens** > **SiteAdmin** for accepted syntax.|
|*PortalSettings*|Binds `PortalSettings` information (gets settings as defined in the `PortalSettings` table).|
|*HasRole*|Checks that the current user has the given role.|
|*DoesNotHaveRole*|Checks that the current user does not have the given role.|
|*ModuleOutput*|Renders the given module and embeds it where the token appears.|
|*DoMath*|Returns the result of a mathematical expression. Accepts tokens as values. Please see the Plant an App interface, under **Configuration** > **Tokens** > **Core Tokens** > **DoMath** for accepted syntax.|
|*If*|Compares two variables and displays `True` if they are equal. This token is particularly useful in `Condition` fields.|
|*String*|Evaluates a string and replaces a predefined expression with the specified value(s).|
|*Debug*|Provides access to debugging functions (dumps all parameters on screen).|
|*FreeGeoIp*|Provides geographical information based on IP address. Accepts IPv4 and IPv6.|
|*Response*|Modifies the HTTP response to include headers and sets page title. Accepts tokens as values.|
|*Pluralization*|Helper tokens for content pluralization (allows to define plural values for specific words or expressions).|
|*Localization*|Helper tokens for content localization. Retrieves localization information from the browser. Accepted values: `BrowserCultureCode`, `BrowserLanguageCode`, `BrowserCountryCode`.|
|*File*|Gets the link for a file that exists on the current portal.|
|*Folder*|Synchronizes the folders on the current portal.|