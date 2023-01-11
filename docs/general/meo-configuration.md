---
id: meo-configuration
title: MEO Server Configuration
sidebar_label: MEO Server Configuration
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

This section covers the backend/server configuration of the Multi-Environment Orchestrator. Configuration is split between the `env` file (basic, mandatory configuration) and the `appsettings.override.json` (advanced, optional configuration).

:::info

For the MEO client side/UI interface configuration that covers topics such as the GIT access and payload management, please see the ***MEO UI Configuration*** page.

:::

## **`.env`** file configuration

The `.env` file contains the mandatory configuration of the Multi-Environment Orchestrator.

The following parameters need to be configured ***before the installation process*** takes place:

|Parameter|Description|
|---|---|
|*MULTI_ENV_DOCKER_TAG*|Tag of the MEO image version to be downloaded. Default value: "`latest`" (latest version). Please do not modify unless specifically required.|
|*http_port*|Define the HTTP port which is mapped on the MEO host machine and allows it to communicate with the Plant an App machine. Please see the <a href="https://learn.plantanapp.com/docs/general/meo-prerequisites-and-setup" target="_blank">MEO Prerequisites</a> page for information regarding whether you should choose HTTP or HTTPS.|
|*https_port*|Define the HTTPS port which is mapped on the MEO host machine and allows it to communicate with the Plant an App machine. Please see the <a href="https://learn.plantanapp.com/docs/general/meo-prerequisites-and-setup" target="_blank">MEO Prerequisites</a> page for information regarding whether you should choose HTTP or HTTPS.|
|*MultiEnvGitDataEncKey*|Define the Encryption key; must be a 32 characters (**fixed!**) <a href="https://www.ascii-code.com/" target="_blank">ASCII printable</a> ASCII printable string.|
|*MultiEnvDbConnection*|Define the connection string to the **MEO Environment Orchestrator** database (*address, DB name, user ID and password*).|
|*MultiEnvAuthDbConnection*|Define the connection string to the **MEO Identity Provider** database (*address, DB name, user ID and password*).|
|*HttpsRedirect*|Activate (`true`) or deactivate (`false`) the use of HTTPS.|
|*HttpsCertFolder*|Path to the TLS certificate; if *HttpsRedirect* is set to `false`, must be defined as: "`./`". |
|*HttpsCertFileName*|The TLS certificate filename; must be empty if  *HttpsRedirect* is set to: `false`.|
|*HttpsCertPassword*|TLS certificate password; must be empty if  *HttpsRedirect* is set to: `false`.|
|*AppConfigFolder*|Path to the folder of the `appsettings.override.json` file allows to define specific advanced parameters; if not used, set value to "`./`" (see the [**appsettings.override.json file configuration**](#appsettingsoverridejson-file-configuration) section below for more information).|
|*RepoFolder*|Define the MEO repository folder; it will be used to store the file structure of your Plant an App apps. The path can be local or remote, but it must be accessible from the MEO server.|
|*LogsFolder*|Define the MEO log folder. The path can be local or remote, but it must be accessible from the MEO server.|
|*SqlUseManagedNetworkingOnWindows*|Parameter required for the Docker container; please do not modify.|

:::note

If the contents of the `.env` file are modified, a MEO restart is required in order for the changes to take effect:

`RunPlantanapp.ps1 -Restart`

For more information about the `RunPlantanapp.ps1` control script, please see the following section: <a href="https://learn.plantanapp.com/docs/general/meo-installation#meo-status-control" target="_blank">*MEO Server setup and installation* > *MEO status control*</a>.

:::

## **`appsettings.override.json`** file configuration

This is an advanced configuration file that allows certain application parameters  from the appsettings.json file found on the MEO Docker image to be ovewritten. Only modify this file if specifically required to. 

A list of the editable parameters in the file can be found below.

|Parameter|Description and information|
|---|---|
|*MultiEnvConnection*|Connection string to the MEO Environment Orchestrator. Same parameter as `MultiEnvDbConnection` from the `env` file (see [section above](#env-file-configuration)). Note that the value from the `env` file takes precedence.|
|*MultiEnvAuthConnection*|Connection string to the MEO Identity Provider. Same parameter as `MultiEnvAuthDbConnection` from the `env` file (see [section above](#env-file-configuration)). Note that the value from the `env` file takes precedence.|
|*JobRunnersCount*|Define how many jobs are allowed to run in parallel per queue (there is one unique queue by app name). Set this value according to your needs and hardweare processing power.|
|*IdleQueueTimeToDeleteInMin*|Time in minutes after which an inactive queue (no new jobs or job updates) is deleted from memory. Default value: `10`.|
|*KeepFinishedJobsTimeInMin*|Amount of time (in minutes) that a finished job is kept in memory. Default value: `1440` (24 hours).|
|*LocalFilesBaseDir*|This is the Docker image folder where payload to be pushed to your SVC is stored. Modify only if specifically needed.|
|*Origin*|Default GIT URL. Please <a href="https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#about-remote-repositories" target="_blank">see here</a> for further details.|
|*MainBranch*|Name of the SVC main branch. Modify only if specifically needed (defaults to: `main`).|
|*CommitterUsername*|Payload committer username; will only be used if the payload doesn't specify one. Please see <a href="https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git" target="_blank">here</a> for further details.|
|*CommitterEmail*|Payload committer email address; will only be used if the payload doesn't specify one. Please see <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address" target="_blank">here</a> for further details.|
|*InitialCommitDefaultMessage*|Payload default message (a descriptive text that is added to the initial commit object by the developer who made the commit); will only be used if the payload doesn't specify one.|


:::note

If the contents of the `appsettings.override.json` file are modified, a MEO restart is required in order for the changes to take effect:

`RunPlantanapp.ps1 -Restart`

For more information about the `RunPlantanapp.ps1` control script, please see the following section: <a href="https://learn.plantanapp.com/docs/general/meo-installation#meo-status-control" target="_blank">*MEO Server setup and installation* > *MEO status control*</a>.

:::