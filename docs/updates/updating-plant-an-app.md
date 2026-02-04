---
id: updating-plant-an-app
title: Updating Plant an App
sidebar_label: Updating Plant an App
---


> **Audience:** Anyone

Updating Plant an App
---------------------

This article explains how to keep your **Plant an App** environment up to date. Because Plant an App includes multiple components (core platform, hotfixes, add-ons, and optional DNN upgrades), it’s important to understand _what_ can be updated and _in what order_.
Following the guidance below will help you apply updates safely, minimize downtime, and avoid common upgrade blockers.

Overview of Update Tabs
-----------------------

To access updates, open the **Configuration** menu and select **Updates**.  
Starting with version **1.28**, the Updates screen includes four tabs:
*   [Overview](https://chatgpt.com/c/6983a3fe-c924-832b-b707-4f37da2361c2#overview)
    
*   [Cumulative Hotfixes](https://chatgpt.com/c/6983a3fe-c924-832b-b707-4f37da2361c2#cumulative-hotfixes)
    
*   [Changelog](https://chatgpt.com/c/6983a3fe-c924-832b-b707-4f37da2361c2#changelog)
    
*   [Add-ons](https://chatgpt.com/c/6983a3fe-c924-832b-b707-4f37da2361c2#add-ons)

<img src="/img/202602-updates-main.png" alt="202602-updates-main.png" ></img>
    

* * *

### Overview

The **Overview** tab is the default landing page for Updates. It displays:
*   Your currently installed Plant an App version
    
*   All installed modules and components
    
*   The version number for each module
    
This list is informational and can be exported to **`.xlsx`** format by clicking the **`…`** (horizontal ellipsis) in the top-right corner and selecting **Export**.
If a newer **major Plant an App version** is available, a button labeled  
**Update to version `<version>`** will appear next to your current version. Selecting this button initiates the major version upgrade workflow (after confirmation).
A **Search Box** at the top of the list allows quick filtering of installed modules.

* * *

### Cumulative Hotfixes

The **Cumulative Hotfixes** tab lists all hotfixes available for your currently installed Plant an App version.
Cumulative hotfixes bundle multiple fixes together and are designed to simplify maintenance. Rather than installing individual fixes, you install the **most recent cumulative hotfix**, which automatically includes all previous fixes.


> Watch an example [video](https://youtu.be/2Orrt5BbmUY?si=NoUOfT_wdRIymgQB) of Cumulative Hotfixes being installed.

Key characteristics:
*   **Cumulative behavior**: Installing the latest hotfix applies _all earlier hotfixes_
    
*   **Version-specific**: Only hotfixes compatible with your current major version are shown
    
*   **Mandatory before major upgrades**: All cumulative hotfixes must be installed before a major version update can proceed
    

#### Installing Cumulative Hotfixes

1.  **Navigate to Updates**
    *   Open **Configuration → Updates**
        
    *   Select the **Cumulative Hotfixes** tab

<img src="/img/202602-updates-cumulative.png" alt="202602-updates-cumulative.png" ></img>
        
2.  **Check for Updates**
    *   Click **Check for Updates** to refresh the list and ensure all available cumulative hotfixes are shown
        
3.  **Select the Latest Hotfix**
    *   If multiple cumulative hotfixes are listed, select one (usually the **most recent one**)
        
    *   Installing the latest hotfix automatically installs all previous fixes
        
4.  **Review Hotfix Contents**
    *   Select the hotfix to view its contents
        
    *   Hover over the **information (`i`) icon** to see detailed descriptions of each fix included
        
    *   You can scroll through the list to review all fixes contained in the cumulative package

<img src="/img/202602-updates-cumulative-contents.png" alt="202602-updates-cumulative-contents.png" ></img>

        
5.  **Prepare the Update**
    *   Click **Prepare Update**
        
    *   The installation screen will be displayed
        
6.  **Acknowledge Required Confirmations**
    *   Confirm that:
        *   All users will be locked out once the update begins
            
        *   Unsaved work may be lost
            
    *   Confirm that you have a **current backup**, or explicitly accept the risk of proceeding without one  
        (a documentation link is provided for backup guidance)

<img src="/img/202602-updates-cumulative-start.png" alt="202602-updates-cumulative-start.png" ></img>

        
7.  **Start the Installation**
    *   Select both confirmation checkboxes
        
    *   Click **Start**
        
8.  **Monitor Installation**
    *   The update duration varies depending on system size and hotfix content
        
    *   Progress indicators will be shown during installation
        
9.  **Complete and Verify**
    *   When finished, click **Continue**
        
    *   You will be returned to the Updates screen
        
    *   Revisit **Cumulative Hotfixes** and click **Check for Updates** again
        
    *   Successfully installed cumulative hotfixes will no longer be listed
        
At this point, your system is fully patched for the current major version.

* * *

### Changelog

The **Changelog** tab provides a historical audit of changes applied to your environment.
Each entry includes:
*   **Change Type** – e.g., Product Enhancement, Bug Fix
    
*   **Release Date**
    
*   **Feature Type** – impacted modules or platform areas
    
*   **Version**
    
You can filter entries using the **Feature Type** dropdown or refine results using the **Search Box**.

* * *

### Add-ons

The **Add-ons** tab displays all add-ons available for your current Plant an App version.
*   **Buy** – Purchase and install add-ons that are not currently licensed
    
*   **Install** – Immediately install add-ons already included with your license
    
Add-ons become available or unavailable depending on your installed version and licensing.

* * *

Installing a Major Version Update
---------------------------------

A **major version update** upgrades the core Plant an App platform (for example, from **1.27 → 1.28**). This process may also optionally include an upgrade to the underlying **DNN** version.

> Watch an example [video](https://youtu.be/LmvKktFx9sY?si=h1nNGtQutgM1YhdS) of a Major Version Update being installed.


### Prerequisites

Before a major version update can begin:
*   **All cumulative hotfixes must be installed**
    
*   If any hotfixes are missing, the system will block the upgrade and prompt you to install them first
    

### Major Version Update Process

1.  **Navigate to Updates**
    *   Open **Configuration → Updates**
        
    *   Confirm your current version on the **Overview** tab
        
2.  **Install Any Required Hotfixes**
    *   If prompted, install all cumulative hotfixes
        
    *   Once complete, return to the Updates screen
        
3.  **Start the Major Update**
    *   Click **Update to version `<version>`**
        
    *   Review the release notes

<img src="/img/202602-updates-major-start.png" alt="202602-updates-major-start.png" ></img>

        
4.  **DNN Upgrade Prompt**
    *   If a newer, recommended DNN version is available, you will be prompted to choose:
        *   **Yes** – Upgrade Plant an App _and_ DNN together
            
        *   **No** – Upgrade Plant an App only
            
        *   **Cancel** – Exit without making changes

<img src="/img/202602-updates-major-options.png" alt="202602-updates-major-options.png" ></img>

            
5.  **Prepare the Update**
    *   After selection, the update is prepared
        
    *   If a DNN upgrade is included, the DNN installer will automatically run
        
6.  **Monitor Upgrade Progress**
    *   The DNN installer will display step-by-step progress
        
    *   You can scroll to review completed actions and security checks
        
7.  **Complete the Upgrade**
    *   When prompted, click **Click here to access your site**
        
    *   You will be returned to your Plant an App environment
        
8.  **Verify Installation**
    *   Return to **Configuration → Updates**
        
    *   Confirm the new version is displayed on the Overview tab
        

* * *

### Best Practices

*   **Always back up before updates**, especially major version upgrades
    
*   **Use a staging environment** for heavily trafficked or mission-critical systems
    
*   **Schedule downtime** and inform users before starting updates
    
*   **Install hotfixes regularly** to reduce risk during major upgrades
    

Additional Considerations
-------------------------

*   **Beta versions** should never be installed in production environments
    
*   **Support assistance** is available for staging setup, backups, or upgrade planning
    
By following this process, you ensure your Plant an App system stays secure, stable, and fully supported.

**Revised 02/04/2026**

