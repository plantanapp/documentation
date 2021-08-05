---
id: redirect-to-portal-page

title: Redirect to Portal Page
sidebar_label: Redirect to Portal Page
---

> Audience: [`Citizen Developers`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This option redirects the user to another page in the portal after the user submits the form.

## `Related Actions`

| Action Name                                     | Description                                                                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Redirect to URL](/docs/actions/redirect-to-url) | This option redirects the user to an external link after the user submits the form. |
| [Send File to Download](/docs/actions/send-file-to-download) | This option redirects the user to a file in the portal to be downloaded after the user submits the form. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Page | Select a portal page from the drop-down menu to which the user will be redirected after submission. If no page is selected, the action will redirect to the current page. | No | None Selected | Yes |
| Enforce Current Locale | Setting this to true, will make the action redirect to the localized version of the page requested. The localization of the requested tab is chosen based on the current locale. | No |`false` | No |
| Query String | Optionally, provide a query string in the form of `param1=value1&param2=value2` to be appended to the URL for the page selected. | Yes |`empty string` | No |
| Use URL Provider to form Query String | Some URL providers form query strings using paths, e.g. /id/1, instead of ?id=1. This can cause problems in Javascript code that relies on query string variables. Disable this option to keep traditional query string formatting. | No |`true` | No |
| Open in Popup | Enable this option to open the selected page in a popup. Note that you might want to add query string parameters to make the page look nicer inside a popup. | No |`false` | No |
| Open in new tab | Enable this option to open the selected page in a new tab. | No |`false` | No |
