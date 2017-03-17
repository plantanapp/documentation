# FAQs

## Problem with `DnnSharp.Common.dll`


**Exception:**
```
DotNetNuke.Services.Exceptions.PageLoadException: Method not found: 'System.String DnnSharp.Common.TokenUtil.TokenizeWithCollection(System.String, System.Data.IDataReader, Boolean)'. ---> System.MissingMethodException: Method not found: 'System.String DnnSharp.Common.TokenUtil.TokenizeWithCollection(System.String, System.Data.IDataReader, Boolean)'.
   at DnnSharp.ActionGrid.Core.DataSource.Providers.DbTableDataSource.ConvertResult(ComponentConfiguration settings, IDataReader dr, String idColumn)
   at DnnSharp.ActionGrid.Core.DataSource.Providers.DbTableDataSource.GetData(ComponentConfiguration settings, DataQuery query, Boolean cache, Boolean clearCache)
   at DnnSharp.ActionGrid.Core.Actions.ActionGridContext..ctor(ComponentConfiguration settings, HttpContext context)
   at DnnSharp.ActionGrid.Core.Config.ComponentConfiguration.AngridSettingsJson()
   at ASP.desktopmodules_dnnsharp_actiongrid_main_ascx.__Render__control1(HtmlTextWriter __w, Control parameterContainer)
   at System.Web.UI.Control.RenderChildrenInternal(HtmlTextWriter writer, ICollection children)
   ....
```
**Cause:** Was Kept a DnnSharp.Common.dll old version on your website in bin folder

**Solution:** Copy DnnSharp.Common.dll from zip package file to your website /bin folder

## Why do I get error `Could not load file or assembly 'Lucene.Net, Version=3.0.4.0....` ?

ActionGrid uses a special Lucene library and has a special reference directive in `web.config` and probably another module removed this reference. Reinstall ActionGrid to restore this reference in `web.config`.