# Buttons

Other important feature which comes with Action Grid 1.1 is the ability to add your own buttons, and here we talk about two types of buttons, the Item buttons which are displayed besides each item, usually on the right side on the items and the Grid buttons, displayed on top of the grid or under the grid.

### Creating a Button

No matter the type of button used, the fields are common and useful when the appropriate action is well set. In the ID field, the value should be unique and not contain spaces, usually the ID is equivalent with the title of the button, and since we talk about the title, if you want to display the button only with an icon on it without text, it's advised to leave the Title box empty and to set the icon according to the action the button will execute. Another important field is the Style, from where you can select the style which suits the actions of the button. The Ask for Confirmation box when is enabled, Action Grid will ask for user confirmation before executing the actions set on the button and last in line, the [Actions](actions.md) field where you can define an action or a list of actions to execute when the button is clicked, do not forget that the actions are executed in the precise order set here.

### Item Buttons

These buttons are shown for each item in the list. A common use is to add a View or an Edit button. Inside actions, you can reference the field values using their token syntax. Once an action is set on an Item button, when you click on it, the defined action is executed. For example, if you want to view a page when clicking on an item, you can simply use the Redirect action on the button where you can set an URL to a page where you want the user to be redirected, or you can use a token like `[NavigateURL:[TabId]]` which in the context, when the Item action is executed this token will refer to the fields of the current item, so the `[TabId]` represents the is of the item which you click on.

### Grid Buttons

All kind of actions can be added on a grid button, for example, a redirect to URL action, or an SQL Query action, bellow we'll list an example with an Add button on a grid linked to an Action Form as source.

Let's say we need an **Add** button on the grid which makes the call to an Action Form where you can fill in all the fields that you need and the product gets added on the grid. For this case to work, firstly you need to link the grid to an Action Form in the Data source and then you can add a Grid Button, name it or just use a representative icon for the Add button. In order to make the call to the form, you have to add on the button the "Datasource Add" action. Finally, when you click on the Add button, the form is called and is opened in a pop up page where you can add and submit a new product. Let's mention here that an already predefined Add button is created and all you need is to click on the Add Special Button &gt; Add Item button and, here it is, ready to be used - more on this can be found on the [Special buttons](special-buttons.md) page.

Another common example of a grid button is the **Delete** button, on which we advise to use the Ask for Confirmation box and configure the messages which will be displayed when the button will be clicked. In order for this button to work, you have to add a "Datasource Delete" action and, optionally, a "Datasource Refresh" action. Before clicking on the delete button, you have to select an item, it will be successfully removed from the grid. We prefer to use the delete button per item and display it on the right side of the items from the grid, and as delete grid button, we already created the [Delete Bulk](special-buttons.md) button which can be selected from the Add Special Button and which allows multiple records to be selected, then removed at once.

### For Each Selected Item

This list of actions displayed at the bottom of the Grid Button determines the items on which each action will be executed and inside of each action you can reference the fields, for example, if you want to send an email on a specific item you can reference the fields using the token syntax - `[TabName]` would refer to the name of the current tab because its actions will get for each tab in the list and in the context it will get the value of the currently iterated tab. This is very useful for creating bulk actions by selecting multiple items and clicking on the button you can execute any available action from the list \(you can sent emails, or redirect the user to other pages, post the data to a web service, delete them from the database\).

### Permission on Buttons

Lately we've implemented the Permissions section on the grid buttons, note that whenever the management page of the grid is accessed, and when you add an item/grid button to the grid, you have the possibility to make it visible and functional for certain users. The permission check boxes are populated with all the User Roles created on the `Admin/Security-Roles.aspx` page, therefore, if a button is allowed only to a certain group of users, then the button will get displayed only for the users registered and logged into the application with the account under the specific User Role and all the actions associated to the button will be executed when the user with permission to the button will click on it. Another trick to be mentioned here is the necessity to set permissions separately on the edit page of the grid items, for instance, whenever the item of the grid will be edited via a form, if you don't have access to the Edit button of the grid but you know the URL with the query string which locates and redirects to the edit page of the grid, then, to make this page not-accessible to the users, you have to set the Permissions on the page directly on Page Settings &gt; Permissions section.

### JavaScript code

In this section you have access to settings and rows \(only for item buttons\), when JavaScript code is added on a grid button, on front end the JS code will be executed before making the web service request to execute button, here are some examples:

1. `console.log(settings)` - should bring the settings in F12 Console for both Items and Grid buttons;
2. `console.log(row)`  - should bring the current row in F12 Console for Items only;
3. `row.SomeProperty = "edited"` - should reflect instantly on the screen \(replace SomePropety with a field that actually exists in the grid\);
4. `return false;` - will prevent the button actions from executing.



