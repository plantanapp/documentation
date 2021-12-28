---
id: azure-app-services
title: Azure App Services
sidebar_label: Azure App Services
---

> Audience: [`System/Security Administrators`](audience.md#systemsecurity-administrators)
> 
> Skill Prerequisites: `Azure App Services`

--Action Description Here --

## `Steps for updating on Azure App Services `

If you try to upgrade PlantAnApp when hosted on Azure AppService make sure you take the following steps:
1. Back up your application.
2. Set the following settings:
  a. Turn off `Always On` from AppService -> Configuration -> General settings
  b. Add an application setting: `WEBSITE_DYNAMIC_CACHE` with the value `0`.
  c  Add an application setting: `WEBSITE_LOCAL_CACHE_OPTION` with the value `Never`.
  d. Save
3. Upgrade your site from the Configuration page inside Plant an App 
4. Revert changes from step 2 after the upgrade is finished.

### Details below of why and how these settings affect the upgrade.


  - Two important settings in Azure WebApps(AppService) that you definitely should care about are **`WEBSITE_DYNAMIC_CACHE`** and **`WEBSITE_LOCAL_CACHE_OPTION`**. Being careless with them can lead to either website updating problems or unnecessary performance degradation. I will explain why, and how you should handle them.  This is where you can set them in the Azure Portal. If you haven't added them, they will **by default** be **`WEBSITE_DYNAMIC_CACHE=1`** and **`WEBSITE_LOCAL_CACHE_OPTION=Never`**.
- https://github.com/projectkudu/kudu/wiki/Understanding-the-Azure-App-Service-file-system
- https://github.com/projectkudu/kudu/wiki/Configurable-settings#turning-on-the-dynamic-cache-feature
  Due to the network file shared nature to allow multiple instance access, the dynamic cache improves performance by caching the recently accessed files locally on an instance. The cache is invalidated when the file is modified. The cache location is `%SYSTEMDRIVE%\local\DynamicCache` (same `%SYSTEMDRIVE%\local` quota is applied).


  a. No caching at all:

      WEBSITE_DYNAMIC_CACHE=0

  b. For full content caching (azure default): caches both file content and directory/file metadata (timestamps, size, directory content):

      WEBSITE_DYNAMIC_CACHE=1

  c. Directory metadata caching: will not cache content of the files, only the directory/file metadata (timestamps, size, directory content). That results in much less local disk use:

      WEBSITE_DYNAMIC_CACHE=2

<img src="/img/website_dynamic_cache-website_local_cache_option.png" alt="website_dynamic_cache-website_local_cache_option.png" />
