# Custom Actions

Action Form is build on an open configuration architecture, that makes it very configurable. We have developed it in this way because we know how important is for you to have the ability to customize it with new functionalities which suits you needs.

In the example presented below, we are going to show you how to create your custom action.

- Open Visual Studio and Create a new Project.
- In the Solution Explorer panel, expand References, select "Browse" and add a new reference to "DnnSharp.Common.dll" in your /bin folder of the site.
- Add the usings "using DnnSharp.Common;" and "using DnnSharp.Common.Actions;"
- Implement the "IActionImpl" class
- Write your code for the action.
- The attached zip archive named "MYCUSTOMACTION.ZIP" contains much more information and a configuration file for your action. You can use it as a start for creating your own action.

- Finally, click Build, and in the /bin/Debug folder in the MYCUSTOMACTION project you will find a dll file named "MyCustomAction.dll" . Copy this dll to the /bin of your site.
- Also, copy the Config folder contained in the archive to the ' /DesktopModules/DnnSharp/Common ' folder in your site folder.
- Refresh your admin page and you should see the new Group containing your example action.

- In this example you should select a value for the dropdown when you configure the action on the site, as some of our modules (such as DnnApiEndpoint) require a value for the dropdowns to be selected.
