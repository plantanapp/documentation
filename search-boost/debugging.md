# Debugging - Common fixes for various issues with SearchBoost

### **Files from Document Exchange \(DMX\) are not indexed by SearchBoost**

1. The file type is not checked to be indexed by SearchBoost. Go to SearchBoost Studio - Document Search - File Types and check the desired file types. Make sure you save the changes and reindex.
2. The DMX Integration add-on is not installed. Go to Host - Extensions and make sure the "avt.SearchBoost.DmxIntegration" is installed.
3. The DMX folder is not set to be indexed. Go to SearchBoost Studio - Content Sources - Portal X - Folders and check if the "Document Exchange \(DMX\)" is checked.
4. Check if the DMX config was added on install. It must be on the following path: DesktopModules\DnnSharp\SearchBoost\Config\ContentSources, file "DmxContentSource.json.config":![](/search-boost/debugging/assets/2017-03-17_1629.png)

### **Jobs are kept in queue, but nothing is indexed**

**Make sure Schedulers are set-up:**

* Go to Host - Schedule - Settings and make sure Scheduler Mode is not disabled;

* Go to Host - Schedule and check if "Search Boost - Indexer" is enabled;

* If the scheduler is enabled, click on the pencil icon \(Edit\) on the left and press "Run Now";
* Go to Schedule Status and check if indexer schedule is running.

