# Debugging

## Debug Logging

If you have trouble with your URLs there are a few different ways to debug it. First, you can enabled the [debug logging](logging.html){:target="_blank"} option and take a look at the logs. They will offer important information such the current DNN page that was determined from request, the advanced rules that were being evaluated or the stack trace that shows the execution path. This is particularly useful for determining what component initiated the action of building an URL.

## Network Inspectors and Traffic Sniffers

Another useful trick for debugging redirects is using the Chrome F12 Developer Tools. There are similar tools in IE and Firefox, but we recommend Chrome. Go to the Network tab and turn on the Preserve Log Upon Navigation option. Then refresh the page and it will show all the request being made. Particularly important is the first request that gets the page, which sometimes could be a redirect to another page. Looks at the HTTP header to see if it's a permanent 301 redirect or a simple (temporary moved) redirect.

Another way to achieve the same is with a traffic sniffer, for example [Fiddler2](//fiddler2.com/){:target="_blank"}. This is more complex to use but it provides advanced features to better filter and analyze requests.

## Ask for Our Help

We can also help debug your issue. Please perform the following steps:
1. Enable [Debug Logging](logging.html){:target="_blank"} option;
* Click the refresh button in to top right corner. This will ensure that the whole process gets logged and it's not just getting data from cache. At step 1 the cache should already be cleared but it doesn't hurt to be sure, especially if you skipped step 1 because the option was already on.
* Reproduce the issue you're having. If there are multiple issues or scenarios, make sure to get all of them so they get logged.
* Get the logs from disk:
    * `/Portals/_default/Logs/UrlAdapter` 
    * `/Portals/[PortalId]/Logs/UrlAdapter`
* Zip and send them to us via email to our support alias or another channel;
* Make sure to include other information such as:
    * URL Adapter version
    * DNN Version
    * Anything else you think would help us with troubleshooting.