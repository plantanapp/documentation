---
id: obsolete-features
title: Obsolete Features
sidebar_label: Obsolete Features
---

| Area | Feature | Obsolete in | Target remove version | Removed in Version | Reason |
| ---- | ------- | ----------- | --------------------- | ------------------ | ------ |
| Listing | Form Builder | 1.18 | 1.20 |  | Form Builder is a clone of Action Form. The code has been unmaintained for many years, and fell behind. It's also inefficient, as we're loading a form for each row in the listing, which becomes very slow. |
| Form | jQuery UI Datepicker | - | 1.18 | 1.18 | jQuery UI has been an obsolete technology for many years and looks very outdated |
| Form | Background images&patterns | 1.18 | 1.20 |  | The same can be done from CSS/page skin and shouldn't be a concern of the form. |
| Form | Left/Right Sidebar | 1.18 | 1.20 |  | The same can be done from page building with much more flexibility. |
| Form | NetCash BankAccount Group Validator | - | 1.18 | 1.18 | A validator no longer in use. |
| Actions | Execute Token | 1.18 | 1.20 |  | Same functionality as "Create/Update Token" |
| Actions | Inject Data | 1.18 | 1.20 |  | Same functionality as "Create/Update Token" |
| Actions | Create List from CSV File | - | 1.20 |  | Replaced by the more flexible Create List from CSV action |
| Actions | Update User Profile | - | 1.20 |  | Use the non-obsolete action with the same name. |
| Actions | User Registration | - | 1.20 |  | Use the non-obsolete action with the same name. |
| Form | XML configs for input fields are obsolete. They will be automatically converted to JSON config files in 1.19. | 1.18 | 1.19 |  | We've transitioned all our config files to work exclusively with JSON format. Input Types is one of the few places that still support XML and this code will be soon modernized. |
| Form Fields | Pages from Current Portal | 1.18 | 1.20 |  | This field was a dropdown preconfigured with the Pages data source. |
| Form Fields | Portals (except portal 0) | 1.18 | 1.20 |  | This field was a dropdown preconfigured with the Portals data source. |
| Form Fields | Portals Dropdown (all) | 1.18 | 1.20 |  | This field was a dropdown preconfigured with the Portals data source. |
| Form Fields | Agree to Terms | 1.18 | 1.20 |  | Replaced by the much more flexible Agreement Links |
| Form Fields | Agree to Terms PopUp | 1.18 | 1.20 |  | Replaced by the much more flexible Agreement Links |
| Form Fields | Yes/No (Radio boxes) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes |
| Form Fields | Yes/No/Maybe (Radio Boxes) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes |
| Form Fields | Likert Scale (Agree/Disagree) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes |
| Form Fields | Likert Scale (Frequency) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes |
| Form Fields | Likert Scale (Importance) | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes |
| Form Fields | Item with Quantity | 1.18 | 1.20 |  | This field was just a preconfigured list of radio boxes |
| Form Fields | Simple Rich Text | 1.18 | 1.20 |  | Replaced by the 2 much modern rich text editors (CK Editor and Trumbowyg) |
| Listing | Loading animation covers | 1.19 | 1.20 |  | Covering the entire page creates usability issues. The loader will always only cover that data part. |
| Listing | Bootstrap Glyphicons | 1.19 | 1.20 |  | Bootstrap Glyphicons lost in popularity compared to other icon frameworks, such as Font Awesome that we widely support. |
| Add-ons | Salesforce, OpenID, DynamicCRM & UIPath available only with Enterprise license | 1.19 | 1.20 |  | Separating the add-ons targeted for enterprise setups. |
| Form | Include Bootstrap | 1.19 | 1.20 |  | Our policy is that it’s the Page or the Skin responsibility to load the correct version of Bootstrap |
| Listing | Include Bootstrap | 1.19 | 1.20 |  | Our policy is that it’s the Page or the Skin responsibility to load the correct version of Bootstrap |
| NavXp | Include Bootstrap | 1.19 | 1.20 |  | Our policy is that it’s the Page or the Skin responsibility to load the correct version of Bootstrap |
| Search Input | Include Bootstrap | 1.19 | 1.20 |  | Our policy is that it’s the Page or the Skin responsibility to load the correct version of Bootstrap |
| Infobox | Include Bootstrap | 1.19 | 1.19 |  | BREAKING CHANGE<br/>Infobox no longer includes bootstrap 3 as it's causing issues when working with pages that use other versions. |
| Form | NoCss template | 1.19 | 1.20 |  | NoCss is based on BS3 and has limited use cases. |
| Tabs | Show Empty Tabs | 1.19 | 1.20 |  | The only reason tabs can be empty is if for example, the user doesn't have permissions to any of the modules contained in the tab. Clicking an empty tab shows nothing, resulting in poor UX. |
| Tabs | Collapsible | 1.19 | 1.20 |  | Collapsed tabs provide a poor indication that they are tabs. The first tab will always be open unless another tab is active. |
| Tabs | Open on Action | 1.19 | 1.20 |  | Opening tabs on hover provides a poor UX experience. |
| Tabs | Show When Fully Loaded | 1.19 | 1.20 |  | This was a setting that ensured compatibility with some legacy modules that would depend on a particular DOM structure. |
| Tabs | Maximum number of tabs | 1.19 | 1.20 |  | Feature not being used or providing value to users. |
| Tabs | Full Width Tabs | 1.19 | 1.20 |  | Full-width tabs lose the appearance of being tabs, resulting in confusing UI. |
| Tabs | Use Module Title | 1.19 | 1.20 |  | This feature ensured that on export/import, modules would be matched by their title. Switching to a unique ID format. |
| Form Fields | User ID | 1.19 | 1.20 |  | This field just transported the UserId to the front end in a hidden field. The same behavior can be achieved by using directly the hidden field. |
