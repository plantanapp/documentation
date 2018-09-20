# Cross Domain Policy

### Summary

* If possible, always restrict access to trusted domains
* Otherwise, hackers can call the API from other sites in the context of your user

The Cross Domain Policy option is used to control which domains can access the API. It is useful mainly for preventing [CSRF attacks](https://en.wikipedia.org/wiki/Cross-site_request_forgery){:target="_blank"} and it prevents some types of content from being accessed or modified if the file exists on another domain, according to [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy){:target="_blank"}, this Cross Domain policy "restricts how a document or script loaded from one origin can interact with a resource from another origin." DNN API Endpoint implements two mechanisms, one which emits the Access-Control-Allow-Origin header, and the other, checks the HTTP referrer.

## API Endpoint Cross Domain Options

By leaving enabled the default "Public" option in the Cross Domain Policy drop down list, it allows cross-domain requests from any and all domains, allows all applicable request headers and all HTTP methods.

If you do not want to allow public access, the other restricted options can be used in order to give access to specific domains. You can specify a domain in its entirety when you have selected the "Restricted to list" option by providing a list of domains and/or sub-domains in the "Allowed domains" box, like site.com, www.anothersite.com or even some tokens. You can even use the asterisk wildcard to match those domains that end with the given suffix, for example *.site.com will allow subomain.site.com, another.site.com and so on. 

There are two other options, the "Only domains associated with current portal" option and the "All domains registered in this DNN instance" option which limit the access to the API, and here we talk about all the sites hosted in a single DNN instance and the number of domain names that those sites have.