# **Sync with URL **

The **Sync URL **option is available under General Settings and comes enabled by default. Basically, it synchronizes the URL with the current state of the grid without causing a page reload. The sates includes sorting, pagination, search and filters. It is useful for navigating back using browser button, bookmarking, sharing and integrating with other modules.

The new URL will be similar with the following: [http://domain.com/ActionGridPage?pageModuleId=Value&sizeModuleId=Value&searchModuleId=Value&sortModuleId=Value&sortdirModuleId=asc&filterModuleID-GridField=Value](http://domain.com/ActionGridPage?pageModuleId=Value&sizeModuleId=Value&searchModuleId=Value&sortModuleId=Value&sortdirModuleId=asc&filterModuleID-GridField=Value). Copy pasting the URL in other browsers/tabs should open the grid with exact same data.

## Refreshing Grid without Page Load from Outside Action Grid

Using this feature. it's possible to trigger the grid to refresh its data just by changing the URL using HTML5 push state feature. This means there is no page load, so the flow is smooth. There are two ways to accomplish that: using the Refresh Grid action that comes with any action based module or manually from javascript using push state function of HTML5.

### Refresh the grid using the Refresh Grid action

### Refresh the grid manually

The Action Grid supports the possibility to update its Datasource without page reload, using JavaScript from any other Module \(eg: HTML Module\). This feature uses the HTML5 push state mechanism.

Below is an example of how this can be achieve

* Add a HTML Module which contains a similar Source: 

`<ul>`

`<li><a href="#" onclick="window.history.pushState('{ }','','?id=1');">Analyst</a></li>`

`<li><a href="#" onclick="window.history.pushState('{ }','','?id=2');">Sales Rep</a></li>`

`<li><a href="#" onclick="window.history.pushState('{ }','','?id=3');">Manager</a></li>`

`<li><a href="#" onclick="window.history.pushState('{ }','','?id=4');">Designer</a></li>`

`</ul>`

* Use the '\[Get:id\]' token to filter the Grid's Datasource by adding it in a where condition from the SQL Query for retrieving Items, like: `Select * from Table5 where id='[Get:id]'`

* every time an item in the HTML module is clicked on \(such as: Analyst, Sales Rep, Manager, Designer\) the Action Grid will update its datasource without a page load.



