---
id: search-dashboard-tab
title: Search Dashboard Tab
sidebar_label: Search Dashboard Tab
---

# Guide to the Search Dashboard Tab in Plant an App

The Search Dashboard Tab in Plant an App offers a centralized and interactive interface for monitoring and managing search behaviors within your application. This comprehensive guide will walk you through each section of the Dashboard Tab to help you maximize your search configuration efficiency.

## Navigating to the Dashboard Tab

To access the Dashboard Tab for search configuration, follow these steps from the main dashboard of Plant an App:

1. Click on the **Configuration** section in the sidebar menu.
2. Select the **Search** option from the list to expand the search-related features.
3. Click on the **Dashboard** tab to open the search dashboard.

## Key Sections of the Search Dashboard Tab

Here's a breakdown of the various sections and functionalities that you'll find in the Search Dashboard Tab:

### Status Section

This section provides a real-time status update on the indexing process, which is essential for ensuring that your search function is up-to-date with the latest content changes.

- **Jobs Running**: Displays the number of ongoing indexing jobs. When no indexing processes are occurring, it will indicate "zero jobs."
- **Jobs Completed**: Shows the total number of indexing jobs that have successfully completed.

### Server Information

The Server Information section presents details about the environment where the search service is running:

- **Current Server Name**: Indicates the name of the server that you are currently managing.
- **Master Server Name**: Displays the master server name, which is particularly important in multi-server or web farm environments to designate the primary server for indexing tasks.

### Behavior Selector

This part of the dashboard allows administrators to set and swap between different search behaviors predefined in the system:

- **Behaviour Dropdown**: Lists all of the available search behaviors that have been created and configured in the system. Choose the desired behavior to manage its specific settings.
- **Gear Icon**: Provides quick access for importing or exporting behaviors, and if a behavior other than the default is selected, it allows for its deletion.

### Indexed Content Tiles

This is where you'll see a visual and numeric representation of the content that has been indexed according to the selected behavior:

- **Pages**: Displays the number of web pages included in the current behavior's index.
- **Files**: Shows the total count of indexed files like PDFs, Word documents, etc.
- **Database Entries**: Reflects the volume of database entries crawled and indexed.
- **URLs**: Indicates the number of URLs that have been processed.
- **Entities**: Counts the entity records that are part of the index.

### Reports Section

This section provides useful metrics and insights into how users interact with the search function:

- **Popular Searches**: Lists the most frequently executed search queries.
- **Recent Searches**: Displays the latest terms that users have searched for.
- **Search Frequency**: Offers a graph or set of statistics that indicates the volume and patterns of search usage over time.

### Search Inputs Management

Finally, this section allows you to link specific search input modules to defined behaviors:

- **Module Binding**: Associate a search input module with a behavior to determine how it reacts to user queries and which indexed data it accesses.
- **Input Configuration**: Adjust settings like placeholders, default text, and auto-suggestions for your search input modules.

## Managing the Dashboard

To ensure that the search configuration remains effective and efficient, regularly review the dashboard. Here are some management tips:

- Monitor the **Status Section** to ensure indexing jobs complete successfully.
- Use the **Behavior Selector** to switch between different search configurations, testing and assessing each for performance and accuracy.
- Analyze the **Reports Section** to understand user search patterns and adjust content strategy or search settings accordingly.

By staying vigilant and responsive to the information presented in the Search Dashboard Tab, you can maintain a powerful and user-friendly search functionality within your Plant an App platform.

:::note
Always save your changes before leaving the dashboard, and remember to reindex whenever significant adjustments are made to search behaviors or indexed content.
:::