# My Tokens Support

**Q:** Is MyTokens supported?

**A:** Yes, MyTokens is supported in Sharp Scheduler, but please note that since Sharp Scheduler runs on the Host not per Portal it will only have access to tokens that are in namespaces that are available on all Portals.
Note that by default token namespaces are not available on all portals and neither can you set a namespace to available on all portals after it has been created.

Workaround:

- create a new namespace available on all portals
- move you token into that namespace (or clone the token and move the clone instead)

**Q:** How are tokens affected by Context (Portal and User) ?

**A:** All tokens that use Context(Portal or User) do not work by default because MyTokens will not have access to either the context or the user.

**Q:** Can I use portal settings or user settings inside a razorscript?

**A:** Yes, but you must create the portal settings. (using a hardcoded value or a value from the tokens parameters)

Example:

```c#
@using System.IO;
@{ 
string someText = "someText"; 
DotNetNuke.Entities.Portals.PortalSettings myPortal = new DotNetNuke.Entities.Portals.PortalSettings(1); 
File.WriteAllText("C:\\test\\test.xml",someText);
string result = myPortal.PortalId.ToString();
}
@result
```