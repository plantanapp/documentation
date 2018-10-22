# Trumbowyg

Trumbowyg is a lightweight jQuery plugin used to transform a textarea into a HTML Editor. With the purpose to be a WYSIWYG editor, this plugin have less than 30kb and delivers very good tools, such as lists, font-sizes, alignment, images, links, etc... all of this with a clean design and great performance.

## Initial Value

The fields loads initially having this value. Supports [My Tokens](/my-tokens/index.html) so you can pull data from various sources such as user profile.

## Image Manager Field

The selected image manager will be opened in a popup where you can upload or select images. A new 'upload' button will be added at the end of the button list. You can change it's location by specifying it yourself in the **Buttons** parameter.

## Buttons

Input buttons, button groups or button dropdowns(defined below) in the order that you want them to appear in the editor, you can split items with pipe '\|' to form groups and inside the groups you can use comma ',' to sepparate buttons. For more information you can use the [Trumbowyg documentation.](https://alex-d.github.io/Trumbowyg/documentation.html#button-pane){:target="_blank"}

## Language

Select the language for the button titles. Default is English

## Button Groups

Name: Group Name \| Value: Input the codes of the buttons sepparated by one space.

## Button Dropdowns

Create new button dropdowns to use in the 'Buttons' list

#### Semantic

Generates a better, more semantic oriented HTML (i.e. `em` instead of `i`, `strong` intsead of `b`, etc.).

#### Dark theme

Changes the color scheme to black

#### Save to Report

The field will be saved in Reports.

#### Allow Tokens

When this option is on, Action Form will replace tokens in input submitted by users.
