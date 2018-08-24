#### Index Custom Modules

**Index Custom Modules
**If you have a custom module that is not searchable it means it doesn't implement the ISearchable interface from DNN. This article will cover all options.

**If you own the Source Code**

If you own the module then you can implement the search interface called ISearchable in your business controller class. Then, go into Host > Extension screen and update your module to have DNN pickup the changes. If you've done everything right, the Searchable option should appear checked. 

Note that DNN 7.1 comes with a new mechanism to index content, which is better because it allows for incremental indexing. You'll need to derive your controller from ModuleSearchBase.


**Otherwise...**

Do not panic. You still have lots of options. 

1. **Crawl URL**. The simplest is to use the Add URL function below the Search Target tree. This lets you index the page where the module sits by crawling it, like Google does.

2. **Use Custom Rules**. But the best option is to use the Custom Rules mechanism which lets you index content directly from the database. This lets you also extract a lot of metadata and additionally is super fast compared to crawling an URL.

3. **Implement a Custom Indexer**. If your strong suit is .NET programming, then you can also implement a custom indexer. This is a .NET assembly that implements a special interface in Search Boost. It then needs to be plugged in via config files. In this assembly you could reference the DLLs of other modules and user their API directly.