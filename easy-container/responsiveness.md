# Responsiveness

On the version 2.0 of Easy Container, we've added responsive capabilities, so now it's possible from the container to define how the module behaves, how the container looks and how it scales on various devices.

We've also added a condition section where you can provide a server side expression to determine whether the container and the module is visible or not - its functionality is similar to the restriction settings on permissions for groups.

In the device section you can write different CSS styles for different devices - we have a general "apply to All" devices option, mobile, tablet, desktop and large screens options.

Let's take an example of how the Device option could be used: If you set the "All" option on device, and you want the module to be displayed on desktop to, let's say, a width of 50 percent and on mobile to go to 100 percent, then you have to set the width to 50% when "All" device option is set, in order for the module to display on a half of the page on desktop, and change the device option to "Phone" and set the width to 100%. After you save these settings and refresh the page, you can see that the module is displayed on half of the page, now try to resize the page and as soon as you'll get to the mobile standard resolution, the module will be 100 % displayed on the mobile page. 

When you set the Phone option to "hidden", then, the module disappears when the screen is resized and the page reaches to the mobile standard resolution. You can also do this with the tablet option and you can even set different widths on each device. 

As for the server conditions, this option supports C# basic syntax and is related to My Tokens module with which you can create different tokens which can be used here. And since we talk about responsive and mobile, in the Condition option we can provide a server side expression which will make the module to be displayed only on mobile devices - we've done some tests with an expression which says:

`if browser is mobile device, the module will show, otherwise, it will not show - and here's how the expression looks like: [Browser:IsMobileDevice]`

Just for fun, copy this expression and paste it into Condition section, and after you save the modifications, get out of edit mode, as result, the module on which you've applied this condition should not be displayed on desktop but, if you access the page with a mobile device, the module in cause, should be correctly displayed. Don't forget, it will be displayed on mobile only!

For more info regarding the server expressions please go to [Dynamic Conditions](/actions/conditions.html){:target="_blank"} page.
