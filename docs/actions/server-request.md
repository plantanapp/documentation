---
id: server-request
title: Server Request
sidebar_label: Server Request
---


Send a request to a specific URL.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Input Parameters |  | No | None |
| URL | URL where to send the request. Can contain tokens (for example [FirstName]) and My Tokens. Note: When using relative URLs make sure that the action is executing within a portal context (e.g. in SharpScheduler) | Yes | http://example.com |
| Url Token Encoding | URLs brought from tokens might contain reserved characters which have a certain meaning in the wrong context for a URL part. URL encoding will make sure the URL is valid. (default)No Encoding - Normal token replacement | No | Url |
| Enforce SSL | This will force the request to be sent to a secured version of the URL. The request URL will be rewritten to use https instead of http. | No | None |
| Timeout | Specify a custom timeout (in seconds). If left empty, it defaults to 100 seconds. It is recommended to let it default. | No | None |
| Choose an HTTP Method |  | No | None |
| Data | Put key=value pairs each on separate line. If a Content-Type is set to a json or xml type the data will pe parsed accordingly. Can contain tokens (for example [FirstName]) and My Tokens. | Yes | name=[FirstName]
page=[Tab:TabName] |
| Do not escape tokens in Post Data | By default tokens in XML content are escaped so that they do not break the XML structure. Enabling this option helps when you are trying to send XML data which comes from tokens in the request body and only takes effect if the Content-Type header is set to text/xml, application/xml or application/soap+xml. | No | None |
| Disable Referer Header | By default we append the Referer header, but some APIs throw an error when this header is specified. Check this box to disable the referer header. Note: When the referer header needs to be sent (the Disable Referer Header is unchecked) make sure that the action is executing within a portal context (e.g. in SharpScheduler) | No | None |
| Headers | Additional HTTP headers to pass | No | None |
| Use DNN Proxy Settings |  | No | None |
| Add Current Cookies | Pass the current cookies with the request. | No | None |
| Output Parameters |  | No | None |
| Cookie Container | Optional. This will name a container in which to store the cookies. If you want to use cookies from the previous Server Request actions or pass them along to other Server Requests, make sure they have the same name. | No | None |
| Output Token Name | Specify a token name to save the request response into. You can access it later using the token syntax, for example [MyNamedTPostoken] | No | None |
| Output Headers | Specify a list of headers to retrieve from the server response. | No | None |
| Ignore Errors | Any errors thrown when executing this action will be ignored. Using this options will not stop the triggering of the 'On Error' event. | No | None |
| Events |  | No | None |
| On Error | Define a list of actions that should execute when this action results in an error. To retrieve the error message use: [&lt;OutputTokenName&gt;:ErrorResponse] | No | None |
