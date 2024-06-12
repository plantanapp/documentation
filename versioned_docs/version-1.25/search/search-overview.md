---
id: search-overview
title: Search Overview
sidebar_label: Search Overview
---

# Search Overview

The search functionality in Plant an App allows users to easily search for content on the website. This feature can be accessed by clicking on the search icon and entering a search phrase. Search results will be displayed, showing the title, link, and a sample of the web page. Users can click on a search result to view the full page.

## Purpose
The purpose of the search configuration page is to define the content that is indexed by the search functionality and specify how users will interact with the search feature. By configuring search, you can ensure that users can easily find the content you have provided when they enter a search term on the website.



# Configuring Search in Plant an App

## General Description

This documentation provides a comprehensive guide on how to configure search functionality in Plant an App. The information contained herein applies to version 1.25 as of January 2024.

### Accessing Search Configuration

To begin configuring search, navigate to the Plant an App configuration page and select the **Search** feature from the options on the left-hand side.

### Features of the Search Configuration Interface

#### Indexing and Testing

At the top bar of the search configuration, several buttons are available:

- **Index**: Initiates incremental indexing, which adds to the search index only the content that has changed recently. This process typically occurs automatically every 10 minutes.
- **Reindex**: Triggers a full reindexing process, completely regenerating the search index from all source content. This is useful after changing search options or fixing a corrupt index.
- **Test Search**: Opens a window for testing search functionality and results, which may include testing fuzzy search settings.
- **Save**: Saves any changes made to the search configuration. Upon saving, the system may offer the option to reindex.

#### Dashboard Tab

The dashboard tab of the search configuration displays the following sections:

- **Status**: Indicates the number of indexing jobs running or pending completion.
- **Server Information**: Shows the current and master server names, which help with setups involving multiple servers in a web farm.
- **Behavior**: Lists different pre-defined search behaviors, allowing you to create indexes that respond differently based on specific search settings.
- **Indexed Content**: Reflects the number of indexed items such as pages, files, database entries, URLs, and entity records.
- **Reports**: Demonstrates popular and recent searches, which helps in understanding user interaction with the search function.
- **Search Inputs**: Allows you to bind search input modules to specific behaviors.

#### Content Sources Tab

The content sources tab allows you to define what pages, folders, database entries, URLs, and document types are included or excluded from the search behavior.

#### Settings Tab

The settings tab contains several configurable options for fine-tuning the search behavior, including:

- **UI Settings**: Allows you to manage the appearance and behavior of the search input box.
- **Search Results Settings**: Determines how search results are presented and includes options such as results per page, live search, and custom templates for displaying search results.
- **Sorting and Filters**: Offers the ability to sort search results by various criteria and create user-defined filters for more refined searches.
- **Search Settings**: Configures which fields to search in, how to handle special search options, and defines content exclusion.
- **Advanced Settings**: Delivers tools for debugging, managing advanced search settings, and obtaining technical information for support cases.

:::note
Some features discussed in the video tutorial, such as search index logging and handling wild card searches, may have compatibility constraints, and certain settings may influence the behavior and relevancy of search results.
:::

### Conclusion

After thoroughly configuring the search functionality in Plant an App based on the guide, you will possess an optimized search experience tailored to the needs of your users and application. Remember to save your changes and potentially reindex the site to implement and test the new search behavior settings.

:::note
This documentation is intended to be a guide, and it is recommended to explore each option's implications within your specific application context. For complex or advanced configurations, seeking assistance from Plant an App support may be beneficial.
:::

Please refer to the specific sections in the documentation for more detailed information about configuring search in Plant an App.

