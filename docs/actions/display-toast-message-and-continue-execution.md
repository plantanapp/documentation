---
id: display-toast-message-and-continue-execution
title: Display Toast Message And Continue Execution
sidebar_label: Display Toast Message And Continue Execution
---

Available in: Form, Listing.

Requires: AFORM version above 3.9.261.

Requires: AGRID version above 4.1.330.


Displays a simple notification/information to a user in a small popup.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Heading | Optional heading to be shown on the toast. Supports My Tokens. | Yes | None |
| Message | The text contained by the Toast Message. Supports My Tokens. | Yes | None |
| Type | Type of toast. | No | default |
| Background Color | The color of the displayed message(eg. red #00ff00 rgb(0,0,255)). Each Type has a default background color, leave this option unset to use the default. Supports My Tokens. | Yes | None |
| Transition | Type of transition. | No | fade |
| Allow Toast Close | Enable (x) to close the toast at will. | No | None |
| Javascript | This javascript code will be executed on toast close. | No | None |
| Hide (with transition^) after (ms) | Time in which the toast will close automatically. Time is in milliseconds. Supports My Tokens | Yes | 1000 |
| Stack Length | 1 if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time. Supports My Tokens. | Yes | 1 |
| Toast Position | Positions on screen. | No | bottom-center |
| Text Alignment | Text Alignment. | No | left |
| Show Loader | Displays a progress bar. | No | None |
| Loader Color | The color of the progress bar (eg. red #00ff00 rgb(0,0,255)). Supports My Tokens. | Yes | None |
