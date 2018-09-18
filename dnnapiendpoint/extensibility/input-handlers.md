# Input Handlers

Depending on your application and its needs you may want to handle your request differently than how DnnApiEndpoint does or even add new handlers. 

Adding a new handler is an easy two-step setup.

1) In your ``DesktopModules\DnnSharp\DnnApiEndpoint\Config\RequestHandlers`` folder create a new .json.config file following the examples from .defaults.json.config to specify your new handler.

Here you will need to provide:

- Id
- Priority (based on this number DnnApiEndpoint will check if the request is CanParseRequest. Priority 1 is the highest.)
- TypeStr

Please note that if you add information to .defaults.json.config it will be overwriten/removed on a DnnApiEndpoint update/reinstall.

2) Add your .dll file containing you handler bin\ folder.

Step-by-step tutorial:

  - Open VisualStudio
  - New Project
  - Select Visual C# / ClassLibrary
  - Give it a name (CustomRequestHandler)
  - Add a reference to System.Web (4.0.0)
  - Add a reference to DnnSharp.DnnApiEndpoint.Core
  - Add a reference to DnnSharp.Common (optional)
  - Add a reference to DotNetNuke (optional)
  - Your class needs to inherit DnnSharp.DnnApiEndpoint.Core.RequestHandlers.IRequestHandler
  - Write the code in your class (MyCustomHandler.cs)
  - Build the project
  - Copy the dll in your bin folder

Below you can download examples for both the [.json.config](https://tinyurl.com/ycelqvq9){:target="_blank"} and a [VisualStudio project](https://tinyurl.com/yawr8qkg){:target="_blank"} for a .dll