---
id: forms-fields-datasources
title: Forms - Fields Datasources
sidebar_label: Fields Datasources
---

Below is a descriptive list of the available Multiple Choice Fields in the `Form Builder` and their specific parameters. These fields allow for a multiple value selection from the user.

Note that only the field-specific parameters will be listed below. Please <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">see here</a> for a list of **common parameters** to all fields and <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-configuration-sections-bind-expressions-ui-settings-validation" target="_blank">here</a> for the **common configuration** elements to all fields.

## Dropdown with Checkboxes

This field adds a dropdown list which displays Items, each with its own Check Box.

It allows users to select values from a list. On submit, this field will generate the following tokens: `[<FieldName>]` (which yields the value), `[<FieldName>:Text]`, `[<FieldName>:Value]`, `[<FieldName>:JsonArray]`. Note that if your options don’t have a value (there’s nothing after the pipe character "\|" in the list), all will return the same value.

- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Disable Checkboxes* | Determines if the "<a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">Enable Conditionally</a>" property disables the button that opens the dropdown or all the checkboxes. |
| *Toggle Switch* | Check this to transform the checkbox into a toggle switch. |
| *Link To* | Link this to another multi-select field that, when changed, will cause this control to update with different items. For example, imagine a "Category" and "Subcategory" selection; when using this option, prefix each item below with the name of the parent category: “Value Of Parent Item/This Item”.<br />**Note**: when linking to another field and using the "`Items`" Data Source (see adjacent page), if any part of the text or value of the options in the field includes a forward slash ("` / `") character, that character must be escaped by using a back slash ("` \ `"). For example, if one of your items is "`Type of Answer/Yes/No/Maybe`", you should enter it in your items list as: "**`Type of Answer/Yes\/No\/Maybe`**" |
| *Datasource* | Choose from existing data sources (see adjacent page) or provide values into the field (one per line). If you need to provide different `Text` and `Value` items, separate them by a pipe ("\|"). Supports Tokens. |
| *Initially Checked* | Determines which of the check boxes are initially selected. Possible values are the ones from the Item list. Separate multiple values with semicolon ("`;`") characters. Supports Tokens so you can pull data from various sources such as a user profile. |
| *Maximum Number of Selections* | If checked, the user will be able to select this maximum number of checkboxes. Supports Tokens so you can pull data from various sources such as user profile. |
| *Count selections* | <li>*Checked* - The input will show the number of selected items.</li><li>*Unchecked* - The input will show the text of the selected items, separated by a comma.</li> |
| *Checkbox Group Legend* | Allows you to create an [HTML legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend) element.<br />**Note**: filling this field will enable the "Legend HTML" element which comes with specific CSS styles which you can customize in the <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-configuration-sections-bind-expressions-ui-settings-validation" target="_blank">UI Settings</a> section. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

## Checkbox List

