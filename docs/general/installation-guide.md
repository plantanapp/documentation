---
id: installation-guide
title: Installation Guide (on-prem)
sidebar_label: Installation Guide
---

> Audience: [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

# Installation Guide (on-prem)

This page will provide you with a complete technical walkthrough of the installation process for the self-hosted/on-prem version of Plant an App.

If you are using our SaaS offering, you do not need to go through this guide, as everything is hosted and preconfigured on our portal. You can skip directly to the subsequent "Plant an App User Guide" page.

## System Requirements

### General Requirements

| Requirement | Description |
|---|---|
| **Internet access** | Required to initially download all product components and to retrieve product updates. |
| **Access to our CDN** | Necessary to whitelist specific domains and enable TLS Ciphers. Details can be found in the Getting Started / IP Whitelist topic. |

### Software Requirements 

| Required software | Version/Notes |
|---|---|
| *Windows* | <li>Windows Server 2012 or higher (Windows Server 2019 or 2022 if [installing on Docker](#installation-with-docker-containers-recommended))</li><li>Windows 10 (with [21H2 update](https://learn.microsoft.com/en-us/windows/whats-new/whats-new-windows-10-version-21h2) if [installing on Docker](#installation-with-docker-containers-recommended))</li><li>Windows 11</li> |
| *.NET Framework* | 4.7.2 or higher |
| *SQL Server* | 2014 or higher<br />**Note**: in order to improve performance under higher loads, the use of Web Edition/Standard/Enterprise editions of SQL Server are recommended, as the Express edition is limited in terms of maximum resource usage. |

:::note

We always recommend using the latest available software versions - Windows Server 2022, SQL Server 2019, .NET Framework 4.8, etc.

::: 

### **Minimum** Hardware Requirements

Note these are minimum requirements that will allow you to run the Plant an App platform. The requirement thresholds are highly project-dependent and will thus vary.

| Hardware | Notes/Details |
|---|---|
| *2CPU's* * | Or 2 vCPUs for VMs.<br />* Take into account [the note below](#note-best-practice-for-the-production-environment). |
| *4GB RAM* * |* Take into account [the note below](#note-best-practice-for-the-production-environment).|
| *5GB storage space* | This is the bare minimum space required to run the application; you should increase this value if the implementation creates files on disk and/or if the performance degrades at higher loads. |


#### Note: **Best Practice for the Production Environment**

When deploying on the production environment systems, we recommend the usage of two separate servers:
- the first for storing the application files
- the second for hosting the SQL Database Server 

This allows for better segregation and control of the physical resource usage. As such, we recommend using at least 2CPU's and 4GB RAM *for each server*. 


# Installation Procedure

There are two main ways to install Plant an App:

- [Deploying it on a Windows Server](#installation-on-windows-server-standard) with "Web Server (IIS)"

  or

- [Installing it as a Docker container](#installation-with-docker-containers-recommended) (recommended).

A third possibility consists of simply deploying the Plant an App "*AppBuilder*" on an existing DNN instance. This scenario is covered as part of the "Windows Server" installation option and is detailed in the "[Plant an App deployment](#plant-an-app-deployment)" section, below.  

## Installation on Windows Server (standard)

This is a two step process. It involves:

- [The installation of the underlying DNN Platform](#dnn-installation)
- [The deployment of Plant an App on the DNN Platform](#plant-an-app-deployment)

### DNN installation

1. Make sure that the “Web Server (IIS)” role (or “World Wide Web Services”) is installed; if it is not, please install it from the Windows Server Manager.

<img src="/img/iis-install.png" alt="iis-install.png" ></img>

:::note

For non-Server versions of Windows, please follow [this guide](https://learn.microsoft.com/en-us/dynamics-nav/how-to--install-and-configure-internet-information-services-for-microsoft-dynamics-nav-web-client#install-iis-on-windows-7-8-81-and-10).

:::

Also under “Web Server (IIS)”, please make sure you install the following roles and features:

- Web Server
  - **Common HTTP Features**: 
    - [x] Default Document 
    - [x] Directory Browsing
    - [x] HTTP Errors
    - [x] Static Content
  - **Health and Diagnostics**:
    - [x] HTTP Logging
  - **Performance**:
    - [x] Static Content Compression
  - **Security**: 
    - [x] Request Filtering
  - **Application Development**: 
    - [x] .NET Extensibility 3.5
    - [x] .NET Extensibility 4.7
    - [x] Application Initialization
    - [x] ASP.NET 3.5
    - [x] ASP.NET 4.7
    - [x] ISAPI Extensions
    - [x] ISAPI Filters
- Management Tools
  - **IIS Management Console** (optional, if you want to access your IIS Plant an App site's management locally)

For clarity, here is an overview of the required roles and features:

<img src="/img/iis-server-roles.png" alt="iis-server-roles.png" ></img>

:::note

The **FTP Server** role is not mandatory to run Plant an App, but recommended.

:::

2. Get the installer package from:

        https://github.com/dnnsoftware/Dnn.Platform/releases

    Download the "`DNN_Platform_<version>_Install.zip`" installer archive that corresponds to the Plant an App version you want to deploy (please see our Plant an App-to-DNN <a href="https://learn.plantanapp.com/docs/important-notes/dnn-compatibility#compatibility-matrix" target="_blank">Version Compatibility Matrix</a>). As a general rule, it is recommended to always download the latest available version of DNN. 

3. Unpack the archive in a folder on the file host server.

4. Follow [this guide](https://learn.microsoft.com/en-us/iis/get-started/getting-started-with-iis/create-a-web-site#use-the-ui) to create a site in IIS. At **step 5** of the process, make sure that you target the folder where you unzipped the installation archive (previous point). Also make sure you target the `web.config` file from that folder.

5. Create a new database on the SQL Server (the name is irrelevant).

6. On the new database, create a SQL login user with `db_owner` membership.  See [Defining the SQL User for DNN + Plant an App](/docs/current/general/defining-the-sql-user) for detailed instructions and requirements.

7. Open the site's `web.config` file and look for the "**`SiteSqlServer`**" key in the "`<connectionStrings>`" section; set its value to:

        "Data Source=<IP address of the SQL server>;Initial Catalog=<database name>;User ID=<database login username>;Password=<database password>"

8. Open a web browser and access your site by typing "`http://<localhost>`" (or its `<IP address>`, `<IP address>`, or `<DNS>`, depending on how you configured it) in the address bar and run the DNN Install.

<img src="/img/dnn-install.png" alt="dnn-install.png" ></img>

Click on `Visit Website` when the installation is complete.

<img src="/img/dnn-install-2.png" alt="dnn-install-2.png" ></img>

9.  Optionally, you can setup additional portal aliases (URLs for the DNN site) from: 
`Persona Bar` > `Site Settings` > `Site Behavior` > `Site Aliases`

<img src="/img/site-aliases.png" alt="site-aliases.png" ></img>

### Plant an App deployment

This section details the Plant an App deployment process on a DNN Platform installation. If you do not have DNN platform installed, please [go through the guide above](#dnn-installation) to install it first.

1. Download latest App Builder module version from the following URL:

        https://console.plantanapp.com/Downloads

2. Open your DNN Platform site URL in a web browser and go to Persona Bar > Host Settings > Extensions > Install Extension.

<img src="/img/paa-install-1.png" alt="paa-install-1.png" ></img>

3. Add or drag-and-drop the AppBuilder .zip archive to install it.

<img src="/img/paa-install-2.png" alt="paa-install-2.png" ></img>

4. Once the App Builder module is installed, create a new page.

<img src="/img/paa-install-3.png" alt="paa-install-3.png" ></img>

5. Enter a Name and a Title (e.g. “`Configuration`”) for the page (mandatory); you can also add a Description, Tags, Icons, etc. (optional). When you are done, click ‘`Add Page`’ at the bottom of the screen.

<img src="/img/paa-install-4.png" alt="paa-install-4.png" ></img>

6. Put the page in "Edit" mode by clicking on the ✎ (pencil icon) in the bottom left side of the screen, and then on the "Add Module" button.

<img src="/img/paa-install-5.png" alt="paa-install-5.png" ></img>

7. Add the "App Builder" module on the newly created page, by clicking on the left 3D shaped box. It will open a popup letting you choose what module to add on the page.

<img src="/img/paa-install-6.png" alt="paa-install-6.png" ></img>

Choose "App Builder" and drag it on the page.

8. Once the App Builder module is installed, the activation screen will show-up.

<img src="/img/paa-install-7.png" alt="paa-install-7.png" ></img>

Clicking the "`Activate`" button will redirect you to `https://console.plantanapp.com` where you can choose your organization and subscription.


## Installation with Docker Containers (recommended)

This installation will allow you to run Plant an App in a containerized Docker environment. As such, the first step is install the Docker engine.

### Docker installation

- **Operating system requirement** - Windows 10 Pro 21H2 update, Windows 11, Windows Server 2019 or 2022.
- **Windows preparation** - install the "`Containers`" and "`Hyper-V`" features [as detailed here](https://learn.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce). 
- **Docker installation** - according to your operating system:
  - For Windows 10/11, download and install Docker from [their official site](https://hub.docker.com/editions/community/docker-ce-desktop-windows).
  - For Windows Server 2019/2022, follow [the official guide from Microsoft](https://learn.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-server-1).


### Plant an App installation on Docker  

When deploying Plant an App on Docker, you have the choice of either using a [containerized SQL Express database](#fully-contenerized-deployment-with-sql-express-database-containers) (default) or using your own [dedicated SQL database server](#deployment-of-the-app-alone-with-separate-sql-server). 

#### Fully contenerized deployment (with "SQL Express" database containers)

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the following repository  on your local computer or server:

        https://github.com/plantanapp/tryplantanapp-docker

2. Go to the folder where you cloned the repository and open the `.env` file with a text editor. Find the "`windows_version`" variable and change it as follows, according to your operating system:
   - For **Windows 10 21H2 update**, to: `windows_version=21h2`.
   - For **Windows Server 2019**, to: `windows_version=2019`
   - For **Windows Server 2022** or **Windows 11**, to: `windows_version=2022`

3. In the same folder, open a PowerShell console *with admin privileges* and run the following command:

        \RunPlantanapp.ps1 -Start . 

This will automatically create the required folders required and start the containers. Wait for the download and build of the containers to complete.

:::tip

Using the `.\RunPlantanapp.ps1` command alone will show you a help text of all the available parameters, as well as usage examples.

:::

4. Open a web browser and access your new app by typing "`localhost`", its `<IP address>`, or `<DNS>` in the address bar - depending on where you deployed it.

#### Deployment of the App alone (with separate SQL Server)

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the following repository  on your local computer or server:

        https://github.com/plantanapp/tryplantanapp-docker

2. Go to the folder where you cloned the repository and open the `.env` file with a text editor. Find the "`windows_version`" variable and change it as follows, according to your operating system:
   - For **Windows 10 21H2 update**, to: `windows_version=21h2`.
   - For **Windows Server 2019**, to: `windows_version=2019`
   - For **Windows Server 2022** or **Windows 11**, to: `windows_version=2022`

3. In the same `.env` file, change the "`sa_password`" and "`base_connection`" variables to correspond to your own SQL database parameters.

4. Open the `docker-compose.yml` file and:

- Delete or comment the entire '**mssql**' service section:

      mssql:
        image: public.ecr.aws/n0h9y3l0/tryplantanapp-sql2017:win${windows_version}-${pa_version}
        isolation: 'process'
        volumes:
          - "${db_folder_path}:C:/dbFiles/"
        ports:
          - '${sql_port}:1433'
        environment:
          ACCEPT_EULA: 'Y'
          sa_password: ${sa_password}
          attach_dbs: ${attach_dbs}
        networks:
          - appnet

- In the '**web**' service section, delete or comment the following two lines:

      depends_on:
        - mssql

5. In the same folder, open a PowerShell console *with admin privileges* and run the following command:

        \RunPlantanapp.ps1 -Start . 

This will automatically create the required folders required and start the containers. Wait for the download and build of the containers to complete.

:::tip


Using the `.\RunPlantanapp.ps1` command alone will show you a help text of all the available parameters, as well as usage examples.

:::

6. Open a web browser and access your new app by typing "`http://<localhost>`" (or its `<IP address>` or `<DNS>`, depending on how you deployed it) in the address bar.

<br /><br /><a href="#top">Back to the top &#10548;</a>