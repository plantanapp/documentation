# Tokens

Besides My Tokens, Redirect Toolkit supports the following tokens in places such as the URL provided for the Redirect to URL option:

* PortalUrl<br>
This is the path relative to portal root. It does not include virtual dir, child portal or locale part.

* LocalizedUrl<br>
This is same as PortalUrl, except it also includes the locale part, if any.

* Locale<br>
This is the current locale that exists in the URL. Note that if it doesn't exist in the URL, it defaults to the default locale.

* Extension<br>
The file extension, such as .aspx.

* Scheme<br>
http:// or https://

* PortalAlias<br>
The current portal alias that can be extracted from the URL.

* QueryString<br>
Contains the query string prefixed with ?. If nothing is in query string, then this token is empty.

* RelativeUrl<br>
The URL relative to the domain root. This includes the virtual dir, child portal, locale part, path and query string.

* AbsoluteUrl<br>
This is the absolute URL. It includes the scheme, alias, locale, path and query string.