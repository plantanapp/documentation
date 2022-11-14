---
id: meo-prerequisites-and-setup
title: MEO Prerequisites and setup
sidebar_label: Prerequisites and setup
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

## Prerequisites and Setup

This section lists the prerequisites and configuration necessary for installing the Multi-Environment Orchestrator on your Plant an App environment.

### Hardware and Software requirements

| Hardware requirement | Details |
| -------------------- | ------- |
| *CPU* | 2.4GHz single core (note that this is the ***minimum*** requirement and that it will vary according to your setup and needs).|
| *RAM* |512MB RAM (note that this is the ***minimum*** requirement and that it will vary according to your setup and needs).|
| *Disk space* | 100MB per managed Plant an App instance |
| *Internet connection* | HTTP/S port(s) open; required to download the Docker image for the application and to connect to the VCS (Version Control System).|

:::note

The *Internet connection* requirement is not mandatory. The application kit can be made available by Plant an App through other means.

:::

| Software requirement | Version and notes |
| -------------------- | ----------------- |
| *Operating System* | Windows Server 2019 or 2022. |
| *Docker* | Version 20.10 or later. |
| *MS SQL Server* | 2014 or higher; Express/WebEdition/Standard/Enterprise editions. |
| *Web Server (IIS)* | It might be found under “Internet Information Services” on latest Windows versions. |
| *VCS (Version Control System) Repository account* | Supports GIT-based versioning systems (such as GitHub) that uses a PAT (<a href="https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html">Personal Access Token</a>) for authentication. |

### Database setup

Two Databases must be created, one for each MEO component: the **Identity Provider** and the <strong>Environment Orchestrator</strong>.

Each DB must be provided with a **`db_owner`** user and subsequent `username` and `password`.

### IIS Site Setup

Since MEO is a webserver that communicates in HTTP/S, you will need to setup a dedicated site for it in [Microsoft IIS](https://www.iis.net/).

Please see [the official MS documentation](https://learn.microsoft.com/en-us/iis/get-started/getting-started-with-iis/create-a-web-site) about how to setup a website in IIS.