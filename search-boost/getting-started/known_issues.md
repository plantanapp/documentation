# Known Issues

**In DNN 8 when Patching DNN Search the input box is small (shows 3 chars max)**

In DNN 8 when choosing when patching in order to use SearchBoost functionality from the default DNN Search the input box shows only 3 chars.

**Portal Filters is not working with modules.**

Portal Filters is not applied (has no effect) to modules.

**[Fixed in 3.2.16] When using documents metadata categories don't work with 3 level depth**

Documents metadata with custom <categories> don't work with 3 level depth: Root/Sub/SubSub.

**SearchBoost needs special configuration for web farms**

While we have a few customers that are currently running SearchBoost in a web farm environment the required configuration is a little more complicated. There is necessary some manual and careful indexing with only one server enabled and disabling of automatic indexing.

**Site will crash when updating SearchBoost from 2.9 if used as a skin object**

This happens when you used SearchBoost 2.9 to patch the skins.  You can go around this problem by manually removing SearchBoost from every skin before updating.

**[Fixed in 3.1.13] SearchBoost may not be able to index modules and files**

**Solution**: Update SearchBoost to last version.
**Explanation**: Because of a broken dependency on our core library when you update another and newer DNN Sharp module then SearchBoost indexing will not work with the following error: "Method not found: '!!0 DnnSharp.Common.ObjectExt.LoadFromXml(System.String, System.String)".

**[Fixed in 3.0.99] Getting error Lock obtain timed out: NativeFSLock...**

This is nothing serious and happens because the Index file is opened when Asp.net decides to recycle (Asp.net recycle is triggered every time the content of the bin folder is modified, including web.config file). This also happens automatically every 29 hours by default - you can change this setting in IIS but it's not usually recommended.

**[Fixed in 3.0.85] If a module is present on several pages, only results from one page will be returned**

If a module is placed on more than one page, then the search will only return results from one, main page - //screencast.com/t/zUKdMkXW.
[Fixed in 3.0.57] If there is a page within another page and for the parent page all the modules are unchecked then on save there is an error in javascript - so there is no save at all.