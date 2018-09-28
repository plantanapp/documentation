# Debugging Razorscripts

Minimum requirement: **My Tokens 02.06.25**

When you start writing more complex scripts debugging becomes a must. MyTokens offers the possibility to do this using Visual Studio.

When creating a token MyTokens will generate a *.cshtml* file in the `DesktopModules\DnnSharp\mytokens\Scripts\{portalId}` folder that will contain the script.

You can now edit the script from both the file and MyTokens studio. However, all token options (namespace, name, description, etc) can only be modified from MyTokens Studio.

To debug a script:

1) create a script in MyTokens Studio

2) set the Debug token option to true

![](debug razor.jpg)

The option is by default set to False. A token with the option set to True will occupy more disk space and might be executed a little slower, so it is recommended to only set the option on True while debugging the token and then set it back to False.

3) go to the file and open it with Visual Studio

  - set some breakpoints in the file

  - go to Menu -> Debug -> Attach to Process

  - select w3w3p.exe and Attach

![](debug razor 2.jpg)

From now on, every time the token is executed Visual Studio will hit the breakpoints.

4) After you finish debugging set the Debug Token option back to False
