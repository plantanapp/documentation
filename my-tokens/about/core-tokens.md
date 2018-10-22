# Core Tokens

My Tokens inherits all tokens from DotNetNuke. Additionally, it adds several new predefined types (such as access to application collections) and custom tokens (for example against Database or HTTP Requests). 

## My Tokens Core Tokens

Besides the dynamic tokens, My Tokens also comes with more useful predefined tokens. Most of these are bound directly to collections from Asp.NET, such as Request.QueryString, Application, Session, etc. In the *Values* column below, **Key** represents the entry name in this collections, so if there's a *Application["MyName"] = "John"*, then you can display it with **[Application:MyName]**. Other tokens are inherited from standard DotNetNuke tokens.

<table>
<tbody>
<tr>
<th style="width:152px;height:21px"> Token Source </th>
<th style="width:712px;height:21px"> Token 
Description </th>
<th style="width:228px;height:21px"> Values </th>
</tr>
<tr>
<td style="width:152px;height:21px"> <b>Application<br></b></td>
<td style="width:712px;height:21px"> 
Binds HttpApplicationState collection </td>
<td style="width:228px;height:21px"> 
[Application:&lt;Key&gt;] </td>
</tr><tr><td style="width:152px;height:42px"><b>Browser<span>&nbsp;</span></b></td><td style="width:712px;height:42px">Binds <a href="//msdn.microsoft.com/en-us/library/vstudio/system.web.httpbrowsercapabilities(v=vs.100).aspx">HttpBrowserCapabilities</a> properties. For example, [Browser:IsMobileDevice] evaluates to true when the user is using a mobile phone.</td><td style="width:228px;height:42px">[Browser:&lt;Key&gt;]</td></tr>
<tr>
<td style="width:152px;height:21px"> <b>ServerVars</b> </td>
<td style="width:712px;height:21px"> Binds Request.ServerVariables collection  </td>
<td style="width:228px;height:21px"> [ServerVars:&lt;Key&gt;] </td>
</tr>
<tr>
<td style="width:152px;height:21px"> <b>Session</b> </td>
<td style="width:712px;height:21px"> 
Binds HttpSessionState collection </td>
<td style="width:228px;height:21px"> 
[Session:&lt;Key&gt;] </td>
</tr>
<tr>
<td style="width:152px;height:21px"> <b>Cookie</b> </td>
<td style="width:712px;height:21px"> Binds
 HttpCookieCollection </td>
<td style="width:228px;height:21px"> [Cookie:&lt;Key&gt;] </td>
</tr>
<tr>
<td style="width:152px;height:42px"> <b>Get </b>or<b><br>QueryString<br></b> </td>
<td style="width:712px;height:42px"> Binds
Request.QueryString collection </td>
<td style="width:228px;height:42px"> [Get:&lt;Key&gt;] </td>
</tr>
<tr>
<td style="width:152px;height:21px"> <b>Post</b> </td>
<td style="width:712px;height:21px"> Binds 
Request.Form collection </td>
<td style="width:228px;height:21px"> [Post:&lt;Key&gt;] </td>
</tr>
<tr>
<td style="width:152px;height:21px"> <b>Params</b> </td>
<td style="width:712px;height:21px"> Binds
 Request.Params collection </td>
<td style="width:228px;height:21px"> [Params:&lt;Key&gt;] </td>
</tr><tr><td style="width:152px;height:21px"><b>HttpContextItems</b></td><td style="width:712px;height:21px">Binds HttpContext.Items collection</td><td style="width:228px;height:21px">&nbsp;[HttpContextItems:&lt;Key&gt;]</td></tr>
<tr>
<td style="width:152px;height:60px"> <b>Random</b> </td>
<td style="width:712px;height:60px"> 
Returns random text from comma delimited list of values<br>
 Values can contain other tokens </td>
