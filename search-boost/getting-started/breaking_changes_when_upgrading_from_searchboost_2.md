### Breaking Changes When Upgrading from SearchBoost 2

Please check out the following list of things that will be changed when upgrading from version 2.x to 3.x:

* **If site search is patched the website will crash (because of skins)**.  
This is because the module folder has changed. To fix: edit all skin ascx files that use Search Boost and change path from /DekstopModules/SearchBoost to /DesktopModules/DnnSharp/SearchBoost.
* **Old templates are no longer supported**.  
Instead we have 6 nicer input templates and we have changed some things. If you have customized templates please check [Breaking changes (custom css or templates)](breaking_changes_custom_css_or_templates.md) for breaking changes.

### For developers and custom integrations:

 * **Index is Now Per Instance**  
 Each instance has its own index, as opposed to 2.x where all instances where stored in the same index. If you coded directly against the lucene index, make sure to adjust accordingly.
 * **Architecture and Interface Changes**  
   Search Boost comes with a whole new architecture. This means that many interfaces have changed, so if you have made your own plugins and linked to avt.SearchBoost.Core.dll, you'll have to update the plugins as well. 








