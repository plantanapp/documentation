### Run in Web Farm

This guide assumes that you have a load balancer that sits on top of a few machines. The /Portals folder is located on a shared network location so all machines share the same files (or other file synchronization mechanism).

The problem with the search engine is that there can be only one index writer. So there can be only one server that indexes the content. Choose the server that will do this: 
 * Go in Host > Schedule and set for the two SearchBoost schedulers ("Search Boost - Indexer" and "Search Boost - Query Content Sources") the `Run on Servers` property to the same server name.

Don't manually index from a SearchBoost settings page as this could start on any server. Let SearchBoost [incrementallly index](/indexing.html) by itself - you can manually fire the `Search Boost - Query Content Sources` schedule item.

**Note**: If you have a synchronization mechanism set it to ignore "write.lock" files.