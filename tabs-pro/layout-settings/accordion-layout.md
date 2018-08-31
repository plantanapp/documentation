# Accordion Layout

### Summary

* Both jQuery UI and Bootstrap templates support the Accordion display
* Inside tabs or accordions, modules can be setup to also display as accordion
* On mobile devices, tabs can be configured to display as accordions
* Accordions are also responsive
* For mobile detection, Tabs Pro uses Asp.NET capabilities \(Request.Browser.IsMobileDevice\) and a RegeEx based engine against the browser user agent string. 3rd party providers can improve detection accuracy.

### Accordion Display

Tabs Pro allows Administrators to include multiple modules in the same tab. Because of this, some tabs can get quite big while others will remain smaller, making the navigation process more difficult.

Luckily, Tabs Pro provides a solution to this, it integrates with [jQuery UI Accordion](http://jqueryui.com/accordion/){:target="_blank"} control and, with the new release, with Bootstrap, in order to display each module inside an Accordion section. So when one section expands, the other ones are hidden so that the space could be saved.![](/tabs-pro/assets/accordion.plain.jpg)

The Accordion display can be combined with all the Tabs layout options so that a tab will be displayed horizontally on top or on bottom, or vertically to the right or to the left and also as accordion - this is what we call nested tabs.

Visually, after you set "Horizontal top" as layout and you check the option "Display in accordion" from the Items section, on a tab on which you previously added and selected a couple of modules, the integration for jQuery UI provider will look like in the image below:

![](/tabs-pro/assets/jquery.accordion.jpg)

and here's another sample on how looks a final front-end product with an accordion setting with "Vertical left" layout option integrated with Bootstrap provider: 

![](/tabs-pro/assets/accordion.vertical.jpg)

Note that this option is specified **per Tab**, so you can have one tab displayed as accordion while the other displays normally \(the purpose for this could be to make all the tabs look balanced in terms of height\).

### **Accordion on Mobile**

On the Settings list, there's an option for "Use accordion on mobile", When this option is on, Tabs Pro always renders the items as accordion on mobile devices. Note that this is decided at server and cached in session. For mobile detection, Tabs Pro uses Asp.NET capabilities \(Request.Browser.IsMobileDevice\) and a RegeEx based engine against the browser user agent string with the purpose of matching and saving all the patterns in the user agent string. 

![](/tabs-pro/assets/accordion.mobile.jpg)  






