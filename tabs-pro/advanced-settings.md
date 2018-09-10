# Advanced Settings

### Summary

* By default, Tabs Pro includes its own versions of Bootstrap and other browsers' libraries. This is in order to avoid conflicts
* Some components on the page take longer to initialize, and would fail if included in tabs too early. Use the Delay option to give them some more time
* Administrators can limit the number of tabs that can be displayed, so content editors can't go beyond that.

### Theme Provider for Bootstrap

Tabs Pro is based on Bootstrap, therefore it supports the Bootstrap theme. By configuring Tabs Pro to load themes from Google Code, it usually results in faster downloads; the themes may be already cached by the browser from visiting other sites.

In Bootstrap, you can customize your own theme via .css - more on this can be found on [How to](/tabs-pro/how-to.html){:target="_blank"} page.

Tabs Pro comes with fade effect options which can be selected from the Transition Effect dropdown list, but beware of the fact that on accordion, the transition effect is not supported, therefore when selecting on Tabs Layout the accordion option, no matter the provider you'll choose, the Transition Effect option will not be available.

### Set the Maximum Number of Tabs

With Tabs Pro module, you have the option to limit the total number of tabs that content admins can create. Note that these settings are visible only to portal administrators, therefore when other group of users, like content editors, which have the right to edit the module, no matter the number of tabs they create, the final display will be the limited number of tabs previously set by the Admin.

![](/tabs-pro/assets/max.no.jpg)

### Include Bootstrap

When this option is checked, TabsPro will include Bootstrap 3 on the page, if the widget provider is Bootstrap.

**Note**: If this option is disabled, make sure that Bootstrap 3 is already loaded on the page

![](/tabs-pro/assets/include.jpg)

### Delay Option

You have the ability to delay the initialization of the content inside the tabs - as you can see from the image attached below, this is specified in milliseconds. This fixes issue with some modules that need to initialize before being included in tabs.

![](/tabs-pro/assets/delay.jpg)

### Append IDs to bookmarks

This option is activated by default and once enabled, TabsPro will append the tab name followed by its id in order to ensure there is no conflict between tabs, for example, when a tab is clicked, the URL will be formed like this: site.com/page-name.aspx\#tab-name-tabid \([www.site.com/Contact-us.aspx\about-2](//www.site.com/Contact-us.aspx\about-2){:target="_blank"}\).

![](/tabs-pro/assets/append.jpg)
