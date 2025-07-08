---
id: third-party-modules-compatibility
title: Third-party modules compatibility
sidebar_label: Third-party modules compatibility
---

# Compatibility Issues with Plant an App and Third-Party Modules

## ⚠️ Warning: Impact of Third-Party Module Installation in DNN

Installing third-party modules in a DNN (DotNetNuke) environment can introduce DLL conflicts and unwanted changes to your configuration files, such as `web.config`. These changes can break existing functionality or prevent critical operations, such as license activation.

**Case Example:**  
After installing a community Azure Active Directory authentication provider, core Microsoft Identity libraries were overwritten and aggressive binding redirects were added. This triggered license validation failures and system outages until original dependencies and configurations were restored. 

### Best Practices to Prevent Production Outages

- **Always back up** the file system and SQL database before installing any third-party module or extension.  Having a backup that you are willing to revert to provides a fail-safe restoration point.
- **Test installations** in a staging or development environment that matches production before deploying to live systems.


By following these guidelines, you can significantly reduce the risk of downtime and system conflicts when enhancing your DNN installation with additional modules.

Known incompatibilities are discussed below.

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
```


## Incompatibilities between Plant an App and DNN Azure Active Directory Provider

### Description

Installing the community "DNN Azure Active Directory provider" (version **4.4.6**) can cause license activation failures and potentially block Plant an App from running properly. The provider adds binding redirects in `web.config` that force incompatible version usage. This breaks key cryptographic operations and prevents Plant an App from validating its license.

### Affected Versions

- Plant an App: **Likely all versions** (confirmed on **v1.25**)
- DNN Azure Active Directory Provider: **4.4.6**

### Workaround/Resolution

To restore service if this occurs:

1. **Identify Changed Files:**  
   Compare your `/bin` folder and `web.config` to a backup taken before the Azure AD provider was installed.
2. **Restore Plant an App Dependencies:**  
   Copy back the original versions of Microsoft Identity DLLs required by Plant an App (i.e., "Microsoft.IdentityModel.JsonWebTokens.dll") and undo any aggressive binding redirects (0.0.0.0-32767.32767.32767.32767) that force use of the new DLLs added by the Azure AD provider.
3. **App Restart:**  
   Restart the application to ensure the restored libraries and configurations are picked up.
4. **Test and Monitor:**  
   Verify that license activation and all Plant an App features work as expected.

### Preventative Guidance

- Do **not** install the DNN Azure Active Directory provider version 4.4.6 (or similar authentication extensions) in production without extensive staging tests and full system backups.
- Closely analyze and manually vet all changes to `/bin` and `web.config` resulting from authentication or identity extensions.
- If Azure AD functionality is required, consider housing it on a separate DNN instance, or work with Plant an App support for an alternative solution.
