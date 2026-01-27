---
id: using-the-installer-module
title: Using the Installer Module
sidebar_label: Using the Installer Module
---

> **Audience:** System / Security Administrators  
> **Skill Prerequisites:** DNN administration, IIS and SQL Server fundamentals

# Plant an App Installation Guide (DNN Installer Module)

This guide provides a complete, step-by-step walkthrough for installing **Plant an App** on an existing **DNN Platform** site using the Plant an App Installer module.

This process applies to **self-hosted / on-prem DNN environments**.  
If you are using a hosted or SaaS environment, installation is handled for you and this guide is not required.

****

## Before You Begin

### Important Considerations

Before installing Plant an App, review the following recommendations carefully:

- **Install on Non-Production First**  
  If you are evaluating Plant an App, install it on a **non-production DNN site** to avoid impacting live users.

- **Back Up Your Site**  
  Always take a **full backup of both the database and site files** before starting the installation.

- **Consider Hosted Trials**  
  If you only want to evaluate functionality, a hosted free trial is available and does not require local installation.

****

## Download the Installer Module

1. Navigate to:  
   **https://console.plantanapp.com**

2. Use the **Downloads** section to obtain the **Plant an App Installer module**.

3. Download the **most recent available version** (typically the latest two versions are shown).

> The installer module is responsible for:
> - Running prerequisite checks  
> - Updating required DNN Sharp components  
> - Installing all Plant an App modules  
> - Creating the initial configuration page  

****

## Prerequisites

- A working DNN site must already be installed and accessible.
- You must be logged in as a **Host / SuperUser**.
- DNN version **9.6.1 or later** is required.
  - If your DNN version is **below the required minimum**, the installer will automatically upgrade DNN as part of the process.

****

## Installation Procedure

### Step 1: Install the Installer Module

1. Log in to DNN as **Host / SuperUser**.
2. Navigate to:  
   **Persona Bar → Settings → Extensions**
3. Click **Install Extension**.
4. Upload the Plant an App Installer `.zip` file.
5. Click **Next** through:
   - Package information
   - Release notes
6. Accept the license and complete the installation.
7. Confirm the installation finishes **without errors**, then click **Done**.

****

### Step 2: Create an Installer Page

1. Navigate to **Content → Pages**.
2. Add a new page.
3. Name the page something like **Installer**.
4. Set page permissions so it is **accessible only to Administrators**.
5. Save the page.

****

### Step 3: Add the Installer Module to the Page

1. Navigate to the newly created **Installer** page.
2. Enter **Edit** mode.
3. Click **Add Module**.
4. Search for **Plant an App Installer for DNN**.
5. Drag the module onto the page.
6. Exit Edit mode.

Once added, the installer will begin running automatically.

****

## Prerequisite Checks

The installer first runs a system validation check and displays results as:

- **Green** – Passed  
- **Orange** – Warning  
- **Red** – Failed  

### What to Do

- **Red items must be resolved** before continuing (for example, uninstalling deprecated components).
- **Warnings may be acceptable**, depending on context.
- Re-run checks until **no red items remain**.

****

## Start the Installation

1. Scroll to the bottom of the installer page.
2. Click **Start Installation**.

### During Installation

- The installer may prompt for **Host / SuperUser credentials**.
- If your DNN version is **below the required version**, it will be **automatically upgraded**.
- Required Plant an App components and dependencies will be installed.
- The page may refresh once installation completes.

****

## Post-Installation Steps

### Create the App Builder Configuration Page

1. Return to the Installer page.
2. Click **Create App Builder Configuration Page**.
3. Confirm the action completes successfully.

This page is where all Plant an App configuration and management will take place.

****

### Finalize the Installation

You can finalize in one of two ways:

- Uninstall the installer module manually  
- **Recommended:** Use the built-in finalize action

To finalize:

1. Click **Finalize by deleting current page and uninstalling the installer module**.
2. Confirm completion.

This removes the temporary installer page and cleans up the installer module automatically.

****

## Activate Plant an App

1. Navigate to the **Configuration** page created by the installer.
2. The platform will initially show as **Not Licensed**.
3. Click **Activate**.
4. Choose the environment type:
   - Production
   - Development
   - Test
5. Select the subscription associated with your account.
6. Click **Activate** to complete licensing.

****

## Verify Installation

After activation:

- Confirm the configuration page loads correctly.
- Verify any previously existing DNN forms or modules render as expected.
- Confirm Plant an App version information is visible.

Once verified, installation is complete.

****

## Installation Complete

Plant an App is now installed, configured, and ready for use.

If you encounter issues during installation, ensure:
- Your DNN version is supported
- All prerequisite checks are passing
- You are logged in as Host / SuperUser

For additional guidance, refer to the official documentation or contact support.

Revised 01/27/2026.