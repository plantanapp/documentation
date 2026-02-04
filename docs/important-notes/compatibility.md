---
id: compatibility
title: Compatibility
sidebar_label: Compatibility
---

> Audience: [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

Plant an App is an IIS application that runs under DNN using MS SQL Server.  The chart below should be used to align your Plant an App version with the correct system components.


| Plant an App Version | Released On | Support Until | Recommended DNN Version | Minimum DNN Version | Maximum DNN Version | Minimum SQL Version | Minimum .NET Framework | Notes |
| -------------------- | ----------- | ------------- | ----------------------- | --------------------| ------------------- | ------------------- | ---------------------- | ----- |
 | 1.28 | 2026-01-12 | 2027-01-12 | 10.1.1 | 9.13.7 | 10.1.1 | SQL Server 2016 | 4.7.2 | Includes critical security fixes and compatibility with DNN 10. |
                | 1.27 | 2025-06-16 | 2026-06-16 | 9.13.7 | 9.11.2 | 9.13.10 | SQL Server 2016 | 4.7.2 |  |
                | 1.26 | 2024-06-14 | 2025-12-31 | 9.11.2 | 9.9.1 | 9.13.7 | SQL Server 2012 | 4.7.2 |  |
                | 1.25 | 2023-05-11 | 2024-11-11 | 9.11.0 | 9.9.0 | 9.11.3 | SQL Server 2012 | 4.7.2 |  |
                | 1.24 | 2023-01-10 | 2024-01-10 | 9.11.0 | 9.9.0 | 9.11.3 | SQL Server 2012 | 4.7.2 |  |
                | 1.23 | 2022-11-21 | 2023-11-21 | 9.11.0 | 9.9.0 | 9.11.0 | SQL Server 2012 | 4.7.2 |  |
                | 1.22 | 2022-09-23 | 2023-09-23 | 9.10.2 | 9.8.1 | 9.10.6 | SQL Server 2012 | 4.7.2 |  |
                


# About this Chart
- Support Until
  - Each Plant an App version is supported for at least 1 year from the release date.  
  - Ensure you have a schedule to upgrade Plant an App to the newest version prior to the end of its support date to maintain system security and functionality.
- DNN Versions
  - DNN Versions shown here refer to the DNN Community Edition.
  - If you are using DNN's EVOQ commercial edition, always consult the EVOQ documentation for version compatibility to avoid unsupported configurations.
  - Always use the "Recommended DNN Version" for best compatibility and stability.
  - Systems must meet the minimum to be supported.
  - Avoid using versions higher than the "Maximum DNN Version" as they may not be tested and can lead to uncaught issues. These versions may receive limited support.
- SQL Versions
  - Systems must meet the minimum to be supported.
- .NET Framework Versions
  - Systems must meet the minimum to be supported.

# Using this Chart
Typical uses of this chart include setting up and keeping your system aligned with our minimum requirements. This usually happens during the initial system installation, updating to higher versions, or migrating an existing system to Plant an App.
- Initial System Installation - see the [Installation Guide](https://learn.plantanapp.com/docs/current/general/installation-guide)
- [Updating Plant an App](https://learn.plantanapp.com/docs/current/updates/updating-plant-an-app)
  - Make a maintenance plan to upgrade systems promptly once a new version of Plant an App is released, factoring in the versions that are nearing their "Support Until" date.
- Migrating an Existing System - see the [Migrate/Upgrade document](https://learn.plantanapp.com/docs/current/important-notes/upgrading-dnnsharp-to-plant-an-app) 

Page updated - Wednesday, February 4, 2026 at 12:37:01 PM.
