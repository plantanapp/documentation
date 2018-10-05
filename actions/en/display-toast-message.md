## Display Toast Message

This action displays a simple notification/information to a user in a small popup. It only fills the amount of space required for the message to be displayed and the current activity remains visible and interactive. Toasts automatically disappear after a set timeout. What you can configure:

Heading - Optional heading to be shown on the toast. Supports My Tokens;

Message - the text contained by the Toast Message. Supports My Tokens;

Type - multiple types of messages: default, warning, success, error, info;

Background Color - the color of the displayed message \(eg. red \#00ff00 rgb\(0,0,255\)\). Each Type has a default background color, leave this option unset to use the default. Supports My Tokens.

Transition - it can be set on: fade, slide, plain;

Allow toast close - Enable \(x\) to close the toast at will;

Hide  \(with transition^\) after \(ms\) - time in which the toast will close automatically. Time is in milliseconds. Supports My Tokens;

Stack Length - 1 if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time. Supports My Tokens;

Toast Position -  it can be set on: bottom \(left, right, center\), top \(left, right, center\), middle center;

Text Alignment - it can be set on: left, right, center;

Show Loader - displays a progress bar;

Loader Color - the color of the progress bar \(eg. red \#00ff00 rgb\(0,0,255\)\). Supports My Tokens.

![](http://static.dnnsharp.com/documentation/DisplayToastMessage.jpg)

