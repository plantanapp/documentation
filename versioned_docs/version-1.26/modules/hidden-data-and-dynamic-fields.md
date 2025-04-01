---
id: hidden-data-and-dynamic-fields
title: Hidden Data and Dynamic Fields
sidebar_label: Hidden Data and Dynamic Fields
---

This type of field allows you to manipulate data that is not shown on the Form directly.

Hidden data fields are similar to text fields, but are not displayed by the client (browser) and as such, do not show on the page. Since the user/page visitor is unable to type into these fields, they are used to submit information that is not supposed to be entered by the latter.

:::info

While "Hidden fields" are invisible by default, they will show up if the user/page visitor selects the “View Source” option in the browser. Hidden fields are therefore meant just for passing information *to* and *from* forms transparently.

:::

This is an example of how the two hidden fields are stored and displayed in the source of the page:

    <div class="form-group"><input type="hidden" name="dnn1420HiddenFieldwithCustomValue" data-fieldid="420" data-af-field="HiddenFieldwithCustomValue" value="Image" data-ng-model="form.fields.HiddenFieldwithCustomValue.value" data-val="">

    </div><div class="form-group"><input type="hidden" name="dnn1420UserID" data-fieldid="421" data-af-field="UserID" value="3" data-ng-model="form.fields.UserID.value" data-val=""></div><div class="form-group"><div class=" col-sm-12"><img src="/example.jpg" class="">


## Dynamic Field Container

This is a container for adding the <a href="https://learn.plantanapp.com/docs/category/dynamic-fields" target="_blank">Dynamic Fields</a> from "**Actions**". Note that fields will copy the UI settings of this container, but you can append more UI settings in each dynamic field. The hierarchy of the fields depends on the order you add them in the actions.

This field will generate the following tokens:
- **`[<FieldName>:Json]`** - this will output the fields in this container as a JSON object, with the "key" being the `FieldId` and the "value" being `<Value>` of the field. For example:

        {“field1”:”value1”,”field2”:”value2”}

- **`[<FieldName>:QueryString]`** - will output the fields in this container in a "QueryString" format, meaning they will be joined by "`&`". For example:

        field1=value1&field2=value2&field3=value3

At the configuration level, this field type has just <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">default parameters</a>.


## Hidden Field with Custom Value

Allows you to pass a custom value into a hidden field.

At the configuration level, this field type has <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">default parameters</a>.

Specific parameters:

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | It is possible to select an initial value for this field; note that you can pull data for this parameter from various sources via <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |
| *Secure Input* |The value of the input will be [HTML sanitized](https://en.wikipedia.org/wiki/HTML_sanitization) upon submit. Please see the "<a href="https://learn.plantanapp.com/docs/modules/secure-input" target="_blank">Secure Input Option on Text Based Fields</a>" page for more information (enabled by default).|

## User ID

Allows you to pass a User ID as a value into a hidden field.

At the configuration level, this field type just <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">default parameters</a>.

| Field | Description and information |
| ----- | --------------------------- |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

<br /><br /><a href="#top">Back to the top &#10548;</a>