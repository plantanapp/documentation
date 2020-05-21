---
id: ServerRequest
title: Server Request
sidebar_label: Server Request
---
​
A low-level action that allows for any kind of HTTP request to be performed.

## `Typical Use Cases`

- Integrate with external systems through APIs
- Crawl web pages
- Read sitemaps and RSS feeds

## `Don't use it to`

- Read files or binary streams
- Call APIs from same app system - use the [Call Local API](/docs/Actions/CallLocalApi.md) action instead

## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Parse JSON](/docs/Actions/CallApi.md) | Creates variables from JSON returned by API calls. |
| [Regex](/docs/Actions/CallApi.md) | Creates variables by matching patterns inside the content. |
| [Execute Actions Async](/docs/Actions/ExecuteAsync.md) | Nesting other actions under the Execute Actions Async enables them to continue executing without waiting for the previous actions to finalize. <br/> Useful in the case of Server Request action when you don't want to wait for it to bring a response. |

## `Input Parameter Reference`


| Parameter     | Description                           | Supports Variables |
|---------------|---------------------------------------|--------------------|
| URL           | The URL where the resource to be invoked lives. It can be relative or absolute. | Yes |
| URL Token Encoding | URLs brought from variables might contain reserved characters which have a certain meaning in wrong context for a URL part. For example, '&' is a reserved character that is used to separate individual variables within the query string.<br/><br/> This means if we have a query string like `?color=blue&brand=H&M` it will not be valid, since we have the '&' character in a invalid context (`brand=H&M`). URL encoding takes care of this by replacing the character '&' with it's URL encoded value of '%26', now our initial query string becomes `?color=blue&brand=H%26M` which is valid. If you are using variables to provide the URL, the option URL Encoding will make sure the URL is valid. | No |
| Enforce SSL   | This will for the request to be sent to a secure version of the URL (https instead of http). This is useful for the instances in which the URL comes from a variable and you want to ensure it is secured.| No |
| Timeout       | The amount of time in seconds in which the response must come or the request fails. If nothing is provided, it will default to 100 seconds. If you don't want to wait for the request to finish (when you must leverage higher Timeout values) we suggest using [Execute Actions Async](/docs/Actions/ExecuteAsync.md). | Yes |
| HTTP Method   | The operations to perform against the URL.<br/> Possible values are GET, POST, PUT, DELETE, HEAD, PATCH. | No |
| Data          | If the HTTP Method is POST or PUT, data is allowed to be sent to the target URL. The data can take various forms, from key-value pairs to complex JSON. For the target URL to understand the format, it needs to be passed through the Content-Type header. | Yes |
|Do not Escape Tokens in Data | By default, we escape tokens in order to not break the XML structure in the data you are trying to send. Enabling this option helps when you are trying to send XML data which comes from tokens in the request body and only takes effect if the Content-Type header is set to text/xml, application/xml or application/soap+xml. | No |
| Disable Refer Header | By default, we append a referer header  but some APIs will throw errors if this header is sent. If the resource  you want to use doesn't need the referer header, enable this option. | No |
| Headers | Additional headers to pass with the request. | Yes |
| Use DNN Proxy Settings | Enable this option if you want to use the proxy settings you have set for your DNN instance. | No |
| Add Current Cookies | This will add the current cookies of the session to the request. | No |
| Ignore Errors | Any errors thrown when executing this action will be ignored. Using this options will not stop the triggering of the 'On Error' event. | No |

## `Output Parameters Reference`

| Parameter | Description |
|-----------|-------------|
| Cookie Container |  This will name a container in which to store the cookies. If you want to use cookies from the previous Server Request actions or pass them along to other Server Requests, make sure they have same name. |
| Output Headers | The list of the headers which are to be retrieved from the request response. |
| Output Token Name | The variable name in which the response payload is to be stored for further use. |

## `Events Reference`

| Event Name | Description |
|------------|-------------|
| On Error | When an error is thrown during the execution of this action, it will trigger the execution of the list of actions specified for this event. |

## `GET Requests`

GET is used to retrieve data or content. Note that although GET was not designed for sending data to the target URL, in reality that often happens through Query String parameters. These can be placed directly in the URL parameter. For example

```url
https://example.com?id=[Id]&type=[Type]
```

The query string parameters are supported by all HTTP Methods.

