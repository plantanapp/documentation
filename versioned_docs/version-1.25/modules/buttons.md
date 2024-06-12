---
id: buttons
title: Buttons
sidebar_label: Buttons
---

Buttons are a special field type. Their distinctive feature is the ability to select and define specific actions to be executed when they are clicked on via the "`On Click Handler`" list (see sections below).

The buttons section of fields has four options: 
- [**Button**](#button) - a control that executes your custom action in response to user interactions
- [**Button Group**](#button-group) - same as the "Button", but useful when you have multiple buttons and need to align them together
- [**Image Button**](#image-button) - a button with an image instead of a text label
- [**Saving Animation**](#saving-animation) - allows you to define an animation to be displayed during the saving process

## Button

When pressed, it performs any actions attached to it. You communicate the purpose of a button using a text label, an icon, an image, or both. The appearance of buttons is configurable, so you can tint buttons or format titles to match the design of your app.

- At the configuration level, this button also has <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">default parameters</a>.

- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Causes Validation* | This option determines whether the form will be validated when the button is clicked. Usually you will want this option active for "Submit"-type buttons and inactive for "Cancel"-type buttons.<br />Disable it when you define a list of actions to be executed when validation fails - "On Validation Failed". |
| *Default Button* | If checked, will make this button the default one when submitting the form by pressing the "Enter" key.|
| *Button Size* | Size the appropriate button size for your content: `Mini`, `Small`, `Normal`, `Large`. |
| *Button Type* | Sets the style for the button: `Primary`, `Info`, `Success`, `Warning`, `Danger`, `Link`. The style is defined by the Bootstrap version; for Bootstrap 5, please [see here](https://getbootstrap.com/docs/5.3/components/buttons/#examples) for various samples.|
| *Button Align* | Determines the alignment of the button: `Full Width`, `Left`, `Center`, `Right`. By default, it will align with the controls. The style is defined by the Bootstrap version; for Bootstrap 5, please [see here](https://getbootstrap.com/docs/5.3/components/buttons/#examples) for various samples. |
| *Button Icon* | Uses [Font Awesome version 6.2](https://fontawesome.com/docs/web/style/styling) classes to label the button with icons. You can choose from four different styles: <li>Solid `(fas)`</li><li>Regular `(far)`</li><li>Light `(fal)`</li><li>Brands `(fab)`</li><br />Example: `(fas fa-*shortcode*)`.<br />You can also use ["`float`" Bootstrap classes](https://getbootstrap.com/docs/5.0/utilities/float/) to modify the position of the icon (this not supported on Firefox). |
| *Button Message While Executing Actions* | Select if the message displayed while Actions are being executed should be retrieved from the <a href="https://learn.plantanapp.com/docs/modules/converting-from-bs3-to-bs5#what-is-localization-and-how-is-it-used" target="_blank">Localization section</a>, or define a "Button Custom Message" below. |
| *Connected Forms* |You can use this setting to connect other Form modules (from the same page) and submit them together. The actions from the current button will be executed, and you will have access to fields from the other forms using the following token: `[<FormName>:<FieldID>]`.<br /><br />*Note*: The connected forms field tokens will not be available in the "On Change/Click" section and the submitted values will not be saved in Reports. |
| *On Click Handler* | Connect one or more actions to the button. Please see the <a href="https://learn.plantanapp.com/docs/category/actions" target="_blank">Actions section</a> for a full list.|


## Button Group

The Button Group field can be used when you have multiple buttons and need to align them together on the front end for aesthetics reasons.

- At the configuration level, this button also has <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">default parameters</a>.

- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Button Align* | Determines the alignment of the buttons: `Left`, `Center`, `Right`. |
| *Buttons* | Tap the `Add` button and choose the desired buttons from the displayed buttons list. |


## Image Button

Displays a button with an image (instead of a text label) that can be pressed or clicked by the user.

- At the configuration level, this button also has <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">default parameters</a>.

- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Show In* | <li>Form</li><li>Buttons Pane - if toggled, this button may also appear in the Display Message action.</li> |
| *Image URL* | The image on the surface of the button is defined by the appended URL. |
| *Button Align* | Determines the alignment of the button: `Full Width`, `Left`, `Center`, `Right`. By default, it will align with the controls. The style is defined by the Bootstrap version; for Bootstrap 5, please [see here](https://getbootstrap.com/docs/5.3/components/buttons/#examples) for various samples. |
| *On Click Handler* | Connect one or more actions to the button. Please see the <a href="https://learn.plantanapp.com/docs/category/actions" target="_blank">Actions section</a> for a full list.|


## Saving Animation

Allows you to define an animation to be displayed during the saving process.

- At the configuration level, this field also has <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">default parameters</a>.

:::note

Although it is listed as a `Button`, the "Saving Animation" should be considered a `Field`. As such, please make sure you add a [button](#button) to link it to.

:::


- Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Image* | Select the animation style from the dropdown list. |
| *Stretch Horizontally* | Turn on this option to have the progress bar animation stretch horizontally to occupy full available width. |


<br /><br /><a href="#top">Back to the top &#10548;</a>