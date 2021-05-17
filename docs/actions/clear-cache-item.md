---
id: clear-cache-item
title: Clear Cache Item
sidebar_label: Clear Cache Item
---

> Audience: [`Citizen Developers`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `System Administration`

ASP.NET provides a cache where all components can save data. This action, depending on the options selected, will clear a specific cache item by specifying its cache key, a set of keys by specifying a cache prefix key, the entire server cache, Tabs cache for specific portals, or Portal cache for specific portals.

## `Related Actions`

| Action Name                                     | Description                                                                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Clear User Cache](/docs/actions/clear-user-cache) |This option clears the user-level cache for users loaded into the current context when the action is called. |

## `Don't use it to`

- Clear User Cache - Use [Clear User Cache](/docs/actions/clear-user-cache) instead.

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Clear All Cache | Clears the entire server cache. This is equal to clicking the Clear Cache button at PersonaBar > Settings > Servers. | No | `false` | No |
| Clear Tabs Cache | Clears all the tabs cache on the current portal or the portals specified in the **Portal IDs** field. | No |`false` | No |
| Clear Portal Cache | Clears the portal cache on the current portal or the portals specified in the **Portal IDs** field. | No |`false` | No |
| Portal IDs | If you selected **Clear Tabs Cache** or **Clear Portal Cache**, you have the option of specifying one or more portal ids, separated by commas, on which to clear the Tabs or Portal Cache.  | No |`empty string` | No |
| Cache Key | The cache key or partial key you wish to delete. If a partial key is supplied, all matching keys will be deleted. Can contain My Tokens. For example, `Tab_Tabs` will clear the tabs cache on aLL portals. | Yes |`empty string` | No |

## `Viewing The Server Cache`

The **Clear Cache Item** action used to include a link the in inline help to load a listing of items cached on your server. For security reasons (potentially exposing your server cache to users without permission) that listing has been disabled indefinitely. However, at your discretion, you can create a permission trimmed page that will list your server cache. Follow the steps below:

1. Go to Plant an App **Configuration** and navigate to Tokens in the left menu.
2. Select an existing **NameSpace** or create a new one.
3. Hover the NameSpace row and click the **Create Token** (plus icon) button.
4. Provide a **Token Name** and **Description**
5. Click on **Definition** and select **Razor Script**
6. In the **Code Language** dropdown, select **C#**
7. In the **Script** box paste this script:

   ```c
   @{    foreach (System.Collections.DictionaryEntry cacheItem in System.Web.HttpRuntime.Cache) {

        var cacheStr = string.Format("<b>{0}</b>: {1}<br/>", cacheItem.Key, cacheItem.Value);
        @:@cacheStr 
    }
    }
   ```

8. Click **Save & Test**. Your new Token will load in the **Test Tokens** area below and your Cache List will load in the results box to the right.
9. You can now use this token on a page of your choice in an HTML module. Make sure you go into the settings of the module, on the **HTML Module Settings** tab, and select the **Replace Tokens** option.
