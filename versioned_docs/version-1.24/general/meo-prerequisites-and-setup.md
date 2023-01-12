---
id: meo-prerequisites-and-setup
title: MEO Prerequisites and Setup
sidebar_label: MEO Prerequisites and Setup
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

This section lists the prerequisites and configuration necessary for installing the Multi-Environment Orchestrator on your Plant an App environment.

## Hardware and Software requirements

| Hardware requirement | Details |
| -------------------- | ------- |
| *CPU* | 2.4GHz single core (note that this is the ***minimum*** requirement and that it will vary according to your setup and needs).|
| *RAM* |512MB RAM (note that this is the ***minimum*** requirement and that it will vary according to your setup and needs).|
| *Disk space* | 1000MB per managed Plant an App instance (note that this is the ***minimum*** requirement and that it will vary according to your setup and needs). |
| *Network requirements* | Outbound HTTPS port(s) open, required to connect to the VCS (Version Control System). Note that HTTP/S ports are also required for the traffic between MEO and your Plant an App application instance. See the "[Choosing between HTTP and HTTPS](#network---choosing-between-http-and-https)" section, below. |

:::note

An outbound connection is also required to recover the MEO installation files from the Plant an App online repository, however this is not mandatory; the files in question can be transferred to your MEO host machine by other means.

:::


| Software requirement | Version and notes |
| -------------------- | ----------------- |
| *Operating System* | Windows Server 2019 or 2022. |
| *Docker* | Version 20.10 or later. |
| *MS SQL Server* | 2014 or higher; Express/WebEdition/Standard/Enterprise editions. |
| *VCS (Version Control System) Repository account* | Supports GIT-based versioning systems (such as GitHub) that uses a PAT (<a href="https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html">Personal Access Token</a>) for authentication. |


### Network - Choosing between `HTTP` and `HTTPS` 

- **HTTP**

When MEO is hosted on the same machine (or the same private network) as your Plant an App application instance, a non-TLS HTTP connection is usually sufficient.

- **HTTPS**

When MEO is hosted externally and the connection to your Plant an App application instance goes over the internet, we strongly recommend using HTTPS, which involves setting-up a TLS certificate.

- **Advanced security**

Other than using HTTPS, when your MEO instance is hosted externally (or on a different network that requires open-internet communication), you can also use a [reverse-proxy](https://en.wikipedia.org/wiki/Reverse_proxy) between it and your Plant an App application instance; this provides an additional level of abstraction, control and protection against common web-based attacks, like a denial-of-service attack (DoS) or distributed denial-of-service attacks (DDoS). 

For this end, you can use a dedicated webserver such as  [Microsoft IIS](https://www.iis.net/) or [Nginx](https://www.nginx.com/). 


## Database setup

Two Databases must be created, one for each MEO component: the **Identity Provider** and the <strong>Environment Orchestrator</strong>.

Each DB must be provided with a **`db_owner`** user and subsequent `username` and `password`.