---
id: dnn-compatibility
title: DNN Compatibility and Upgrades
sidebar_label: DNN Compatibility
---

> Audience: [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

Before upgrading Plant an App or any of its individual component features (Modules), or upgrading DNN Platform or Evoq, it is important to know whether the versions will be compatible with each other. Please reference the grid below when making this decision.

The most important consideration is to not upgrade DNN Platform or EVOQ before the version has been tested by Plant an App and posted here. Also, there are older versions of DNN that we no longer support. If you are using one of these versions, it's recommended that you upgrade your site.

## `Compatibility Matrix`

:::note
For DNN Platform versions 9.3.2 and higher, we always **recommend upgrading to the latest released version of Plant an App or DNN Sharp Modules**. Listed **below are the minimum supported versions** for each supported version of DNN Platform.

We also advise **upgrading to the recommended version of DNN**, which is also listed below. Our policy is to discontinue support for DNN versions released more than one year ago.

To see the Evoq Content versions that correspond to the DNN Platform versions listed, please see the [DNN Software Documentation](https://www.dnnsoftware.com/docs/developers/product-versions.html).
:::

| DNN Version | Min Plant an App Version | Min DNNSharp Module Version | Notes |
| ----------- | ------------------------ | --------------------------- | ----- |
| 9.10.2 | 1.18.x | 5.18.x | DNN 9.10.2 is the recommended version. Requires SQL Server 2012 or higher. |
| 9.10.1 | 1.16.x | 5.16.x |  |
| **9.9.1** | 1.13.x | 5.13.x | Minimum supported DNN version. |


| &nbsp; | &nbsp; | &nbsp; | Older versions - Upgrade path only |
| ----------- | ------------------------ | --------------------------- | ----- |
| 9.8.1 | 1.9.x | 5.9.x |  |
| **9.7.2** | **1.9.x** | **5.9.x** |  |
| 9.6.2 | 1.6.x | 5.6.x | DNN Version 9.6.2 is not recommended. This is the max DNN version compatible with DNN Sharp 5.8.x and lower or Plant an App 1.8.x and lower |
| **9.6.1** | **1.6.x** | **5.6.x** | Starting with DNN 9.6.1, SQL Server 2008 or higher is reqiured. |
| Below 9.6.1 |  |  | Standard support no longer covers DNN Versions 9.6.1 and lower. It will only be provided under separate commercial support agreements. Contact us for a quote. |

## `Important Notes About Upgrade Paths`

1. BACKUP! Before doing any upgrade, whether to DNN Platform, Plant an App, or DNN Sharp modules, best practice dictates you should backup your site and database first. If you're not sure how to do that or need a refresher on how to perform an upgrade, review the [DNN Platform upgrade guidance](https://dnndocs.com/content/getting-started/setup/upgrades/index.html).
2. Once your site is safely backed up, carefully consider the best path forward based on what version of DNN your site has installed currently.
    
    :::note
    The closer you are to current with both DNN Platform and Plant an App or DNN Sharp Modules, the smoother your upgrade is likely to go. We highly recommended following the [DNN Platform Suggested Upgrade Path](https://dnndocs.com/content/getting-started/setup/upgrades/suggested-upgrade-path/index.html).:::
    
    :::note
    If you use our URL Adapter module, please do not forget to disable it before the upgrade process begins. This way, you will get rid of any conflicts that may occur during the upgrade process, due to various module settings. You will be able to enable the module after the entire upgrade process is complete.
    :::

### `If You have DNN 9.3.1 or Lower Installed`

1. Make sure all your **DNN Sharp modules are upgraded to the latest 5.0.x version** before upgrading DNN or to DNN Sharp 5.1+ modules. Even if you already have a 5.0 version of a module installed, confirm it is the last 5.0 version that was released for the module. If you aren't sure you have the latest version of a 5.0.x module, [please contact us](https://www.dnnsharp.com/helpcenter).
2. Upgrade all the DNN Sharp modules to the latest 5.1.x version.
3. Upgrade to DNN 9.3.2. **DO NOT skip upgrading to 9.3.2**. It’s a required upgrade for subsequent versions of DNN to work correctly.

### `If You have DNN 9.3.2 to 9.6.2 Installed`

1. First, you need to update all DNN Sharp modules to 5.9.x or higher or Plant an App 1.9.x or higher. If you do not upgrade DNN Sharp/Plant an App first, you may experience issues as DNN 9.7+ has breaking changes that are not compatible with prior versions of our products.
2. Before upgrading the DNN to a version newer or equal to DNN 9.6+, you need to install the .NET Framework 4.7.2 (or 4.8).
3. You are now ready to upgrade DNN to versions above 9.6.2.

### `If You want to go higher`

1. First, you need to upgrade to DNN 9.8.1 (**Only if you already have DNNSharp modules newer or equal to 5.9.x / Plant an App 1.9.x**)
2. Update all DNNSharp modules to the latest 5.11.x, or Plant an App 1.11.x.
    :::note
    If you use 3rd party modules, please update them to the latest versions before continuing with the upgrade process:::
3. Update all DNNSharp modules to the latest 5.12.x, or Plant an App 1.12.x
4. Update all DNNSharp modules to the latest 5.13.x, or Plant an App 1.13.x
5. Update all DNNSharp modules to the latest 5.16.x, or Plant an App 1.16.x
6. You are now able to upgrade DNN to versions above 9.8.1 (**We recommend DNN 9.10.2**)
7. You are now able to upgrade DNNSharp modules up to 5.18.x, or Plant an App 1.18.x.
8. You are now able to upgrade DNNSharp modules up to 5.19.x, or Plant an App 1.19.x (*We always recommend our latest versions*)