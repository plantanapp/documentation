# Data Sources

In Action Grid, a data source feeds the grid with data based on user input which includes pagination, filters, search and sorting. The data sources are loaded from configuration files, which means it's possible to alter how they work or add new custom data sources without needing the Action Grid source code. This is detailed more in the [Custom Data Sources](dnnsharp.com) section.

Action Grid ships with the following pre built data sources:

* [Action Form](dnnsharp.com)

  This provides seamless integration with Action Form modules. Simply select one of the existing Action Form modules, and Action Grid will populate with all form submissions. Behind the scene, this data source caches data in a Lucene index.

* [Database Table](dnnsharp.com)

  This data source queries a table for results. This opens dozens of new possibilities, where one can build management modules for existing DNN entities such as users or pages, or for custom tables.

* [SQL Query](dnnsharp.com)

  This data source fills the need of managing data that comes from multiple tables or built using complex statements. Note that this data source is not currently heavily optimized and should be used with care, especially with large data sets.
  
  ![](images/data.png)