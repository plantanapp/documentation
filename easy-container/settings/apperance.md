# Apperance

![ec](\easy-container\assets\easy-container-settings-overview-appearance.png)

The Appearance Tab controls what the container elements will look like. This includes the title bar, the content pane and the root container containing everything.

All elements have similar properties. Exception is the root container, which doesn't include a General section because there's no font for the root container (it's either the font of the title bar or the font of the content pane) and margin and padding were already specified on Layout screen. Instead, the Root Container contains the section for adding custom CSS Styles inside the **"Other CSS Styles"** tab's text area.

## Font

This section contains all the standard fields you'd find in any rich text application: font face, bold, italic, underline, all caps, letter spacing, align and color. Additionally, multi-line content also gets a line height property useful for controlling the space between lines. As additional info, if you want to enumerate more than one font you should use comma to separate the fonts.

## Margin

The margin clears an area around an element (outside the border). The margin does not have a background color, and is completely transparent.

You'll use this to create space between the current element and surrounding elements. Otherwise, nearby elements will appear glued one to another.

## Padding

The padding clears an area around the content (inside the border) of an element. The padding is affected by the background of the element.

You'll use padding to create space between content and the border.

## Background

This section allows specifying a color for drawing the background of the container, title bar or content pane. It also can be configured with a background image which can be either a full scaled image (in which case you'd set background repeat to none) or can be a pattern supposed to get repeated horizontally or vertically.

## Border

This option specified the border around the element (container, title bar or content pane). The border has a width, a color and a style. The style can be solid, dashed, dotted or double.
