---
id: connectors-overview
title: Connectors Overview and usage
sidebar_label: Overview and usage
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

Plant an App's Connectors enable outbound connections to other platforms. They can be subsequently used at the connection stage in order to enable Actions to be executed remotely. In this section you will be able to define and configure them.

## Plant an App Connectors

Plant an App allows you to define Connectors for **Dynamics Service Credentials** (for Microsoft Dynamics CRM service), **GitHub**, **Slack** (through Webhooks), **SMTP servers** and **UiPath**. To create a new connector, click the **`NEW`** button in the upper part of the screen. 

<img src="/img/connectors.png" alt="connectors.png"></img>

From the same screen you can also `Test` the connection of an existing connector, `Edit` it or `Delete` it.

For each connector, you will need to define a Name and a Type (see below).

## Specific settings by type


### **`Dynamics Service Credentials`**

| Type |Notes|
|----------------------|---|
|*Organization Service URL*|Needs to be in a specific format; please see the  <a href="https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/org-service/discover-url-organization-organization-service?view=op-9-1">official Microsoft documentation</a> for more information.|
|*Organization Unique Name*|Please <a href="https://learn.microsoft.com/en-us/power-platform/admin/determine-org-id-name" target="_blank">see here</a>.|
|*Username*|-|
|*Domain*|Optional parameter; to be used when authenticating through Active Directory.|


### **`GitHub credential type`**

|Type|Notes|
|---|---|
|*Username*|-|
|*GitHub Personal Access Token*|See the <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">official GitHub documentation</a> for setup.|

### **`Slack (Webhook)`**

| Type |Notes|
|---------------|---|
|*Webhook URL*| Please see the <a href="https://api.slack.com/messaging/webhooks">official Slack documentation</a> about how to send messages using Webhooks.|
| *Default Channel* |Define the default channel to which the messages will be sent; this field supports both `#channel` and `@user` values and can be overwritten in the process definition.|
|*User Name*|Optional field; if defined, this user will appear as the sender of the message in Slack.|
|*Icon URL*|Optional field; specify the URL of an icon to be displayed next to the sender's name (must be Slack icon URL).|
| *Emoji*  |specify an emoji as defined in Slack (e.g. `:smiley:`).|

### **`SMTP Credential Type`**

|Type|Notes|
|----------------|---|
|*SMTP Authentication Mode*|The accepted values are: **`0`** (Anonymous), **`1`** (Basic) or **`2`** (<a href="https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-nlmp/b38c36ed-2804-4868-a9ff-8dd3182128e4?redirectedfrom=MSDN">NT LAN Manager</a>).|
|*SMTP Server and Port*|Server and Port of the SMTP server.|
|*Username*|-|
|*Password*|-|
|*SMTP Max Idle Time*|Connection inactivity time out.|
|*Host Email*|Used for testing the credential.|
|*SMTP Connection Limit*|Maximum number of messages per minute that can be sent.|
|*Enable SSL*|Accepts `true`/`false` and `1`/`0` as values.|

### **`UiPath Account credential type`**

|Type|Notes|
|----------------|---|
|*Tenant Name*|Specify the UiPath tenant name to authenticate upon.|
|*Username or Email*|-|
|*Password*|-|