---
layout: default
---

# Proprieties

![prop1](/action-grid/buttons/assets/prop1.png)
![prop2](/action-grid/buttons/assets/prop2.png)

## Title

The title that appears on the button. Leave empty to show icon only.

## Help

Optionally, provide a help text for this button.

## Condition

This boolean expression is used to determine if this button will show. Use it to show or hide buttons programatically. A common example is [HasRole:Administrators\|true] (which requires My Token to work). This field supports My Tokens and ActionGrid Fields.

## Style

The title that appears on the button. Leave empty to show icon only.

## Css Class

Custom css class for button

## Font Awesome Icon Css Class

Use font awesome version 4.7 classes to label the button with icons. (fa-*shortcode*). You can also use "pull-left" and "pull-right" bootstrap classes to modify the position of the icon (not supported on firefox).

## Bootstrap Glyphicons

Pick a column and by default a number will appear on the button next to the title that represents the sum of the selected cells. You can also change the selection mode to sum all of the columns if no rows are selected. Supports My Tokens

## Ask For Confirmation

If enabled, Action Grid asks for user confirmation before executing the actions.

## Select which users have permission to use this button

Here you can select which user can use this button.

## Client Button

If enabled, the button will execute only client side actions. These actions will execute instantly, without an extra ajax server request.
WARNING: All server side actions from the button will be deleted upon saving.

## Actions

These actions are executed once for every item that was selected by the user. Returing a reponse, such as a message or a redirect, will have no effect in this scope.
Reference fields values using the token syntax, for example *[FieldId]*.

## Javascript Code

In this context you have access to **settings** and **row**. Return false to prevent action execution.
