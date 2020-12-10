---
id: 
title: Send File to Download
sidebar_label: Send File to Download
---

> Audience: [`Citizen Developers`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This option redirects the user to a file in the portal to be downloaded after the user submits the form. Before you set up this action, you will need to upload the file to your portal folder. After this, you will find the file by selecting it from the drop-down list on the File field.

## `Related Actions`

| Action Name                                     | Description                                                                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Redirect to Portal Page](/docs/actions/redirect-to-portal-page) |This option redirects the user to another page in the portal after the user submits the form. |
| [Redirect to URL](/docs/actions/redirect-to-url) | This option redirects the user to an external link after the user submits the form |

## `Input Parameter Reference`
The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).
| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| File| Select the portal file to send for download | No | Empty String | Yes |
