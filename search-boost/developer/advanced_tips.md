### Advanced Tips

1. Stop automatically indexing:
  * Disable "Search Boost - Query Content Sources" scheduler.
  * Keep in mind we have some database triggers for files or folder (also folder permissions) modifications. So any modifications in File Management will trigger reindexing of those files and folders.
2. Urls useful for manual request (Replace the {variables}. The easiest way is to take look for every instance settings page at one of those automatically sent requests. Take from there what values you should enter for {siteUrl}, {siteAlias} and {instanceId}):
  * Start instance indexing: {siteUrl}/DesktopModules/DnnSharp/SearchBoost/AdminApi.ashx?method=IndexContent&_alias={siteAlias}&_mid=-1&instanceId={instanceId-could be a string}
  * Clear instance index: {siteUrl}/DesktopModules/DnnSharp/SearchBoost/AdminApi.ashx?method=ClearIndex&_alias={siteAlias}&_mid=-1&instanceId={instanceId-could be a string}