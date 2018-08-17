# Hidden Data

**Hidden fields** are similar to text fields, with one very important difference!

The difference is that the hidden field does not show on the page. Therefore the visitor can't type anything into a hidden field, which leads to the purpose of the field:

To submit information that is not entered by the user.

* **Hidden Field with Custom Value**

* **User ID**

Hidden fields allow you to store "hidden" information within a form. These fields are not displayed by the client. However, if the user selects the "View Source" option in the browser, the entire form is visible, including the hidden fields. Hidden fields are therefore meant just for passing information to and from forms transparently.

This is an example of how the two hidden fields are stored and displayed in the source of the page:

`<div class="form-group"><input type="hidden" name="dnn1420HiddenFieldwithCustomValue" data-fieldid="420" data-af-field="HiddenFieldwithCustomValue" value="Image" data-ng-model="form.fields.HiddenFieldwithCustomValue.value" data-val="{{ form.fields.HiddenFieldwithCustomValue.value }}">`

`</div><div class="form-group"><input type="hidden" name="dnn1420UserID" data-fieldid="421" data-af-field="UserID" value="3" data-ng-model="form.fields.UserID.value" data-val="{{ form.fields.UserID.value }}"></div><div class="form-group"><div class=" col-sm-12"><img src="/example.jpg" class="">`

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_18-16-51.png)



