---
id: versioning-and-plant-an-app
title: Versioning and Plant an App
sidebar_label: Versioning and Plant an App
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

## **Versioning - General introduction**

Plant an App features an integration with [GitHub](https://github.com/) for version control. All the configurations of the app are pushed to a GitHub repository of your choice. This will help during development to track work, modifications and provides an easy way to revert work in case of mistakes. 

### What is versioning?

*Versioning* is the creation and management of multiple releases of a product, all of which have the same general function but are improved, upgraded or customized. The term applies mainly to operating systems (OS's), software and web services. Version control is the practice of ensuring collaborative data sharing and editing among users of systems that employ different versions of a product. 

### Why is it important?

Version control (also known as "source control") is the management of file changes within a version control system. These systems automatically maintain character level changes for all files stored within, allowing for a complete retrace of all versions of each file, the author of those versions and a complete rollback of all changes from the beginning of version control.

For developer-oriented work, it is critical to utilize version control systems for all non-binary files (read: Notepad readable) to enable multiple developers or teams to work in an isolated fashion without impacting the work of others. This isolation enables features to be built, tested, integrated or even scrapped in a controllable, transparent and maintainable manner.

The basics of version control are saving changes made to files while retaining the changes from all previous versions. All changes made within Git receive a unique version identifier alongside a user-written comment where the changes can be described.

## **Version Control in Plant an App**

### Overview

`Version Control` allows the management, backup and audit of your different Plant an App instances or environments by leveraging the use of a <a href="https://git-scm.com/" target="_blank">**GIT**</a>-based <a href="https://en.wikipedia.org/wiki/Version_control" target="_blank">Version Control System</a> such as <a href="https://github.com/" target="_blank">**GitHub**</a>.


### Deployment type

While accessible through the same section of the Configuration menu, `Version Control` will be setup differently according to your Plant an App deployment type. As such, please see the documentation section corresponding to your Plant an App hosting:

- If you use the cloud/SaaS version of Plant an App, please see the `Version Control (SaaS)` section.
- If your Plant an App is hosted locally/on-premisses, see the `Version Control (on-prem)` section.