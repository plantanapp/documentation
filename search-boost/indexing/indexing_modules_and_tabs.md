# Indexing Modules and Tabs

## General

Besides the introductory things shown in Getting started there are some advanced options regarding the indexing of modules and pages.

So we know that we can select what modules to be indexed in _Portals -> Pages subtree_. At the moment, we ignore the "Allow Indexing" properties for both tab and module. We rather use the Pages Tree for enable / disable module or page indexing.

![portals page and modules selection](/search-boost/indexing/assets/Portals_pages_modules.png)

Another place that determines what modules should be indexed is Exceptions.

![exceptions](/search-boost/indexing/assets/Exceptions.png)

One setting not so obvious exists in `Search Settings` -> `Search Options` -> `Merge Module Content`. By default this is set to Merge by page and query string which means that modules' contents are put together. When `Merge by page and query string` is set the indexing stats show the number of Pages, when `Do not merge` is set the indexing stats show the number of indexed modules.

![merge option](/search-boost/indexing/assets/Merge.png)

### DNN Security

By default, SearchBoost ignores DNN permissions security through a checkbox in _Advanced Settings -> Ignore DNN security_. Disable this and reindex all the content in order to respect DNN security.

If the permissions are set at the module level (the module does *not* inherit Tab VIEW permission), you will need to set the `Merge Module Content` option to `Do Not Merge` to correctly show the results.

**Note**: SearchBoost always brings all the results to the administrators role, so make sure you check with a normal account.