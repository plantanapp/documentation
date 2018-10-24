# Layout

The Layout Screen of the Container Builder (showed in the image on the right) is used for positioning the module on the screen. Most of the setting are self explanatory but we'll cover each one along with sample usages.

![EC](\easy-container\assets\easy-container-settings-layout.png)

## Width and Height

These two properties determine the width and height of the entire container. If you want the module to take all available necessary space then you need to leave these empty.

If on the other hand you want to split the page in 2 or more column, you will set the width property in conjunction with float.

The height property is usually used in conjunction with overflow property described below.

## Overflow

This option determines what happens with the content that falls outside of the box. If the width and height are not specified  then the container will take all necessary space and this option will usually have no effect.

But if width or height is specified, use this option to hide, show or scroll content that doesn't fit. Auto is same as scroll except scrollbars will be visible only if needed (for scroll they're always visible even if the content fits).

This option is mostly used in conjunction with height when when you have a static place to fit dynamic or long content.

## Position

There are several different types of positioning browsers support, each serving specific purposes:

* **static** - this is the default, elements flow on the page normally; left, right, top, bottom make no sense
* **absolute** - element is place at absolute coordinates specified through left, right, top and bottom properties
* **relative** - same as above except elements are positioned relative to previous element
* **fixed** - similar to absolute except the element stay at fixed location on the screen even when the page scrolls

Please note that when you set **fixed** position on a module, it will not be editable anymore, because the container falls outside of the page. Browsers do not apply scroll for fixed styles, so you must be careful to set the top property correctly so the module fits into view.

Other **note** we'd like to make here, is that the Left/right and top/bottom options are mutually exclusive. In CSS, if you choose to position something relative to the left element, it's not possible to always make it relative to the right element because the width stays fixed. Same goes for top/bottom.

## Float (or how to create columns)

Floats are the accepted method for stacking elements horizontally one next to another. Use this option in conjunction with width to create columns. For example, to create a page with 3 columns set each container to float left and set each one width to 1/3 of the total available width (actually, you'd probably have to make it less than 1/3 to account for other margins and paddings).

After some floated containers you need to put a clear both container, so the next container on the page will start from next available left-most line. It's also possible to only clear float from one direction, but this is something you will need only in most advanced scenarios.

You have to experiment with floats and clears to better understand them. They are the foundation to define layout of every modern HTML page.

## Margin

The margin clears an area around an element (outside the border). The margin does not have a background color, and is completely transparent.

You'll use this to create space between containers and other page elements. Otherwise, the containers will appear glued to the nearby elements.

## Padding

The padding clears an area around the content (inside the border) of an element. The padding is affected by the background of the element.

You'll use padding to create space between container border and inner elements such as the title bar or the content pane. 
