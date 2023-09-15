---
id: listings-datasources
title: Listings Datasources
sidebar_label: Datasources
---

In **Listings**, a datasource is what feeds the grid with data based on user input. This includes pagination, filters, search and sorting. Below are listed the standard out-of-the-box datasources that Listings comes with by default. However, since the datasources are loaded from configuration files, it is possible to change and customize the way they work or define new, custom datasources. This mechanism is detailed in the subsequent "**Custom Datasources**" section.

Listings comes with the following, pre-built datasources:

## **Plant an App Forms** (Action Form)

This provides seamless integration with Form modules. Simply select one of the existing Action Form modules, and Action Grid will populate with all form submissions. Behind the scene, this data source caches data in a Lucene index.

### **Database Table**

This datasource queries a table for results. This opens dozens of new possibilities, where one can build management modules for existing DNN entities such as users or pages, or for custom tables.

### **SQL Query**

The SQL Query datasource fills the need of managing data that comes from multiple tables or built using complex statements. Note that this data source is not currently heavily optimized and should be used with care, especially with large data sets.

### **Server Request (as a JSON)**

This requests a JSON from an API then uses it for generating the grid.

### **Credential Store Entities**

This datasource brings information from a repository of security data (credentials). A credential can hold user name and password combinations, tickets, or public key certificates.

### **Documents**

Database datasource corresponding to document files.

### **Dynamics CRM Entities**

Allows you to define [Microsoft Dynamics Entities](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/introduction-entities?view=op-9-1) as a datasource on your Grid.

### **Images**

Database datasource corresponding to image files.

### **InfoBox**

Database datasource corresponding to InfoBox files.

###  **Users**

Allows you to feed <a href="https://learn.plantanapp.com/docs/current/users" target="_blank">Plant an App User data</a> into your Grid 

### **Version Control tracked changes**

Allows you to feed data from <a href="https://learn.plantanapp.com/docs/current/category/version-control" target="_blank">Plant an App Version Control</a>.

### **MEO GIT Version History**

This feature is still experimental at this point. In the future, it will allow you to add <a href="https://learn.plantanapp.com/docs/current/general/configuration-and-usage-saas#version-history" target="_blank">MEO (Multi-Environment Orchestrator) version history data</a> into your Grid.

:::note

Those are just the standard, pre-built Datasources that come by default with your Plant an App instance.
Other than those standard Datasources, you can add custom Datasources to your Grid.

:::

## Custom Data Sources
Data sources in the Grid module are defined through configuration files. As such, to add a custom data source in your Grid, you need to create a configuration file and implement your data source in a .NET class. 

The configuration file should follow the same structure as the default configuration file, which can be found under `/DesktopModules/DnnSharp/ActionGrid/Config/DataSource`. However, you should avoid modifying the default file, as it will be overwritten during updates.

The configuration file is in JSON format and consists of an array with multiple definitions. Here is an example:

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

Each definition includes the following elements:

- `Id`: A unique identifier for the data source. If a data source with the same Id already exists, it will be overridden.
- `Title`: A localized title for displaying purposes. The default key is used as a fallback if no localization is found. Here is an example:

        "Title": { "default": "My Provider", "en-US": "English title", "es-ES ": "Spanish title" }

- `HelpText`: A localized description about the provider.
- `TypeStr`: The fully qualified class that implements the DnnSharp.ActionGrid.Core.DataSource.IDataSource interface.
- `Parameters`: An array of parameters used to collect additional configuration options.


Your data source class should implement the DnnSharp.ActionGrid.Core.DataSource.IDataSource interface and provide the following information:

- **Available Fields**: The fields that will be shown in Grid admin. They can be reordered or turned off by administrators.

- **Data**: The data set that corresponds to the query object passed by Action Grid. The query includes page size, current page, filters, search terms, and sorting.

- **Filter Values**: A list of possible values for fields that can be filtered.

- **Delete**: An optional method that Action Grid calls for every entry being deleted.

- **Special Fields**: Some special fields that Action Grid needs to operate, such as the ID field or the URLs where entries can be added or edited.

:::note

You can derive from the DnnSharp.ActionGrid.Core.DataSource.CachedDataSource abstract class, which caches data in a Lucene index and makes querying very fast. The Action Form data source is derived from this class.

:::

<br /><br /><a href="#top">Back to the top &#10548;</a>