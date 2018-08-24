### Uninstalling

Because DotNetNuke is missing a mechanism to notify modules when they are about to get uninstalled, there are a few manual steps you have to take to successfully uninstall Search Boost.  
Asdf.

  1. Remove/Comment all Skin Objects:
Search the skin folder (/Portals/_default/Skins and /Portals/[Number]/Skins) for references to SearchBoost (in one word). For each file that you find make sure to remove/comment the following two lines: 

```
<%@ Register TagPrefix="avt" TagName="SB" Src="~/DesktopModules/DnnSharp/SearchBoost/SearchInput.ascx" %>
```

and

```
<avt:SB runat="server" />
```  

  2. Uninstall avt.SearchBoost.Results module from Admin > Extensions screen.
  3. Uninstall avt.SearchBoost.Input module from Admin > Extensions screen.
  4. Restart the DNN Indexer from Host > Schedule.
  5. If you're getting an error like below, it means that you had an older version of Search Boost that was not compatible with DNN 7. In this case, you have to restore this Lucene.dll. Easiest thing, download the install package for your version from dotnetnuke.codeplex.com, open the zip file and copy /bin/Lucene.dll into your website /bin folder.

```
Search: Site Crawler Starting. Content change start time 6/16/2014 2:45 PM 
EXCEPTION: Could not load file or assembly 'Lucene.Net, Version=3.0.3.0, Culture=neutral, PublicKeyToken=85089178b9ac3181' or one of its dependencies. The system cannot find the file specified.
```

If you want to uninstall manually then you have to change:

```html
  <searchDataStore defaultProvider="AvtLuceneDataStoreProvider">
      <providers>
        <clear />
        <add name="SearchDataStoreProvider" type="DotNetNuke.Services.Search.SearchDataStore, DotNetNuke.Search.DataStore" providerPath="~\Providers\SearchProviders\SearchDataStore\" />
        <add name="AvtLuceneDataStoreProvider" type="avt.SearchBoost.Core.Indexing.LuceneDataStore, avt.SearchBoost.Core" providerPath="~\DesktopModules\DnnSharp\SearchBoost\" />
      </providers>
    </searchDataStore>
```

to

```html
    <searchDataStore defaultProvider="SearchDataStoreProvider">
      <providers>
        <clear />
        <add name="SearchDataStoreProvider" type="DotNetNuke.Services.Search.SearchDataStore, DotNetNuke.Search.DataStore" providerPath="~\Providers\SearchProviders\SearchDataStore\" />
      </providers>
    </searchDataStore>
```
