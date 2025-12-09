---
id: optional-iis-settings-to-prevent-website-sleep
title: Optional IIS Settings to Prevent Website Sleep
sidebar_label: Optional IIS Settings to Prevent Website Sleep
---


# Optional IIS Settings to Prevent Website Sleep and Ensure Reliability

(rev May 19, 2025 – version 1.0)

To achieve higher reliability for automation jobs and consistent user experiences, it is **optional but recommended** to configure your website to remain continually active in IIS (Internet Information Services). By default, IIS may place inactive sites and application pools into sleep mode, which can delay scheduled tasks or the first request from users. This article describes optional, recommended steps you can take to keep your site always running by adjusting both preload and application pool settings.

## Why Consider Always-On Settings?

While not strictly required, enabling these settings can help ensure that your web-based automation jobs and background tasks run reliably, and users won't encounter delays caused by IIS "waking up" your site after inactivity.

## Recommended IIS Settings

If you prefer your site to remain continuously active, consider configuring these IIS options:

### 1. Enable Site Preload

Activating *Preload* allows IIS to load your site at startup, rather than waiting for the first visitor.

**How to Enable Preload:**
- **Open IIS Manager:** Press `Windows Key` + `R`, enter `inetmgr`, and press `ENTER`.
- **Expand the Sites node** in the Connections pane and select your site.
- In the **Actions** pane, click **Advanced Settings**.
- Set **Preload Enabled** to `True`.

### 2. Set Application Pool Start Mode to Always Running

By default, application pools may only start when needed. Setting the *Start Mode* to *AlwaysRunning* ensures your site is always ready to serve requests.

**Steps to Apply:**
- In IIS Manager, **expand the server node** in the Connections pane.
- Click **Application Pools**.
- Select the application pool for your site.
- In the **Actions** pane, click **Advanced Settings**.
- Under **General**, set **Start Mode** to `AlwaysRunning`.

### 3. Configure Idle Timeout Settings

Idle timeout settings determine when an application pool is put to sleep due to inactivity. You may choose to adjust these settings to prevent the app pool from going idle.

**Steps to Apply:**
- In the same **Advanced Settings** dialog:
    - Under **Process Model**, set **Idle Time-out (minutes)** to `0`.
    - Change **Idle Time-out Action** to `Suspend`.

### 4. Save Changes

- Click **OK** to apply your settings.

> **Note:** Applying these settings will keep your site running at all times, which may increase server resource usage. Be sure to monitor server performance and make adjustments if necessary.

## Conclusion

Keeping your IIS-hosted website always on is an optional, but often beneficial, configuration—especially for organizations relying on scheduled automation or needing immediate responsiveness. By following these recommended steps, you can help minimize delays and reduce disruptions. If you’re unsure whether this approach is right for your environment, consult your IT administrator or reference official [IIS documentation](https://docs.microsoft.com/en-us/iis/).