---
id: meo-installation
title: MEO Server setup and installation
sidebar_label: MEO Server setup and installation
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

## Initial MEO Server Setup and installation

This section will guide you through the MEO installation process.

### Installation Package
The MEO installation package is structured in four different files:

1. `RunPlantanapp.ps1`
2. `docker-compose.yml`
3. `appsettings.override.json`
4. `env`

`RunPlantanapp.ps1` is a PowerShell script that will handle the download of the MEO Docker image from our AWS repository and the install itself. It is also used to control the status of the MEO server (see [`MEO status control`](#meo-status-control), below). **Do not modify its content!**

`docker-compose.yml` is a file that defines the services needed by the Docker container to run the MEO app. **Do not modify its content!**

`appsettings.override.json` is a configuration file that allows to set specific server parameters (advanced). A typical MEO deployment does not require altering this file. Please see the **MEO Server Configuration** > **appsettings.override.json file configuration** page for details. 

The `env` file contains the installation configuration of the Multi-Environment Orchestrator (see below).

#### **`env` file specific configuration**

The following parameters need to be configured before the installation:

|Parameter|Description|
|---|---|
|*http_port*|Define the IIS HTTP port. Note that this needs to have a value even if HTTP is not used (but rather HTTPS)!|
|*https_port*|Define the IIS HTTPS port. Note that this port will only be used if the ***HttpsRedirect*** parameter is set to `true`. Also note that this parameter needs to have a value even if HTTPS is not used (but rather HTTP with no TLS)!|
|*MultiEnvGitDataEncKey*|Define the Encryption key; must be a 32 characters (**fixed!**) <a href="https://www.ascii-code.com/" target="_blank">ASCII printable</a> ASCII printable string.|
|*MultiEnvDbConnection*|Define the connection string to the **MEO Environment Orchestrator** (*address, DB name, user ID and password*).|
|*MultiEnvAuthDbConnection*|Define the connection string to the **MEO Identity Provider** (*address, DB name, user ID and password*).|
|*HttpsRedirect*|Activate (`true`) or deactivate (`false`) the use of HTTPS.|
|*HttpsCertFolder*|Path to the TLS certificate; if *HttpsRedirect* is set to `false`, must be defined as: "`./`". |
|*HttpsCertFileName*|The TLS certificate filename; must be empty if  *HttpsRedirect* is set to: `false`.|
|*HttpsCertPassword*|TLS certificate password; must be empty if  *HttpsRedirect* is set to: `false`.|
|*AppConfigFolder*|Path to the folder of the `appsettings.override.json` file allows to define specific advanced parameters; if not used, set value to "`./`" (see the **MEO Server Configuration** > **appsettings.override.json file configuration** page for more information).|
|*RepoFolder*|**Mandatory Parameter**. Define the MEO repository folder; it will be used to store the file structure of your Plant an App apps. The path can be local or remote, but it must be accessible from the MEO server.|
|*LogsFolder*|**Mandatory Parameter**. Define the MEO log folder. The path can be local or remote, but it must be accessible from the MEO server.|


### Installation

The installation process involves running the `RunPlantanapp.ps1` (no arguments) script in PowerShell once the above configuration is completed.

The script will download and install MEO as a Docker container image (an executable package that includes everything needed to run the application - code, runtime, system tools, system libraries and settings) in a <a href="https://www.docker.com/resources/what-container/)" target="_blank">Docker container</a>.

### MEO status control

The `RunPlantanapp.ps1` script also allows you to control the status of the  Multi-Environment Orchestrator. The following arguments are available:

|Parameter|Information|
|---|---|
|*-Start*|Starts the MEO Docker container.|
|*-Stop*|Stops the MEO Docker container.|
|*-Reset*|Removes the MEO Docker container and the app folders, redownloads the Docker image and starts MEO.|
|*-PermanentlyRemove*|⚠ Removes the MEO docker container and the app  folders.|

:::note

If run without arguments (after the installation), the `RunPlantanapp.ps1` script will just check if there is a new MEO Docker image to download, and if so will download and install it.

:::