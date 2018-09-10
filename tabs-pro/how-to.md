# How To

### How to Create a Multi-Step Workflow 

TabsPro Modules provides a facility for building and handling multi-step workflows in your application. [Read More...](/how-to/create-a-multi-step-workflow.md){:target="_blank"}

### How to customize Bootstrap

Bootstrap can be customized via .css - the strategy would be to find or write those styles and put them in your portal .css file or even in default .css file. in order not to change the Boostrap styles directly - you don't want to mess with the library because you'll lose your changes on upgrades. Instead, you just have to overwrite the styles in your own .css file portal which is built into the DNN and loaded automatically by DNN on the page.

### How to add and style other Modules

We have a short video clip posted [here](//www.youtube.com/watch?v=_halGC-nKz4&feature=youtu.be&hd=1){:target="_blank"} which will guide you through the process of adding and styling other modules which will be fit for use in Tabs Pro.

### How to add your own icon

In order to upload a .jpg or a .jpg file which contains an image you want to have it as option displayed on the list:

Access the DNN platform with admin account then go to Admin menu option, click on File Management, when the page loads, select on the left sidebar the location where you want to upload the file \(we usually recommend in Root in Images folder\). Once you get there, click on the "Upload Files" button which is displayed on the right corner under the Search term box, and upload .jpg or .jpg files only.

Then you will find it on the tab you want to add the icon to by selecting Icon \(from portal files\) option, following the path where you uploaded the file.

### How to update Tabs Pro to Font Awesome latest version

Tabs Pro is updated and supports Font Awesome 4.6.3 library but in case you struggle with updating Tabs Pro to Font Awesome 4.6.3 here are the steps that you'd need to take:

Open \DesktopModules\TabsPro\ManageTabs.ascx and locate the list of icons. It's a simple UL [list](//screencast.com/t/YhNiteeZjrd7){:target="_blank"}. Redo all icons with classes from new version. Then, overwrite the files under \DesktopModules\TabsPro\static\font-awesome.

### How to add the same module to multiple tabs

Tabs Pro works client side - meaning it adjusts the DOM so the modules fit into tabs according to settings. To be able to add the same module to multiple tabs we can't really clone the module multiple times because that would probably break functionality since each module has its own IDs. So perhaps the solution is to integrate the module via iframe, so each instance is isolated, or do some kind of dynamic DOM manipulation where a module is moved around as the tab changes.

### How does the export work

The Export does not export the other modules from the page. Only Tabs Pro settings are exported. Normally, people use the Export / Import to deploy changes from their UAT site to live. This is also used implicitly when a page is copied into DNN. This will work as long as there are modules on the page with the same name as on the original page.

How to use anchor tags inside tabs:

If you want to access a specific tab and scroll the page to a div from that tab you have to associate the div id with ‘goto’ variable in query strings and add this script in page header:
```
<script>

$(document).ready(function(){

if (document.location.search) {

var queries = {};

$.each(document.location.search.substr(1).split('&'),function(c,q){

var i = q.split('=');

queries[i[0].toString()] = i[1].toString();

});

if (queries) {

$(window).scrollTop($("#" + queries.goto).offset().top);

}
}
})

</script>
```

Example: [//www.mywebsite.com/?goto=divid\#tabname](//www.mywebsite.com/?goto=divid#tabname){:target="_blank"}

