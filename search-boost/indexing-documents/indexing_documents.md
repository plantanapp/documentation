#### Indexing Documents

Starting with version 1.6 Search Boost supports searching portal documents. These can be plain files such as .txt or .html or rich format binary files such as PDF or Word documents. 

Note that binary formats are supported through the use of IFilters except of DOCX and PDF files which are supported in dual mode (either through IFilter or custom handler). Whether IFilters are already installed on your server or not depends on a lot of factors such as the OS version and the installed applications, so make sure to read the page on Installing IFilters.

It's also possible to write your own file indexers and instruct Search Boost to use them for the extensions you select. Read more about this on the Search Other Formats page.

NOTE that starting with Search Boost version 2.4 there is an extension available for download which enables searching PDFs when IFilters are not available or not working as expected.

**Select Portal Folders to Search**


Each Search Boost Instance can be configured to search specific folders 
under Search Target screen. 

A portal tree has two root nodes: Portal Pages (that has the DNN Page and Modules hierarchy) and Portal Home Directory (that has the folder structure under Website Root/Portals/X folder).
See image on the right for visual guidelines.

Note that if under Document Search Settings you configure the instance to enforce DotNetNuke security, the actual folders that return results will vary based on the permissions of the user doing the search.


**Select File Types to Search**

This is made from the Document Search Settings dialog that opens you click the respective link in the left pane.

This screen lists all file formats that Search Boost can index and search out-of-the-box. Note that this list can be easily extended with other file types. Read Search Other Formats page for more information. 

Some formats in the list will have some requirements before they can be used. For example searching PDF documents requires that you Install PDF IFilters first. Any error returned by a File Indexer is then displayed in red in the listing.


**Configure File Download Method**

In the second tab of the Document Search Settings dialog you can configure how the URL for downloading the files is formed. Each has both advantages and disadvantages as outlined below, so you'll have to choose the solution that best matches your requirements:

  * **Use file path**

SEO & Human Friendly, doesn't enforce security (once obtained, the link can be accessed regardless of security)
Example: http://site.com/Portals/0/MyFolder/MyFile.pdf

  * ** Download script with File Path **

SEO & Human Friendly, enforces portal security (when option is enabled in Security Tab) but absolute path can be guessed
Example: http://site.com/SearchResults.aspx?file=MyFolder/MyFile.pdf

  * **Download script with File ID**
  
Hides (obfuscates) internal paths, ideal solution for enforcing security (when option is enabled in Security Tab)
Example: http://site.com/SearchResults.aspx?file=4123

**Security**

Important: This section has been removed. The security is now always enforced by default. There is a now an inverse setting to ignore security from the Metadata file.

Last tab of the Document Search Settings dialog is called Security and the only option available now is to Enforce DotNetNuke security. When this option is checked Search Boost looks up folder permissions in DNN tables and only displays results from files user doing the search has access to. 

One important thing to keep in mind is if a folder doesn't exist in DotNetNuke permissions table then Search Boost will consider that folder as being public. This happens most likely because the folder was manually copied in portal home directory and DNN wasn't synchronized back with the file system.