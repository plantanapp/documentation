---
id: updates-to-token-usage-in-dnn-themes
title: Updates to Token Usage in DNN Themes
sidebar_label: Updates to Token Usage in DNN Themes
---

# Preparing for Upcoming Changes in Token Usage in Page Themes

> Audience: [`Developers`, `Administrators`, `Citizen Developer`](/audience.md#developers-administrators-citizen-developers)
>
> Skill Prerequisites: `Tokens`, `Themes`, `DNN`

## Overview

With the upcoming Plant an App release 1.28, significant changes are being made to how tokens are used within DNN themes. This article serves to inform users about these changes and provide guidance on how to prepare.

****

## What's Changing in 1.28?

In version 1.28, the methods previously used to integrate tokens in DNN themes will be replaced with a new streamlined approach. This update is essential to ensure compatibility and improve the performance of themes. Understanding these changes and proactively updating your themes can prevent the pages from rendering errors post-upgrade.

### Current Methods (Obsolete in 1.28)

Currently, tokens in themes can be embedded using one of these methods:

1. Using the Skin Object:

   ```html
   <%@ Register TagPrefix="MyTokens" Namespace="avt.MyTokens.Core" Assembly="avt.MyTokens.Core" %>
   <mytokens:tokenize>
     Hi [User:Email]
   </mytokens:tokenize>
   ```

2. Alternative Skin Object:

   ```html
   <%@ Register TagPrefix="paa" TagName="Token" Src="~/DesktopModules/DnnSharp/MyTokens/SkinObjectReplacer.ascx" %>
   <paa:token>
     <content>Hi [User:Email]</content>
   </paa:token>
   ```

### New Method in 1.28

Starting from version 1.28, the following updated method will replace both of the older methods:

```html
<%@ Register TagPrefix="PaaTokens" Namespace="PlantAnApp.Dnn.Tokens.Controls" Assembly="PlantAnApp.Dnn" %>
<paatokens:apply>
  Hi [User:Email]
</paatokens:apply>
```

This change is meant to streamline token integration and enhance system performance.

****

## How to Prepare for Version 1.28

1. **Identify Affected Themes:**
   - Review your DNN themes and locate any use of the current token methods as outlined above. This will help you identify parts of your themes that need updating.

2. **Plan for Updates:**
   - Prepare to update the themes with the new method immediately after upgrading to version 1.28. This will minimize downtime and prevent errors when browsing affected pages.

3. **Testing:**
   - Although the new method will not function prior to the 1.28 upgrade, mark the affected themes, so they are ready for testing post-upgrade.

****

## Key Considerations

- **Preemptive Steps:** While immediate changes in version 1.27 aren't necessary, proactively identifying and planning updates for your themes can mitigate challenges post-1.28 upgrade.
- **Theme Errors:** Following the upgrade, DNN themes that haven’t been updated will display errors for pages using the older methods.
- **Ease of Transition:** The change from the old to the new method should be straightforward for administrators and developers familiar with modifying themes.

****

## Conclusion

The move to a single, consistent method of token integration in DNN themes aligns with Plant an App's broader goals of system-wide consistency and enhanced performance. Preparing for this change will ensure a seamless transition with minimal disruptions to your applications.

Revised 09/03/2025