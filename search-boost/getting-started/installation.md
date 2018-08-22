### Installation

You can download Search Boost from dnnsharp.com. If you do not own a license yet, you can get the 30 Day Trial. If you own a license and a subscription for a year of free updates and it is not expired then go to Activation.

Search Boost is compatible with DotNetNuke module definition and can be installed via Host > Module Definitions or Host > Extensions.  **The minimum requirements for Search Boost to work properly are DNN 6+ and .NET 4+**.

Once installed, there are two ways that you can use Search Boost.

1. As a Module  
Simply add the avt.SearchBoost.Input module to the page you want the search to start from and the avt.SearchBoost.Results module on the page you want to display the results. Note that this can be the same page. 
  * Follow the directions on Getting Started to install the modules.
  * To start using Search Boost, go to the edit mode, locate the Manage menu then select the Search Settings link  to open the Search Boost Control Panel screen.

2. As a Skin Object

##### Automatically

Starting with Search Boost 2.9.14 there is a toolbar button to automatically replace standard search box. 
To do this, add a avt.SearchBoost.Input module to the page. Open the Manage menu and go to Search Admin. On the toolbar, click the Patch DNN Skin button. If you're Super User, then the Host skins will also be patched, otherwise only the portal skins will.

##### Manually

If you need to do it manually, follow the steps below:

1. Locate the ascx file of the skin you want to install Search Boost. In our example, assume that the skin is in /Portals/_default/Skins/MinimalExtropy/index.ascx.

2. Open the skin ascx file (in our example, it is index.ascx) in your favorite text editor.

3. Before declaring our tag, we need to register our control. Now add the following line right after the ```<%@Control..>``` declaration the ascx file:

  ```html
<%@ Register TagPrefix="avt" TagName="SearchBoost" Src="~/DesktopModules/DnnSharp/SearchBoost/SearchInput.ascx"%>
```
4. Now, you are ready to use SearchBoost.  Just add the following line to the place you want it to show up:
```html
<avt:SearchBoost runat = "server" id = "avtSearch" />
```

You are now ready to go! The rest of the configuration can be made from under Manage button inside the menu.
                
Note that this only applies to Search Input module. The results module does not work as a Skin Object, it only works as a DNN module.

There is also the HTML Skin Object available if you prefer to create your DNN Skins as HTML. It's called [SEARCHBOOST].


**Important note**: starting with version 3.2.57 the patch instance id is siteSearch.  So the added text to all skin files will be:

```html
<%@ Register TagPrefix="avt" TagName="Search" Src="~/DesktopModules/DnnSharp/SearchBoost/SearchInput.ascx" %>
...
<avt:SEARCH ID="dnnSearch" SiteInstanceId="siteSearch" runat="server" />
```

#### If you need to adjust web.config manually

Normally, Search Boost should be able to update web.config configuration to setup new search provider. But with some setups this is failing, for example because the application pool does not have a write access to web.config. Here, the following configuration needs to be applied manually to web.config.

  ```
  <searchDataStore defaultProvider="AvtLuceneDataStoreProvider">
      <providers>
        <clear />
        <add name="SearchDataStoreProvider" type="DotNetNuke.Services.Search.SearchDataStore, DotNetNuke.Search.DataStore" providerPath="~\Providers\SearchProviders\SearchDataStore\" />
        <add name="AvtLuceneDataStoreProvider" type="avt.SearchBoost.Core.Indexing.LuceneDataStore, avt.SearchBoost.Core" providerPath="~\DesktopModules\DnnSharp\SearchBoost\" />
      </providers>
    </searchDataStore>
  ```