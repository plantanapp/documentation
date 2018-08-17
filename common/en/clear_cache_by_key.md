# Clear Cache \(by Key\)

**ASP.NET** provides a cache where all components can save data. This action can be used to clear entries from the cache. To see a list of everything that's in cache, open the **Cache Utility**.

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **\[SomeField\] == "Some Value"**. This field supports **My Tokens**. 
* **Cache Key**. The key for the cache for which you want to clear all entries.

![](https://static.dnnsharp.com/documentation/clear_cache_by_key.png)

