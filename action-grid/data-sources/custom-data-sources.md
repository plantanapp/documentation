# Custom Data Sources

Data sources in Action Grid are defined via configuration files. This makes it very easy to plug in new custom data sources. For this, you would need to implement your data source in a .NET class, then create a configuration file to let Action Grid know how to use your data source. 

## Configuration

Let's start with the configuration. All configuration files live in at `/DesktopModules/DnnSharp/ActionGrid/Config/DataSource`. There is a `.defaults.json.config` file already in there that ships with Action Grid. This contains all the prebuilt data sources described in this documentation. You shouldn't make changes to this file, since it will get overwritten on updates. Instead, create your own config file and follow the same structure as the default configuration file. Action Grid knows to watch this folder for modifications. So your configuration will be picked up real time. 

The config file is in JSON format. The root element is an array, which means you can have multiple definitions in the same file. The most simple configuration file would look like this: 
``` json
[
  {
  "Id": "MyProviderId",
  "Title": { "default": "My Provider" },
  "HelpText": { "default": "Description about you provider" },
  "TypeStr": "MyClass, MyAssembly",
  "Parameters": [ … ]
  },
  …
]
```

Here's the explanation: 

* Id

  Uniquely identifies a data source. Since default data sources are loaded first, you can override them simply by creating a new file with a data source with the same ID.

* Title

  This is used for displaying purposes. It can be localized from the config file or from DNN localization. The "default" key is the fall back point if no localization is found. Use locale codes to specify localization, like this: 
``` json
"Title": { "default": "My Provider", "en-US": "English title", "es-ES ": "Spanish title" }
```

* HelpText 

  This is used to provide a description about the provider. The same localization rules as above apply.

* TypeStr

  This is the actual implementation that implements all the logic. It should be a fully qualified class that implements `DnnSharp.ActionGrid.Core.DataSource.IDataSource` interface. More details below.

* Parameters

  This is an array of parameters used to collect additional configuration options. If you look at the default data sources, you will notice how the table name, the id column or the connection string are all parameters defined in the configuration. Action Grid uses this definition to build a list of controls to collect data, and the passes this to the implementation class. 

## Implementation


A data source in Action Grid is a class that implements the `DnnSharp.ActionGrid.Core.DataSource.IDataSource` interface and has the corresponding configuration file. The data source provides the following bits of information: 

* **Available Fields**

  These are shown in Action Grid admin. They can be reordered or turned off by administrators so they don't appear in admin UI.

* **Data**
  
  Action Grid will pass a query object into the data source and expect the appropriate data set to be returned. The query includes current page, page size, current filters, search terms and sorting.

* **Filter Values**

  Fields that can be filtered will query the data source for a list of possible values. The data source would return all distinct values for the given fields. If you were doing SQL, you'd select distinct values. A nice touch would be to still applying the rest of the filter so all filter values have associated results.

* **Delete**

  Action Grid calls this method once for every entry that's being deleted. This is an optional feature.

* **Special Fields**

  There are some special fields that Action Grid needs to operate, such as the ID field or the URLs where entries can be added or edited. If you look at the Database Table data source, the ID is collected from the user using a parameter, while the Action Form data source implicitly sets the ID column based on its relationship with the Action Form reports table. 

Note that in many cases you don't need to implement this interface directly, and instead you can derive from a specialized class. For this purpose, we present the `DnnSharp.ActionGrid.Core.DataSource.CachedDataSource` abstract class which caches data in a Lucene index, making it very fast for querying. In fact, the Action Form data source is derived from this.