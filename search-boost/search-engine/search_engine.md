# Search Engine

Starting with version 2.0 Search Boost comes with own indexing engine based on the popular Lucene library. For the past few releases we had to do a number of hacks to DNN Search in order to support to various features requested by our clients. This has finally determined us to take full control and eliminate DNN Search components completely. 

## Limitations with DNN Search Engine

Here are the main limitations we encountered with DNN search and how Search Boost fixed them before and after version 2.0:

* **DNN in Memory Indexing will cause servers to run out of memory**

DNN  indexes content in memory and writes it in the database when it completes all the indexing for a portal. This means that when there's a lot of content the server will run out of memory preventing the indexing from completing so search will be severely damages. This happens especially with the document search because people that wish to allow search within documents usually have lots of documents that contain lot of valuable content.

Search Boost fixes this in version 2.0 by streaming results to the Lucene Storage, so they don't pile up in memory.

* **DNN has no algorithm/logic to differentially index content**

Simply put, DNN  expects all the content to be indexed every time the indexer runs (every 30 minutes or so) even if the content didn't change. This obviously is a lot of waste on the server resources.

Search Boost fixes this for documents by indexing only documents that have changed or that are new. This makes it extremely fast. We're still looking for solutions to differentially index modules as well. Because of the DNN mechanism all modules that are searchable have followed the same poor principle and will always return all results. The solutions will consist of hashing the content and comparing the hash codes. This will be included in a future release.

* **DNN enforces each search result to be linked to a module**

This makes it difficult to include documents, external web pages or other content from the database in search results. Search Boost fixed this in previous releases by linking all documents and custom rules to the avt.SearchResults module.

In version 2.0, Search Boost engine knows to handle DNN modules different from other content that comes from documents, custom rules or web pages (this feature is due in next release).

* **DNN doesn't support passing custom data through Search Results**

The structure DNN  provides for holding search results in very rigid and doesn't allow custom data to be transported to the search results page. Take for example a Custom Rule that indexes products in the database. Some would want in search results to also display the product image. The workaround for this was to make the description of the search result as HTML that already contains the image tag.

Search Boost will fix this in a future release by transporting own structure to the avt.SearchResults module.

* **DNN supports limiting search syntax**

In the Google Search world we're used to concepts like fuzzy search, exact phrase search, suggestions and so on. The fact that DNN  doesn't support any of this is very unfriendly.

Fortunately, Search Boost fixes this by using Lucene search library from Apache which is very mature and modern. The library supports all the modern features listed above and a lot more through use of plugins. An example is the contextual highlighter (also present in 2.0 release) that basically matches the search results description to include as many of the search terms as possible and color them differently.

* **DNN doesn't support high customization for the Search Input and Search Results Module**

Search Boost handles this elegantly by using XSL templates which basically put you in charge of everything in terms of what to display, the layout and the design.

* **DNN Indexer is not transparent**

Want to know what happens in the back-end? Which modules have been indexed, which haven't and why? DNN audit is very limited except some error reporting in the Event Viewer.

Search Boost comes with advanced loggers configured separately for searching and indexing on 4 levels: Off/Error/Info/Debug (each level adds a surplus of information). This has made our debug job on customer sites a lot easier. Just by asking for the logs in debug mode we're able to detect many of the issues.

Additionally, the Analyzer from Search Boost 2.0 produces some statistics that are displayed on front page of the administration console. The statistics show how many modules/documents/custom rules have been indexed in total and how many were on last iteration of the Analyzer and the Indexer.

## How DNN Search Engine works

DNN Search is achieved by several components:
* **Scheduled Job** to trigger the content to be indexed
* **Search Engine** that contains the logic on how all components interact
* **Module Indexer** calls a method from the controller of each module that returns a list with all search items
* **Storage** - this says where the search engine keeps all indexed content (the default provider keeps everything in the database in a few tables that begin with Search)
We tried to replace as few of these components as possible but each had a piece of the limitation and we ended up replacing everything.

## How Search Boost 2.0 Engine works

We integrated with DNN in two points:
We changed the Search Store provider to AvtLuceneDataStore which is our implementation over Lucene storage

We created two scheduled tasks that run independently and perform Analysis and Indexing.
The rest of the DNN components are eliminated by stopping the DNN  Search Indexing Scheduled tasks.

We decided to split the indexing logic in two so we achieve Separation of Concerns which is a popular practice in OO design. Basically, we have two components, the Analzyer and the Indexer, that do separate thing. 

The Analzyer is concerned with determining which content has updated and also produce some statistics for the end user. Where it finds new content, it populates records in the database. Later on, the Indexer runs and reads from the same table the list of documents it needs to reindex. Separating the two also gives flexibility so the search engine can be configured based on specific needs. This basically offers the option for web masters to decide how soon after the content has been updated it needs to be searchable. Of course, as soon as possible is ideal, but web masters need to leverage server resources in this process.

## Installation

On install, Search Boost will automatically do the following:

* **replace** standard Search Store provider in web.config
* **stop** DNN Search Indexer scheduled tasks
* **create** scheduled task for Search Boost Analzyer
* **create** scheduled task for Search Boost Indexer

Remember that when uninstalling Search Boost you'll need to manually reset the Search Store provider back to the default provider in web.config otherwise DNN will throw exceptions because it can't find the provider anymore.

When running normally, the searchDataStore in web.config should look like below (This is no longer available in Search Boost 5):

```xml
<searchDataStore defaultProvider="AvtLuceneDataStoreProvider">
      <providers>
        <clear />
        <add name="SearchDataStoreProvider" type="DotNetNuke.Services.Search.SearchDataStore, DotNetNuke.Search.DataStore" providerPath="~\Providers\SearchProviders\SearchDataStore\" />
        <add name="AvtLuceneDataStoreProvider" type="avt.SearchBoost.Core.Indexing.LuceneDataStore, avt.SearchBoost.Core" providerPath="~\DesktopModules\DNN Sharp\SearchBoost\" />
      </providers>
    </searchDataStore>
```