---
id: third-party-modules-compatibility
title: Third-party modules compatibility
sidebar_label: Third-party modules compatibility
---

There are known compatibility issues between Plant an App and some third-party developed modules. Until the issues in question are resolved natively, we're providing workarounds that will allow you to use those modules and avoid problems.

## Inconsistencies between Plant an App and 2sxc modules

### Description

The installation process of [**2sxc**](https://2sxc.org/) (versions 13.x (LTS) through 14.10) in combination with plant an App v1.20 to v1.22 will fail. The cause has been identified as an incompatibility in assembly references in the `web.config` file and possibly missing assemblies within the `bin` folder.

### Affected versions:

- Plant an App: **v1.20** to **v1.27**
- 2sxc: **13.x** (LTS) to **18.x**

### Workaround

The general workaround consists in modifying the "`bindingRedirect oldVersion`" tag value for the Microsoft assemblies in the `web.config` file.

#### Prerequisites

Before proceeding with the workaround, make sure that you:

* Have access to the file system
* Create a backup of the "`web.config`" file and that you store it in a secure place

#### Actions to be performed

1. Open the `web.config` file on a broken Plant an App instance. Search for the following assembly names (the names are listed as "`assemblyIdentity name`" tags):

        Microsoft.EntityFrameworkCore
        Microsoft.EntityFrameworkCore.Abstractions
        Microsoft.EntityFrameworkCore.Relational
        Microsoft.EntityFrameworkCore.SqlServer
        Microsoft.Extensions.Caching.Abstractions
        Microsoft.Extensions.Caching.Memory
        Microsoft.Extensions.Configuration.Binder
        Microsoft.Extensions.Configuration
        Microsoft.Extensions.Configuration.Abstractions
        Microsoft.Extensions.Logging
        Microsoft.Extensions.Options

2. For each of the assemblies above (⚠) where there is a `bindingRedirect` tag and the `newVersion` is 2.1.1.0, check the value of the "`bindingRedirect oldVersion`" property; it should read: "`0.0.0.0-2.1.1.0`". If it is different, modify this value manually.

For example, if for an assembly in the list above you have the following value:

        <bindingRedirect oldVersion="0.0.0.0-32767.32767.32767.32767" newVersion="2.1.1.0" />

Please modify it to:

        <bindingRedirect oldVersion="0.0.0.0-2.1.1.0" newVersion="2.1.1.0" />

Repeat the action for all the assemblies identified at point #1 and save the `web.config` file.

3. If the `newVersion` tag is set to "`2.2.0.0`" AND there isn't a second `bindingRedirect` tag within the `dependentAssembly` (see below), then it will also need to be modified to: "`2.1.1.0`", as depicted above. After this change, a new binding redirect needs to be added, which will point to the PlantAnApp DLL. You can add this anywhere in the `web.config` file between the dependent assemblies, although it would be preferable to group it together with the others. 

This is the snippet that needs to be added:

        <dependentAssembly xmlns="urn:schemas-microsoft-com:asm.v1">
          <assemblyIdentity name="Microsoft.Extensions.Configuration.Abstractions" publicKeyToken="adb9793829ddae60" />
        <codeBase version="2.2.0.0" href="bin\PlantAnApp_Core\Microsoft.Extensions.Configuration.Abstractions" />
        </dependentAssembly>

If both "2.2.0.0" and "2.1.1.0" `bindingRedirect` tags are present within the `dependentAssembly` tag, the modification is not necessary, as both assembly versions can coexist. For example:

    <dependentAssembly xmlns="urn:schemas-microsoft-com:asm.v1">
        <assemblyIdentity name="Microsoft.Extensions.Configuration.Abstractions" publicKeyToken="adb9793829ddae60" />
            <bindingRedirect oldVersion="2.2.0.0-32767.32767.32767.32767" newVersion="2.2.0.0" xmlns="urn:schemas-microsoft-com:asm.v1" />
            <codeBase version="2.2.0.0" href="bin\Imageflow\Microsoft.Extensions.Configuration.Abstractions.dll" xmlns="urn:schemas-microsoft-com:asm.v1" />
            <bindingRedirect oldVersion="0.0.0.0-2.1.1.0" newVersion="2.1.1.0" />
    </dependentAssembly>


4. Finally, if the 2sxc module throws an error about the "`Microsoft.Extensions.Configuration.Abstractions`" version 2.1.1.0 missing entirely, simply take the latter manually from the 2sxc install package and place it in your Plant an App site's `\bin\` folder.

:::note

This is a generic workaround guide, based on the assumption that the interaction is limited to Plant an App and 2sxc. Depending on which product was installed first, additional changes might be necessary.

If you still encounter issues after following the steps above, please contact the support team.

## Inconsistencies between Plant an App and DNN360Menu 

During the upgrade process to the Plant an App affected versions, a critical issue has been identified concerning the DNN360Menu module. This problem mainly revolves around a database trigger associated with the DNN360Menu, which can lead to upgrade failures or operational disruptions post-upgrade.

The trigger in question attempts to interact with the Tabs table when deleting old admin pages, causing unexpected behaviors and errors that prevent the completion of the upgrade procedure.

### Description

The presence of the DNN360Menu trigger can cause severe complications during the upgrade process, potentially resulting in:

- The website not loading post-upgrade.
- System instability and data inconsistencies.

Given these impacts, it’s essential for DNN administrators to perform specific pre-upgrade checks and configurations to avoid these issues.

### Affected versions:

- Plant an App: **v1.20** and higher
- DNN360Menu: All versions

### Workaround

To mitigate the issue with DNN360Menu and ensure a successful Plant an App upgrade, you should:

### 1. **Disable the Problematic Trigger**
   Before installing any upgrade or hotfix, access your database tools to disable or delete the trigger associated with the DNN360Menu module on the Tabs table. This will prevent the trigger from interfering during the upgrade process.

### 2. **Perform the upgrade**

### 3. **Re-enable the Problematic Trigger**
   
:::