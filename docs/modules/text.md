---
id: text
title: Text
sidebar_label: Text
---

A common and versatile field in creating Forms, the **`Text`** field has several options useful variations:

- [Currency](#currency)
- [Large Text](#large-text)
- [Number](#number)
- [Phone](#phone)
- [Rich Text Editor (`CKEditor`)](#rich-text-editor-ckeditor)
- [Rich Text Editor (`Trumbowyg`)](#rich-text-editor-trumbowyg)
- [Static Text](#static-text)
- [Text Box](#text-box)
- [Title](#title)
- [Currency **(Obsolete)**](#currency-obsolete)
- [Item with Quantity **(Obsolete)**](#item-with-quantity-obsolete)
- [Simple Rich Text **(Obsolete)**](#simple-rich-text-obsolete)

Note that only the field-specific parameters will be listed below. Please <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">see here</a> for a list of **common parameters** to all fields and <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-configuration-sections-bind-expressions-ui-settings-validation" target="_blank">here</a> for the **common configuration** elements to all fields.

## Currency

Allows the insertion of a single checkbox to the Form.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Amount* | The field will initialize with the value specified here. Supports Tokens so you can pull data from various sources. |
| *Initial Currency* | Choose the currency from the list. When more than one currency is specified, the field will initialize with the currency specified here. Supports Tokens so you can pull data from various sources. |
| *Currency symbol position* | `Before` of `After` the amount. |
| *Currency symbol* | Choose the currency symbol from: `Symbol`, `Narrow Symbol` and `Three Letter Code`. Supports Tokens. |
| *Precision* | Define how many decimal places are allowed. |
| *Number Format* | Choose where the regionalization currency format is recovered from: <li>`Browser`</li><li>`Portal`</li><li>`User Profile`</li><li>`Specific` (will allow you to defined it below)</li> |
| *Minimum Enforced Value* | Define what types of values are allowed (`Negative`, `Positive` or `Strictly Positive`).<br />When using the Expression button (to the right) the supported values are: '`negative`', '`positive`', '`strictlypositive`'. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |


## Large Text

A field that will hold large text input.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | Set the initial value that will be loaded to the text box. Supports Tokens so you can pull data from various sources such as user profile. Can also be left empty. |
| *Rows* | Number of text rows/lines allowed. |
| *Readonly* | Checking this box will make the hex color code box read-only; in other words, the color picking action can be achieved solely through the the visual canvas. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |
| *Allow Tokens* | If checked, will allow the use of tokens (the tokens entered by the users in the field will be replaced with their values). Use with care. |
| *Secure Input* | If checked, the text input will be HTML sanitized upon submit. Please see the following page for more information: <a href="https://learn.plantanapp.com/docs/modules/secure-input" target="_blank">Secure Input Option on Text Based Fields</a>. |


## Number

A field that allows the user to insert positive and negative numbers (not fractional) or zero.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | Set the initial value that will be loaded to the text box. |
| *Maximum Value* | Define the maximum value accepted (optional). |
| *Minimum Value* | Define the minimum value accepted (optional). |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |


## Phone

This field allows users to input a phone number while auto-detecting the country and showing its flag. Validation is integrated by default. On submit, it will generate the `[<FieldName>]` token (which yields the value).

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | Define the initial phone number that will show in the field (optional). Supports Tokens. |
| *Initial Country* | Set the initial, two letter country code (please [see here](https://countrycode.org/) for a full list). You will need to set this parameter only if you use the "Initial Value" (see above). This field supports Tokens.<br />Setting an initial country is required to remove the flag (see next parameter). A new checkbox will only appear after setting an initial country. |
| *Remove Flag* | If checked, the phone field will be displayed without the flags dropdown and the initial country code will be used. The fields load initially having an initial value. |
| *Preferred Countries* | The countries to be shown at the top of the country dropdown. Input comma-separated values (e.g., `UnitedKingdom;France;Germany`). This field supports Tokens. |
| *Placeholder Option* | Select an option for placeholder. |
| *International Mode* | Check this to enable "international mode", which shows the countries dial codes' in the input. Leaving this off provides a better experience for national sites. |
| *Validation* | Uncheck this option to disable phone field's own validation. |
| *Readonly* | Make the field read-only (non-editable). |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |


## Rich Text Editor (`CKEditor`)

Will display a [CKEditor](https://ckeditor.com/) editor field in the form. CKEditor is a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-type rich text editor which enables writing content directly inside of web pages or online applications.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | The CKEditor field will load initially with this value. Supports Tokens so you can pull data from various sources such as user profile. |
| *Iframe Min Height* | Set the min-height of the iframe in [px](https://www.w3.org/Style/Examples/007/units.en.html). Default value is: `250px`. Supports Tokens so you can pull data from various sources such as user profile. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |
| *Allow Tokens* | If checked, will allow the use of tokens (the tokens entered by the users in the field will be replaced with their values). Use with care. |
| *Secure Input* | If checked, the text input will be HTML sanitized upon submit. Please see the following page for more information: <a href="https://learn.plantanapp.com/docs/modules/secure-input" target="_blank">Secure Input Option on Text Based Fields</a>. |


## Rich Text Editor (`Trumbowyg`)

Will display a [Trumbowyg](https://alex-d.github.io/Trumbowyg/) editor field in the form. Trumbowyg is a lightweight [jQuery](https://jquery.com/) plugin used to transform a text area into an HTML Editor. A [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG)-type editor, this plugin is lightweight (less than 30kb in size) and includes powerful tools such as lists, font-sizes, alignment, images, links, etc. 

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | The Trumbowyg field will load initially with this value. Supports Tokens so you can pull data from various sources such as user profile. |
| *Image Manager Field* | The selected image manager will be opened in a popup window where the user will be able to upload or select images. A new '`Upload`' button will be added at the end of the button list. You can change its location by specifying it yourself in the "*Buttons*" parameter (see below). |
| *Buttons* |Input buttons, button groups or button dropdowns(defined below) in the order that you want them to appear in the editor, you can split items with pipe ‘|’ to form groups and inside the groups you can use comma ‘,’ to separate buttons. For more information, please see the [Trumbowyg documentation](https://alex-d.github.io/Trumbowyg/documentation/#button-pane). |
| *Language* | Select the language for the button titles (English is default). |
| *Button Groups* | You can group the buttons set above. Format:<br />Name: `<group name>`<br />Value: `<enter the buttons' codes sepparated by a space>`.|
| *Button Dropdowns* | Create new button dropdowns to use in the 'Buttons' list. For each, define its `Icon`, `Name`, and actions (`Buttons`). For more information, please see the [Trumbowyg documentation](https://alex-d.github.io/Trumbowyg/documentation/#button-pane).|
| *Semantic* | Generates a better, more semantic-oriented HTML syntax.<br />Examples: "`em`" instead of *`i`*, `strong` instead of *`b`*, etc. |
| *Dark theme* | Changes the color scheme of the editor to "Dark". |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |
| *Allow Tokens* | If checked, will allow the use of tokens (the tokens entered by the users in the field will be replaced with their values). Use with care. |
| *Remove Format Pasted Option* | When this option is active, the style will be automatically removed when a text is pasted into the editor. |
| *Tags to Remove Option* | If checked, allows you to sanitize the code by removing all the tags you want. Enter them in the field that appears, separated by a comma. |
| *Tags to Keep Option* | When this option is on, it allows you to keep the specified tags. Enter them in the field that appears, separated by a comma.<br />**Note**: this option is not compatible with the "Semantic" option (see above)! |
| *Secure Input* | If checked, the text input will be HTML sanitized upon submit. Please see the following page for more information: <a href="https://learn.plantanapp.com/docs/modules/secure-input" target="_blank">Secure Input Option on Text Based Fields</a>. |


## Static Text

Allows you to insert static text boxes to display text that cannot be modified by the users.

On submit, it will generate the following tokens: `[<FieldName>]` (which yields the value),` [<FieldName>:StartValue]`,` [<FieldName>:EndValue]`.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Content* | Type the text to be displayed. The field supports Tokens, so you can pull data from various sources such as user profile. |
| *Align* | Determines the alignment of the text (`Left`, `Center`, `Right`). |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |


## Text Box

A normal text box field that the users can type text into.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | The field loads initially having this value. Supports Tokens so you can pull data from various sources such as user profile. |
| *Autocomplete URL* | Provide an URL link that can feed autocomplete suggestions for this textbox.<br />-See the [**Note](#note) below for more information. |
| *Autofill Name* | You can select a value for the '`name`' attribute of the input. You can check Google's [web.dev form](https://web.dev/learn/forms/#recommended_input_name_and_autocomplete_attribute_values) documentation for more information. |
| *Autofill Attribute* | You can select a value for the '`autocomplete`' attribute of the input. You can check Google's [web.dev form](https://web.dev/learn/forms/#recommended_input_name_and_autocomplete_attribute_values) documentation for more information.  |
| *Mask* | Optionally, you can set a mask on a field. For example, if you want a certain phone number format, you can use a mask such as: `(000) 000-0000`.<br />The following mask definitions are predefined: <li>'`a`' - an alpha character (A-Z,a-z)</li><li>'`0`' - a numeric character (0-9)</li><li>'`*`' - an alphanumeric character (A-Z,a-z,0-9).</li>This field supports Tokens. |
| *Maximum Length* | Define a maximum text length (optional). |
| *Defer Request By* | Number of milliseconds to defer [Ajax request](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started). Defaults to: `300`.|
| *Confirmation Of* | If this is a 'textbox confirmation' field; select the textbox field that you wish to confirm here. |
| *Readonly* | Make the field read-only (non-editable). |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |
| *Allow Tokens* | If checked, will allow the use of tokens (the tokens entered by the users in the field will be replaced with their values). Use with care. |
| *Secure Input* | If checked, the text input will be HTML sanitized upon submit. Please see the following page for more information: <a href="https://learn.plantanapp.com/docs/modules/secure-input" target="_blank">Secure Input Option on Text Based Fields</a>. |
<!-- omit in toc -->
#### ****Note**

Use the "`{query}`" entry as a value where you want the typed text to go. Example:

    localhost/DesktopModules/DnnSharp/DnnApiEndpoint/Api.ashx?method=AutoComplete&SearchText={query}

The function also dynamically appends a query string key named "`query`" with the value you typed. That allows you to create GET APIs which receive only a "query" key and call them like in the following example:

    /DesktopModules/DnnSharp/DnnApiEndpoint/Api.ashx?method=AutoComplete<br /><br />

If you want to use the *value* returned by the API (rather than the *text*), use `form.fields.FieldID.data` in the <a href="https://learn.plantanapp.com/docs/current/modules/fields-overview-and-settings#common-configuration-sections-bind-expressions-ui-settings-validation" target="_blank">Bind Expressions section</a>. Do not forget to check for null values first! 

:::tip

If you would like to insert a page break into the front-end Title of a Text Box (or other field) in order to specify where the text breaks in the Title or have a sub-title for example, you can use the HTML break (`<br/>`) before the Title in order to insert an empty line above it.

You can also manage the text size (and CSS styles), under the <a href="https://learn.plantanapp.com/docs/current/modules/fields-overview-and-settings#common-configuration-sections-bind-expressions-ui-settings-validation" target="_blank">**UI Settings section**</a>.

:::


## Title

This field allows setting up a title with custom font size.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Size* | Set the desired title size. Available values range from `H1` (smallest) to `H7` (biggest). Defaults to: `H2`. |
| *Horizontal Line* | Check this box to display a horizontal line under the title. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |



## Currency **(Obsolete)**

:::note

This field type is obsolete and will be soon removed. Please use the [Currency](#currency) field instead.

:::


## Item with Quantity **(Obsolete)**

:::note

This field type is obsolete and will be soon removed. Please use one of the fields above instead.

:::


## Simple Rich Text **(Obsolete)**

:::note

This field type is obsolete and will be soon removed. Please use the [Rich Text Editor (CKEditor)](#rich-text-editor-ckeditor) or [Rich Text Editor (Trumbowyg)](#rich-text-editor-trumbowyg) instead.

:::

<br /><br /><a href="#top">Back to the top &#10548;</a>