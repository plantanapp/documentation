# Tabs Pro Integration

Tabs Pro can integrate any DNN module but we've explicitly tested the integration on the following most used modules:

* Action Form
* Action Grid
* HTML
* SearchBoost
* SharpLook
* EasyContainer
* Journal

### Action Form Integration

Tabs Pro features full integration with our Action Form module, designed to create a multi step structure. It brings two important sections under the Form Events of Action Form \(titled TabsPro On Tabs Leave and On Tabs Enter\) and an action accessible under DnnSharp&gt; Tabs Pro Change Tab.

**Note:** These options are working only if you already have a [TabsPro](http://www.dnnsharp.com/dnn/modules/tabs-pro){:target="_blank"} version higher than 02.01.40 installed.

* **On Tabs Enter**  - defines a list of actions to be executed after the TabsPro's Tab containing this Action Form is entered. 
* **On Tabs Leave** - defines a list of actions to be executed after the TabsPro's Tab containing this Action Form is left.

  * _Refresh tab state_ - this option enables all tabs' conditions to be reevaluated when a TabsPro's Tab is changed.

  * _Ignore Validation_ - this option enables Action Form to avoid validation \(both client and server side\).

* **Tabs Pro Change Tab** - this final action can be used to navigate to a certain TabsPro's Tab.

  * _TabsPro Module_ - selects the Tabs Pro module. If an expression \(using EXPR\) is passed in, it needs to return the ModuleId of the TabsPro module.It supports context tokens \(such as \[InputField\]\) and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}.

  * _Tab_ - selects the tab in the Tabs Pro module. If an expression \(using EXPR\) is passed in, it needs to return the id of the tab in the TabsPro module. It supports context tokens \(such as \[InputField\]\) and [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}.

  * _Evaluate State_ - this option evaluates the state of the TabsPro's Tabs before changing the tab.

  * This event can be called using the _**dnnsf.api.tabspro.changeTab\(\)**_ method from any other Module \(eg: HTML Module, Action Grid\).

    * For a HTML Module a simple scenario is to create a simple button: `<input onclick="dnnsf.api.tabspro.changeTab({mid:426,viewOrder:1})" type="button" value="Back" />`

    * mid - represents the ModuleId of the TabsPro.

    * viewOrder - represents the order of the Tab wanted to be redirected; the Tabs counting starts with 0.

    * For Action Grid append the following method as Javascript code for an Item or Grid Button:

      `dnnsf.api.tabspro.changeTab({mid:416,viewOrder:0});`

### Action Grid Integration

This option is available under the General Settings of Action Grid module and comes disabled by default. Basically it determines  when the load/refresh operation should be done.

**Note:** These options are working only if you already have a [TabsPro](http://www.dnnsharp.com/dnn/modules/tabs-pro){:target="_blank"} version higher than 02.01.40 installed.

* **Load When Tab Is Activated** - this option enables Action Grid to be initialized when the tab is active;

* **Refresh Grid When Tab Is Activated** - this option enables Action Grid to be refreshed when the tab is active.

### Easy Container and Sharp Look can also be used as containers within Tabs Pro:

![](/tabs-pro/assets/TP EC SL.jpg)

### **Google Analytics Integration**

Tabs Pro integrates tabs with Google Analytics to track individual pages. So when Google Analytics Tracking Code is already on the page, then each individual click on the tab is tracked through GA.

Tabs Pro uses Google Analytics that's already loaded on the page to offer more granularity - click [here](http://screencast.com/t/jfoDvGbwv){:target="_blank"} to see how the tabs will appear in Analytics.

### TabsPro with Google Maps

In order to embed a map into a tab you need to use the HTML module and once inside the edit content panel, click on HTML option bellow the Rich Text Editor and set the Embed API URL as the src attribute of an iframe into the box \(beware though that you need to create Api key into Google code\):

For example, set:

`<iframe width="600" height="450" frameborder="0" style="border: 0px;" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB7pkmr6GEunJXiBjjTJ4igsotkPAcadSg&amp;q=Space+Rome,Italy+IT"></iframe>`

You can control the size of the map with iframe width and height attributes, and q defines the place to highlight on the map. It accepts location like a place name or an address, an address such as "**City Hall, New York, NY**" should be converted to **City+Hall,New+York,NY**.

And here's how it looks inside the tab:

![](/tabs-pro/assets/map.jpg)

