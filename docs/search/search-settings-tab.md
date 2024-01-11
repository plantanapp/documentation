---
id: search-settings-tab
title: Search Settings Tab
sidebar_label: Search Settings Tab
---

# Guide to the Settings Tab in Plant an App Search Configuration

## Introduction

The Settings Tab in Plant an App's search configuration is integral for tailoring the search functionality to user needs. This guide details each setting within the tab to help you understand and effectively utilize them for a customized search experience.

## UI Settings

These settings are responsible for the appearance and behavior of the search input box.

### Search Input Box

#### **Template for Search Input Box**
Choose a predefined template for the appearance of the search input box. The default template is recommended for standard use cases.

#### **Name of Query String Parame**
This setting allows you to customize the query string parameter name for the search term in the URL. By default, it is "sb-search".

#### **Name of Query String Param for Page Index**
Here, you define the query string parameter name for the page input (default is "sb-page"). It determines the page navigation through search results.

### Search Results 

This section determines how your search results are presented and managed.

#### **Results Page**
Designate a specific page where search results will be displayed when a search is initiated.

#### **Template for search results**
Select or create templates to customize the layout of your search results.

#### **Live Search**
Enabling "Live Search" will present results in real time as the user types in the search input box.

#### **Results Per Page**
Specify the number of search results to display on one page. The default is 10.

#### **Number of Page Links**
Choose how many page links will be shown at the bottom of the search results, facilitating navigation through result pages.

#### **Max Description Length**
Control the maximum length of the description text for each search result.

#### **Strip HTML from descriptions on results page**
If enabled, this removes any HTML from the descriptions in the search results for a cleaner appearance.

#### Display Additional Info in Results Options

When configuring the search functionality in Plant an App, you have the ability to enhance the user experience by providing additional information with each search result. These settings allow users to quickly assess the relevance and context of the search results without having to click through to the content. Below are the options available for displaying additional information in search results within the Settings Tab.

##### Include Icon by Result Type
This option enables icons next to search results that are indicative of the content type, making it visually quicker for users to identify the type of content they are looking at. For example, a PDF document might have a PDF icon, while a webpage might show a browser icon.

##### Include Author Name
By selecting this option, the name of the author who created the content will be displayed with the search result. This is particularly useful for users who might be searching for content created by specific individuals.

##### Include Published Date
This will show the date the content was published next to each result. Users looking for the most recent content or trying to determine the timeliness of the information found will find this feature helpful.

##### Include Keywords
If enabled, keywords associated with the content will be shown, allowing users to see how their search criteria match with content tags or designated keywords, and to potentially refine their searches based on relevant keywords displayed.

##### Include Relevance Score
Displays a relevance score or percentage that indicates how closely the result matches the user's search terms. This can help users quickly discern the most pertinent results to their query.

##### Include Social Sharing Options
This feature allows social sharing icons to be included with each search result, facilitating easy sharing of the content found on different social media platforms. It encourages content dissemination and user interaction.

### Sorting

Customize the order by which search results are sorted:

- **Sort Results By**: Set the default sorting of search results, such as relevance or date.
- **Sort When No Search Terms**: Define how to sort results when no search terms are given, which can be useful for displaying default or filtered content.
- **Allow User Sort**: Enable users to choose their preferred sorting method at the time of search.

### Filters

Allow users to refine their searches using filters:



### Search Settings

Precise control over the content included in searches and its handling:

#### **Search Fields**
Select which fields should be included in the search, such as titles, content, authors, or keywords.

#### **Field Weights (Boosting)**
Assign different levels of importance or "boost" to certain fields to influence their prominence in search results.

#### **Fuzzy Search Settings**
Enable fuzzy search to match on terms that are similar but not identical to the search query. This can be helpful for catching typos or slight variations.

#### **Wild Card Search**
Allow the use of wild card characters in search queries.

#### **Multi-Word Searches**
Configure how multi-word queries are handled—whether all terms must be present, any term may match, or the exact phrase must be found.

#### **Result Titles**
Determine how result titles should be prioritized and displayed based on content type.

#### **Result URLs**
Set rules for how URLs are constructed for results, potentially using tokens for dynamic link generation.

### Advanced Search Settings

The Advanced Search Settings in Plant an App's search configuration allow administrators to manage complex aspects of search functionality that can influence performance, behavior, and result accuracy. This section requires a nuanced understanding of how search works or support from technical experts.

#### Retain Search Report

This setting determines how long the system will retain historical search report data. By default, it is set to retain the history for 90 days. Setting this to zero (0) will keep the data indefinitely. It is recommended to keep the default value to manage data storage effectively and ensure that search reports remain relevant.

#### Open Search Results Settings

These settings define how links from search results open when clicked.

##### Open Search Pages In
Choose whether search result links that direct to pages should open in the same window, a new window, or a named window.

##### Open Search Results That Are Documents In
Decide whether links to documents in the search results should open in the same window, a new window, or a named window.

##### Open Search Results That Are Rules In
Specify whether links from rule-based search results open in the same window, a new window or a named window.

#### Replace Tokens in Search Results

If enabled, this option allows for the replacement of tokens within search results, including titles, descriptions, and URLs, provided the Tokens module is installed.

#### Hide Search Settings Link for Skin Objects

This setting, when enabled, hides the search settings link that appears for search input skin objects. This is beneficial when the link interferes with the design or functionality of the search input.

#### Disable Content Querying

When checked, automated indexing becomes disabled, and the index will not update automatically. While manual indexing is possible with this option enabled, it prevents new content from being automatically included in the search index.

#### Debugging Options

These options are vital for troubleshooting and refining search behaviors:

- **Debug Show Result Data**: Enables viewing of the raw data structure used in search results.
- **Debug User Search Logging**: Logs users' search submissions for examination.
- **Debug Enable Search Indexing Logging**: Records the indexing process for later review.

#### Analyzer

This setting influences how content is processed into the search index by defining rules for word recognition and handling of punctuation, accents, character sets, and more. Generally, the default analyzer is used unless there is a specific need for a custom parsing approach.

#### Prevent Search Boost Auto Updating Configuration

Use this option to control the configuration updates of Search Boost, which may include updates to the web.config file or the disabling of scheduled search indexing tasks.

#### Ignore DNN Security

When activated, this option bypasses DNN security checks allowing search results from secure content to be displayed without authentication. This setting should be used cautiously due to its potential security implications.

#### Collect IP Addresses

This setting, when enabled, stores the IP addresses associated with search queries in the search reports. Utilize this feature only if there is a need to track the sources of searches for security or analytical purposes.

:::warning
Many of the settings within the Advanced Search Settings are global and can have wide-reaching effects on the search functionality and system performance. It is essential to proceed with caution.
:::

Remember that you may need to clear the search index and perform a complete reindex for changes to take effect. Always test the search function after making adjustments to ensure the desired outcomes are achieved.


:::note
It is crucial to understand that changes made to these settings should be tested using the Test Search function to ensure they produce the desired outcome. Additionally, some settings may require a full reindex to take effect.
:::

This guide should equip you with the knowledge to configure the Settings Tab of Plant an App's search functionality effectively. Remember to save your changes and reindex your content if required.