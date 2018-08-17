---
layout: default
---
# Special Buttons

<div style="float: left; max-width: 100%; margin-bottom: 20px">
In Action Grid 1.1 we've created a list of predefined special buttons per Item and per Grid section which are most commonly used in order to ease the user's task. On Item Button section if you click on Add Special Button there are three special buttons: Delete Item, Edit Item and View Item, each one of them is already customized and set with the appropriate actions - so, the Delete button has the Datasource Delete action, the View button has as action the Datasource View action, and the Edit button has the Datasource Edit action.  
</div>
<img style="margin-left:50px" src="images/specialbuttons.png"/>
<div style="float: left; max-width: 100%; margin-bottom: 20px">
The Grid special buttons are Bulk Delete and Add Item which are already customized - the Bulk Delete button uses as general action the Datasource Refresh and as action for Each Selected Item the Datasource Delete action, therefore, you need to select the item you want to remove and just click on this button. The Add Item button uses a general action, the Datasource Add one and if the grid is linked to an Action Form, when you click on this button the form will open in a pop up page from where you can add new info. For when you have the grid linked to a database table or an SQL Query, and you want to add info in the grid, we depend on the Add URL/Edit URL options which have the purpose to 
redirect the user to a page where an existing Action Form will use an 
SQL statement in order to insert or to update the columns in the 
database.
</div>

## Popups

Use the <font face="courier new, monospace">Open in Popup</font> option in the Add or Edit actions to have the forms open in popups. Note that if you use the [Action Form data source](http://action-grid.dnnsharp.com/data-sources/action-form), the form will open without the surrounding page elements. This is not true if you use any other data source unless you take special steps.

What we did to achieve this is we used the print functionality that ships with DNN. Say that we have a form on page <font face="courier new, monospace"> domain.com/form.aspx </font>, which is an Action Form. When using popups, we change this URL to be <font face="courier new, monospace">domain.com/form.aspx?mid=123&dnnprintmode=true&SkinSrc=[G]Skins/_default/No+Skin&ContainerSrc=[G]Containers/_default/No+Container&afcallparentonsubmit=angridEditDone</font>.

A bit long, but the whole idea is that when printing a DNN module, DNN takes care of rendering only that particular module without any container. The idea is that you can apply this trick to any module. Note also the presence of the <span style="font-family:courier new,monospace;font-size:1em;line-height:1.5;background-color:transparent">afcallparentonsubmit=angridEditDone</span> parameter, which tells Action Form to call this JavaScript function when done editing. This way, Action Grid knows to refresh the grid to reflect the changes. Should you use other module than Action Form to add and edit entries, make sure that this function is called.

Of course, you can always just create a blank page for your form (using No Skin and No Container), which will achieve the same.

### Create a Grid button that when clicked will search data from another table

One way to do it is create another page with the grid that you want to open in popup. This grid will accept ID as a query string parameter. On the main grid add a button and in the javascript for that button add the following.

``` html
dnnModal.show('/Popupurl.aspx?ID=' + row.IDcolumnfrommaingrid + '&popUp=true',false,800,800,false);
```

Be sure to replace the Popupurl.aspx with the URL of the popup page and IDcolumnfrommaingrid with the name of the ID column on the main grid that you want to send to the popup.

Other parameters specify the size of the popup.

Alternatively, use

``` html
dnnModal.show('/popup.aspx?ID=' + row.ID + '&popUp=true',false,800,800,false);
```

And sql query in popup Action Grid:

``` sql
Select *
FROM Table
WHERE ID='[$ID]'
```

Add to the popup

``` html
<a class="dnnPrimaryAction" onclick="dnnModal.closePopUp(true)">Close this window</a>
```

to close.