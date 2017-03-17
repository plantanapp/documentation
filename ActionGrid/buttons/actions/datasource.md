# Datasource

**Datasource Refresh** - this action is usually used to refresh the grid after previously executing another action; for example, when you remove an item from the grid then refresh the grid in order to update it with the remaining items.

**Datasource Add** - action used to add items to the grid. It is dependent on the data source defined on the grid, for example:
* when an Action Form is defined as data source on the grid, the button that has the Datasource Add action opens the page with the form set as source to the grid;
* when SQL Query is defined as data source on the grid, you have to set in the Add URL text box the page with the form which will insert the new records in the database;
* when Datasource Table is defined as data source on the grid, you have to set in the Add URL text box the page with the form which will insert the new records in the database.

**Datasource Delete** - action used to delete items from grid; it's usually added on a grid with Action Form as data source and is automatically executed on click. 

As for grids with SQL Query or Datasource table, you need to add a Run SQL query where you have to define a delete statement. 

**Datasource View** - action used to view the grid items; if the entry has a View URL defined in the data source of the grid, then this action will redirect to that URL. If the redirect is made to a form and you want to auto-populate it with the details of the item, then you have to set as extension on the View URL a token with a Query String ?ID=[ID].

**Datasource Edit** - action used to edit the items; when Action Form is used as data source on the grid, the page with the form is opened each time this action is executed. For a detailed test case, check item 3 from [this](examples.md) page. 

**Datasource Inline Edit** - action used to update the existing items from the grid, directly in the grid. One of the most important steps here is to define the grid fields for Inline Edit with the option needed:

![](images/inline.jpg)

* On Item buttons:

Whenever Action Form or Database Table options are used as a grid's source, after defining the fields for edit, the Datasource Inline Edit automatically updates the items on click. As for the SQL Query source, you have to define the Update statement in the SQL Query for Updating Items box.

* On Grid buttons:

The only two differences here are that once you click on Inline Edit Grid button, you'll have two options: to update the existing items and to Add New Entries. When Action Form and Database Table are used as grid sources, the update and insert actions are automatically executed, but when you have SQL Query as source, then besides the Update statement you'll also need to define the Insert statement. 

**Datasource Detail View** - action used to display data on an information panel whenever a grid item is clicked. You can define in the Template what you need to display.
* On Grid Template 

An information panel will display below a selected grid item. This detail view can contain tokens, simple text or customized data using HTML. 

Here's a sample of a Datasource Detail View Template which uses a token and stylized text with HTML:

![](images/7.jpg)

* On Listing Template

An information panel will open in a Pop Up.

![](images/8.jpg)
