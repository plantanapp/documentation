# UI Settings

### Summary:

* jQuery UI template comes with prebuilt jQuery UI themes
* Below you'll find instructions on how to roll you own jQuery UI theme using jQuery UI Theme Roller
* jQuery UI themes can also be loaded from Google or Custom CDN
* Bootstrap does not come with any themes, but usually integrates seamlessly with the website design, if the website was also built with Bootstrap
* Bootstrap template is also a web standard, so it's easily customizable via CSS

We've completely rewritten Tabs Pro version 2.0 to be based on Boostrap 3 and AngularJS instead of jQuery UI. jQuery UI is still supported and it still supports jQuery UI Theme. This means you can either use existing themes in the Gallery or roll yours by using the Theme Roller application, or manually modify CSS Styles for the existing themes.

As for Bootstrap, it can be customized via .css - because we've based the UI on Bootstrap, you simply can overwrite the Bootstrap styles, and you can find lots of resources detailed on how you can customize Bootstrap, as well as lots of templates build out of the box. The strategy would be to find or write those styles and put them in your portal .css file or even in default .css file. in order not to change the Boostrap styles directly - you don't want to mess with the library because you'll loose your changes on upgrades. Instead, you just have to overwrite the styles in your own .css file portal which is build into the DNN and loaded automatically by DNN on the page.

### [**Widget Provider**](/tabs-pro/ui-settings/widget-provider.html){:target="_blank"}

* Bootstrap - is the recommnded provider
* jQuery UI

### jQuery UI Theme Location

The existing themes for jQuery UI can be are set in the Tabs Pro Manage Screen. The section that refers to the themes is represented in the image below.

![](/tabs-pro/assets/LoadThemeFrom.jpg)

There are 3 methods implemented in Tabs Pro for loading themes:

* **Load from Local Server**

Tabs Pro dynamically loads themes from /DesktopModules/TabsPro/themes folder. If you roll your own themes, place them in this folder. The themes that come with Tabs Pro have the CSS Scope set to the name of the theme to allow for multiple themes to load on same page.

* **Load from Google CDN**

Google hosts jQuery core libraries and themes on their distributed network and provide free access for any developer to link them from their CDN. This means there's a high change the resources will load faster because Google CDN uses a distributed network of high performance computers and there's a very good chance the resources are already cached by browsers \(either from when visiting one of Google websites or one website that links from Google CDN such as TabsPro does when this option is enabled\).

Important: Note that themes on Google CDN don't have the CSS Scope specified.

* **Load from URL**

Use this option to provide an URL to the CSS Tabs Pro file that holds the styles you want to use. This option makes it possible for example to use your own CDN.

### What is the CSS Scope

When you load a jQuery theme on a page that uses jQuery UI controls you miraculously notice how all controls change appearance. How does this  
work?

All jQuery UI controls use a convention for naming CSS classes that do the same thing. For example ui-state-active active class is used do indicate that a given element is active \(either has focus or is a selected tab and so on\). jQuery UI Themes work by applying styles to these common classes and specific classes as well.

But what happens if you try to load to jQuery UI Themes on same page? Obviously, since they target same CSS Classes they will collide and only one will apply \(though some collisions may result in styles from both themes applying\). But in some cases you really want two jQuery control on same page to be styled differently. For Tabs Pro, this means the ability to have two modules on same page that use different themes.

So what's the solution?

This has been fixed by introducing CSS Scope option, which is actually a root CSS class. When you download a jQuery theme with this option specified you will notice all CSS Selectors have the name of the root CSS class before them - therefore making the styles apply only when the jQuery control that uses the styles is a descendant of the root class you specify.

