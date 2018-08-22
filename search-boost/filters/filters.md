#### Filters

The settings for filters can be accessed from the Filters section (except for Custom Data that can be set when editing DataBase Rule or document metadata). You have the following type of filters:

Notes:
- some filters have an interface enabling filtering by user: Portal Filter, Search Filters, Facets.
- some filters are without interface and are automatic based on current user or page: Implicit Filters, Dynamic Hierarchy Filter.
- Custom Data = properties attached to indexed content (of course at indexing time). You can use them for results special appearance or to filter based on a value.
- for Portal Filter and Search Filters when changing the dropdown value the user has to trigger search (click search button or hit Enter).

![](/search-boost/filters/assets/SearchBoost-Filters-settings.png)

**Implicit Filters**

This allows you to set an implicit filtering of indexed content. You can filter by some obvious fields like FolderName but also after not so obvious, e.g. Type (mod = modules, doc = files).

**Dynamic Hierarchy Filter**

Filters based on the current page. Ignores any source other than modules/pages.

**Portal Filter**

For searches that are configured to run across multiple portals you can enable the Portal Filter, which is a dropdown that lets user select which portal to search (see the image below). 

![](/search-boost/filters/assets/SearchBoost-Portal-filter.png)

The default option searches all content that you selected in the Search Target. It's possible to configure which portals appear in the drop down but the All Portals option will always be present and it will be the default.

**Search Filters**

"Search Filters" allow the user to select from dropdowns that appears next to a search-box to apply additional filters to the search. The filters are handled on the backend, all that the user sees is a dropdown with items. 

At the moment we have implemented only one such "Search Filter" called SubfoldersFilter that, as the name implies, filters to only documents in the selected folder.  In order to use it you can add a xml file in the Config/SearchFilters folder with the following structure. To enable it you have to check checkbox from settings page -> Filters section -> Search Filters.

```<?xml version="1.0" encoding="utf-8"?>
<filters>
	<searchfilter>
		<title>Folder Filter 1</title>
		<key>key1</key>
		<items>
			<type>avt.SearchBoost.Core.Filters.SubfoldersFilter, avt.SearchBoost.Core</type>
			<params>
				<parentfolder>
					<portalid>0</portalid>
					<relpath>folder/path</relpath>
				</parentfolder>
			</params>
		</items>
		<noselection>-- Select section --</noselection>
	</searchfilter>
	<searchfilter>
		<title>Folder Filter 2</title>
		<key>key2</key>
		<items>
			<type>avt.SearchBoost.Core.Filters.SubfoldersFilter, avt.SearchBoost.Core</type>
			<params>
				<parentfolder>
					<portalid>1</portalid>
					<relpath>folder/path</relpath>
				</parentfolder>
			</params>
		</items>
		<noselection>-- Select section --</noselection>
	</searchfilter>
</filters>```

So in this case there will be 2 dropdowns with subfolders of the specified paths.

![](/search-boost/filters/assets/SearchBoost-search-filters.png)

Facets (requires reindexing)

-- (similar functionality to above Search Filters but uses different ui and different behind architecture) --
For a detailed explanation see Faceted Search. Use case: when we enable file folder facets and the search query returns files from the docs and the MYTH2 folders then we automatically display these folders as possible filters.

![](/search-boost/filters/assets/SearchBoostFacets.png)

**Custom Data (requires reindexing)**

You can specify custom data for modules (through metadata) and when creating Custom Database Rules. Then you can filter the search results by appending sbc-(name)=(value) to the URL.
Also you can use Custom Data in the XSL template to customize appearance. You can access the custom data in output template as <xsl:value-of select="data/field[@name='somekey']"></xsl:value-of>. So there are possibilities like displaying an icon for some results items.