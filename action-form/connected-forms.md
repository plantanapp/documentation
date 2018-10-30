# Connected Forms

Starting with version 5, Action Form includes a new feature that will allow you to **submit multiple forms at once**. 

> All form modules need to be on the same page

You can basically add two or more Action Form modules to a page and use the Submit button on the last form to submit data coming from all of the others.

In order to do that, the Submit button on the last form needs to have at least one form module specified in the __*Connected Forms*__ area (as seen below). 
![Connected Forms](https://static.dnnsharp.com/documentation/connected_forms.png "Connected Forms")

All field values from the connected forms can be accessed only on the submit button by using the following token: ```[form_name:field_id]```; they are not available in the on change/click area of any field outside of their _"source"_ form.