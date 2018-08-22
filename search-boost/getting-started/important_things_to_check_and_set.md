### Important Things to Check and Set

##### In Input settings page check:

1. The results module is linked (see [Getting started](getting_started_with_searchboost_3.md).
2. The Indexing sources and other settings are set (after a save you can do a refresh to make sure the saving was correct). 

In Host -> Schedule check the following:

* Default Search should be disabled (we do this automatically) . Default scheduler should be disabled Search: Site Crawler. For Evoq there are 2 more: Search: File Crawler & Search: Url Crawler.

* SearchBoost uses the following schedulers: Search Boost - Indexer and Search Boost - Query Content Sources. If the Indexer is not firing (check history) then indexing new content will not work (and current indexing items will remain in queue until next run). The Indexer should fire every few seconds but the Query Content Sources is used to check for new content so you can adjust it to your needs.

If you want to start indexing, if it wasn't automatically, you should do:
1. Click clear and Index.
2. You should see a progress bar and the Indexing stats updating.
3. You can also test search by using "Test Search".

With the release of Search Boost 3.2, the default search is disabled on install.