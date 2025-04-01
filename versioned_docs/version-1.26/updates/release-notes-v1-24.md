---
id: release-notes-v1-24
title: Release Notes v1.24
sidebar_label: Release Notes v1.24
---

## What's new?

### Overhaul of the "**`APIs`**" configuration section UI

UI changes have been implemented on the ***Configuration*** > ***APIs*** section in order to provide a more consistent and ergonomic view across the whole platform, as well as for the integration of new options and parameters. All three tabs of the APIs configuration are affected: `Endpoints`, `Security` and `Settings`

No new features are added, except on the **`Settings`** tab, with the addition of the "`Require Module ID`" option: useful when using the same Endpoint across multiple modules in order to avoid conflicts.

Note that these changes are visible under the New Interface toggle ("*Experimental*"). The default view is still set on the Classic (or "Old") view. 

The new ("*Experimental*") interface will become the default view in version 1.25, but you will still be able to toggle back to the Classic (or "Old") view. 

### MEO (Multi-Environment Orchestrator) updates

- New arguments have been added to the "`runplantanapp.ps1`" control script:

`-Update`:
Pulls the latest image and updates the MEO docker containers.

`-Restart`:
Stops and starts the MEO docker containers (no need to run the -Stop and -Start arguments in succession anymore).

`-PinToTag`:
Debugging argument that pulls the image with the specified tag (⚠ not to be used unless specifically required).

- "*Full Commit*" feature now available. This allows you to ignore the contents that are already present on Git and do a new, full-commit of your app.


### IntelliSense for contextual tokens (Automation)

IntelliSense is a technology that provides predictive coding assistance. In the Plant an App context, it assists you with Token usage It helps speed up the token definition process by providing token code completion. IntelliSense can help to reduce errors and make token definition more efficient.

In practice it  means that, when you start typing a “`[`“, a list of namespace(s)/token(s) is automatically populated and proposed for selection.

The scope of IntelliSense for Token autocomplete has been expanded and now covers contextual tokens - i.e., tokens that are defined in a specific, limited logic, such as Actions. 

Note that this applies for the `Automation` section for now but that the scope will be constantly expanded.

### Multi-portal licensing (for self-reg/on-prem)

It is now possible to use Plant an App modules on secondary portals via a dedicated add-on - "**PlantAnApp MultiPortal Licensing**".

Users can now license additional portals in environments in which multiple portals/tenants are available. After licensing the portal with "PlantAnApp MultiPortal Licensing", the `Forms`, `Listings`, `Search` and Nav modules can be used. 

:::note

This only applies to self-reg/on-prem Plant an App deployments.

:::

## Other improvements and features

### `Entities` improvements

- Users can now add initial or default values for  a non-required property in `Forms`. Required fields can not have initial values. 
- As such, when changing an existing property from "*Not required*" to "*Required*", the system will ask the user for a value for all records that have null values for this property.


## Bug fixes

### MEO

Further refinement and improvements in <a href="https://learn.plantanapp.com/docs/general/versioning-and-plant-an-appfunctionality" target="_blank">`Version Control`</a>. What has been fixed:
   - Uncommitted items (all items are committed now)
   - Deletes not handled correctly
   - Commit changes after a page move 

### Other fixes

  - Update to 1.23 only updates existing addons
  - Listings: scripts now also work on Bootstrap 5 card and Calendar views
  - Long action names are now saved correctly
  - Added a time-out parameter for SQL queries 
  - "`Free GeoIP`" service works again for Geo IP location Tokens (see [Core Tokens](https://learn.plantanapp.com/docs/tokens/tkn-core))
  - Improved visualization when deleting a role
  - Corrected buttons dropping out of group buttons
  - Replaced SQL 2016 commands with version compatible with SQL 2012

<br /><br /><a href="#top">Back to the top &#10548;</a>