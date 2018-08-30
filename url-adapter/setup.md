# Setup

URL rewriting in DNN is achieved by two components: an URL provider that forms URLs and a HTTP module that intercepts incoming requests and translates the URLs to something that DNN understands. Behind the friendly URLs that you see in the browser address bar there's always this `/Default.aspx?tabid=123` format. So any URL rewriter will have the job to form URLs from and to this format.

These components are transparent for users and administrators. The DNN module installer takes care to apply the configuration to the `web.config` file and everything will work just fine. It does something similar on uninstall, in order to revert to the built-in URL rewriter. 

Here are the details if you ever need to make or undo this configuration manually. The HTTP module is configured by adding a line at the beginning of `system.webServer/modules` section. 
```xml
<system.webServer>
    <modules>
      <add name="UrlRewrite" 
           type="DnnSharp.SeoUrlAdapter.Core.Rewrite.UrlAdapterRewriter,DnnSharp.SeoUrlAdapter.Core" />
       ... the rest of HTTP modules ....
    </modules>
</system.webServer>
```
Note that there is another line with the same name which is the default DNN module that should be commented out. Or put back if you want to revert to standard provider manually. The difference lies inside the type attribute.
```xml
<system.webServer>
    <modules>
      <add name="UrlRewrite" 
           type="DotNetNuke.HttpModules.UrlRewriteModule, DotNetNuke.HttpModules" preCondition="managedHandler" />
       ... the rest of HTTP modules ....
    </modules>
</system.webServer>
```
The other part, the URL provider, is configured from `dotnetnuke/friendlyUrl` section. After URL Adapter is installed, this section should look like in the example below. Changes highlighted in bold.
```xml
<dotnetnuke>
  <friendlyUrl defaultProvider="SeoUrlAdapter">
    <providers>
      <clear />
      <add name="DNNFriendlyUrl" 
           type="DotNetNuke.Services.Url.FriendlyUrl.DNNFriendlyUrlProvider, DotNetNuke.HttpModules" 
           includePageName="true" 
           regexMatch="[^a-zA-Z0-9 _-]" 
           urlFormat="humanfriendly" />
      <add name="SeoUrlAdapter" 
           type="DnnSharp.SeoUrlAdapter.Core.SeoUrlAdapterProvider, DnnSharp.SeoUrlAdapter.Core" 
           includePageName="true" 
           regexMatch="[^a-zA-Z0-9 _-]" 
           urlFormat="humanfriendly" />
    </providers>
  </friendlyUrl>
</dotnetnuke>
```
Note how there is a second node named `add` which has a different type. Also note how its name is also used in the `defaultProvider` attribute of the root `friendlyUrl` node. This means that if you want to temporarily disable URL Adapter, it will suffice to change the defaultProvider attribute back to `DNNFriendlyUrl`. 

One other thing that may strike you is why there are all those attributes repeated in the SeoUrlAdapter provider - this is done because all the configuration is done via admin UI. There is a limitation in DNN architecture and inside the built-in DNNFirendlyUrl provider, so when one configures URL Adapter to use the standard DNN provider, this will pick up the configuration from the active provider which is now our URL Adapter. This means it needs all those parameters (regexMatch, urlFormat and so on).