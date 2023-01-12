---
id: meo-installation
title: MEO Server Setup and Installation
sidebar_label: MEO Server Setup and Installation
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

This section will guide you through the MEO installation process.

## Downloading the MEO installation package

Please [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the following GitHub repository containing the MEO installation package to the machine where MEO will be installed (or clone it locally and transfer the contents to the machine where MEO will be installed).

    https://github.com/plantanapp/meo-setup

### Installation Package contents
The MEO installation package is structured in four different files:

1. `RunPlantanapp.ps1` - a PowerShell script that will handle the download of the MEO Docker image from our AWS repository and the install itself. It is also used to control the status of the MEO server (see [`MEO status control`](#meo-status-control), below). **Note: we do not recommend modifying its content. Do so at your own risk.**

2. `docker-compose.yml` - a file that defines the services needed by the Docker container to run the MEO app. **Note: we do not recommend modifying its content. Do so at your own risk.**

3. `appsettings.override.json` - configuration file that allows to set specific server parameters (advanced). A typical MEO deployment does not require altering this file (please see the <a href="https://learn.plantanapp.com/docs/general/meo-configuration#appsettingsoverridejson-file-configuration" target="_blank">**`appsettings.override.json` file configuration**</a> section  for details). 

4. `.env` - file that contains the installation configuration of the Multi-Environment Orchestrator ([see below](#env-file-setup)).

## Installation process

### `.env` file setup

Open the `.env`; it contains the following list of parameters:

    MULTI_ENV_DOCKER_TAG=latest
    http_port=8080
    https_port=8081
    MultiEnvGitDataEncKey=
    MultiEnvDbConnection=Data Source=[host];Initial Catalog=MultiEnv;User Id=[user];Password=[pass];
    MultiEnvAuthDbConnection=Data Source=[host];Initial Catalog=MultiEnvAuth;User Id=[user];Password=[pass];
    HttpsRedirect=false
    HttpsCertFolder=./
    HttpsCertFileName=
    HttpsCertPassword=
    AppConfigFolder=./
    RepoFolder=[path]
    LogsFolder=[path]
    SqlUseManagedNetworkingOnWindows=true

The following mandatory parameters need to be defined/customized according to your environment *before* [running the installation](#installing-meo) itself.

- `http_port`/`https_port` - Define the HTTP or HTTPS port which is mapped on the MEO host machine and allows it to communicate with the Plant an App machine. Please see the <a href="https://learn.plantanapp.com/docs/general/meo-prerequisites-and-setup" target="_blank">MEO Prerequisites</a> page for information regarding whether you should choose HTTP or HTTPS.
- `MultiEnvGitDataEncKey` - Define the Encryption key; must be a 32 characters (**fixed length!**) <a href="https://www.ascii-code.com/" target="_blank">ASCII printable</a> ASCII printable string.
- `MultiEnvDbConnection` - Define the connection string to the **MEO Environment Orchestrator** database (*address, DB name, user ID and password*).
- `MultiEnvAuthDbConnection` - Define the connection string to the **MEO Identity Provider** database (*address, DB name, user ID and password*).
- `Password` - ???
- `RepoFolder` - Define the MEO repository folder; it will be used to store the file structure of your Plant an App apps. The path can be local or remote, but it must be accessible from the MEO server.
- `LogsFolder` - Define the MEO log folder. The path can be local or remote, but it must be accessible from the MEO server.

:::note

If you choose to use HTTPS rather than HTTP, you will also need to provide a TLS certificate to encrypt the connection and subsequently provide values for the following parameters:

- `HttpsRedirect`
- `HttpsCertFolder`
- `HttpsCertFileName`
- `HttpsCertPassword`

:::


:::info

For detailed information about all the parameters in the `.env` file, please see the <a href=" https://learn.plantanapp.com/docs/general/meo-configuration#env-file-configuration" target="_blank">"`env` file configuration"</a> section.

:::

### Installing MEO

Once the `.env` file configuration above is complete, please run the `RunPlantanapp.ps1` (no arguments) script in PowerShell:

    > .\RunPlantanapp.ps1

The script will download and install MEO as a Docker container image (an executable package that includes everything needed to run the application - code, runtime, system tools, system libraries and settings) in a <a href="https://www.docker.com/resources/what-container/)" target="_blank">Docker container</a>.


## MEO status control

The `RunPlantanapp.ps1` script also allows you to control the status of the Multi-Environment Orchestrator. The following arguments are available:

|Parameter |Information |
|---|---|
|*-Start*|Starts the MEO Docker containers.|
|*-Stop*|Stops the MEO Docker containers.|
|*-Reset*|Removes the MEO Docker containers, redownloads the Docker image and starts MEO.|
|*-PermanentlyRemove*|Removes the MEO Docker containers.
|*-Update*|Pulls the latest image from the Plant an App repository (needs an internet connection) and updates the Docker containers. It does not delete any data.|
|*-Restart*|Stops and then starts the Docker containers. It does not delete any data.|
|*-PinToTag*|⚠ Used for debugging. Pulls the image with the specified tag and updates the Docker containers. Please do not use this command unless specifically needed or demanded by the Plant an App team.|

:::info

A few examples of MEO server commands:

`> .\RunPlantanapp.ps1 -Start` 

`> .\RunPlantanapp.ps1 -Stop`

`> .\RunPlantanapp.ps1 -Reset`

:::