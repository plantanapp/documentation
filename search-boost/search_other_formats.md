<span style="color:red"><b>This page is outdated. Use this instead: </b></span>[http://search-boost.guide.dnnsharp.com/install_ifilter.html](http://search-boost.guide.dnnsharp.com/install_ifilter.html)
#### Search Other Formats

The file formats that came with Search Boost will cover 90% of the cases as they're the most popular formats out there.  But sometimes you'll want to extend the documents that can be searched with new types, either plain text formats, other binary formats based on IFilters or other libraries, or even your own binary formats. Each of these cases will be explained below.

Before getting started note that configuration of File Indexing is totally decoupled from Search Boost so you can easily add, update or remove file indexers. The configuration file is located under ~/DesktopModules/DnnSharp/SearchBoost/Config/FileSearch.xml.

**Change Default Document Types**


So you're tired that each time you create a new Search Boost instance you have to configure which file types are indexed?

If so, open the configuration file (~/DesktopModules/DnnSharp/SearchBoost/Config/FileSearch.xml) and for each file indexer node set the element named default to hold either true or false. 

For example, to always index excel files, change the respective node to

    <indexer>
        <title>Excel Documents</title>
        <default>true</default>
        <extensions>
          <ext>xlsx</ext>
        </extensions>
        <type>avt.SearchBoost.Core.FileIndexing.IFilterFileIndexer, avt.SearchBoost.Core</type>
    </indexer>

**Adding New Plain Text Formats**


Let's say you have some plain text files but the extension is not the standard .txt, instead it's .csv (comma delimited list of values usually exported from database or excel type application).

This is very easily achievable from the configuration file. There are two options.
1. **Either** add the extension to the existing Plain Text Files indexer like illustrated below

    <indexer>
        <title>Plain Text Files</title>
        <default>false</default>
        <extensions>
            <ext>txt</ext>
            <ext>csv</ext>
        </extensions>
        <type>avt.SearchBoost.Core.FileIndexing.PlainTextIndexer, avt.SearchBoost.Core</type>
    </indexer>

2. **Or** create a new file indexer node with a new name targeting the .csv extension as shown below. The simplest way is to copy/paste the Plain Text Files xml node and change it as highlighted below

    ```<indexer>
        <title>Comma Delimited Files</title>
        <default>false</default>
        <extensions>
            <ext>csv</ext>
        </extensions>
        <type>avt.SearchBoost.Core.FileIndexing.PlainTextIndexer, avt.SearchBoost.Core</type>
    </indexer>```

    Tip: Removing file formats is as simple as removing the corresponding node from the configuration file.

**Adding New Formats based on IFilter (with Real Life example, .CHM)**

IFilters provide a generic way to get file contents as a contract between file type and providers (which means that for each file type you want to support you need appropriate IFilter installed). Read Installing IFilters page for more information.

To make things even simpler, let's follow a real life example of adding support for indexing CHM files. If you're not familiar with CHM, read more about it on wikipedia. 


To add support for .CHM files, follow steps below

1. First of all, download and install the CHM IFilter
Download from CitekNet

2. Next, we need a TEST file
A test file is the simples CHM you can think of that Search Boost will try to index in order to determine if the corresponding IFilter package is installed.
For CHM, you can generate one using Html Help Workshop or download sample CHM from avatar-soft.ro.

3. Copy the test file to ~/DesktopModules/DnnSharp/SearchBoost/Test/ folder

4. Create XML Definition as shown below (not the highlights, they're the only significant differences from other indexer  definitions based on IFilters)

  ```  <indexer>
        <title>CHM Files</title>
        <default>true</default>
        <extensions>
          <ext>chm</ext>
        </extensions>
        <type>avt.SearchBoost.Core.FileIndexing.IFilterFileIndexer, avt.SearchBoost.Core</type>
    </indexer>```

We're done! To confirm everything is running smooth, refresh Search Settings administration console then look in Document Search settings for the file type. If everything went well, the indexer should be selected with no errors displayed next to it.
Next, start testing with production ready CHM files (tip: you can find some CHM files in the Window/system32 folder).

**File Indexers**


A few words on how file indexers work will make thing easier to understand for developers. If you're not a developer we still recommend browsing through this section in order to understand that when it comes to file indexing, Search Boost can be extended in a number of ways.

In the previous examples, you notice how each indexer definition has a <type> node that also has the same value in most cases. The type specified there is what Search Boost invokes in order retrieve plain contents from a file. All the file indexers implement same interface avt.SearchBoost.Core.FileIndexing.IFileIndexer from avt.SearchBoost.Core assembly. 

The interface has the following definition
    ```public interface IFileIndexer
    {
        string GetContents(string filePath, eLogLevel logLevel, Logger logger);
        bool IsSupported(FileIndexerDefinition indexerDef);
        string GetErrorMessage();
    } ```

Here is the explanation for each of the method in the interface:
* **GetContents** takes a file as parameter and returns the text contents

* **IsSupported** takes the FileIndexerDefinition (which is basically an object that has all the data from the XML configuration file) and returns true if all requirements are met.

* **GetErrorMessage** is called if IsSupported returned false. The text returned by this method is show in red on the Document Search Settings dialog in the File Types tab.

So writing your own File Indexer is as simple as implementing the IFileIndexer interface and hook it into Search Boost from the configuration file  (~/DesktopModules/DnnSharp/SearchBoost/Config/FileSearch.xml).

Note that you may want to write your own file indexers not just for supporting new binary files types, but also if you need to do some processing to plain text files and then pass the processed content to the indexing engine.


Search Boost comes with following Search Indexers that you can use to link to new extensions:
* **Plain Text Indexer**

Simplest indexer that reads all file contents and returns it

* **XML File Indexer**

Same as the Plain Text Indexer, except that it also strips all tags before returning the contents. Use this indexer for HTML or XML based file types.

* **IFilter File Indexer**

As explained in previous section, this indexer makes COM calls to the IFilter that corresponds to the specified file types and returns plain contents. Search Boost uses EPocalipse.IFilter by Eyal Post library to connect to IFilters, which is on of the best implementations as it resolves some known issues regarding COM threading issues, extracting text from large files and a crash in Adobe's IFIlter when the resources are released.
