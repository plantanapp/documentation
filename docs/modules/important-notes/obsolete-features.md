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
