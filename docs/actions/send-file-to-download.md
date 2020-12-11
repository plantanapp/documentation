---
id: 
title: Send File to Download
sidebar_label: Send File to Download
---

> Audience: [`Citizen Developers`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This option redirects the user to a file in the portal to be downloaded after the user submits the form. Before setting up this action, the file will need to be uploaded to a portal folder. After this, the file can be located by clicking the `Change` button and browsing the portal assets to select the file. Then click `Update`.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Redirect to Portal Page](/docs/actions/redirect-to-portal-page) |This option redirects the user to another page in the portal after the user submits the form. |
| [Redirect to URL](/docs/actions/redirect-to-url) | This option redirects the user to an external link after the user submits the form |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Portal File | Click the `Change` button and browse the portal's assets to select the file to send for download | No | Empty String | Yes |
| Open in Popup | Enable this option to open the file download in a popup. Note that you might want to add query string parameters to make the page look nicer inside a popup. | No |`false` | No |
| Open in new tab | Enable this option to open the file download in a new tab. | No |`false` | No |
