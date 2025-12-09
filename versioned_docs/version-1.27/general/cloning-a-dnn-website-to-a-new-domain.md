---
id: cloning-a-dnn-website-to-a-new-domain
title: Cloning a DNN Website to a New Domain
sidebar_label: Cloning a DNN Website to a New Domain
---


# Cloning a DNN Website to a New Domain

(rev May 26, 2025 – version 1.0)

When migrating or duplicating a DotNetNuke (DNN) website to a new domain or server environment, a structured cloning process helps ensure functionality, security, and administrative continuity. This article outlines the recommended steps to successfully clone a DNN instance to a new DNS/domain name, including file transfer, IIS setup, database restoration, and critical DNN configuration updates.

## When to Use This Guide

Use these steps when:

* Duplicating a live DNN site for testing or staging
* Migrating a DNN instance to a new domain
* Moving DNN to a new server and DNS configuration

## Step-by-Step Cloning Checklist

Follow these steps in order to properly clone and configure the new site.

### 1. Copy the Site Files

To begin, create a copy of the DNN application files.

* Copy the full contents of the existing DNN site directory (e.g., `C:\inetpub\wwwroot\YourSite`) to a new folder.
* Ensure all folders are included:

  * `/bin`
  * `/Portals`
  * `/App_Data`
  * `/App_Code`
  * `web.config`

> **Tip:** Use robocopy or a zipped archive for accuracy and file integrity during transfer.



### 2. Backup and Restore the Database

Create a complete copy of the site’s SQL Server database.

* In SQL Server Management Studio (SSMS):

  * Backup the original DNN database.
  * Restore it under a new name in the destination environment.
* Re-map the appropriate SQL user to the restored database.
* Assign the `db_owner` role to ensure full permissions.

---

### 3. Configure IIS for the New Site

Set up a new IIS website to host the cloned files.

* In IIS Manager:

  * Create a new **Site** and point it to the copied directory.
  * Set the **Binding** to the new domain (e.g., `clone.example.com`).
* Configure a new or existing **Application Pool**:

  * .NET CLR Version: `v4.0`
  * Pipeline Mode: `Integrated`
* Assign NTFS permissions:

  * Grant **Modify** rights to `IIS APPPOOL\<AppPoolName>` on the site directory.



### 4. Update the DNS Configuration

Ensure the new domain name routes to the server.

* Add an **A record** in your DNS provider for `clone.example.com` pointing to the web server's IP address.
* Allow time for DNS propagation.



### 5. Update the `web.config` Connection String

If the database or SQL credentials have changed, update the `SiteSqlServer` value in `web.config`:

```xml
<connectionStrings>
  <add name="SiteSqlServer" connectionString="Server=.;Database=NewDbName;User ID=dbuser;Password=dbpass;" />
</connectionStrings>
```

Ensure the new credentials have access to the restored database.



### 6. Register the New Domain in PortalAlias Table

DNN maps incoming domain requests using the `PortalAlias` table. You must register the new domain here.

#### Option A – Use the DNN Admin Interface (Recommended)

* Browse to `http://clone.example.com` and log in as **host/superuser**.
* Go to **Persona Bar → Settings → Site Settings → Site Aliases**.
* Add the new domain (e.g., `clone.example.com`).
* Optionally, set it as the **primary alias**.

#### Option B – Direct SQL Insertion (If Site Fails to Load)

If the site will not load due to missing alias configuration, insert it manually:

```sql
-- First, determine the PortalID
SELECT PortalID, PortalName FROM Portals;

-- Then, insert the alias (replace PortalID and domain as needed)
INSERT INTO PortalAlias (PortalID, HTTPAlias, CreatedByUserID, CreatedOnDate)
VALUES (0, 'clone.example.com', 1, GETDATE());
```



### 7. Test the Cloned Site

After configuration, validate the cloned site’s operation:

* Browse to the new domain.
* Log in as host/admin.
* Confirm:

  * Page load performance
  * Module functionality
  * File Manager access
  * No visible errors or 404s
* Optional: Rebuild the search index.



### 8. Optional Post-Cloning Cleanup

Depending on your environment, consider the following cleanup and optimization steps:

* **Disable Scheduler Jobs** if the site is for staging/testing.
* **Update branding** or portal name to reflect the environment.
* **Configure SMTP settings** for the new environment.
* **Remove legacy domain aliases** from the `PortalAlias` table, if needed.
* **Enable SSL** for production-ready deployments.



## Conclusion

Cloning a DNN site requires careful handling of both the file system and SQL database, along with precise reconfiguration of IIS and DNN portal settings. Registering the new domain in the `PortalAlias` table is essential for correct operation. Following this checklist ensures a reliable and functional site clone.

If automation or scripting is desired for recurring clones (e.g., for QA environments), contact your platform administrator or development team for guidance on PowerShell or DevOps-based deployment tools.
