---
id: settings-for-large-file-uploads
title: Settings for Large File Uploads
sidebar_label: Settings for Large File Uploads
---


# Settings for Large File Uploads

Large file uploads in DNN are limited by two layers of settings — one at the web server (IIS/.NET) level and another inside DNN itself.
Both must be configured to support the desired maximum upload size.

The example below shows how to configure for **50 MB**, but you can adjust the values to suit your needs.

****

## Step 1 — Update IIS / `web.config` Settings

These settings ensure IIS and ASP.NET will accept larger requests.

### 1.1 Edit the site’s `web.config`

This file is located in the root folder of your DNN installation (the same directory as `Default.aspx`).

Add or update the following sections:

```xml
<configuration>
  <system.web>
    <!-- ASP.NET runtime limits -->
    <httpRuntime maxRequestLength="51200" executionTimeout="600" />
  </system.web>

  <system.webServer>
    <security>
      <requestFiltering>
        <!-- IIS request size limit (in bytes) -->
        <requestLimits maxAllowedContentLength="52428800" />
      </requestFiltering>
    </security>
  </system.webServer>
</configuration>
```

**Explanation:**

* `maxRequestLength` — sets the maximum request size in **kilobytes (KB)**

  * Example: `51200` = 50 MB
* `maxAllowedContentLength` — sets the maximum content length in **bytes**

  * Example: `52428800` = 50 MB
* `executionTimeout` — request timeout in **seconds** (e.g., 600 = 10 minutes)

To allow larger uploads, increase these values proportionally.

**Tip:**
If your DNN instance runs under a parent IIS site, check that there’s no higher-level `web.config` (for example, in the root of the server) with lower limits overriding these.

****

### 1.2 Restart the IIS site

After saving the changes:

* Open IIS Manager
* Select your DNN site
* Click **Restart**

**Note:** For sites hosted with Plant an App, use
`console.plantanapp.com > Dedicated Servers > Actions > Forced Restart`

****

## Step 2 — Adjust the DNN Upload Limit

Even if IIS allows larger uploads, DNN enforces its own internal maximum per site or host.

### 2.1 Log in as a SuperUser (Host)

### 2.2 Go to

`Persona Bar > Settings > Security > More > More Security Settings`

### 2.3 Locate

`Max Upload Size (MB)`

### 2.4 Set the value to match your upload limit

Example:

```
50
```

Click **Save** at the bottom of the page.

Each portal (site) can have its own setting.
If you manage multiple portals, confirm the setting for each one.

****

## Step 3 — Verify the Configuration

1. Log into the DNN site.
2. Open the File Manager or Assets module.
3. Try uploading a file slightly smaller than your limit (for example, 49 MB if you set 50 MB).
4. If the upload succeeds, both IIS and DNN limits are aligned.

   * If you receive a “Request entity too large” error, double-check `maxAllowedContentLength`.
   * If DNN rejects it immediately, recheck the “Max Upload Size (MB)” setting.

****

## Step 4 — (Optional) Adjust Disk Buffering

For high-volume uploads, you can tune ASP.NET buffering (not required for most setups):

```xml
<httpRuntime requestLengthDiskThreshold="8192" />
```

This controls how much of the upload is buffered in memory before ASP.NET writes to disk (in KB).

****

## Summary

| Layer   | Setting                   | Location                                 | Example (50 MB)  | Notes                                      |
| ------- | ------------------------- | ---------------------------------------- | ---------------- | ------------------------------------------ |
| IIS     | `maxAllowedContentLength` | `<system.webServer>`                     | 52,428,800 bytes | Prevents HTTP 413 errors                   |
| ASP.NET | `maxRequestLength`        | `<system.web>`                           | 51,200 KB        | Prevents “Maximum request length exceeded” |
| ASP.NET | `executionTimeout`        | `<system.web>`                           | 600 s            | Avoids timeout on slow uploads             |
| DNN     | `Max Upload Size (MB)`    | Persona Bar > Settings > Security > More | 50 MB            | Application-level limit                    |

To allow larger uploads, increase each setting proportionally.
