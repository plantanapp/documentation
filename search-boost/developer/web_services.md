# Web Services

## Indexing Content

It's possible to index content via web services. Note that this feature is currently limited but we are constantly taking feature requests to extend it.

Beginning with Search Boost version 3.0 the base url of this service is:

*//example.com/DesktopModules/DnnSharp/SearchBoost/IndexContent.ashx*

This api requires authentication with a host user. This is passed in query string as user and pass parameters. For example, 

*//example.com/DesktopModules/DnnSharp/SearchBoost/IndexContent.ashx?user=host&pass=mypass*

## Index Everything

Calling the base url will just trigger a indexing process. It's the same thing as if the scheduled task would run.

The syntax is:
*//example.com/DesktopModules/DnnSharp/SearchBoost/IndexContent.ashx?user=host&pass=mypass*

## Index Single Document

If you have your own document uploader it makes sense to call this web service to have Search Boost index just that file instantly. Note though, that if the indexer is already running (for example, it was started from the scheduled task), the the file is added to the document queue and could be actually indexed later.

The syntax is:
*//example.com/DesktopModules/DnnSharp/SearchBoost/IndexContent.ashx?user=host&pass=pass&portalid=0&file=/documents/mydoc.pdf* (the path would be actually URL encoded)

## Remove Document From Index

It is also possible to remove a document from index via web services. The syntax is same as above, with the addition of another parameter, action=remove.

The syntax is:
*//example.com/DesktopModules/DnnSharp/SearchBoost/IndexContent.ashx?user=host&pass=pass&portalid=0&file=/documents/mydoc.pdf&action=remove*

## Search Content

This web service will perform a search within an instance and return the results either as XML or HTML.

The syntax is:

```xml
//example.com/DesktopModules/DnnSharp/SearchBoost/SearchService.ashx?portalId=<number>&inst=<SB instance ID>&sb-page=<current page>&sb-pagesize=<pagesize>&sb-search=<search terms>&format=<[xml]|json|html>
```

The pagesize parameter is optional. When not specified, Search Boost defaults to the pagesize defined in the settings of current instance. The sb-page parameter is also optional and it's a 1 based index. So it defaults to 1.

Here is an example that search for "test" in a Skin Object with ID avtSearch on portal 0:

*//example.com/DesktopModules/DnnSharp/SearchBoost/SearchService.ashx?portalId=0&inst=0_dnn_avtsearch&sb-search=test&format=json*