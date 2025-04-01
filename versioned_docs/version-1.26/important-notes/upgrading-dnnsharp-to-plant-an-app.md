---
id: upgrading-dnnsharp-to-plant-an-app
title: Upgrading - DNNSharp tools to Plant an App
sidebar_label: Upgrading - DNNSharp tools to Plant an App
---

# Migrate/Upgrade document

### `General Advice`

* You may find additional helpful information on our [DNN Compatibility](/important-notes/compatibility.md) page.
* Best practice - perform the upgrade on a clone to encounter and resolve issues without impacting your production site
    * Clone the site
    * Upgrade the clone per instructions
    * Test the site
* Add steps to take backups of the site - site crashes can occur during upgrades & backups can help you avoid data loss or having to start over from the beginning
    * Initially
    * Along the way
* Each backup must include an SQL Database & DNN File System
* All modules must be upgraded to the same level (version & subversion) before moving on to the next step.

### `First checks`

* If you have very old DNNSharp modules, you will need to upgrade all of them
    incrementally. For this process, please contact our support and provide the following:
    all the modules installed and their versions, DNN Version Installed, .NET Framework
    installed. After we analyze it, you'll receive a new list with all the download links
    that you'll need for the incremental upgrade process. After that, you’ll have all the
    DNNSharp modules & addons to the latest versions of 5.0.x.
* If you have DNN 9.3.1(or lower) installed, please make sure all your DNN Sharp
    modules are upgraded to the latest 5.0.x version before upgrading DNN or to DNN
    Sharp 5.1+ modules. Even if you already have a 5.0.x version of a module installed,
    confirm it is the last 5.0.x version that was released for the module. If you aren't sure
    you have the latest version of a 5.0.x module, please contact us.
* If you use our URL Adapter module, please do not forget to disable it before the
    upgrade process begins. This way, you will get rid of any conflicts that may occur
    during the upgrade process, due to various module settings. You will be able to
    enable the module after the entire upgrade process is complete.
* Contact Support for a list of all the latest module versions you will need for your unique upgrade path.

### `Upgrade steps`

* [ ] If MyTokens is installed, ensure that all Namespaces conform to the naming rules: "Must start with a letter and contain only alphanumerical characters."  Namespaces that do not conform will cause errors during later steps.
* [ ] Upgrade all the products to the latest 5.1.x.
* [ ] Upgrade the DNN to 9.3.2.
* [ ] Upgrade all the products to the latest 5.6.x.
* [ ] Install .NET Framework 4.7.2 (or 4.8) .
* [ ] Upgrade the DNN to 9.6.1.
* [ ] Upgrade all the products to the latest 5.9.x.
* [ ] Upgrade the DNN to 9.7.2.
* [ ] Upgrade all third-party modules to their current versions
* [ ] Install the AppBuilder version 1.12.91, which can be downloaded from our [Downloads](https://console.plantanapp.com/Downloads) page.
* [ ] Create an administrative page (typically named "Configuration").
* [ ] Add an AppBuilder module to the Configuration page. This module is your primary way to configure Plant An App.
* [ ] If prompted, please allow App Builder to install dependencies. If not, please open the **Updates** tab (directly from the Configuration page) and click on the **Install dependencies** button.
* [ ] On the Configuration page, use the Updates feature to update to successive versions (1.13, 1.14, ...) until you are at version 1.19.
* [ ] On the Configuration / Updates / Hotfixes page, install the Hotfix for AppBuilder 1.19.46 (or 1.19.53) to get the integrated DNN upgrade feature.
* [ ] On the Configuration page, use the Updates feature to update to successive versions (1.20, 1.21, ...) until you are at the current version.
* [ ] When the Updates feature offers higher DNN versions, install these updates. (EVOQ sites must install DNN versions manually.)

### `Known Incompatibilities`

* [ ] Some versions of 2sxc content are incompatible with AppBuilder version 1.12.91. Install the latest version of 2sxc before installing AppBuilder.




### `Upgrades Resulting in Crashed Sites`

* Please note that the current versions of our Dynamic Link Libraries (DLLs) are coded as 05.xx.xx.   For example, if you are installing Plant an App version 1.25, the DLLs present in the BIN folder should be of version 05.25.xx.  Any previous versions that might still be residing in your extensions list or within the BIN directory should be regarded with caution.  

* To resolved a Crashed Site after installing an update to Plant an App, ensure it's not conflicting with any outdated DLLs present on your site. When you perform alterations like module updates or upgrades, leftover DLLs may cause severe errors, such as complete site breakage, preventing your access to it. 

* This issue often arises when a module has been removed via the DNN extensions page, but its associated files were not deleted (typically because the 'remove files' box was not ticked). 

* Identifying which DLL is causing the havoc can be complex. However, you may extract some clues from the error message. If you come across DLLs such as avt.xxxx.dll or dnnsharp.xxxx.dll we recommend scrutinizing their version number to confirm they are in harmony with the rest.
