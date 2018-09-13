# Install IFilter

**IMPORTANT**: Starting with version 2.4 you can index PDF files using the PDFBox extension that you can download from our website at [http://www.dnnsharp.com/dotnetnuke/modules/dnn-search/search-boost/download.aspx](http://www.dnnsharp.com/dotnetnuke/modules/dnn-search/search-boost/download.aspx)  
If you have this extension you don't need to install the PDF Ifilter anymore.

Search Boost can index documents both plain text files and binary documents such as PDFs or Word documents. But in order for Search Boost to be able to read the contents of binary files, it needs IFIlter packages installed on the server.

An IFilter is a piece of software that provides an interface for accessing the contents of binary documents as plain text. This mechanism is the foundation of Window Indexing Service and the newer Windows Desktop Search. Without IFilters, documents such as Word or PDFs would not be searchable in Windows.

Search Boost uses EPocalipse.IFilter by Eyal Post library to connect to IFilters, which is on of the best implementations as it resolves some known issues regarding COM threading issues, extracting text from large files and a crash in Adobe's IFIlter when the resources are released.

**Where to get the IFilter Packages**

You can get IFilter installers from respective vendors \(PDF IFilter from Adobe website, Word IFIlter from Microsoft website and so on\). www.ifilter.org is a very good place to get started, but it's a little outdated. In their download section you will find links to various IFilters. If you can't find it on this website, just do a Google search for IFilter.

Here are direct download links for common IFilters:

* Office Files  
  [http://www.microsoft.com/en-us/download/details.aspx?id=17062](http://www.microsoft.com/en-us/download/details.aspx?id=17062)

* PDF  
  [http://supportdownloads.adobe.com/detail.jsp?ftpID=5542](http://supportdownloads.adobe.com/detail.jsp?ftpID=5542) \(for 64 bit platforms\)  
  [http://www.adobe.com/support/downloads/detail.jsp?ftpID=2611](http://www.adobe.com/support/downloads/detail.jsp?ftpID=2611) \(for 32 bits\)  
  \(Note: on 64 bit platforms install both to be safe since IIS application pools can sometimes be configured to run as 32 bit\)

* You can also use Adobe Acrobat® 11 or Adobe Reader® 11 \(free\) to index PDF documents \(32 bits\).

Once you find the IFilter you need, you have to install it on the web server for document indexing to work. Note that depending on your server you may need to install the 32 bit or the 64 bit versions of IFilters \(or both\). After installation also do an IIS Restart to make sure they are loaded.

Search Boost only enables indexing for PDF, Word, Excel and Powerpoint documents. If you need other formats for which you know there are IFilter packages available, please contact us.

**Enabling PDF IFilter**

One of most common issue we get on support is in relation to searching PDFs because the IFilters are not properly installed. This either appears as a message in Search Setting screen saying IFilter for PDF not installed or as exceptions being thrown during indexing. The exceptions can be see in the indexing log.

We found that the following routine usually fixes the issue:

1. **Uninstall all versions of PDF IFilter present on the server**  
   You do this from Add/Remove Programs feature in Windows

2. **For 32 and 64 bit systems install Adobe PDF IFilter v6.0**  
   It's recommended that you install this for 64bit systems too because IIS could be running in 32 bit mode in which case it will need the 32 bit version of the IFilter

3. **For 64 bit systems also install Adobe PDF iFilter 9 for 64-bit platforms**  
   So if IIS runs in 64 bit mode it will automatically load this package

Important: In order to get accurate results, make sure to restart IIS after installing/uninstalling PDF IFilter.

If after doing the steps above you still can't get the PDF files to get indexed, try uninstalling all IFilters and install the Adobe Acrobat Reader instead, which comes with latest versions of the PDF IFilter.

Or, simply download and install our PDF Search Extension that will work in all situations.

**Notes for 64bit Machines**

On 64bit machines there is an option in the Application Pool &gt; Advanced Settings that called Enable 32-Bit Applications. What this does is making the application pool only work with 32 bit compiled unmanaged code. This means that IFilters will only work if you have both versions \(32bit and 64bit\) installed. It's recommended that you turn off this option so IIS properly loads all 64 bit IFilters available on your machine.

**Determine if PDF IFilter is loaded into IIS**

A cool trick to determine if IIS loaded the PDF IFilter is to investigate with Process Explorer.

1. **Locate and click the Find Handle or DLL button on the toolbar**

2. **Type in IFilter in the search box**

3. **If IIS loaded the PDF IFilter then you'll get some results in the box under the w3wp.exe process \(which is the IIS process\).**

Getting empty results suggests some problems loading the PDF IFilter in which case follow steps in previous section to get the issue fixed.

