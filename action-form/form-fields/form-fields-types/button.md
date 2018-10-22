---
layout: default
---

# Button

A control that executes your custom action in response to user interactions. When you press a button, it performs any actions attached to it. You communicate the purpose of a button using a text label, an icon, an image, or both. The appearance of buttons is configurable, so you can tint buttons or format titles to match the design of your app.

## Button’s settings:

* **Causes Validation**

  * This determines whether the form will be validated when the button is clicked. Usually you'll want this option "on" for Submit buttons and "off" for cancel buttons.

  * Disable it when you define a list of actions to be executed when validation fails, On Validation Failed.

* **Default button**

  * This determines the default button when submitting the form using the Enter key.

* Button Size

  * Size the button appropriately for your content, such as: mini, small, normal, large.

* Button Type

  * The Bootstrap provides different styles of buttons, such as: 

  ![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_11-03-33.png)

* Button Align

  * Determines the alignment of the button \(full width, left, center, right \). By default, it will align with the controls.

* Button Icon

  * Use [font awesome version 4.7 classes](//fontawesome.io/icons/) to label the button with icons. \(fa-\*shortcode\*\). You can also use "pull-left" and "pull-right" bootstrap classes to modify the position of the icon \(not supported on firefox\).
  * ![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_11-11-47.png)

* Connected Forms 

  * You can use this setting to connect other Action Form modules \(from the same page\) and submit them together.

  * The actions from the current button will be executed, and you will have access to fields from the other forms using the following token: \[&lt;FormName&gt;:&lt;FieldID&gt;\]. 

    **Note:** The connected forms field tokens will not be available in the On Change/Click section.

    **Note: **The submitted values will not be saved in Reports.

  ![](https://puu.sh/xOcD3/200247e827.png)

* On Click Handler

  * Connect one or more actions to the button. See the [Form Actions](/form-actions.md) chapter.