<td style="width:228px;height:60px"> 
[Random:Val1,Val2,…,ValN]<br>
<br>
</td>
</tr>
<tr>
<td style="width:152px;height:80px"><b>User Roles</b><br>
</td>
<td style="width:712px;height:80px">Offers access to the roles assigned to current users. <br>
Tokens available are: <b>All</b> (returns comma separated string with all roles of current user).<br>
<br>
</td>
<td style="width:228px;height:80px">&nbsp;[UserRoles:All]</td>
</tr><tr><td style="width:152px;height:126px"><b>Url</b></td><td style="width:712px;height:126px">Offers access to various parts of the URL: Domain (e.g.&nbsp;<span style="font-size:1em;line-height:1.5;background-color:transparent">example.com), Domain Root (</span><span style="font-size:1em;line-height:1.5;background-color:transparent">e.g.&nbsp;</span><span style="font-size:1em;line-height:1.5;background-color:transparent">//example.com:8032), Full Url (</span><span style="font-size:1em;line-height:1.5;background-color:transparent">e.g.&nbsp;</span><span style="font-size:1em;line-height:1.5;background-color:transparent">//example.com/page), Relative (/page), PageName (e.g. PageName.aspx) and PageNameWithoutExtension (</span><span style="font-size:1em;line-height:1.5;background-color:transparent">e.g.&nbsp;</span><span style="font-size:1em;line-height:1.5;background-color:transparent">PageName)<br><br></span></td><td style="width:228px;height:126px">[Url:Domain], [Url:Port], [Url:DomainRoot], [Url:FullUrl], [Url:Relative], [Url:PageName],<br>[Url:PageNameWithoutExtension],&nbsp;<br>[Url:Referrer], [Url:Query],<br>[Url:RewrittenQuery]</td></tr><tr><td><b>Response</b></td><td>AddHeader - appends a header to the HTTP Response.<br>SetTitle - override page title.<br><br></td><td>[Response:AddHeader(name="Header Name", Value="Header value")]<br>[Response:SetTitle(text="Page Title")]</td></tr><tr><td style="width:152px;height:107px"><b>NavigateUrl<br><br></b></td><td style="width:712px;height:107px">&nbsp;This token computes a portal URL give a tab id or tab path. For example <font face="courier new, monospace">[NavigateUrl:123]</font> or <font face="courier new, monospace">[NavigateUrl:/mypage]</font>. This is very useful when having to hardcode portal URLs in various places like HTML modules, so for example when page hierarchy or page names change, the URLs propagate automatically.<br><br></td><td style="width:228px;height:107px">[NavigateUrl:&lt;tab id&gt;]<br>[NavigateUrl:&lt;tab path&gt;]</td></tr><tr><td style="width:152px;height:126px"><b>ModuleOutput</b></td><td style="width:712px;height:126px">Pulls the content of a module identified by its module ID to embed them at current location. The module is fetched using the an HTTP request to the module print page. So make sure the application pool is allowed to make HTTP requests to itself. Sometimes the DNS is not configure properly on the machine, which can't resolve itself. To implement a caching strategy, create a custom Constant Token and use this token within the definition of the constant token. This will give you all the caching options that custom tokens have.<br><br></td><td style="width:228px;height:126px">[ModuleOutput:&lt;module id&gt;]</td></tr>
<tr>
<td style="width:152px;height:674px"><b>SetProfile<br>SetSession<br>SetCookie<br></b><b><br><br><br><br>GetOrSession</b><br>
<b>GetOrCookie<br>
GetOrProfile<br><br>
PostOrSession<br>
PostOrCookie<br>
PostOrProfile<br><br>
ParamOrSession<br>
ParamOrCookie<br>ParamOrProfile<br></b><br><br><br><br><br><b><br>ProfileOrInit<br>SessionOrInit<br>CookieOrInit<br><br></b>
</td>
<td style="width:712px;height:674px">Sets a value in user profile, session or cookie. The value is actually taken from the default value (an option of most tokens), which follows after equal sign. So for example, [SetProfile:ThisUserId=[User:Id]] will set the current user ID in the session under&nbsp;ThisUserId key.<br><br>Set cookie accepts further parameters:<br><ul><li>NonPersistent - set to true so the cookie does not persist</li><li>Expires - set to a date time when to expire the cookie. For example 2016-05-05</li></ul><br><b>Important! </b>SetProfile, SetSession and SetCookie tokens are write only. They always return empty strings. Use other forms below if you need to also return values.<br><br>These are special Token Sources that interrogate two sources for content and synchronizes them. <b>These are available starting with My Tokens 1.6.2</b>,<br>
<br>
Let's take for a example the <b>[GetOrSession:MyParam]</b><i> </i>token. When invoked, My Tokens runs the following algorithm:<br>
<span>&nbsp;&nbsp;&nbsp; </span>1. If MyParam <u>exists</u> in GET <br>
<span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span>=&gt; <b>save the value in Session:MyParam</b><br>
<span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp;&nbsp; </span>=&gt; return the value<br>
<span>&nbsp;&nbsp;&nbsp; </span>2. If MyParam <u>doesn't exist</u> in GET, check Session:MyParam<br>
<span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp;&nbsp; </span>=&gt; if exists, return value from Session:MyParam<br>
<span> &nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp;&nbsp; </span>=&gt; if doesn't exist, return default value or empty string<br>
<br>
So, basically, My Tokens takes care of saving page parameters so they can
 be used at later stages when the page state no longer can be accessed.<br><br><br><span style="font-size:1em;line-height:1.5">Same as previous tokens, except these initialize a setting if it doesn't exist using a value provided through a parameter - so they are basically a generalization of tokens above.<br><br>For example,&nbsp;<span>&nbsp;</span></span><font face="courier new, monospace">[SessionOrInit:&lt;Key&gt;(InitValue="&lt;My Initial Value&gt;")]
</font><br><font face="arial, sans-serif"><br></font>If the key already exist in session, the InitValue is ignored, unless you specify the UpdateAlways parameter with value "true". For example&nbsp;<span style="font-family:courier new,monospace">[SessionOrInit:&lt;Key&gt;(InitValue="&lt;My Initial Value&gt;", UpdateAlways=true)]&nbsp;</span><font face="arial, sans-serif"><br><br></font></td>
<td style="width:228px;height:674px">[SetProfile:&lt;Key&gt;=val]&nbsp;<br>[SetSession:&lt;Key&gt;=val]&nbsp;<br>[SetCookie:&lt;Key&gt;=val]&nbsp;&nbsp;<br><br>&nbsp; <br><br><br>[GetOrSession:&lt;Key&gt;] <br>
[GetOrCookie:&lt;Key&gt;] <br>
[GetOrProfile:&lt;Key&gt;] <br><br>
[PostOrSession:&lt;Key&gt;] <br>
[PostOrCookie:&lt;Key&gt;] <br>
[PostOrProfile:&lt;Key&gt;] <br><br>
[ParamOrSession:&lt;Key&gt;] <br>
[ParamOrCookie:&lt;Key&gt;] <br>
[ParamOrProfile:&lt;Key&gt;] </td>
</tr><tr><td style="width:152px;height:85px"><b>HasRole<br>DoesNotHaveRole</b></td><td style="width:712px;height:85px">Checks either current user has or doesn't have a role. By default, these tokens return true or false, but they can be adjusted using the format specified and default value to return something else. For example, <font face="courier new, monospace">[HasRole:Customer='Not Customer'|'This is a customer']</font>.<br><br></td><td style="width:228px;height:85px">&nbsp;[HasRole:&lt;RoleName&gt;]<br>&nbsp;[DoesNotHaveRole:&lt;RoleName&gt;]</td></tr>
<tr>
<td style="width:152px;height:105px"><b>If</b></td><td style="width:712px;height:105px">This token compares 2 values and return true if they are equal or false otherwise. The values are passed in as parameters a and b. For example, <font face="courier new, monospace">[If:Eq(a="test", b="test")]</font> will return true.<br>If:DisplayIfNotEmpty returns a text when a condition is not empty.</td><td style="width:228px;height:105px">[If:Eq(a="...", b="...")]<br>[If:Equals(a="...", b="...")<span style="background-color:transparent"><span style="font-size:1em;line-height:1.5">]</span><br>[If:DisplayIfNotEmpty(Condition = "", DisplayText = "show this")]<br><br></span></td></tr><tr><td style="width:152px;height:65px"><b>Guid</b></td><td style="width:712px;height:65px">This token generates guids. The 2 form lets you choose between having hyphens or not. I.e.&nbsp;<font face="courier new, monospace">03311958-433f-4d7e-bd2d-086f8c07621f</font> or&nbsp;<font face="courier new, monospace">03311958433f4d7ebd2d086f8c07621f</font>.<br><br></td><td style="width:228px;height:65px">[Guid:New]<br>[Guid:NewCompact]</td></tr><tr><td style="width:152px;height:139px"><b>Base64<br><font color="#ff0000">Base64Decode - Removed</font><br><br></b></td><td style="width:712px;height:139px">&nbsp;These tokens encode or decode a string to or from base64.&nbsp;</td><td style="width:228px;height:139px">[Base64:Encode(Value='&lt;encode string&gt;')]<br>[Base64:Decode(Value='&lt;base64 string&gt;')]<br><font color="#ff0000"><strike>[Base64Decode:&lt;decode string&gt;]</strike></font></td></tr><tr><td style="width:152px;height:42px"><b><font color="#ff0000">EncodeSql - Obsolete, replaced by Sql</font></b></td><td style="width:712px;height:42px">&nbsp;<font color="#ff0000">This token sanitizes an SQL script against SQL injection.</font><span><font color="#ff0000">&nbsp; &nbsp;</font><br><br></span></td><td style="width:228px;height:42px"><font color="#ff0000">[EncodeSql:&lt;sql script&gt;]</font></td></tr><tr><td style="width:152px;height:42px"><b>&nbsp;Sql</b></td><td style="width:712px;height:42px"><font color="#000000">&nbsp;This token sanitizes an SQL script against SQL injection.&nbsp; </font><font color="#ff0000">&nbsp;</font></td><td style="width:228px;height:42px">&nbsp;[SQL:Encode(Value='&lt;sql string')]</td></tr><tr><td style="width:152px;height:42px"><b>SiteAdmin</b></td><td style="width:712px;height:42px">&nbsp;Return the administrator user. This has the same properties like the [User:*] token.<br><br></td><td style="width:228px;height:42px">[SiteAdmin:&lt;user property&gt;]</td></tr><tr><td style="width:152px;height:377px"><b>User</b></td><td style="width:712px;height:377px">&nbsp;In addition to the standard user tokens (described below), My Tokens adds the following:<br><ul><li><span style="background-color:transparent;font-size:1em;line-height:1.5"><font face="arial, sans-serif"><b>[User:AvatarUrl] </b>-&nbsp;<span style="font-family:Lucida Grande,Lucida Sans,Verdana,Arial,sans-serif">outputs&nbsp;</span>the URL to current user profile picture.<br><br></font></span></li><li><span style="background-color:transparent;font-size:1em;line-height:1.5"><font face="arial, sans-serif"><b>User:Avatar]</b></font> -&nbsp;outputs&nbsp;the user profile image, including the HTML img tag. This is because the HTML editor would usually&nbsp;mess with the img tags so the URL is relative to the portal root. So if you were to write <font face="courier new, monospace">&lt;img src="[User:AvatarUrl]" /&gt;</font> this will get transformed on save into&nbsp;</span><font face="courier new, monospace">&lt;img src="/Portals/0/[User:AvatarUrl]" /&gt;</font> which would obviously not work. The workaround is to use this <font face="courier new, monospace">[User:Avatar]</font> token.</li></ul><div>Normally, the User token returns information about currently logged in user. But My Tokens allows passing in a parameter that would determine whose information is retrieved. This can be passed as a user id, username or an email address. The following show all three scenarios:</div><div><ul><li>[User:FirstName(userid=111)] -&nbsp;outputs&nbsp;the first name of the user whose ID is 111</li><li>[User:FirstName(username="elvis")] -&nbsp;outputs&nbsp;the first name of the user with username 'elvis'.</li><li>[User:FirstName(email="elvis@hb-hotel.com")] - outputs the first name of the user found to have the respective email address. If more users have the same address, the first one is used.</li></ul></div></td><td style="width:228px;height:377px">&nbsp;</td></tr><tr><td style="width:152px;height:126px">&nbsp;<b>String</b></td><td style="width:712px;height:126px">&nbsp;<br><br>[String:Replace(Input="25 feb 2015", Match="25", Replacement="01")] =&gt; 01 feb 2015<br></td><td style="width:228px;height:126px">&nbsp;<br><br>[String:Replace(Input=&lt;text&gt;, Match=&lt;text&gt;, Replacement=&lt;text&gt;)]<br><br></td></tr><tr><td style="width:152px;height:84px">&nbsp;</td><td style="width:712px;height:84px">&nbsp;[String:RegexReplace(Input="25 feb 2015", Match="\d{2}", Replacement="01")] =&gt; 01 feb 0101</td><td style="width:228px;height:84px">&nbsp;[String:RegexReplace(Input=&lt;text&gt;, Match=&lt;text&gt;, Replacement=&lt;text&gt;)]<br><br></td></tr><tr><td style="width:152px;height:126px">&nbsp;</td><td style="width:712px;height:126px"> [String:RegexMatch(Input="25 feb 2015",Match="\d{2}")] =&gt; 25<br><br>[String:Substring(Input="25 feb 2015",Start=0,Length=2)]</td><td style="width:228px;height:126px">&nbsp;[String:RegexMatch(Input=&lt;text&gt;, Match=&lt;text&gt;)]<br><br>[String:Substring(Input=&lt;text&gt;, Start=&lt;number&gt;, Length=&lt;number&gt;)]</td></tr></tbody></table>

