---
id: forms-settings
title: Forms - Settings
sidebar_label: Settings
---

This Forms section allows you to define advanced UI and compatibility parameters for your Form. See a list and detailed information about each of the parameters, below.

## `UI & Layout`

| Parameter | Description and information |
|---|---|
|*Template*|The template used to render the form. You have the choice between "[`Bootstrap 5`](https://getbootstrap.com/docs/5.0/getting-started/introduction/)" (recommended), "`Bootstrap 3`" (***obsolete, please use only if specifically required***) or "`Material`" (***obsolete, please use only if specifically required***) frameworks.|
|*Text Color*|Set text color (useful especially when changing the background color). Accepts <a href="https://en.wikipedia.org/wiki/Web_colors" target="_blank">hexadecimal color</a> codes.|
|*Padding*|Set a custom padding value. Padding is the space (in `px`, default unit in CSS) between an element's border and the element's content. Value applies to top, right, bottom, left.|
|*Label Align*|Set the label (field name) alignment.|
|*Label Width*|Set a custom label width (maximum 12 columns). Useful for very long or short labels.|
|*Floating Labels*|Activate this option to allow the label to minimize but remain visible above the field when entering the value. [See here](https://getbootstrap.com/docs/5.0/forms/floating-labels/#example) for an example. Applies only for `Text Box`, `Number`, `Email`, `Password` and `Large Text` fields.|
|*Field Spacing*|Set the spacing between field elements.|
|*Root CSS Classes*|Allows you to add custom CSS classes (attributes used to define a group of HTML elements in order to apply unique styling and formatting to those elements with CSS) to further refine the form display. You can load multiple such classes, separating them with a space. This field also supports Tokens.|
|*Manual Layout*|Check this option to activate a layout editor that allows you to write an HTML template for more complex scenarios. You can start building your layout from scratch or by clicking the "`START WITH A BOOTSTRAP LAYOUT`" button, case in which the fields and buttons already defined in the "**`Fields`**" section will be automatically inserted in the editor.|

:::caution

If you activate the *`Manual Layout`* option:
- Make sure that you keep the fields and buttons defined in the `Fields` section synced with your definition in the editor.
- The UI layout of the elements defined in the `Layout` section will be ignored (except for the width setting).

:::

## `Advanced Settings`

| Parameter | Description and information |
|---|---|
|*Show loading animation*|Check or uncheck to show or hide the CSS loading animation of `Forms`. If enabled, please define the `Loading Bars Color` ([HEX, RGB or RGBA](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) color code), `Loading Background Color` ([HEX, RGB or RGBA](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) color code) as well as a `Loading Text` (free text to be shown under the loading bars). Note that this setting is overwritten by the "`Use Tab loading animation`" (for the navigation between tabs) if active.|
|*Display Mode*|Allows you to choose whether this form appears initially on the page or if it should be opened when user clicks on a link. Select the display mode for the form between `Initially visible`, `In separate page`, `In Popup`, `In Text`, and `Manual`. Please see the subsection below for further details: [**`Display Mode`** specific settings](#display-mode-specific-settings). |
|*Embed*|Checking this option will provide you with an "Embed Code" that you can copy and thus insert this Form in other websites or pages. **Important note**: the popup functionality will not work in embedded form (i.e.: open `Form` in popup, open `fileManager` in popup). Please <a href="https://learn.plantanapp.com/docs/modules/important-notes/embed-form-or-grid/" target="_blank">see here</a> to learn more about common issues and limitations such as *Mixed Active Content* and *X-Frame-Options*.|
|*Show Form Condition*|Provide a boolean server expression (in [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language))) to dynamically determine either this form is visible. The expression can contain Tokens. Note that the form is ***always*** visible for portal administrators in "Edit Mode".|
|*Initialization scripts*|The editor allows you to include more scripts on the page along with this form. Access the form fields by using the `[FieldId]` syntax, which maps to the [.js object](https://developer.oracle.com/learn/technical-articles/what-is-javascript#chapter---------what-are-javascript-objects) "`form.fields.[FieldId].value`", so either form will work. This field supports Tokens. Note that the editor has a code validator included as well as a dark-mode switch on the upper-right corner.|
|*Enable Client Side Validation*|Uncheck this box to disable client side validation (i.e. the client will not show a validation error message) if you want to catch validation errors on the server and execute actions accordingly.|
|*Required Field Allows Whitespace*|Check to enable required fields to allow whitespaces as valid input. By default required fields won't consider whitespace as a valid input.|
|*Validate on "focusout"*|Check option to change the validation from `onKeyUp` (when the user releases a key) to `onFocusOut` (when the user leaves a form field).|
|*Show Tooltips*|Enable this option to show the `Short Description`'s (defined in the "**`Fields`**" section) content to be shown on screen while hovering over the field's Title.|
|*Show Tooltip Title*|Enable if you want to show the field's title (defined in the "**`Fields`**" section) in the tooltip. **Note**: this option will only be visible if the above "*Show Tooltips*" is enabled.|
|*Debug Mode*|Check this box to activate the debugging mode in the logs. This will be reflected in the `DnnSharp.ActionForm` category logs, under ***Configuration*** > ***Logs*** > ***System***. Make sure to activate this feature only when debugging. Otherwise, keep it unchecked (logs can get important in size).|
|*Enable Reports*|Saving reports on form submission is disabled by default. Note that if you keep it disabled, some features such as using Forms as a data source in <a href="https://learn.plantanapp.com/docs/actions/load-state" target="_blank">`Load State`</a> will not work properly, as they rely on reports (they will work only if you specifically use the <a href="https://learn.plantanapp.com/docs/actions/save-state" target="_blank">`Save state`</a> action). Actions that save reports such as <a href="https://learn.plantanapp.com/docs/actions/save-report-in-the-database" target="_blank">`Save state`</a> or <a href="https://learn.plantanapp.com/docs/actions/save-state" target="_blank">`Save Report`</a> will work regardless of this setting.|
|*Save to Report*|Click the "`Check All`" Enable this option to apply the Save to Report option for all form fields. **Note**: this option will only be visible if the above "*Enable Reports*" is enabled.|

### **`Display Mode`** specific settings

There are five modes from which to choose how your Form will be displayed in the main page. Each of them has specific settings and implications which are listed below.

1. `Initially visible` - Selecting this option will make your Form directly visible when the webpage is loaded.
   
2. `In separate page` - Will open you Form in a different browser page. Note how selecting this option also brings up an HTML editor to the screen: this allows you to further customize and refine the way that the form will be displayed. Also note that this setting will be overridden if by conflicting settings in superior layers (for example, if your Form is set to be shown in a popup window after clicking a button). This editor supports the use of Tokens. 
      
3. `In Popup` - Will display your Form in a popup window floating over your webpage. Please provide thw following parameters for the popup:
   - *`Popup Width`*: number units of the popup window width (see below). The accepted values will vary according to the unit.
   - *`Width Coordinate`*: unit in which the width is calculated. The variants are: "`px`" ([CSS pixel](https://drafts.csswg.org/css-values/#reference-pixel), 1/96 of an inch; max value will depend on the screen and resolution), "`%`" (*percentage*, or the percent size relative to the parent page's size; integer values from 1 to 100) and "`vw`" (*view width*: measure of the percentage of the width of visible screen. For example, 10vw is equivalent to occupying 10% of entire visible screen width).
   - *`Popup Name`*: The popup name displayed as its title. It can be used with the `dnnsf.api.actionForm.openPopupByName()` method. The field supports Tokens.

Note how selecting this option also brings up an HTML editor to the screen: this allows you to further customize and refine the way that the form will be displayed. This editor supports the use of Tokens.

4. `In Text` - With this option, the Form will be hidden behind a URL link that will show-up on the main page; clicking that link will bring up the Form. Note how selecting this option also brings up an HTML editor to the screen (if it does not, click the `Edit Template` button that appears): this allows you to further customize and refine the way that the form will be displayed. This editor supports the use of Tokens.

5. `Manual` - The Form display will be triggered externally. Note how selecting this option also brings up an HTML editor to the screen: this allows you to further customize and refine the way that the form will be displayed. This editor supports the use of Tokens.

You can also open the popup by calling the `dnnsf.api.actionForm.openPopupById("<ID of your form>")` or `dnnsf.api.actionForm.openPopupByName("<name of your popup>")` method from [javascript](https://en.wikipedia.org/wiki/JavaScript). 

Note that there are also other public APIs (usable in all modes except "`Initially visible`"): `closePopupById("<ID of your form>")` (to close the form modal), `initForm("<ID of your form>")` (to manually initialize the form on the page), `showFormInline("<ID of your form>")` (to open form in text mode) or `hideFormInline("<ID of your form>")` (to hide the form in text mode).

:::info

The "**ID of your form**" can be found at the top of the Form Builder, preceded by the "`#`" character (see also the ***Forms Overview*** > ***Form Builder sections*** page).

:::


## `Compatibility Settings`

Alter those settings if you encounter display compatibility issues.

| Parameter | Description and information |
|---|---|
|*Include Bootstrap*|⚠ This feature is obsolete and is now removed since version 1.20. Including the correct version of [Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)) becomes the page or the skin responsibility.|
|*Include FontAwesome*|Uncheck this option if you want to prevent [FontAwesome](https://fontawesome.com/) from being loaded on the page.|
|*Include AngularJS*|Uncheck this option if [Angular](https://angular.io/start) 1.3.0 or higher is already loaded on the page to avoid conflicts.|
|*Submit hidden fields*|Turn on this option to make the form submit all the fields, even if they are conditionally hidden (defined in the "**`Fields`**" section).|

<br /><br /><a href="#top">Back to the top &#10548;</a>