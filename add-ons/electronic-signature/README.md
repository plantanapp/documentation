# Electronic Signature

![](assets/dnn-electronic-signature-add-on-300x388w.png)

## Getting Started


**Step 1 - Install Action Form if you don't have it installed yet**

**Step 2 - Install DNN Electronic Signature Add-on**

**Step 3 - Configure the form**

How to generate a Signature directly from the DNN portal:

* Create a form with a Touch Signature field and a button.
* Add an ID for the Touch Signature field.
* Add the Upload to Folder Path.
* Add a name for the PDF file to generate.

## Settings Reference

* Signature Name<br>
    The name of the signature file to generate. If left empty, a GUID will be generated for name. Illegal characters will be cut out from the name.<br>

    If the field receives a name that has already been used it will overwrite the previous signature.

* Generated File Destination<br>
    The destination directory on your portal.

    Please note that the field has a predefined width and height and it will fail to work properly if you try to change it from the UI Settings.

## Generated Tokens

Action Form automatically generates the following tokens:

* FileName<br>
    Return the name of the generated image

* AbsoluteUrl<br>
    Returns the absolute url of the generated image. This token is recommended when you use Generate PDF action, for example, when you have, let's say, a personal details form which needs a confirmation signature and you want that all those details to be send to the Accounting Department in a PDF file per each user who submits the form, you can build a PDF template with a custom text which can be typed into the HTML Code box of the Generate PDF action, and besides all this, in order to include the electronic signature you just have to click on Toggle HTML button and insert:
 
        <img src="[TouchSignature:AbsoluteUrl]" alt="Mountain View" style="width: 304px; height: 228px;">

    This tag helps in defining the image where the electronic signature will be displayed and by using the token you can dynamically set the URL to  the file where the signature was uploaded, the other values, the width and height, can be modified.

    Next thing to do is to define the location of the Generated File Destination and to Store the Absolute URL - this value will be used as token in our next action, Send Email.

    Once the Store the Absolute URL is defined, you can add the Send Email action where you have to set the email address where you want to send the email to, the Body of the email, the subject etc. and the most important aspect, in order to attach the PDF file to the email, you have to call the token previously stored into the Store the Absolute URL box.  

* RelativeUrl<br>
    Returns the relative url of the generated image. This token is a little tricky, since we talk about relative URL, it will work with one condition, in order for the image file to be found when you call it into the Generate PDF action, the tag you need to use is:  

        <img src="http://www.test.com[TouchSignature:RelativeUrl]" alt="Mountain View" style="width: 304px; height: 228px;">

    Once Relative URL is set as token, you have to define the absolute path in order to know where to go to search the image file. 

* FilePath<br>
    Returns the file path of the server of the generated image. This token is recommended when you use the Send Email action.

* PortalPath<br>
    Returns the portal path of the generated image.
See it in action!
Don’t waste another second reading this stuff, click play and see how we do it! ^_^

<iframe width="640" height="360" src="https://www.youtube.com/embed/OOGTwXTCbI8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>