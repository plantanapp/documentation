# FAQs

##### 1. I've redone a PHP website in DNN. I want to save SEO, so how do I permanently redirect old URLs to new DNN pages?

First think to keep in mind is that your new IIS server will probably not handle .php extension, or will handle it using the PHP engine. If that happens, DNN never executes so URL Adapter doesn't get the chance to do the redirects. To map the .php extension to Asp.NET handler:

For IIS 7+
1. Open IIS > Handler Mappings > Add Managed Handler
2. Under Request Path, add *.php
3. Under Type, add System.Web.UI.PageHandlerFactory
4. Under name, type anything you want, but make it descriptive (Php2DNN is a good name)
5. When done, click OK

For IIS 6
* Pretty much the same thing, only make sure to take out Check If File Exists option.

***

##### 2. Why do I see the standard "The resource cannot be found" page instead of 404 page I configured in URL Adapter settings?

One common cause for this is because custom errors are disabled under web.config. When custom errors are disabled, Asp.NET will show the actual error so developers can debug it. To check either this is the case, locate the customErrors section and set mode="On", as illustrated below.
```xml
    <customErrors mode="On" redirectMode="ResponseRewrite">
        <error statusCode="404" redirect="/DesktopModules/DnnSharp/SeoUrlAdapter/NotFound.aspx" />
        <error statusCode="500" redirect="/DesktopModules/DnnSharp/SeoUrlAdapter/InternalError.aspx" />
    </customErrors>
```

***

##### 3. Why aren't permanent redirects working?

When you create permanent redirects, note that browsers are caching them aggressively. This means that when you change to permanent redirect to a different URL, you'd still be redirected to the old URL, because the browser never queries to server again to get the new URL. To fix this, clear the browser cache and also make sure to test with different browsers or from different computers.

***

##### 4. How do I redirect all traffic from an old domain to a new domain?

If all URLs remained the same, then you can rewrite all traffic with a single Advanced Rule. If on the other hand, the URLs also changed, then you'd have to build an association table. We recommend that you Export the rules as CSV, add your own in Excel, and then Import it back.

If you need to write one single rule, that would be:

    Match: Absolute
    Condition: //olddomain.com{path*}
    Target URL: //newdomain.com{path*}

Note that `{*path}` parameter matches everything after the domain name. Read more about [*Advanced Rules*](settings-reference/advanced_rules.html){:target="_blank"}.

***

##### 5. How do I configure the URL Adapter desktop module?

In order to use URL Adapter, after installing and adding it on a page, you have to enable the module. To do that, you have to click on the green Enable button: [see here](//screencast.com/t/Rd2d3qVuw){:target="_blank"}. 

Because all the URLs get rewritten on activation, you will be redirected to the homepage. Chances are to get a "page not found" error, but do not worry: as soon as you manually re-access the homepage you'll be able to continue with the configuration of the module.

There are some video tutorials that come in handy when we don't manage to bring the documentation up to date, and an introduction to URL Adapter can be found here:

[![Video Here](https://img.youtube.com/vi/pk0YHxwzROI/0.jpg)](https://www.youtube.com/watch?v=pk0YHxwzROI){:target="_blank"}

***

##### 6. What happens when I click on the red "disable" button (right top)?

If you disable URL Adapter, it reverts back to the DNN URL provider. This means that all URLs will look like before you had URL Adapter installed. Note that you don't lose any previous settings and/or custom URLs from the different portals if you re-enable the module.
