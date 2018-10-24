# Dynamic Conditions

In Easy Container 2.0 we've added the ability to provide a server side expression that when false, removes the current container (including the module it contains) from the page. Basically you can hide a specific module from the page using expressions in Condition field using C# basic syntax and My Tokens. The module will become visible when the condition is true.

![condition](\easy-container\assets\2014-06-30_1526.png)

Note that the Display Container option under module Page Settings must be checked, otherwise DNN will exclude it from view mode, so the condition will never get to evaluate. Also, keep in mind that containers are always visible in Edit Mode for portal administrators, so the expressions will not evaluate in this case. Only when your return to view mode the expression will be evaluated and the module will be removed.

It's very important to know that the module is not hidden, it's actually completely removed from the page. So the module's specific code will not get to execute. This makes it very fast because all that processing time is saved.

Here are just a few examples.

1. Remove a module from the page if there’s a value in the query string using `[QueryString:id]==2`. In this way, the module is not displayed but once you add ?id=2 at the end of URL, you’ll notice that the module will become visible.

2. If you want a module to be visible only on the mobile device, you can use this expression `[Browser:IsMobileDevice]`. Once you'll get out of edit mode you won't see the module. In order to see it, you need to use a mobile device. Note that this requires My Tokens to work. The Browser token exposes all properties in the .NET HttpBrowserCapabilities object.

3. In some cases you'll need a way to display a module only when a user is visiting your DNN portal for the first visit. This is done using the expression `[Cookie:IsFirstTime=true]==true`. Note that this requires My Tokens to work. And as additional help, you have to set a string like `[SetCookie:IsFirstTime=false]` in the content of an HTML module (if the module you work on is an HTML one).

4. There are various cases in which a module should be seen only by certain people with certain roles. For example, if you want a module to be visible only for a SuperUser, you can use this condition `[User:IsSuperUser]`. Normally, DNN allows setting the module with permissions for roles.
