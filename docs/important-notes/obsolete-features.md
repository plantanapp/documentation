---
id: obsolete-features
title: Obsolete Features
sidebar_label: Obsolete Features
---


| Area | Feature | Obsolete in | Target remove version | Removed in Version | Reason Notes |
| ---- | ------- | ----------- | --------------------- | ------------------ | ------------ |
| Actions | Create List from CSV File | - | 1.20 |  | Replaced by the more flexible Create List from CSV action<br/><br/><br/>Migration Type: Manual (Switch to the Create List form CSV action) |
| Actions | Execute Token | 1.18 | 1.20 |  | Same functionality as "Create/Update Token"<br/><br/><br/>Migration Type: Automated (Action will be replaced with Create/Update Token.) |
| Actions | Inject Data | 1.18 | 1.20 |  | Same functionality as "Create/Update Token"<br/><br/><br/>Migration Type: Automated (Action will be replaced with Create/Update Token.) |
| Actions | Update User Profile | - | 1.20 |  | Replaced by the much more flexible action with same name<br/><br/><br/>Migration Type: Automated (Use the non-obsolete action with the same name.) |
| Actions | User Registration | - | 1.20 |  | Replaced by the much more flexible action with same name<br/><br/><br/>Migration Type: Automated (Use the non-obsolete action with the same name.) |
| Add-ons | Salesforce, OpenID, DynamicCRM & UIPath available only with Enterprise license | 1.19 | 1.20 |  | Separating the add-ons targeted for enterprise setups.<br/><br/><br/>Migration Type: N/A (The add-ons will throw licensing errors after upgrade if used on non Enterprise licenses.) |
| Automation | POP3 email triggers | 1.2 | 1.22 |  | POP mail retrieval is an older protocol and is not intended for use across multiple devices.<br/><br/><br/>Migration Type: Manual (Convert to using IMAP trigger) |
| Form | Background images&patterns | 1.18 | 1.20 |  | The same can be done from CSS/page skin and shouldn't be a concern of the form.<br/><br/><br/>Migration Type: Manual (Switch to using CSS or other page building features.) |
| Form | Include Bootstrap | 1.19 | 1.20 |  | Our policy is that it’s the Page or the Skin responsibility to load the correct version of Bootstrap<br/><br/><br/>Migration Type: Manual (Include Bootstrap 3 from the skin or page settings if needed.) |
| Form | jQuery UI Datepicker | - | 1.18 | 1.18 | jQuery UI has been an obsolete technology for many years and looks very outdated<br/><br/><br/>Migration Type: Manual (Switch to the other date pickers available. ) |
| Form | Left/Right Sidebar | 1.18 | 1.20 |  | The same can be done from page building with much more flexibility.<br/><br/><br/>Migration Type: Manual (Switch to using CSS or other page building features.) |
| Form | NetCash BankAccount Group Validator | - | 1.18 | 1.18 | A validator no longer in use.<br/><br/><br/>Migration Type: N/A (No migration path.) |
| Form | NoCss template | 1.19 | 1.20 |  | NoCss is based on BS3 and has limited use cases.<br/><br/><br/>Migration Type: Manual (Consider using Manual Layout for custom UIs. Forms with NoCss theme will throw an error. ) |
| Form | XML configs for input fields are obsolete. They will be automatically converted to JSON config files in 1.19. | 1.18 | 1.20 |  | We've transitioning all our config files to work exclusively with JSON format. Input Types is one of the few places that still support XML and this code will be soon modernized.<br/><br/><br/>Migration Type: Manual (If you're using custom form fields, convert any associated XML config files to JSON.) |
| Form Fields | Agree to Terms | 1.18 | 1.20 |  | Replaced by the much more flexible Agreement Links<br/><br/><br/>Migration Type: Automated (Fields will be automatically replaced with Agreement Links.) |
| Form Fields | Agree to Terms PopUp | 1.18 | 1.20 |  | Replaced by the much more flexible Agreement Links<br/><br/><br/>Migration Type: Automated (Fields will be automatically replaced with Agreement Links.) |
| Form Fields | Item with Quantity | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes<br/><br/><br/>Migration Type: Manual (Switch to using the radio boxes field with Items data source.) |
| Form Fields | Likert Scale (Agree/Disagree) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes<br/><br/><br/>Migration Type: Manual (Switch to using the radio boxes field with Items data source.) |
| Form Fields | Likert Scale (Frequency) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes<br/><br/><br/>Migration Type: Manual (Switch to using the radio boxes field with Items data source.) |
| Form Fields | Likert Scale (Importance) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes<br/><br/><br/>Migration Type: Manual (Switch to using the radio boxes field with Items data source.) |
| Form Fields | Pages from Current Portal | 1.18 | 1.20 |  | This field was a dropdown preconfigured with the Pages data source.<br/><br/><br/>Migration Type: Manual (Switch to using the dropdown field with the respective data source.) |
| Form Fields | Portals (except portal 0) | 1.18 | 1.20 |  | This field was a dropdown preconfigured with the Portals data source.<br/><br/><br/>Migration Type: Manual (Switch to using the dropdown field with the respective data source.) |
| Form Fields | Portals Dropdown (all) | 1.18 | 1.20 |  | This field was a dropdown preconfigured with the Portals data source.<br/><br/><br/>Migration Type: Manual (Switch to using the dropdown field with the respective data source.) |
| Form Fields | Simple Rich Text | 1.18 | 1.20 |  | Replaced by the 2 much modern rich text editors (CK Editor and Trumbowyg)<br/><br/><br/>Migration Type: Automated (Switch to using CK Editor and Trumbowyg.) |
| Form Fields | User ID | 1.19 | 1.20 |  | This field just transported the UserId to the front end in a hidden field. Same behavior an be achieved by using directly the hidden field.<br/><br/><br/>Migration Type: Manual (You can use the normal hidden field with a token in it [User:UserId]) |
| Form Fields | Yes/No (Radio boxes) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes<br/><br/><br/>Migration Type: Manual (Switch to using the radio boxes field with Items data source.) |
| Form Fields | Yes/No/Maybe (Radio Boxes) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes<br/><br/><br/>Migration Type: Manual (Switch to using the radio boxes field with Items data source.) |
| Infobox | Include Bootstrap | 1.19 | 1.19 |  | BREAKING CHANGE<br/><br/>Infobox no longer includes bootstrap 3 as it's causing issues when working with pages that use other versions.<br/><br/>Migration Type: Manual (Include Bootstrap 3 from the skin or page settings if needed.) |
| Listing | Bootstrap Glyphicons | 1.19 | 1.20 |  | Bootstrap Glyphicons lost in popularity compared to other icon frameworks, such as Font Awesome that we widely support.<br/><br/><br/>Migration Type: Manual (Switch to use the Font Awesome classes.) |
| Listing | Form Builder | 1.18 | 1.20 |  | Form Builder is a clone of Action Form. The code has been unmaintained for many years, and fell behind. It's also inefficient, as we're loading a form for each row in the listing, which becomes very slow.<br/><br/><br/>Migration Type: Manual (Swtich to a different pattern, such as using popups with forms, inline edit, or embed forms inside inline details.) |
| Listing | Include Bootstrap | 1.19 | 1.20 |  | Our policy is that it’s the Page or the Skin responsibility to load the correct version of Bootstrap<br/><br/><br/>Migration Type: Manual (Include Bootstrap 3 from the skin or page settings if needed.) |
| Listing | Loading animation covers | 1.19 | 1.20 |  | Covering the entire page creates usability issue. The loader will always only cover that data part.<br/><br/><br/>Migration Type: N/A (Loader will always cover just the data area of the grid.) |
| NavXp | Include Bootstrap | 1.19 | 1.20 |  | Our policy is that it’s the Page or the Skin responsibility to load the correct version of Bootstrap<br/><br/><br/>Migration Type: Manual (Include Bootstrap 3 from the skin or page settings if needed.) |
| Search Input | Include Bootstrap | 1.19 | 1.20 |  | Our policy is that it’s the Page or the Skin responsibility to load the correct version of Bootstrap<br/><br/><br/>Migration Type: Manual (Include Bootstrap 3 from the skin or page settings if needed.) |
| Tabs | Collapsible | 1.19 | 1.20 |  | Collapsed tabs provide poor indication that they are tabs. The first tab will always be open unless another tab is active.<br/><br/><br/>Migration Type: Manual (Tabs and accordions always initialize open. The behavior is still possible through Javascript.) |
| Tabs | Full Width Tabs | 1.19 | 1.20 |  | Full width tabs loose the appearance of being tabs, resulting in confusing UI.<br/><br/><br/>Migration Type: Manual (The behavior is still possible through Javascript.) |
| Tabs | Maximum number of tabs | 1.19 | 1.20 |  | Feature not being used or providing value to users.<br/><br/><br/>Migration Type: Manual (The behavior is still possible through Javascript.) |
| Tabs | Open on Action | 1.19 | 1.20 |  | Opening tabs on hover provides poor UX experience.<br/><br/><br/>Migration Type: Manual (Tabs now open on click only. The hover option has been removed. The behavior is still possible through Javascript.) |
| Tabs | Show Empty Tabs | 1.19 | 1.20 |  | The only reason tabs can be empty if for example the user doesn't have permissions to any of the modules contained in the tab. Clicking an empty tab shows nothing, resulting in poor UX.<br/><br/><br/>Migration Type: Manual (Empty tabs will never be shown. The behavior is still possible through Javascript.) |
| Tabs | Show When Fully Loaded | 1.19 | 1.20 |  | This was a setting that ensured compatibility with some legacy modules that would depend on a particular DOM structure.<br/><br/><br/>Migration Type: Manual (The behavior is still possible through Javascript.) |
| Tabs | Use Module Title | 1.19 | 1.20 |  | Ths feature ensured that on export/import, modules would be matched by their title. Switching to a unique ID format.<br/><br/><br/>Migration Type: Automated (Import/Export will work much more precisely with the unique ID mechanism.) |


Source: [Obsolete Features / For Publication](https://docs.google.com/spreadsheets/d/1FuQ3BblHKnxbZpID_RE1U7p0ORT6E0v-SgiZAdCyz2c/edit#gid=1903251172) revised 2022 0309, drw.