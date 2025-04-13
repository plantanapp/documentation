---
id: third-party-modules-compatibility
title: Third-party modules compatibility
sidebar_label: Third-party modules compatibility
---

# Compatibility Issues with Plant an App and Third-Party Modules

There are known compatibility issues between Plant an App and some third-party modules. Until these issues are resolved natively, we provide workarounds to help you use these modules without problems.

## Inconsistencies between Plant an App and 2sxc Modules

### Description

The installation process of [**2sxc**](https://2sxc.org/) (versions 13.x (LTS) through 18.3) with Plant an App v1.20 to v1.27 will fail. The cause is an incompatibility in assembly references in the `web.config` file and possibly missing assemblies in the `bin` folder.

### Affected Versions

- Plant an App: **v1.20** to **v1.27**
- 2sxc: **13.x** (LTS) to **19.03.04+**

### Workaround

To address the compatibility issue without manual changes, use a PowerShell script available at the link below. This script automatically resolves `web.config` setting conflicts.

[2sxc + Plant an App Repair Script](https://campfire.plantanapp.com/Contributions/Dale-Warner/2025/02/Summit/2sxc-Plant-an-App-Repair-Script)

#### Script Instructions

This solution is suitable for Plant an App version 1.26.299 and higher. Make sure you have a backup of your site before proceeding.

1. Change directory to the root of the DNN instance using the `CD` command.
2. Follow the instructions in the link to run the PowerShell script.

This script eliminates manual procedures, and both Plant an App and 2sxc should operate as expected after recovery.

## Inconsistencies between Plant an App and DNN360Menu

### Description

During the upgrade of Plant an App to affected versions, a critical issue arises with the DNN360Menu module. This involves a database trigger associated with DNN360Menu, potentially causing upgrade failures or operational disruptions.

The problematic trigger interacts with the Tabs table when deleting old admin pages, leading to unexpected behaviors and errors during the upgrade.

### Affected Versions

- Plant an App: **v1.20** and higher
- DNN360Menu: All versions

### Workaround

To address the issue with DNN360Menu and ensure a successful Plant an App upgrade, follow these steps:

1. **Disable the Problematic Trigger**
- Before upgrading or applying a hotfix, access your database tools to disable or delete the trigger associated with the DNN360Menu module on the Tabs table. This prevents interference during the upgrade process.

2. **Perform the Upgrade**

3. **Re-enable the Problematic Trigger**


## Compatibility Issues with the New DNN Tokens Module

### Description

The new DNN Tokens module, released on February 14, 2025, is not compatible with the Plant an App Tokens module.

### Affected Versions

- Plant an App: **All versions**

### Resolution

No official resolution is currently available. Clients are advised to avoid using the DNN Tokens module released on February 14, 2025.

### Workaround

It may be possible to resolve this issue by updating the `web.config` file. This is an untested solution and should be implemented only after thorough testing on the client's site:

Add the following line to the assemblies section in `web.config`:

```xml
<add assembly="netstandard, Version=2.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51" />