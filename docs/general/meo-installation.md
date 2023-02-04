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

Please download the required MEO version from the following repository:

    https://github.com/plantanapp/meo-setup/releases

Make sure that you download the same release version as your Plant an App installation. For example, if your Plant an App instance is on version **1.24**, download the latest release for that version: "**1.24.x**" (you can download older "1.24.y" versions as well, but we always recommend installing the latest available version).

Each release comes in two types of archives:

- If you want to install MEO on a Windows server, download the "`.zip`" archive
- If you want to install on Linux, download the "`.tar.gz`" archive

## Installation process

Transfer the archive downloaded at the step above to the server where MEO will be installed and decompress it.

### Installation Package contents

The MEO installation package contains two different files:

1. `docker-compose.yml` - a file that defines the services needed by the Docker container to run the MEO server application. **Note: we do not recommend modifying the content of this file. Do so at your own risk.**

2. `.env` - file that contains the installation configuration of the Multi-Environment Orchestrator ([see below](#env-file-setup)).

### `.env` file setup

Open the `.env`; it contains the following list of parameters:

    MULTI_ENV_DOCKER_TAG=[MEO version]
    http_port=8080
    https_port=8081
    MultiEnvGitDataEncKey=[key]
    MultiEnvDbConnection=Data Source=[host];Initial Catalog=MultiEnv;User Id=[user];Password=[pass];
    MultiEnvAuthDbConnection=Data Source=[host];Initial Catalog=MultiEnvAuth;User Id=[user];Password=[pass];
    HttpsRedirect=false
    HttpsCertFolder=./
    HttpsCertFileName=
    HttpsCertPassword=
    AppConfigFolder=./
    RepoFolder=[path]
    LogsFolder=[path]
    SqlUseManagedNetworkingOnWindows=false

The following mandatory parameters need to be defined/customized according to your environment *before* [running the installation](#installing-meo) itself.

- `http_port`/`https_port` - Define the HTTP or HTTPS port which is mapped on the MEO host machine and allows it to communicate with the Plant an App machine. Make sure that the Plant an App server machine can communicate with the MEO server machine on the specified port. Please see the <a href="https://learn.plantanapp.com/docs/general/meo-prerequisites-and-setup" target="_blank">MEO Prerequisites</a> page for information regarding whether you should choose HTTP or HTTPS.
- `MultiEnvGitDataEncKey` - Define the Encryption key; must be a 32 characters (**fixed length!**) <a href="https://www.ascii-code.com/" target="_blank">ASCII printable</a> string.
- `MultiEnvDbConnection` - Define the connection string to the **MEO Environment Orchestrator** database (*address, DB name, user ID and password*).
- `MultiEnvAuthDbConnection` - Define the connection string to the **MEO Identity Provider** database (*address, DB name, user ID and password*).
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

For detailed information about all the parameters in the `.env` file, please see the "[`.env` file configuration](/general/meo-configuration.md#env-file-configuration)" section. 


:::

### Installing MEO

First, make sure that Docker is started and that it [**runs in Linux mode**](https://learn.microsoft.com/en-us/virtualization/windowscontainers/quick-start/quick-start-windows-10-linux#run-your-first-linux-container) (⚠) - even if you are installing MEO on Windows.

Once the `.env` file configuration above is complete and Docker runs in Linux container mode, please run the `docker-compose` command with the "**up -d**" argument, as follows:

- Windows

    > .\docker-compose up -d

- Linux**:

    > ./docker-compose up -d

This will install MEO as a Docker container image (an executable package that includes everything needed to run the application - code, runtime, system tools, system libraries and settings) in a <a href="https://www.docker.com/resources/what-container/)" target="_blank">Docker container</a>.

****Important note**: according to your Linux distribution, the Docker Compose command might vary. Please check the <a href="https://docs.docker.com/engine/reference/commandline/compose/" target="_blank">official Docker Compose documentation</a>.

## MEO Uninstall

If you want to uninstall the MEO server's Docker container, please run the same command, with the "**down**" argument:

- Windows

    > .\docker-compose down

- Linux**:

    > ./docker-compose down

****Important note**: according to your Linux distribution, the Docker Compose command might vary. Please check the <a href="https://docs.docker.com/engine/reference/commandline/compose/" target="_blank">official Docker Compose documentation</a>.

## MEO Update/Reinstall

Updating (or reinstalling) the MEO server version involves uninstalling and then reinstalling the Docker container image.

The process steps are:

1. Backup your MEO "`.env`" file to a different location.
2. [Uninstall MEO](#meo-uninstall).
3. [Download the new MEO package](#downloading-the-meo-installation-package).
4. [Configure the new "`.env`" file](#env-file-setup) with the parameter values from your previous ".env" file (backed-up at point #1).
5. [Install MEO](#installing-meo).