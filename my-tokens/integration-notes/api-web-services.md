# API (Building Web Services)

*API (Web Service) support is available starting with version 1.6.0*

## About

The External API allows external applications to invoke tokens on your portal. The communication works over HTTP, so any application written in any programming language (that has a mechanism to send HTTP Requests) can invoke MyTokens. The remote applications can be other websites, desktop apps, mobile apps, scripts, etc.

Security is enforced by use of API Keys. Optionally, the API allows for IP Filtering (to allow only known machines to connect) and user authentication/impersonation (to require login or impersonate an user - this will also give a meaning to [User] token).

## Configuration

Configuration is made from MyTokens Studio, there a toolbar button labeled *External API Access*.

### Configuration Scope

The External API can be configured *Per Portal* or *Global* (same for all portals). If the Global option is used, then only SuperUser accounts have the right to modify configuration.

### IP Filtering

There are two levels of IP Filtering allowed. First, is specified per configuration. It applies to all API Keys issued. Second level can be specified per API Key and overrides the IP Filtering specified in configuration.

This allows for different strategies:

* allow all computers at configuration level, API Keys inherit this
* deny all computers at configuration level, and allow specific IPs for each API Key
* allow all computers at configuration level and override with specific IPs only for certain API Keys
* etc

Note that IP Filtering allows wild char for specifying groups of IPS. For example, 192.168.*.* will allow any computer whose IP starts with 192.168 (basically, everything that comes from the local network).

### API Keys

API Keys provide basic authentication when using the API. An API Key is identified by a GUID, which looks like this: 1D409161-60C9-3B3D-CED6-3F596BDF894. This has to be sent with each token request.

There are also two more levels of security around API Keys. The first is the IP Filtering that was already discussed above. The second mechanism refers to authentication/impersonation of DNN logins. There are 3 options:

* **Don't Allow Impersonation** - API Requests are not allowed to provide login, token replacement will run in the context of an anonymous user
* **Impersonate User** - The administrator provides an username that API Requests will impersonate. Tokens will run in the context of that specific user, which will give a meaning to the [User] token.
* **Impersonate Based on Credentials** - The API Request must provide username and password. MyTokens will try to authenticate the user before running replacement. If authentication fails, access is denied. The [User] token will reflect the authenticated user.

## Accessing the API

The API Script on your portal can be accessed at ``www.yourdomain.com/DesktopModules/avt.MyTokens/Api.aspx``. If you find the path too long or hard to memorize you can add an URL Rewrite to the API can be accessed at ``www.yourdomain.com/MyTokensApi.aspx``. You can do this in Host Settings.

If you try to access the URL above you'll receive an error telling that you have to provide an API Key. This is sent as a parameter. MyTokens accepts parameters to come either vie GET or POST. The examples on this page will use GET because it's easier to represent.

### API Parameters:

* **portalId** - Represents the id of the portal to connect to. [Portal] token will translate to this portal. If configuration is Per Portal, the API Key must match provided portalId.
* **apiKey** - Represents the API Key code (GUID) as it appears in the External API Configuration.
* **token** - Represents the string to tokenize. Provided the security is matched, the API will returned this string with tokens replaced.
* **appendBrackets** - Set to true to append the square brackets around token from the server side. This option is useful when adding the brackets from the client side is not possible (for example, when they would get replaced on the server side before doing an AJAX call)
* **user** - This parameter is required when the API Key is set to Impersonate Based on Credentials. It represents the username to login as.
* **pass** - This parameter is allowed only when the API Key is set to Impersonate Based on Credentials. It represents the password of the user to login as. If login fails, error message is returned.

## Examples
Let's assume an API Key with no authentication on a portal My Portal. If we want to get the Portal Name using the API, we can use following HTPP Request:

``www.yourdomain.com/DesktopModules/avt.MyTokens/Api.aspx?apiKey=a47f9e37-ae17-e406-600c-75dac4acf9b8&token=now on [Portal:PortalName]``

This will display *now on My Portal*. Note that usually you'll only need to invoke the token, now on string can be hardcoded on the client side.

Now, let's assume we have an API Key that requires login. We can get the user id as follows:

``www.yourdomain.com/DesktopModules/avt.MyTokens/Api.aspx?apiKey=a47f9e37-ae17-e406-600c-75dac4acf9b8&token=[User:UserID]&user=myusername&pass=mypassword``

The following C# example will show you how to use in your remote applications the External API.

```c#
string apiBaseUrl = "//yourdomain.com/DesktopModules/avt.MyTokens/Api.aspx";
string apiKey = "C068C594-027D-5D43-C673-F337D848C51A";
int portalId = 0;
string token = "[Portal:PortalName]";

Uri apiUrl = new Uri(string.format(
    "{0}?portalid={1}&apikey={2}&token={3}", 
    apiBaseUrl, portalId, apiKey, token));

WebClient request = new WebClient();
string strRespone = request.DownloadString(apiUrl);
Console.Write(strRespone);
```