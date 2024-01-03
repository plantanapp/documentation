---
id: release-notes-v1-25
title: Release Notes v1.25
sidebar_label: Release Notes v1.25
---

Overview:

- [What's new?](#whats-new)
- [Improvements and New Features](#improvements-and-new-features)
- [Breaking Changes](#breaking-changes)
- [Bug Fixes](#bug-fixes)
- [Known Issues](#known-issues)
- [Deprecations and Upcoming Removals](#deprecations-and-upcoming-removals)

## What's new?

### Guides / InfoBox

Our Guides module has had a major overhaul. 

- **Requirements**: The Guide module now requires [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) to display guide messages. If Bootstrap 5 is not present, it will load it automatically. 
- **Using Tokens**: With this latest release, it is now possible to use tokens in guides. This allows for more dynamic and personalized messaging.
- **System Guides**: This release also includes the addition of System Guides to the product. The first system guide being released with version 1.25 is a guide for new users. This guide helps new Plant an App users create and use their first entity. In the future, more system guides will be added to cover new release features.

### PDF Extract Action

Already introduced in 1.24 as hotfix, it enables users to extract pages or sections from an existing PDF. When used in conjunction with the merge PDF or generate PDF function, this feature facilitates the creation of fresh PDF files that incorporate both new and pre-existing content.

## Improvements and New Features

### Listings improvements

- The conditions for Grid Buttons now re-evaluate when the listing content refreshes.
- An "auto-switch" feature has been implemented in [BS5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) that automatically changes the view based on the size of the browser window.

<img src="/img/125-release-listings.png" alt="125-release-listings.png" ></img>

### Validation in Actions for `APIs` and `Automation`

The recently introduced action stack in APIs and Automation now includes additional mandatory validation measures. The following validations are now performed:

- Combined validation (for instance, either value or checkbox in the <a href="https://learn.plantanapp.com/docs/current/actions/send-email" target="_blank">`Send Email`</a> action)
- All Actions now undergo mandatory field validation; these validation checks can help Low-code engineers to avoid overlooking required parameters.

### UI improvements on `APIs` and `Automation`

The IntelliSense and autocomplete features have undergone minor UX enhancements:
- List spacing has been improved.
- Parentheses have been cleaned up.
- Autocomplete has been streamlined.
- Several small changes have been implemented to enhance usability.
- Moving to another page or leaving unsaved changes triggers a warning message notifying the user about unsaved changes.
- The keyboard shortcut "`Ctrl` + `S`" can now be used to save changes.

### General improvements

- For narrow screens, the Entity view now includes a horizontal scroll bar.
- The "Run Now" behavior in Jobs has been enhanced.
- The creation of new APIs now prevents duplicate names.
- The Bootstrap 3 Forms templates have been renamed.
- The previous update screen has been removed.
- A shortcut has been added to open the workflow definition in a new browser tab directly from the "`Execute workflow`" option.

### Version control

A version control / MEO version is also available for the 1.25 release.


## Breaking Changes

- Custom validator files need to be converted and adhere to the new json structure. (see [Custom Validators](#custom-validators))
- Switching from the "BS3 legacy engine" template to the "BS3" template requires you to change the location of your localization files (if you have any).
- XSL templates in Searchboost no longer work, please replace the input and output templates before upgrading to version 1.25.
- Whitespace and dash characters in APIs no longer work.
- Infobox/Guides have had a major upgrade and now need a BS5 skin and can no longer be used with BS3 skins.
- The `PlantAnApp` skin is being phased out. On existing pages that use the PlantAnApp skin, it will be replaced with the Pagebuilder "`default`"  skin variant (BS3). For login pages that use this skin, the "login no menu" skin variant will be used. In a future release, the complete package reference will be removed.
- End of Life add-ons/modules:
  - DnnSharp.BlockchainSecurity
  - SharpCdn
  - DnnSharp.SocialMedia
  - HtmlLight
  - DnnSharp.SearchBoost.DmxIntegration
  - DnnSharp.SearchBoost.LiveTabsIntegration
  - DnnSharp.Hotcakes
  - DnnSharp.SimpleIoT
  - DnnSharp.CheckVAT
  - DnnSharp.DundasBI
  - DnnSharp.XmlAdd-on
  - DnnSharp.PaylineData
  - PlatiOnline
  - DnnSharp.Bluefin
  - Remote Management
  - System Monitor Add-on
  - My Action Form Uniqueizer
  - DNNSharp.UserManagement
  
  These add-ons/modules have a high probability of breaking your installation, so please remove them before upgrading.

- DatePicker "On Change/Click" behavior change (JavaScript)
  - The JavaScript used to impact DatePickers has changed and simplified.  If your Low-Code uses JavaScript to manipulate a DatePicker, the JavaScript may need to be updated.
  - For example, if you copy the value of "Picker1" to "Picker2" in an "On Change/Click" event, the correct syntax is now
    ```
    var Picker1Lib = scope.controls.Picker1.getLibrary(); 
	[Picker2] =     Picker1Lib.selectedDates[0].toISOString(); 
    ```



## Bug Fixes

The 1.25 release automatically fixes the following bugs:

- The 1.23 update only applies to existing add-ons.
- Scripts in `Listings` can now be used with BS5 card and calendar views.
- Long action names are now saved accurately.
- A timeout parameter has been added for SQL Queries.
- Free GeoIP is functional again.
- Deletion of a role is now better visualized.
- The issue of buttons dropping out of group buttons has been addressed.
- SQL 2016 functions have been replaced with functions that are compatible with SQL 2012.

## Known Issues

- When the PAT (Personal Access Token) expires, the version control feature stops functioning. A known workaround is available to address this issue.
- In the `Pages` section, the page dropdown feature does not always work as intended.
- The "`Delete`" Action in `Listings` is currently non-functional.

## Deprecations and Upcoming Removals

- The XLS templates in Forms will be removed in version `1.27`.
- Connector groups will be removed in version `1.26`.
- The old "MyTokens" parsers functionality will be removed in version `1.26`.

For a comprehensive list of obsolete features, actions, or addons, please refer to the [Obsolete Features](https://learn.plantanapp.com/docs/current/important-notes/obsolete-features) documentation page.

## Custom Validators
Custom Validators have been changed from an XML to a JSON format. Use the following procedure to convert custom validations from XML format to JSON format during the upgrading process for the Plant An App system version 1.25.

This procedure was demonstrated in a [video](https://plantanapp-my.sharepoint.com/:v:/p/dale_warner/EWbH_5_39_lEj1ft3HstWxMBFY4vdIMi-GWyeEwjVN2SLA?e=q7YaCn).

### Step-by-step guide

1. [00:00:48] Locate the folder containing custom validators in the file system at the path: `DesktopModules\DNNSharp\ActionForm\Config\Validators`.
2. [00:02:58] Copy the XML content from the file.
3. [00:03:03] Use a tool like [freeformatter.com](https://www.freeformatter.com/xml-to-json-converter.html) to convert the XML content to JSON format. Paste the XML content into the converter, then click "Convert to JSON."
4. [00:03:29] Copy the JSON output.
5. [00:04:06] Save the edited file as a JSON file in the Validators folder.
6. [00:04:20] Paste the JSON content into the new file.
7. [00:04:32] Change the "Type" property to "TypeStr."
8. [00:04:53] Change the "Params" property to "ValidatorParams."
9. [00:05:20] Change the "JsValidator" property to "JsValidatorName."  Save the file.
10. [00:06:32] Go to the site settings, clear the cache, and restart the application to apply the changes.
11. [00:07:16] Test the custom validation on the website to ensure it works correctly.

#### Important Note

If your file contains only one validator, the freeformatter tool will not format it as an array and will also retain the Validation element.  You should ensure that the final form of the JSON file should be an array with no "Validation" element:
```
[
  {
    "Title": "Phone +1 plus 7 or 10 digit",
    "TypeStr": "avt.ActionForm.Core.Validation.ValidatorRegex, avt.ActionForm.Core",
    "JsValidatorName": "phone710",
    "ValidatorParams": {
      "Regex": "^(\\+1\\s?)?[\\s.-]?\\(?(\\d{3})?\\)?[\\s.-]?(\\d{3})[\\s.-]?(\\d{4})$"
    },
    "ErrorMessage": {
      "key": "validation.phone710",
      "default": "Phone number must be in 7 or 10 digit format and may include a +1 prefix."
    }
  }
]
```

By following these steps, you can successfully convert your custom validations from XML format to JSON format and activate them in the Plant An App system. Happy low-coding!

<br /><br /><a href="#top">Back to the top &#10548;</a>