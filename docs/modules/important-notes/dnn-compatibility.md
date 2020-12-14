---
id: dnn-compatibility
title: DNN Compatibility Matrix
sidebar_label: DNN Compatibility
---

> Audience: [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)<br/>
> Skill Prerequisites: `System Administration and Maintenance`

Before upgrading Plant an App or any of its individual component features (Modules), or upgrading DNN Platform or Evoq, it is important to know whether the versions will be compatible with each other. Please reference the grid below when making this decision.

The most important consideration is to not upgrade DNN Platform or EVOQ before the version has been tested by Plant an App and posted here. Also, there are older versions of DNN that we no longer support. If you are using one of these versions, it's recommended that you upgrade your site. 

For all supported versions of DNN Platform, we always recommend upgrading to the latest released version of Plant an App or DNN Sharp Modules. Listed below are the minimum supported versions for each supported version of DNN Platform.  

## `Compatibility Matrix`

| DNN Version | Min Plant an App Version | Min DNNSharp Module Version | Notes |
|-|-|-|-|
| Above 9.7.2 | - |  - | Untested; not recommended for production use |
| **9.7.2** | **1.9.x** | **5.9.x** | **Requires DNN Sharp version 5.9.x or above or Plant an App 1.9.x or above** |
| 9.6.2 | 1.6.x | 5.1.x | DNN Version 9.6.2 is not recommended. This is the max DNN version compatible with DNN Sharp 5.8.x  and lower or Plant an App 1.8.x and lower  |
| **9.6.1** | **1.6.x** | **5.1.x** |  |
| **9.5.x** | **1.6.x** | **5.1.x** |  |
| *9.4.x* | - | - | *Version not supported* |
| **9.3.2** | **1.6.x** | **5.0.x** | **Starting 01/01/2021, this is our minimum supported DNN version** |
| 9.3.1 and lower | 1.6.x | 5.0.x | Starting 01/01/2021, Standard support will no longer cover DNN version 8.0.4 through 9.3.1. It will only be provided under separate commercial support agreements. Contact us for a quote. |
| 8.0.4 | - | 5.0.x | We no longer perform QA on DNN Version 8.0.4 for new releases. It will be tested on specific functionalities associated with support tickets. |
| *8.0.3 and lower* | - | - | *DNN Versions below 8.0.4 are not supported* |
