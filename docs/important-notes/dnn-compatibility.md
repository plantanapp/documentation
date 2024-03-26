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
<strong>We recommend upgrading to the latest released version of Plant an App or DNN Sharp Modules</strong>. Listed **below are the minimum supported versions** for each supported version of DNN Platform.

We also advise <strong>upgrading to the recommended version of DNN</strong>, which is also listed below. Our policy is to discontinue support for our modules when used on DNN versions released more than one year ago.

To see the Evoq Content versions that correspond to the DNN Platform versions listed, please see the [DNN Software Documentation](https://www.dnnsoftware.com/docs/developers/product-versions.html).
:::

| DNN Version | Min Plant an App Version | Min DNNSharp Module Version | Notes |
| ----------- | ------------------------ | --------------------------- | ----- |
| Higher Versions| | | Not Tested|
| 9.11.2 | 1.24.x | 5.24.x | Recommended|
| 9.11.0 | 1.23.x |  5.23.x | DNN 9.11 will not work with Plant an App versions below 1.23.x / 5.23.x |
| 9.10.2 | 1.18.x | 5.18.x | Requires SQL Server 2012 or higher.<br/>DNN 9.9.0 or higher is required for 1.20.x / 5.20.x |
| 9.10.1 | 1.16.x | 5.16.x | DNN 9.6.1 or higher is required for 1.16.x / 5.16.x |
| **9.9.1** | 1.13.x | 5.13.x | Minimum supported DNN version. |

### Older versions - Upgrade path only

No support is offered for the DNN Platform or our modules when DNN is below the Minimum Supported version.

| DNN Version | Min Plant an App Version | Min DNNSharp Module Version | Notes |
| ----------- | ------------------------ | --------------------------- | ----- |
| 9.8.1 | 1.9.x | 5.9.x |  |
| **9.7.2** | **1.9.x** | **5.9.x** |  |
| 9.6.2 | 1.6.x | 5.6.x | DNN Version 9.6.2 is not recommended. This is the max DNN version compatible with DNN Sharp 5.8.x and lower or Plant an App 1.8.x and lower |
| **9.6.1** | **1.6.x** | **5.6.x** | Starting with DNN 9.6.1, SQL Server 2008 or higher is reqiured. |
| Below 9.6.1 |  |  | Not supported.|

## `Important Notes About Upgrade Paths`

1. BACKUP! Before doing any upgrade, whether to DNN Platform, Plant an App, or DNN Sharp modules, best practice dictates you should backup your site and database first. If you're not sure how to do that or need a refresher on how to perform an upgrade, review the [DNN Platform upgrade guidance](https://dnndocs.com/content/getting-started/setup/upgrades/index.html).
2. Once your site is safely backed up, carefully consider the best path forward based on what version of DNN your site has installed currently.
<br/>
    :::note
    The closer you are to current with both DNN Platform and Plant an App or DNN Sharp Modules, the smoother your upgrade is likely to go. We highly recommended following the [DNN Platform Suggested Upgrade Path](https://dnndocs.com/content/getting-started/setup/upgrades/suggested-upgrade-path/index.html).:::
<br/>
    :::note
    If you use our URL Adapter module, please do not forget to disable it before the upgrade process begins. This way, you will get rid of any conflicts that may occur during the upgrade process, due to various module settings. You will be able to enable the module after the entire upgrade process is complete.
    :::
3. Review and follow our [Migrate/Upgrade document](https://learn.plantanapp.com/docs/important-notes/upgrading-dnnsharp-to-plant-an-app).