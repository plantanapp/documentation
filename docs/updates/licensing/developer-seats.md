---
id: developer-seats
title: Developer Seats
sidebar_label: Developer Seats
---

> Audience: [`System Administrators`](/audience.md#system-administrators), [`Professional Developers`](/audience.md#professional-developer), [`Partner Agencies`](/audience.md#partner-agency)
>
> Skill Prerequisites: `Licensing`, `User Management`

This article explains how Developer Seat licensing works for Plant an App, including how it interacts with Runtime licenses and best practices for management across multiple environments and users.

## `Overview`

Plant an App offers a flexible approach to software licensing by separating developer access (Developer Seats) from site operation (Runtime Licenses). This allows organizations and partner agencies to scale development teams efficiently and manage costs appropriately for different types of deployments.

## `Key Concepts`

### `1. Developer Seat`
A **Developer Seat** is a license allowing one developer to work on Plant an App configurations (creating/editing forms, workflows, modules, etc.). Seats are assigned to individual users and their devices/browsers, enabling access to development features.

### `2. Runtime License`
A **Runtime License** is assigned per site/environment. It enables the Plant an App system to run, but does **not** include the right to develop or modify configurations.

### `3. Unlimited License (Legacy)`
Earlier versions of Plant an App provided unlimited developer access for a site. Modern licensing separates these roles for improved flexibility and cost efficiency.

****
## `Why Segregate Runtime and Developer Licenses?`

- **Cost Efficiency:** Organizations with multiple sites but only a few developers only need to purchase developer seats for active team members.
- **Partner Agencies:** Agencies can serve multiple clients (each with a runtime license) using a pool of developer seats.
- **Security & Compliance:** Assigning seats to individuals discourages sharing and tracks responsibility for changes.

****
## `How Developer Seats Work`

### `Assignment & Activation`
- Each developer seat is assigned to a Plant an App (console.plantanapp.com) user account.
- When a developer first accesses a development feature (e.g., Configuration page, Module editing) on a runtime-licensed site, they are prompted to **activate a developer seat** for that site.
- Activation requires Plant an App console account credentials and connects the seat to both the **user ID** and the **local device/browser**.

### `Device/Browser Limitation`
- A seat can be used on **one device/browser session at a time.**
- If the developer tries to sign in from another device/browser (e.g., moving from desktop to laptop), they’ll be prompted to transfer (activate) the seat for the new device.
- The process is quick: log in, select the seat, confirm activation. The previous device's access is disabled for development features.

### `User Limitation`
- Each developer seat is for a **specific individual**. (Best practice: create separate site logins for each developer.)
- Multiple developers working simultaneously on the same site require one seat per active user. (E.g., 3 concurrent developers = 3 seats.)

### `Multiple Sites`
- A developer seat can be activated on **multiple sites**, as long as the same user account and device/browser are used.
- On a new site, the first development action triggers the activation dialog. After activating, all configured features are accessible.

****
## `Common Scenarios`

| Organization Type              | Licensing Approach                                        |
| ------------------------------ | -------------------------------------------------------- |
| Single business with one site  | Unlimited License, or one Runtime + one Developer Seat   |
| Multiple sites, one developer  | Multiple runtimes, one Developer Seat (switch as needed) |
| Agency, multiple developers    | Each dev gets a seat; seats can be used across client sites |

****
## `Workflow for Activating and Transferring Developer Seats`

1. **Access Development Page** (e.g., Configuration)
2. **Activation Prompt** appears if the seat isn’t yet active for user/device on the site.
3. **Log in with console account**
4. **Select available Developer Seat** (if you have more than one)
5. **Activate**: Seat is assigned to your current browser/device for that site.
6. **Transferring:** If you log in from another device/browser, you’ll be prompted to transfer. Click Activate—this moves the seat; the prior session loses access.

****
## `Security & Best Practices`

- **Do not share credentials or developer seats.**
- Each developer should have their own unique user login on Plant an App sites and a dedicated seat.
- Always log out of console.plantanapp.com when done, especially on shared computers.
- For agencies, rotate seats among team members only as roles or active projects change.

****
## `Troubleshooting & FAQ`

### Q: “I get a prompt to transfer my developer seat—why?”
- You’re logging in from a different device or browser than your last activation. Simply activate to transfer.

### Q: “Can I use one seat for multiple sites?”
- Yes, as long as it’s the same user and device/browser. Activate once per site.

### Q: “Why can’t my second developer access runtime-licensed site for development?”
- You need an extra developer seat—each developer must have their own.

### Q: “Can I develop on the site if I only have a Runtime license?”
- No, you must activate a developer seat to use development features.

****
## `Summary Table: Developer Seat Characteristics`

| Characteristic         | Behavior                                           |
| ---------------------- | ------------------------------------------------- |
| Assignment             | To user and device/browser                        |
| Concurrent Use         | One user/device at a time per seat                |
| Site Usage             | Multiple sites allowed (must activate on each)    |
| Activation             | Required on each new site/device/browser          |
| Transfer Between Devices| Supported (deactivates previous session)         |

****
## `Further Reading and Resources`

- [Plant an App Plans](https://plantanapp.com/plans)
- [Getting Started with Console](https://console.plantanapp.com/)


If you have additional questions, contact [Plant an App Support](https://console.plantanapp.com/Support).