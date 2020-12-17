---
id: dnn-compatibility
title: DNN Compatibility Matrix
sidebar_label: DNN Compatibility
---

> Audience: [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)<br/>
> Skill Prerequisites: `System Administration and Maintenance`

Before upgrading Plant an App or any of its individual component features (Modules), or upgrading DNN Platform or Evoq, it is important to know whether the versions will be compatible with each other. Please reference the grid below when making this decision.

The most important consideration is to not upgrade DNN Platform or EVOQ before the version has been tested by Plant an App and posted here. Also, there are older versions of DNN that we no longer support. If you are using one of these versions, it's recommended that you upgrade your site.

## `Compatibility Matrix`

:::note
For DNN Platform versions 9.3.2 and higher, we always **recommend upgrading to the latest released version of Plant an App or DNN Sharp Modules**. Listed **below are the minimum supported versions** for each supported version of DNN Platform.

To see the Evoq Content versions that correspond to the DNN Platform versions listed, please see the [DNN Software Documentation](https://www.dnnsoftware.com/docs/developers/product-versions.html).
:::

| DNN Version | Min Plant an App Version | Min DNNSharp Module Version | Notes |
|-|-|-|-|
| Above 9.8.0 | - | - | Not yet supported |
| 9.8.0 | 1.9.x | 5.9.x |  |
| **9.7.2** | **1.9.x** | **5.9.x** | **Starting with DNN 9.7.2, DNN Sharp version 5.9.x or above or Plant an App 1.9.x or above is Required** |
| 9.6.2 | 1.6.x | 5.6.x | DNN Version 9.6.2 is not recommended. This is the max DNN version compatible with DNN Sharp 5.8.x  and lower or Plant an App 1.8.x and lower  |
| **9.6.1** | **1.6.x** | **5.6.x** |  |
| **9.5.x** | **1.6.x** | **5.6.x** |  |
| *9.4.x* | - | - | *Version not supported* |
| **9.3.2** | **1.6.x** | **5.0.x** | **Starting 01/01/2021, this is our minimum supported DNN version** |
| 9.3.1 and lower | 1.6.x <br/> (1.11.x max) | 5.0.x <br/> (5.11.x max) | Starting 01/01/2021, Standard support will no longer cover DNN version 8.0.4 through 9.3.1. It will only be provided under separate commercial support agreements. Contact us for a quote. |
| 8.0.4 | - | 5.0.x <br/> (5.11.x max) | We no longer perform QA on DNN Version 8.0.4 for new releases. It will be tested on specific functionalities associated with support tickets. |
| *8.0.3 and lower* | - | - | *DNN Versions below 8.0.4 are not supported* |

## `Important Notes About Upgrade Paths`

1. BACKUP! Before doing any upgrade, whether to DNN Platform, Plant an App, or DNN Sharp modules, best practice dictates you should backup your site and database first. If you're not sure how to do that or need a refresher on how to perform an upgrade, review the [DNN Platform upgrade guidance](https://www.dnndocs.com/content/getting-started/setup/upgrades/index.html).
2. Once your site is safely backed up, carefully consider the best path forward based on what version of DNN your site has installed currently.
   :::note
   The closer you are to current with both DNN Platform and Plant an App or DNN Sharp Modules, the smoother your upgrade is likely to go.  We highly recommended following the [DNN Platform Suggested Upgrade Path](https://www.dnndocs.com/content/getting-started/setup/upgrades/suggested-upgrade-path/index.html).
   :::
   - If you are starting with DNN version 9.3.1 or lower, you will need to upgrade to DNN 9.3.2 first (do not skip 9.3.2). However, make sure you **upgrade to the 5.0.x** versions of DNN Sharp modules before upgrading to DNN 9.3.2
   - From DNN 9.3.2 (or above) you are ready to go directly to DNN 9.8.0, but first, you need to update all DNN Sharp modules to 5.9.x or higher or Plant an App 1.9.x or higher. If you do not upgrade DNN Sharp/Plant an App first, you may experience issues as DNN 9.7+ has breaking changes that are not compatible with prior versions of our products.
   - If your site currently has DNN 9.5.x or 9.6.x you can upgrade to DNN 9.8.0, but first, you need to update all DNN Sharp modules to 5.9.x or higher or Plant an App 1.9.x or higher.
  