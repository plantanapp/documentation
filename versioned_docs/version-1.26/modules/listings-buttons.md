---
id: listings-buttons
title: Listings Buttons
sidebar_label: Buttons
---

This section provides guidance on how to create buttons for data sources in Plant an App. There are two types of buttons you can add to your data grid: [Item buttons](#item-buttons), which appear next to each item, usually on the right side of the item, and [Root buttons](#root-buttons), which are displayed at the top of the grid or under the header.

## Creating a Button
When creating a button, regardless of its type, there are common and useful fields to consider. In the `ID` field, the value should be unique and not contain spaces. Usually, the ID is equivalent to the button's title. If you want to display the button with only an icon, it's advised to leave the Title box empty and set the icon according to the action the button will execute. Another important field is the Style, where you can select the style that suits the button's actions. If the Ask for Confirmation box is enabled, Action Grid will ask for user confirmation before executing the actions set on the button. Finally, in the `Actions` field, you can define an action or a list of actions to execute when the button is clicked. It's essential to remember that the actions are executed in the order set here.

## Item Buttons
Item buttons are shown for each item in the list. A common use is to add a View or an `Edit` button. Inside actions, you can reference the field values using their token syntax. For example, to view a page when clicking on an item, you can use the Redirect action on the button, where you can set a URL to a page where you want the user to be redirected. Alternatively, you can use a token like `[NavigateURL:[TabId]]`. In the context of Item actions, this token refers to the fields of the current item, so the `[TabId]` represents the ID of the item which the user clicked on.

## Root Buttons
Root grid buttons can include all kinds of actions, such as a redirect to a URL action or an SQL Query action. For example, if you need an Add button on the grid that calls a <a href="https://learn.plantanapp.com/docs/current/modules/forms-overview" target="_blank">**Form**</a> where you can fill in all the necessary fields and add a new product to the grid, you need to link the grid to a Form in the Data source first. Then, you can add a Root Button and name it or use a representative icon for the Add button. To make the call to the form, you need to add the "Datasource Add" action to the button. When you click on the Add button, the form opens in a pop-up page where you can add and submit a new product. Another example of a grid button is the Delete button, which we recommend placing on the right side of the items in the grid. We also created a Delete Bulk button, which allows multiple records to be selected and removed at once.

## Special Buttons
Plant an App provides a list of predefined special buttons per Item and per Grid section to make your work easier. For instance, if you click on Add Special Button in the Item Button section, you can choose from three special buttons: `Delete Item`, `Edit Item`, and `View Item`. Each of them is already customized and set with the appropriate actions.

### Permission on Buttons
Plant an App also provides a Permissions section on the grid buttons. When you access the management page of the grid and add a new item/grid button, you can choose to make it visible and functional for certain users. The permission check boxes are populated with all the User Roles that have been created on the Admin/Security-Roles.aspx page. If a button is allowed only for a specific group of users, it will only be displayed for users who are registered and logged into the application with an account under that specific User Role. Additionally, all actions associated with the button will only be executed when the user with permission to the button clicks on it.

:::note

It is important to note that permissions must be set separately on the edit page of the grid items. If you don't have access to the Edit button of the grid but know the URL with the query string which locates and redirects to the edit page of the grid, you must set permissions on the page directly on the Page `Settings` > `Permissions` section to make this page not-accessible to unauthorized users.

:::

### JavaScript code
In this section you have access to settings and rows (only for item buttons), when JavaScript code is added on a grid button, on front end the JS code will be executed before making the web service request to execute button. Here are some examples:

- `console.log(settings)` - should bring the settings in F12 Console for both Items and Grid buttons;
- `console.log(row)` - should bring the current row in F12 Console for Items only;
- `row.SomeProperty = "edited"` - should reflect instantly on the screen (replace "`SomePropety`" with a field that actually exists in the grid);
`return false`; - will prevent the button actions from executing.