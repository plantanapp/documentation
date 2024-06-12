---
id: search-content-sources-tab
title: Search Content Sources Tab
sidebar_label: Search Content Sources Tab
---

# Understanding the Content Sources Tab in Plant an App Search Configuration

The Content Sources Tab in Plant an App search configuration is where you define and manage which content within your application is searchable. This tab includes several sections allowing you to include or exclude pages, folders, database entries, URLs, and document types from the search index. Here's a detailed guide to each option within the Content Sources Tab.

## Portals

This section determines what pages and folders are included in or excluded from the search behavior. By default, all pages and folders are included, but you can customize your selection. It uses a tree structure to display the hierarchy of the content, and you can include or exclude content at each level.

### Pages and Folders Inclusion

You can choose to exclude all content initially and then selectively include specific pages or folders that you want searchable. Alternatively, you can exclude individual pages or folders from an otherwise inclusive list.

## Database Indexing Rules

Database Indexing Rules allow you to index content directly from your SQL databases. Here, you'll define different rules for indexing database content.

### Creating Indexing Rules

Create new rules by defining a name and description, connecting to a SQL database, and specifying the SQL query. The resulting content from the query can be included in the search index where you define the link, title, and description of the content.

## URLs

This section lets you choose specific URLs for the search engine to crawl, ensuring that the relevant web pages are included in the search index.

### Adding URL Sources

You can add individual URLs, site maps, or RSS feeds for crawling. Additional mapping options allow you to define how site maps or RSS feeds should be processed for indexing.

## Exceptions

Exceptions allow you to exclude specific content from being indexed. This might include tabs, modules, folders, or file extension types.

### Tabs and Modules

For tabs and modules, you can include one entry per line using:

- Tab number
- Substring of the page title or name
- Regular expression to match patterns

### Folders and Extension Types

For folders:

- Include one entry per line using a substring of a folder or file name
- Use regular expressions for pattern matching

For file extensions:

- Specify file types that should be ignored in indexing
- Include only items that support searchable content

## File Types

In this section, you determine which file types from your included folders will be searchable. Options include various document types like PDFs, Word, Excel, and PowerPoint files, along with plain text files, HTML files, videos, etc. Note that videos are typically included by title only, along with any associated metadata.

### Advanced Configuration for File Types

Advanced options for file indexing allow you to add support for new formats or to modify existing formats. You can install IFILTER packages from providers like Adobe or Microsoft for broader format support.

### Text Extraction

A handy tool for viewing how search boost parses your files is available, allowing you to extract content from files. This can help you understand why certain content is indexed in a particular manner.

## URL Format for Files

Manage how file URLs are displayed in search results. You can opt to hide internal file paths, which enhances security by preventing direct deduction of file paths based on IDs.

### Custom Download Scripts

If needed, you can provide your own custom script (typically an ASPX file) to handle the delivery of files when they are accessed from search results.

By carefully configuring each of these options in the Content Sources Tab, you can create a highly tailored search experience for end-users, ensuring that only relevant and permitted content is included in search results.

:::note
As you add, remove, or update content on your app, remember to reindex (manually or automatically) to reflect these changes in the search functionality.
:::