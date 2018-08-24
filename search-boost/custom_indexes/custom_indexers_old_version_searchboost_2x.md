#### Custom Indexers (Old Version SearchBoost 2.X)

You may realize that though Search Boost provides many features, you will need to search for content to customize the application. The objective is to have unified search results or enable Search Boost features to your content.

Custom Indexers are classes that implement ISearchBoostIndexer interface. Through this interface the class receives calls to index content. From this class you will need to call the Search Boost API to index content items.

1. First, reference avt.SearchBoost.Core.dll assembly that comes with the Search Boost zip package.
2. Once the reference has been added to your project, create a class and implement the *avt.SearchBoost.Core.Indexing.ISearchBoostIndexer* interface.

  * Follow the example below for more info:
It's recommended that you use the Fluent API for indexing content.

``` 
namespace avt.SearchBoost.TestPlugin
{
    public class TestIndexer : ISearchBoostIndexer
    {
        public void Index(Logger logger, LuceneStorage dataStore, IEngineSettings config, IndexingStatistics stats)
        {
            dataStore.ClearIndexedSubtypes("plugin", "test-plugin");

            var data = new Dictionary<string, IList<string>>();
            data["somekey"] = new List<string>() { "Test custom data" };
            data["some ohter key"] = new List<string>() { "Other data" };

            dataStore.StoreSingleItem(
                    "plugin", // type should always be plugin for custom indexers
                    "test-plugin", // an ID that identifies your plugin
                    "", // this may refer to a page path or a folder path
                    "", // same as the above, except it includes this item
                    null, // the list of instances is ignored for plugins
                    0, // portal.PortalId, 
                    -1, //mod.TabID,
                    -1, //mod.ModuleID,
                    "", // optionally have this result point to a custom URL, otherwise it's built from TabId
                    "Index some content",  // this is the tile
                    "", // Specify description or leave empty to build from content
                    -1,
                    DateTime.Now, // published date
                    "123", // itme ID, if your plugin returns multiple search entries
                    "This is the content to index", // content
                    "myParam=smth&mode=test", // additional query string params
                    "", // containerId - used for example by document indexer to identify a folder or the module indexer to identify a page
                    "", // containerName it's a frienldy repreentation of the above
                    1.0f, // boost
                    new string[] { "All Users" }, // who can access thes results
                    false, // ignoring security will show this result, but ask for authentication when the result is clcked
                    new string[] { "Category 1", "Other Category", "Third/Sub Category" },
                    new CultureInfo("en-US"),
                    data, // custom data, useful for building custom filters or custom search results
                    null
                );
        }
    }
}
```

3. Once you have your class ready, compile it and copy the resulting assembly in the website /bin folder.
4. Next, you will need to instruct Search Boost to use this custom indexer. 
To do this, go to the *\DesktopModules\SearchBoost\Config\ContentIndexers* folder and create a new XML file that should look like the example below.

```
<indexers>
    <indexer>
 <title>Test Indexer</title>
        <type>avt.SearchBoost.TestPlugin.TestIndexer, avt.SearchBoost.TestPlugin</type>
    </indexer>
</indexers> 
```

  * Note that you will need to put the actual name of your class, assemble and give this XML file a relevant name. The way it is designed, you do not need to worry about this file being lost on upgrades. Only *.defaults.xml* will be overwritten on updates. This is why it is not a good idea to modify it directly and create new config files as suggested.

5. Once the config is done, go to the Search Boost Control Panel and click Index Content. If everything went well you should be able to see the results if you search for the content you provided.
As you can see, there are many parameters going into the StoreSingleItem API, and most of them are not specified. We will provide a simpler API in the next release. Also, this section will be updated in the future (as developers show interest in this feature) with more examples and details.