## How To Use The Tokens With Persistence

#### DotNetNuke Inherited Tokens

These are tokens that are supported by DotNetNuke token replacement system. They have been included in this documentation for quick reference. 

**Note that these tokens don't exist in all versions of DNN and also they may be restricted or behave differently in each version. Please check DNN specific version documentation for more information.**

<table>
<tbody>
<tr>
<th> Token Source </th>
<th> Token 
Description </th>
<th> Values </th>
</tr>
<tr>
<td> <b>Host</b> </td>
<td> Binds 
HostSettings information </td>
<td> 
[Host:&lt;HostSetting&gt;] - where HostSetting is defined in the 
HostSettings table </td>
</tr>
<tr>
<td> <b>Portal</b> </td>
<td> Binds
 information about current portal </td>
<td> 
[Portal:Currency], [Portal:Description], [Portal:Email], 
[Portal:FooterText], [Portal:HomeDirectory, [Portal:LogoFile], 
[Portal:PortalName], [Portal:Url], [Portal:TimeZoneOffset], [Portal:CurrentLanguage] (My Tokens only)</td>
</tr>
<tr>
<td> <b>User</b> </td>
<td> Binds 
information about current user </td>
<td> 
[User:VerificationCode], [User:AffiliateId], [User:DisplayName], 
[User:Email], [User:FirstName], [User:IsSuperUser], [User:LastName], 
[User:PortalId], [User:UserId], [User:Username], [User:FullName], 
[User:Roles] </td>
</tr>
<tr>
<td> <b>Membership</b> </td>
<td> 
Binds membership information </td>
<td> 
[Membership:Approved], [Membership:CreatedDate], [Membership:IsOnline] </td>
</tr>
<tr>
<td> <b>Profile</b> </td>
<td> 
Binds profile information for current user </td>
<td> 
[Profile:&lt;ProfilePropertyName&gt;] </td>
</tr>
<tr>
<td> <b>Tab</b> </td>
<td> Binds 
information for current page </td>
<td> [Tab:Description], 
[Tab:EndDate], [Tab:FullUrl], [Tab:IconFile], [Tab:KeyWords], 
[Tab:PageHeadText], [Tab:StartDate], [Tab:TabId], [Tab:TabName], [Tab:TabPath], [Tab:<acronym title="Uniform Resource Locator">URL</acronym>]
 </td>
</tr>
<tr>
<td> <b>Module</b> </td>
<td> Binds
 information for current module </td>
<td> 
[Module:Description], [Module:EndDate], [Module:Footer], 
[Module:FriendlyName], [Module:Header], [Module:HelpUrl], 
[Module:IconFile],&nbsp;<span style="line-height:19.0909080505371px">[Module:ModuleID],&nbsp;</span><span style="line-height:19.0909080505371px">[Module:ModuleTitle],</span><span style="line-height:1.5;background-color:transparent">&nbsp;<br>[Module:PaneName], 
[Module:StartDate]</span></td>
</tr>
<tr>
<td> <b>DateTime</b> </td>
<td> 
Binds DateTime information </td>
<td> [DateTime:Now] </td>
</tr>
<tr>
<td> <b>Ticks</b> </td>
<td> Binds 
ticks information </td>
<td> [Ticks:Now], [Ticks:Today], 
[Ticks:TicksPerDay] </td>
</tr>
</tbody>
</table>

## Other Tokens

There is a list of tokens that return the **Geo IP location** using Free Geo IP service: 

    [FreeGeoIp:CountryCode]

    [FreeGeoIp:CountryName]

    [FreeGeoIp:RegionCode]

    [FreeGeoIp:RegionName]

    [FreeGeoIp:City]

    [FreeGeoIp:ZipCode]

    [FreeGeoIp:TimeZone]

    [FreeGeoIp:MetroCode]

    [FreeGeoIp:Latitude]

    [FreeGeoIp:Longitude]

### Portal Globally Unique Identifier

``[Portal:Guid]`` - to return the GUID of the current side

``[Guid:New]`` - unique guid - it generates a new GUID every time is called