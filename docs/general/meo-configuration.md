---
id: meo-configuration
title: MEO Server Configuration
sidebar_label: MEO Server Configuration
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

This section covers the backend/server configuration of the Multi-Environment Orchestrator. The server is configured through the parameters in the `.env` file, which are detailed below.

:::info

For the MEO client side/UI interface configuration that covers topics such as the GIT access and payload management, please see the "<a href="https://learn.plantanapp.com/docs/modules/using-meo" target="_blank">Using MEO</a>" page.

:::

## **`.env`** file configuration

The `.env` file contains the mandatory configuration of the Multi-Environment Orchestrator.

The following parameters need to be configured ***before the installation process*** takes place:

|Parameter|Description|
|---|---|
|*MULTI_ENV_DOCKER_TAG*|Tag of the MEO image version to be downloaded. The value of the parameter will correspond to the MEO version that you have downloaded from the GitHub repo. Please do not modify unless specifically required.|
|*http_port*|Define the HTTP port which is mapped on the MEO host machine and allows it to communicate with the Plant an App machine. Please see the <a href="https://learn.plantanapp.com/docs/general/meo-prerequisites-and-setup" target="_blank">MEO Prerequisites</a> page for information regarding whether you should choose HTTP or HTTPS.|
|*https_port*|Define the HTTPS port which is mapped on the MEO host machine and allows it to communicate with the Plant an App machine. Please see the <a href="https://learn.plantanapp.com/docs/general/meo-prerequisites-and-setup" target="_blank">MEO Prerequisites</a> page for information regarding whether you should choose HTTP or HTTPS.|
|*MultiEnvGitDataEncKey*|Define the Encryption key; must be a 32 characters (**fixed!**) <a href="https://www.ascii-code.com/" target="_blank">ASCII printable</a> string.|
|*MultiEnvDbConnection*|Define the connection string to the **MEO Environment Orchestrator** database (*address, DB name, user ID and password*).|
|*MultiEnvAuthDbConnection*|Define the connection string to the **MEO Identity Provider** database (*address, DB name, user ID and password*).|
|*HttpsRedirect*|Activate (`true`) or deactivate (`false`) the use of HTTPS.|
|*HttpsCertFolder*|Path to the TLS certificate; if *HttpsRedirect* is set to `false`, must be defined as: "`./`". |
|*HttpsCertFileName*|The TLS certificate filename; must be empty if  *HttpsRedirect* is set to: `false`.|
|*HttpsCertPassword*|TLS certificate password; must be empty if  *HttpsRedirect* is set to: `false`.|
|*AppConfigFolder*|Used by the Plant an App team for debugging purposes. **Please do not modify!**|
|*RepoFolder*|Define the MEO repository folder; it will be used to store the file structure of your Plant an App apps. The path can be local or remote, but it must be accessible from the MEO server.|
|*LogsFolder*|Define the MEO log folder. The path can be local or remote, but it must be accessible from the MEO server.|
|*SqlUseManagedNetworkingOnWindows*|Parameter required for the Docker container; please do not modify.|

:::note

If the contents of the `.env` file are modified, a MEO reinstall is required in order for the changes to take effect.

Please see the "**MEO Update/Reinstall**" section on the "<a href="https://learn.plantanapp.com/docs/general/meo-installation" target="_blank">MEO Server Setup and Installation</a>" page for details on this process.

:::