# Datasource Inline Edit

Action used to update the existing items from the grid, directly in the grid. One of the most important steps here is to define the grid fields for Inline Edit with the option needed:

![](../assets/inline.jpg)

* On Item buttons:

Whenever Action Form or Database Table options are used as a grid's source, after defining the fields for edit, the Datasource Inline Edit automatically updates the items on click. As for the SQL Query source, you have to define the Update statement in the SQL Query for Updating Items box.

* On Grid buttons:

The only two differences here are that once you click on Inline Edit Grid button, you'll have two options: to update the existing items and to Add New Entries. When Action Form and Database Table are used as grid sources, the update and insert actions are automatically executed, but when you have SQL Query as source, then besides the Update statement you'll also need to define the Insert statement. 