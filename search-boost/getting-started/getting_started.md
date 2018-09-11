# Getting Started

After installation you should see two modules in **Host-Extensions**: "**avt.SearchBoost.Input**" and "**avt.SearchBoost.Results**". 

#### To start using Search Boost, you need to follow a few simple steps:

* Add **SearchBoost Input** module to a page;
* Add the **SearchBoost Results** module to the same page or another. Afterwards, you'll want to link the input with the results module. This and actually all settings are done only from the **input module:** 

![](/search-boost/getting-started/Assets/3.png)
As you will see in the settings page we have generally the same settings (and some particular new ones) as in version 2, but the interface is much cleaner.

Let's start with the appearance of the search box and results items look. We have reduced the number of supported **input templates** to just six simple beautiful options: **default**, **default-white**, **expandable**, **material-design**, **material-design-purple** and **orange-wide**. But in case you've just upgraded from SearchBoost v2, you will see that we have kept the old templates - just in case you have some nice custom template. However, we will not be able to support the old templates.

Ok, now let's dig into the fun part: **indexing and searching**. You can directly click the **Index button** but maybe you will first want to see what is set to be indexed. Check this in **Document Search -> File Types**: you should see some file types checked. This is self-explanatory; if you can't check, then go to the documentation for **file indexing**. Then you should check the **Search Sources** section: there you select what pages + modules or folders + documents you want indexed.

For file indexing just remember: in order for **SearchBoost** to know about the files, DNN has to know about them first. So you have to make sure that the files are available by checking **Admin->File Management**.

Now let's hit that **Index button**. At first you will see that Items in queue go up. This is mainly for debugging and represents any indexable item (module, document, url, custom database rule, etc). You should worry about this number only if it doesn't go back to 0 after some time (~ 5 minutes). 

We have implemented partial real-time indexing: when you add a new file or modify the view rights for the folder containing that file, we will have our triggers fire up and indexing the new files or according with the new folder rights, so will not have to worry about reindexing. But in case of changing the settings yourself, let's say adding a new file type for indexing, you will have to reindex (by **reindex** we mean **Clear Index + Index**). You have this option displayed after every save:

![](/search-boost/getting-started/Assets/4.png)
**Schedulers**

Just a heads-up notice for what's needed for **SearchBoost** in order to have automatic indexing: we have added two schedulers you can see in the **Host->Schedule** page. They should look like below. The main thing to check is that the Indexer item is fired often enough - don't worry about performance penalty, if there is no new indexable content, it will finish in less than a second and the whole thing is running in a separate thread.

![](/search-boost/getting-started/Assets/5.png)

With the release of **Search Boost 3.2** we have added an item and module count in the **Portals** section:

![](/search-boost/getting-started/Assets/6.png)