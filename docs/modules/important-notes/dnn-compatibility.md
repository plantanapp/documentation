---
id: dnn-compatibility
title: DNN Compatibility Matrix
sidebar_label: DNN Compatibility
---

> Audience: [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)<br/>
> Skill Prerequisites: `System Administration and Maintenance`

Before upgrading Plant an App or any of its individual component features (Modules), or upgrading DNN Platform or Evoq, it is important to know whether the versions will be compatible with each other. Please reference the grid below when making this decision.

## `Compatibility Matrix`

| DNN Version | Plant an App Version | DNNSharp Module Version | Notes |
|-|-|-|-|
| Above 9.7.2 | - |  - | Untested; not recommended for production use |
| **9.7.2** | **1.9.44** | **5.9.x (min)** | **Requires DNN Sharp version 5.9.x or above or Plant an App 1.9.x or above** |
| 9.6.2 | 1.6.x | 5.9.x | DNN Version 9.6.2 is not recommended. This is the max DNN version compatible with DNN Sharp 5.8.x  and lower or Plant an App 1.8.x and lower  |
| **9.6.1** | **1.6.x** | **5.9.x** |  |
| **9.5.x** | **1.6.x** | **5.9.x** |  |
| *9.4.x* | - | - | *Version not supported* |
| **9.3.2** | **1.6.x** | **5.9.x** | **Starting 01/01/2021, this is our minimum supported DNN version** |
| 9.3.1 and lower | 1.6.x | 5.9.x | Starting 01/01/2021, Standard support will no longer cover DNN version 8.0.4 through 9.3.1. It will only be provided under separate commercial support agreements. Contact us for a quote. |
| 8.0.4 | - | 5.9.x | We no longer perform QA on DNN Version 8.0.4 for new releases. It will be tested on specific functionalities associated with support tickets. |
| *8.0.3 and lower* | - | - | *DNN Versions below 8.0.4 are not supported* |
