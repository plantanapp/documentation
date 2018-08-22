---
layout: default
---

# Display Mode

Usually, when a page contains the Action Form module, the created form is displayed as the page loads. This is the standard and most common way to display the forms. But sometimes you would want to display the form in a popup page when the user clicks on a link, or just display some text and redirect the user to a different page where the actual submission of the form will be made.

All these options are possible on <b>Action Form</b> module and are configured from the <b>Display Mode</b> option.

## Initialization Options

* <b>Initially Visible</b> - this option displays a static form.
* <b>In separate page</b> - selecting this option and linking the text to a web page will make the form to open in a separate page - when you click on the hypelink, you'll be redirected to another web page.
* <b>In Text</b> - displays the form on the same page it was added after you click on the hyperlink.
* <b>In Popup</b> - displays the form in a popup page.

You will need to specify one of these options to define how you want the form to appear when the user clicks on a link. By default, the form uses the first option - Initially Visible, so the form is displayed as a static form when the page loads.

You can access these options by clicking on the drop down box on the <b>Display Mode</b> option (<b>see the image below</b>).

![display-mode](/action-form/images/display-mode.png "display-mode")

## Initially Visible

This option is used renders the form while the page loads, this is the default display mode. To see how this option works, you can test it compared to the other Display Modes which open the form in another web page or replaces the text with the actual form when a link is clicked.

1. Select <b>Initially Visible</b> from the drop down box.
2. When you are done, click on <b>Save</b>.

When the form is completely saved, click on Back button and while the Manage Action Form page closes, you are returned to the main page. See example <a href="https://www.dnnsharp.com/dnn/modules/action-form-builder/demo/initially-visible">here.</a>

## In separate Page

The In <b>Separate Page</b> option will instruct Action Form to redirect to a new page for actual page submission. You can create a text that is the main content, which also contains a special link that will get replaced with the actual URL where the form is located.

![separate-page](/action-form/images/separate-page.png "separate-page")

1. Select the In <b>Separate Page</b> option from the <b>Show Form</b> drop down box.
2. Click on <b>Edit Templates</b>.

The drop down box opens the text box editor. It shows a sample text on which an URL is linked  - this will make the redirect to the form when the user clicks on the hyperlink.
You can edit this text and replace it with a description that best describes your action form. Make sure you keep the target link to [FormUrl] and if you do the HTML manually, set <i>href="[FormUrl]"</i>. Action Form will replace this token with the actual URL that triggers the form to appear.

When you are done, click on Save button. See an example <a href="https://www.dnnsharp.com/dnn/modules/action-form-builder/demo/in-separate-page"> here.</a>

## In Popup

The Popup option creates a modal JavaScript dialog box. It opens the form when the text link from the page is clicked and it also allows you to specify the width and the height of the dialog box.

The popup option includes the same steps as the In Text and Separate Page options. The only difference is made by the specifications for the width and height of the dialog box. The results are also similar to the In Text and Separate Page options, except that the popup effect and the size can vary for the form.

See an example <a href="https://www.dnnsharp.com/dnn/modules/action-form-builder/demo/in-popup">here.</a>

## In text

The In Text option comes with a default text, which can be changed, and which contains a link that when is clicked, the text hides and the form gets displayed instead of the text. This option could be very useful for when you have a page that is populated with a lot of content. In this way you can save space and make the page look great for the users.

The form on which the <b>In Text</b> option is applied, behaves quite similar to <b>Separate Page</b> option. The only difference is the target location, the Separate Page option opens the form on a new page, but the In Text option opens the form on the same page.  The steps necessary for setting the In Text option on a form are the same steps described and listed for the Separate Page option.

See an example <a href="https://www.dnnsharp.com/dnn/modules/action-form-builder/demo/in-text">here.</a>