# FAQ

**How do I migrate a custom indexer from SearchBoost 2.x to SearchBoost 3?**

It should be easy to upgrade your custom indexer for SearchBoost 3. We have changed the architecture (we have made it even more customizable) but you just have to implement a different interface (you have to make a content source now). The difference between IndexItem and IndexingJob is that the latter is queued waiting for a scheduled job running every few seconds to grab him. Other than that there are pretty similar. See the documentation: Content Sources.

**How does SearchBoost ranks results?**

Default search scoring algorithm weights results using TF—IDF, term frequency—inverse document frequency.  Term frequency means that high-frequency terms within a document have higher weight than do low-frequency terms.  Inverse document frequency means that terms that occur frequently across many documents in a collection of documents are less likely to be meaningful descriptors of any given document in a corpus and are therefore down-weighted.  This filters out common words. Details about all the factors: <//www.lucenetutorial.com/advanced-topics/scoring.html>

**How can I can exclude specific modules or folders from search results?**

It's very easy to exclude specific modules from search index. After you added a SearchBoost Input module in a page, then go to Search Settings. Scroll down to "Exceptions..." then click on the drop-down button. As you can see, you can exclude Tabs, Modules, Folders and Extension Types from the search results. The rule for this is to add one ID entry per line. After modifications have been made, you will need to reindex all pages.

**Is there any way I can set the "Skin Object siteSearch" (skin search) to use the settings and index from a Search Boost module?**

If you intend to use the same settings for the Search Boost module and site search, use the following steps:
1. Go to _Portals\portal ID\Skins\skin name_;
2. Open the file _Home.ascx_;
3. Find the following line: `<avt:SEARCH ID="dnnSearch" SiteInstanceId="siteSearch" runat="server"/>`;
4. Go to *Search Boost Studio*;
5. Click on the "*Switch Instance*" button;
6. Find the ID of the module you want to use as a source;
7. Replace *siteSearch* from *Step 3* with the module ID;
8. Restart the application. 

**If I click on "Switch Instance" button from SearchBoost Studio, I notice multiple instances that I no longer use. How can I delete them?**

This happens sometimes. It usually happens when multiple skins are patched, since SearchBoost can't check or automatically unpatch skins that are no longer used. The solution for this is pretty simple, you just need to go to SQL Server, open the avtSearchBoost_Instances and delete the desired entries. And yes, it's safe.



