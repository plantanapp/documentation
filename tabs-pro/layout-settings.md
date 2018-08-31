# Layout Settings

### Summary

* Supports 2 template engines: Bootstrap and jQuery UI
* Bootstrap makes the tabs look like the rest of the site, if the website uses bootstrap
* jQuery UI is maintained mostly for backward compatibility
* Supports tab and accordion layout, optionally displayed inside popups
* Modules can also be turned into an inner accordion
* Layout can be adaptive to show accordion on mobile devices and tabs on the rest
* And of course, it's responsive

No matter the options selected, from Accordion widget combined to other available options, like Auto Scroll or Collapsible settings, the layout of the created page will be consistent with your needs and pretty appealing to the eye.

To be more specific on what our Tabs Pro module can look like when we apply these widget providers, you'll find several image examples listed above.

### Tabs Layout Options on jQuery UI and Bootstrap

In terms of tabs layout customization, the Tabs Pro module has 5 options which give us the possibility to place the tabs above, below, vertically to their content or in accordion - below, you'll find some captures with the tabs displayed on different locations, both with jQuery and with Bootstrap providers.

* **Tabs at top** - the tabs can be placed horizontally above their content by a simple selection of the option "Horizontal Top" from the Tabs Layout drop down list \(displayed below\): 

![](/tabs-pro/assets/h.top.jpg)

* **Tabs at bottom** - the option "Horizontal Bottom" from the Tabs Layout drop down list, places the tabs below their module content:

![](/tabs-pro/assets/h.bottom.jpg)

* **Vertical Left Tabs** - either on the left or on the right side of the page, the tabs will be left-aligned and rendered vertically to the left of the module content - by selecting the "Vertical Left" option: ![](/tabs-pro/assets/v.left.jpg)

* **Vertical Right Tabs** - and vice versa - tabs right-aligned and rendered vertically to the right of the module content - with the "Vertical Right" option: <br> ![](/tabs-pro/assets/v.right.jpg)

* [**Accordion**](/tabs-pro/layout-settings/accordion-layout.html){:target="_blank"} - this option displays the content panel for presenting the information is a limited amount of space. By default, accordion always keep one tab section opened and you have to click on the other tabs in order to enlarge their content while the previously opened tab will compress the content: ![](/tabs-pro/assets/accordion %281%29.jpg)

### Collapsible Panels

This Behavior option, as we call it, can be used for all the layouts described above and has the purpose to let the user close or open the active panel by a click or a hover action and it works for both tabs and accordion. Once checked, it comes with an "Initially collapsed" sub-option which when is enabled, no item will be active unless derived from persistence options.

**Collapsed**

![](/tabs-pro/assets/collapsed1.jpg)

**Not Collapsed**

![](/tabs-pro/assets/collapsed2.jpg)

### Show Empty Tabs

When one of the tabs does not have any module selected to be displayed inside the tab or when the user does not have view rights to the modules enclosed in a tab, then when this "Show empty tabs" option is set, the empty tab will be displayed on the page - in edit as well as in non edit mode.![](/tabs-pro/assets/empty.jpg)

### Display tabs in Dialog?

If this option is set Tabs Pro will create a jQuery Dialog that contains the tab. Put the javascript url on any link element to trigger the dialog to open.

### Open as modal

This option enables to open TabsPro as Modal. In case the Open as Modal option is enabled, there exists the possibility to append some HTML content with links that trigger the dialog to open. The trigger should looks like `<a href="javascript: dnnsf.api.tabspro.openModal({mid:552});">Open TabsPro</a>`. It can be triggered outside this module \(for example in a HTML module or in the DNN Skin\); leave the field below empty.

Close it by calling the next javascript method `dnnsf.api.tabspro.closeModal({mid:552})`;

## TabsPro Container Class

This css class is added to the TabsPro's container for custom bootstrap tabs styles provided by different skins.  


