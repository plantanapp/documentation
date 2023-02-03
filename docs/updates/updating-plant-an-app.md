---
id: updating-plant-an-app
title: Updating Plant an App
sidebar_label: Updating Plant an App
---

> Audience: Anyone

## Updating Plant an App

This section covers the Update process in Plant an App. As there are several types of components, it is important to understand the difference between them in order to know *what* to update and *how*.

If you are already familiar with Plant an App and you just want a quick overview of the process, you can skip directly to the [Quick upgrade and update guide](#quick-upgrade-and-update-guide).

To access the "Update" section, please select it from the Configuration Menu to the left. Starting with version 1.24 of Plant an App, the Update section UI contains four tabs:

* [Overview](#overview)
* [Hotfixes](#hotfixes)
* [Changelog](#changelog)
* [Add-ons](#add-ons)

<img src="/img/updates-main.png" alt="updates-main.png" ></img>

The contents of these tabs will be detailed below.

:::note

The legacy UI for this section has a similar layout, with small differences. While not identical, it has basically the same functionalities as the ones described here. 

:::

<!-- omit in toc -->
### Overview

This is the default tab when accessing the "Updates" section. It provides you with general information about your current Plant an App version, the different modules that are installed and their own respective versions. 

The list of modules presented here is informative and can be exported in `.xslx` format by clicking the "`…`" (horizontal ellipsis) button in the utmost right part of the window, and then selecting "`Export`".

<img src="/img/updates-export.png" alt="updates-export.png" ></img>

If there is a new Plant an App version available to install, it will show-up as a button next to your present version information, titled "**Update Available `<version>` Get Version**". Clicking the button will (after confirmation) start the Plant an App version upgrade.

If your current Plant an App version is the latest available, the "`(Latest)`" suffix will be displayed next to the version number.

:::note

You are only able to update your Plant an App version to the next consecutive release. If you are (for example) two releases behind and would like to update to the latest version available, you will need to do so through two successive update processes.

:::

There is also a "Search Box" that allows you to quickly search through the list of installed components modules. 

### Hotfixes

This tab lists the available hotfixes for your present Plant an App version as well as general information about each of them.

- `Date` - shows the release date of the fix
- `Change Type` - displays the typology of the fix (*Product Enhancement*, *Bug Fix*, *Known Issue*)
- `Feature Type` - shows what sections/modules/categories of the platform are impacted by the hotfix
- `Version` - the version of the hotfix; multiple versions of the fix in question may be available and you can select which one you wish to install (see below).

By clicking the "`…`" (horizontal ellipsis) button to the utmost right of every hotfix and then selecting "`Install Specific Version`", you will have access to a list of the various versions of the fix in question (if available) for the present version of Plant an App. This feature is useful if you want to install a specific version of the fix and not necessarily the latest one. Note that the hotfixes are cumulative (the version you install will contain the features of all previous versions).

- `Details` - clicking this button will expand a section that will give you more information about the hotfix, as well as a list of the available versions for it (you can collapse-it by clicking the "`X`" button)
- `Install` - allows you to directly install the hotfix in question (to the latest available version); note that you can also install multiple fixes at once by selecting them via their respective checkbox and then clicking the "`Install selected Hotfixes <number of selected fixes>`" button.

Finally, there is also a "Search Box" that allows you to quickly search through the list of available hotfixes. 

#### Hotfix categories

The hotfix category is listed on a column next to the "Version", and represents their importance. There are three categories of hotfixes:

1. **`Regular`** : normal hotfixes which have been put in place for a specific problem; it is not required to install those if they do not fix a problem that you are confronted with (see the "`Details`" section of the hotfix)
2. **`Recommended`** : general purpose hotfixes for which the installation is recommended
3. **`Critical`** : they fix important or critical issues; we strongly advise to install them

:::note

When you upgrade your Plant an App version ([see the section above](#overview)), all the available hotfixes relative to the previous version will be installed. 

:::

### Changelog

This tab acts as an audit log that aggregates information about what elements have been updated (`Change Type` column), when (`Date` column), what platform component is affected by the update (`Feature Type` column) and to which version (`Version` column) - as well as some information about the updates themselves.

You can easily filter through this table via the "`Feature Type`" drop-down-list button (that allows you to select for display the type(s) of platform components that have been affected), as well as via the adjacent "Search Box". 

### Add-ons

Here you will find the different add-ons available to install for the present Plant an App version, as well as their respective version. Simply install the one(s) you need by clicking the adjacent "`Install`" button.

:::note

Once installed, it will be impossible to uninstall an add-on.

:::

## Quick upgrade and update guide

This is a quick guide for those that are familiar with Plant an App. You can always check the sections above for more details.

### Update your Plant an App version

This is done via the ["Overview" tab](#overview). If a new version is available, it will show-up as a button with the "**Get Version**" label; clicking it will automatically start the version upgrade process.

:::note

You are only able to update your Plant an App version to the next consecutive release. If you are (for example) two releases behind and would like to update to the latest version available, you will need to do so through two successive update processes.

:::

### Install Hotfixes

Go to the ["Hotfixes" tab](#hotfixes), select the hotfix(es) you want to install via the checkbox on the left and click the the "`Install selected Hotfixes <number of selected fixes>`" button; you can also click the "`Install`" button on the left for each individual hotfix.

The "`…`" (horizontal ellipsis) button will allow you to select a specific hotfix version to install (if multiple are available).

:::note

When you upgrade your Plant an App version ([see the section above](#update-your-plant-an-app-version)), all the available hotfixes relative to the previous version will be installed. 

:::

### Install Add-ons

Open the ["Add-ons" tab](#add-ons) and simply click the "`Install`" button adjacent to the add-on(s) you wish to install.

:::note

Once installed, it will be impossible to uninstall an add-on.

:::