## `POST and PUT Requests`

These methods allow for data to be passed to the target URL. The difference between then if often semantical. POST usually means creating new records, while PUT means updating them. This is defined by the [REST specification](https://www.w3.org/2001/sw/wiki/REST).

​
The action can send data in any format. Binary content needs to be converted to Base64 first by using the [Base64](/docs/Actions/CallLocalApi.md) token or the specific tokens that are generated by the system, for example the [FileUpload:Base64] token generated by the File Upload field in the forms.

​
The format needs to be reflected via the Content Type header that is inputted in the Headers section. For example, use Content-Type `application/x-www-form-urlencoded` when data is in key-value format, or `application/json` when data is a JSON object.
​

## `Examples`

### `1. Read a JSON Array`

​
The action below reads a list of employees from an API via GET and saves it to a variable `[Employees]`. [Import it](/docs/Actions/Import-actions) into your application to see it in action.
​

```json
​
{
    "Title": "Server Request",
    "ActionType": "PostData",
    "Description": "Get Employees",
    "Parameters": {
        "URL": "http://dummy.restapiexample.com/api/v1/employees",
        "UseSSL": "",
        "Timeout": "",
        "HttpMethod": {
            "Expression": "",
            "Value": "GET",
            "IsExpression": false,
            "Parameters": {}
        },
        "Data": "",
        "DoNotEscapeTokens": "",
        "DisableReferer": "",
        "Headers": "",
        "UseDNNProxySettings": "",
        "AddCurrentCookies": "",
        "CookieContainerToken": "",
        "UrlTokenContext": {
            "Expression": "",
            "Value": "Url",
            "IsExpression": false,
            "Parameters": {}
        },
        "OutputTokenName": "Employees",
        "OutputHeaders": "",
        "IgnoreErrors": "",
        "OnError": []
    }
}
​
```

### `2. Read a Web Page`

The action below reads the homepage from `http://example.com/` and saves it into a variable called `[Homepage]`. [Import it](/docs/Actions/Import-actions) into your application to see it in action.

```json

{
    "Title": "Server Request",
    "ActionType": "PostData",
    "Description": "Read homepage",
    "Condition": null,
    "Parameters": {
        "URL": "http://example.com/",
        "UseSSL": "",
        "Timeout": "",
        "HttpMethod": {
            "Expression": "",
            "Value": "GET",
            "IsExpression": false,
            "Parameters": {}
        },
        "Data": "",
        "DoNotEscapeTokens": false,
        "DisableReferer": "",
        "Headers": [],
        "UseDNNProxySettings": "",
        "AddCurrentCookies": "",
        "CookieContainerToken": "",
        "UrlTokenContext": {
            "Expression": "",
            "Value": "Url",
            "IsExpression": false,
            "Parameters": {}
        },
        "OutputTokenName": "Homepage",
        "OutputHeaders": "",
        "IgnoreErrors": "",
        "OnError": []
    }
}
​
```

### `3. POST a JSON Object`

This action posts a new lead to a CRM system. [Import it](/docs/Actions/Import-actions) into your application to see it in action.

```json

{
    "Title": "Server Request",
    "ActionType": "PostData",
    "Description": "Create Lead in CRM",
    "Condition": null,
    "Parameters": {
        "URL": "http://dummy.restapiexample.com/api/v1/employees",
        "UseSSL": "",
        "Timeout": "",
        "HttpMethod": {
            "Expression": "",
            "Value": "POST",
            "IsExpression": false,
            "Parameters": {}
        },
        "Data": "{ \n  \"leadName\" : \"Atlanta Deal\",\n  \"leadCreationDate\" : \"2020/05/07\",\n  \"leadContactPerson\" : \"John Doe\",\n  \"leadStatusId\" : 1\n}",
        "DoNotEscapeTokens": false,
        "DisableReferer": "",
        "Headers": [
            {
                "value": "application/json",
                "name": "ContentType"
            }
        ],
        "UseDNNProxySettings": "",
        "AddCurrentCookies": "",
        "CookieContainerToken": "",
        "UrlTokenContext": {
            "Expression": "",
            "Value": "Url",
            "IsExpression": false,
            "Parameters": {}
        },
        "OutputTokenName": "Response",
        "OutputHeaders": "",
        "IgnoreErrors": "",
        "OnError": []
    }
}

```
