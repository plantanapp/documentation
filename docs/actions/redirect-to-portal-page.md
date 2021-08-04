---
id: redirect-to-portal-page
title: Redirect to Portal Page
sidebar_label: Redirect to Portal Page
---

Not available in: Automation, PlantAnApp.




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page | If no page is selected, the action will redirect to the current page. | No | None |
| Enforce Current Locale | Setting this to true, will make the action redirect to the localized version of the page requested. The localization of the requested tab is chosen based on the current locale. | No | None |
| Query String | Optionally provide a query string in the form of param1=value1&amp;amp;param2=value2.... Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Use URL Provider to form Query String | Some URL providers form query string using paths, e.g. /id/1, instead of ?id=1. This can cause problems in Javascript code that relies on query string variables. | No | true |
| Open in Popup | Enable this option to open in a poupup. Note that you might want to arrange your URLs a bit to look nice inside popups. More instructions in Action Form documentation.. | No | None |
| Popup Title | Optionally, provide a title for the popup. | No | None |
| Open in new tab | Enable this option to open in a new tab. Note that you might want to arrange your URLs a bit to look nice inside the new tab. | No | None |
