---
id: configure-file-types
title: Configure File Types
sidebar_label: Configure File Types
---

# Configuring File Types and Indexers for Enhanced Search Capabilities

## Overview

Our comprehensive search feature supports a wide array of content sources and file types to ensure a seamless and inclusive search experience. In this document, we detail the supported file types, how to configure file indexers, and utilize IFilter packages for enhanced search capabilities.

## Supported File Types

Our search feature supports the following file types:

- **PDF Files**
- **Word Documents (docx)**
- **Word 97-2003 Documents**
- **Excel Documents**
- **Excel 97-2003 Documents**
- **Powerpoint Documents**
- **Powerpoint 97-2003 Documents**
- **Plain Text Files**
- **HTML Files**
- **Videos** - Titles Only (and metadata XML)

### Custom Configuration

To enable some file types or to tweak existing settings, you can configure more file indexers by navigating to: `/DesktopModules/DnnSharp/SearchBoost/Config/ContentParsers/`. This area allows for the support of new formats, adding new extensions for existing formats, or setting defaults.

## IFilter Packages

To enable some formats, installing IFilter packages on your website is necessary. These packages are available from their respective owner's websites (e.g., Adobe, Microsoft).

- **PDF Files**: Previously requiring an IFilter, newer versions of our software leverage the PDFBox extension for indexing PDF files. This negates the need for a traditional PDF IFilter.

- **Office Files and More**: IFilters are crucial for indexing binary documents such as Word, Excel, and PowerPoint files. They act as a bridge to access the contents of these files in a readable format for indexing.

    **Where to Find IFilter Packages**:
    - For **Office Files**: [Microsoft Download Center](//www.microsoft.com/en-us/download/details.aspx?id=17062)
    - For **PDF Files** (64-bit): [Adobe Support Downloads](//supportdownloads.adobe.com/detail.jsp?ftpID=5542)
    - For **PDF Files** (32-bit): [Adobe Support Downloads](//www.adobe.com/support/downloads/detail.jsp?ftpID=2611)

### Installing IFilter Packages

1. **Uninstall Any Existing IFilter Versions**: Start by removing any versions of IFilter installed on your server.
2. **Install Adobe PDF IFilter v6.0**: Recommended for both 32-bit and 64-bit systems to cover all bases.
3. **Additional Step for 64-bit Systems**: Also install Adobe PDF iFilter 9 for 64-bit platforms.
4. **Restart IIS**: Crucial for ensuring the newly installed IFilters are loaded properly.

**Note**: On 64-bit machines, ensure that the `Enable 32-Bit Applications` option in the Application Pool settings is adjusted according to your needs.

### Verifying IFilter Installation

A useful method to verify the successful loading of PDF IFilter is through the use of a tool like Process Explorer. Search for **IFilter** within Process Explorer to confirm its presence under the **w3wp.exe** process, indicating successful loading.


## Conclusion

Enhancing the search functionality through the configuration of file types and installation of IFilter packages significantly improves the user's search experience. By following the instructions outlined in this document, you can ensure your platform supports a broad spectrum of document types and content sources.

For further assistance or to enable support for additional document formats, please contact our support team.