Similar to the [Dropdown with Checkboxes](#dropdown-with-checkboxes), the difference being that all items are displayed directly in the form, not as a dropdown list.

- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Disable Checkboxes* | Determines if the "<a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">Enable Conditionally</a>" property disables the button that opens the dropdown or all the checkboxes. |
| *Toggle Switch* | Check this to transform the checkbox into a toggle switch. |
| *Link To* | Link this to another multi-select field that, when changed, will cause this control to update with different items. For example, imagine a "Category" and "Subcategory" selection; when using this option, prefix each item below with the name of the parent category: “Value Of Parent Item/This Item”.<br />**Note**: when linking to another field and using the "`Items`" Data Source (see adjacent page), if any part of the text or value of the options in the field includes a forward slash ("` / `") character, that character must be escaped by using a back slash ("` \ `"). For example, if one of your items is "`Type of Answer/Yes/No/Maybe`", you should enter it in your items list as: "**`Type of Answer/Yes\/No\/Maybe`**" |
| *Datasource* | Choose from existing data sources (see adjacent page) or provide values into the field (one per line). If you need to provide different `Text` and `Value` items, separate them by a pipe ("\|"). Supports Tokens. |
| *Initially Checked* | Determines which of the check boxes are initially selected. Possible values are the ones from the Item list. Separate multiple values with semicolon ("`;`") characters. Supports Tokens so you can pull data from various sources such as a user profile. |
| *Maximum Number of Selections* | If checked, the user will be able to select this maximum number of checkboxes. Supports Tokens so you can pull data from various sources such as user profile. |
| *Count selections* | <li>*Checked* - The input will show the number of selected items.</li><li>*Unchecked* - The input will show the text of the selected items, separated by a comma.</li> |
| *Checkbox Group Legend* | Allows you to create an [HTML legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend) element.<br />**Note**: filling this field will enable the "Legend HTML" element which comes with specific CSS styles which you can customize in the <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-configuration-sections-bind-expressions-ui-settings-validation" target="_blank">UI Settings</a> section. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |


## Agreement Links

Will popup one or more term agreement popups. Those can either lead to a specific URL or to a custom HTML element.

- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Content* | Allows you to either direct the user to specific pages hosting the agreements or create custom agreements in HTML via the included editor. |
| *Enforce reading terms* | By checking this all terms popups will be opened one by one and have to be agreed to before setting the checkbox to true. |
| *Word between links* | Define the text to be displayed between the agreement links. |
| *Popup Width* | Set the CSS modal width property of the popup, in percentage (px,%,em) |
| *Popup Height* | Set the CSS modal height property of the popup, in percentage (px,%,em) |
| *Popup Agree Button* | Set the "Agree" button text. If this value is empty the agree button will not be displayed. Supports Tokens so you can pull data from various sources such as user profile. |
| *Popup Disagree Button* | Set the "Disagree" button text. If this value is empty the agree button will not be displayed. Supports Tokens so you can pull data from various sources such as user profile. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |


## Group Radio Boxes

This field will group Multiple choice (with radio boxes) fields in order to make them act like a Radio Buttons Grid. This field will only render the selected Multiple choice fields as a grid by displaying each of them on a row and using the "`Item text`" (from the datasource) as the column title.

<img src="/img/radio_buttons_grid_layout.png" alt="radio_buttons_grid_layout.png" ></img>


:::note

**Limitations**:

- All fields need to have the same number of items (preferably the same datasource).
- Each element of the group (row) will be evenly split on the row by following the formula: container row width / (columns taken by title + number of items). For a label that takes 1 column and 3 radio buttons each of the elements (label or radio button) will take up 25% of the row (100/(1+3)).

:::

The functionality of each individual Multiple choice field will not be affected in any way; the selection for each field will still be stored in the token corresponding to the field itself, and not to the Group field. The Group field is just responsible with the visual modifications.

The number of columns taken by the label will decrease the remaining space available for the selectable items(radio buttons).

- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Add multiple choice fields* | Add the fields you want to make part of the grid. The order of the fields in the group is determined by the order in which they are added. |
| *Number Of Columns For Label* | Select how much space the label of the multiple choice fields should take (from `1` to `10`). |


## Sortable Input

Allows users to change the items’ position and manipulate them using a simple drag-and-drop action.

On submit, it will generate the following tokens: `[<FieldName>]` (which yields the value), `[<FieldName>:Text]`, and `[<FieldName>:Value]`.

- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Css Icon Class* | Uses [Font Awesome version 6.2](https://fontawesome.com/docs/web/style/styling) classes to label the button with icons. You can choose from four different styles: <li>Solid `(fas)`</li><li>Regular `(far)`</li><li>Light `(fal)`</li><li>Brands `(fab)`</li><br />Example: `(fas fa-*shortcode*)`.<br />You can also use ["`float`" Bootstrap classes](https://getbootstrap.com/docs/5.0/utilities/float/) to modify the position of the icon (this not supported on Firefox).  |
| *Icon Position* | Sets the alignment (left, right) of the icon. |
| *Datasource* | Choose from existing data sources (see adjacent page) or provide values into the field (one per line). If you need to provide different `Text` and `Value` items, separate them by a pipe ("\|"). Supports Tokens. |
| *Drag by icon only* | If checked, will only allow the drag-and-drop to be enabled via the icon (not the text).  |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |


## Tags Input

Allows users to type a list of keywords, with an autocomplete suggestion list being displayed while typing matching values.

On submit, it will generate a comma-delimited list of tag and the following tokens are available: `[<FieldName>]` (which yields the value), `[<FieldName>:Text]`, and `[<FieldName>:Value]`.

- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Datasource* | Choose from existing data sources (see adjacent page) or provide values into the field (one per line). If you need to provide different `Text` and `Value` items, separate them by a pipe ("\|"). Supports Tokens. |
| *Initial Tags* | Comma delimited list with tags to load into the control initially. Supports Tokens so you can pull data from various sources such as user profile. |
| *Limit Number of Tags* | This option limits the number of tags which a user is allowed to submit. Supports Tokens. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |


## Agree to Terms **(Obsolete)**

This field allows you to demand the user to consent to your terms or legal agreements by requiring some form of action, typically clicking the “Agree to Terms and Conditions” checkbox. A link is provided to your Terms of Service agreement page and the user must click a button marked “Terms and Conditions” to read them.

:::note

This field type is obsolete and will be soon removed. Please use [Agreement Links](#agreement-links) instead.

:::


## Agree to Terms PopUp **(Obsolete)**

This field allows you to demand the user to consent to your terms or legal agreements by requiring some form of action, typically clicking the “Agree to Terms and Conditions” checkbox. A link is provided to your Terms of Service agreement page, which will be opened in a PopUp. The user can access your Terms of Service agreement popup by clicking the button marked “Terms and Conditions”.

:::note

This field type is obsolete and will be soon removed. Please use [Agreement Links](#agreement-links) instead.

:::

## Yes/No (Radio boxes) **(Obsolete)**

This field allows the user to choose only one of two mutually exclusive options: Yes or No.

:::note

This field type is obsolete and will be soon removed. Please use [Group Radio Boxes](#group-radio-boxes) or Radio Boxes (under the "Single Choice" section) instead.

:::

## Yes/No/Maybe (Radio boxes) **(Obsolete)**

This field allows the user to choose only one of two mutually exclusive options: Yes, No or Maybe.

:::note

This field type is obsolete and will be soon removed. Please use [Group Radio Boxes](#group-radio-boxes) or Radio Boxes (under the "Single Choice" section) instead.

:::


<br /><br /><a href="#top">Back to the top of the page</a>