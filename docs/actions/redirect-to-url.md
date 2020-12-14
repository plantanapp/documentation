---
id: redirect-to-url
title: Redirect to URL
sidebar_label: Redirect to URL
---

> Audience: [`Citizen Developers`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This option redirects the user to the specified link after the user submits the form.

## `Related Actions`

| Action Name                                     | Description                                                                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Redirect to Portal Page](/docs/actions/redirect-to-portal-page) |This option redirects the user to another page in the portal after the user submits the form. |
| [Send File to Download](/docs/actions/send-file-to-download) | This option redirects the user to a file in the portal to be downloaded after the user submits the form. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| URL| Input your URL in the URL field. The URL can be fully qualified for an external link or relative for a local page. Specifying an anchor tag without the whole url will not generate a page refresh. For example: `#Id14` | Yes | Empty String | Yes |
| Escape URL special characters in tokens | Enable this option to open the selected page in a new tab. | No |`false` | No |
| Open in Popup | Enable this option to open the specified URL in a popup. Note that you might want to add query string parameters to make the page look nicer inside a popup. | No |`false` | No |
| Open in new tab | Enable this option to open the specified URL in a new tab. | No |`false` | No |
| Force Download | Enable this option to force a download when the redirect is made to a file. | No |`false` | No |
