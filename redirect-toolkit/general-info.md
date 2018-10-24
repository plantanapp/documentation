# Locked Out?

Sometimes you might find yourself locked out of the website because of a Redirect Toolkit error. This happens because Redirect Toolkit installs an HTTP module to handle all requests for global redirects. Global redirects are rules that get evaluated for every HTTP request, regardless of the page where the module lives. 

To gain access back to the site, disable the HTTP module from web.config. To do this, open web.config in a text editor and remove this line:

    <add name="RedirectToolkitHandler" type="avt.RedirectToolkit.GlobalHttpFilter, avt.RedirectToolkit" preCondition="managedHandler" />
