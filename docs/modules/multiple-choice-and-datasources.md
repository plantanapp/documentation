---
id: multiple-choice-and-datasources
title: Multiple Choice and Datasources
sidebar_label: Multiple Choice and Datasources
---

This is closed-ended field type where the user can select one or more values from a presented list. You can select from a long list of field types and you can also select where the field pulls its data from (its **datasource**).

## **Datasources** for Multiple Choice fields

The power and flexibility of a Multiple Choice Field comes from **the various items it can display** and **where those items can be taken from** (the source of the data - or "*datasource*").

### Usage and Syntax

Even though they each have their own particularities, all datasources share a common syntax. As such, all datasources should contain:

 - A label or `Text` - what is displayed in the field and shown to the user.
 - A `Value` - the value of the field in the background, which is optional; in case the *Value* is missing (i.e. not specified), it will take the value of Text element.

On the back-end, the *Text* and *Value* of a Multiple Choice Field can be addressed by using the `[field_name:Text]` and `[field_name:Value]` syntax. The `[field_name]` syntax can also be used and normally references the value of the field, but it is in a more human-readable format like csv instead of JSON array for the multiplechoice with checkboxes field.

The Multiple Choice Fields that are available in the `Form Builder` share a series of datasources such as (but not limited to):

- **Portal/Admin/Host** - take data from your Plant an App pages

- **Portals/Modules/Roles/Containers** - take data from your respective Plant an App objects
  
- **TimeZone list**
  
- **Year range**

- **Items** - this is the datasource type that allows you to manually type the items that will show in the multiple choice field.

Examples of how valid datasource for the *Items* datasource type will look like:

        1</br>2</br>3
↳ when the text display item and its value are the same (`1`, `2`, `3`)

        One|1</br>Two|2</br>Three|3
↳ when the text display item ("`One`", "`Two`", "`Three`") is different to the value (`1`, `2`, `3`), text and value are separated by a pipe symbol "|"

- **API Endpoint Method Datasource** - this datasource type allows you to use a local <a href="https://learn.plantanapp.com/docs/category/apis" target="_blank">API Endpoint Method</a> as source of data for your multiple choice fields.

- An **SQL Query** - when using an *SQL Select* as a datasource for a Multiple Choice field, the columns selected will be automatically assigned as follows (unless otherwise specified in the SQL Query):

   - the first column represents the *Text* (what is shown to the user)
   - the second column represents the *Value* (the back-end value of the field)

This is how a valid datasource for the *SQL Query* datasource type will look like:

| `SELECT Username FROM Table` | `SELECT Username,Id FROM Table` |
| ----- | --------------------------- |
|When the displayed item and the actual value behind it are the same ("`Username`")|When the you want to display a different value ("`Username`") to the actual value behind it ("`Id`")|

The "`SELECT Username,Id FROM Table`" will generally result in the `Username` being the *Text* and the `Id` being the *Value*. This can be overridden by specifying which one is the Text and which one is the Value as follows: `SELECT Username as Value,Id as Text FROM Table`.

- **Server request (JSON)** - this is an advanced datasource type that allows you to use an API, either internal (your own, built within the Plant an App <a href="https://learn.plantanapp.com/docs/apis/api-overview" target="_blank">**APIs section**</a>) or external (third party, from any [webservice](https://en.wikipedia.org/wiki/Web_API) you might want to integrate with).

To be usable, the output of the API should be a valid JSON list (an array of objects) such as:

1. A simple array:

        [{
        "UserId": "8",
        "FirstName": "Name1"
        }, {
        "UserId": "5",
        "FirstName": "SomeName"
        }]

2. An array that is a value of one of the JSON parameters, situation in which you will need to provide the correct JSON path to the array ("`$.results`" or "`results`"):

        {
        "timestamp": "19:55",
        "date": "2022-11-20",
        "results": "[{\"UserId\":\"8\",\"FirstName\":\"Name1\"},    {\"UserId\":\"5\",\"FirstName\":\"SomeName\"}]"
        }

As for all datasources, the `Server Request` datasource is also based on a "`Text`|`Value`" system for which you will have to name the JSON properties as "Text/Value" or specify in the multiple choice field settings which JSON property to be used as Text and which one to be used as Value (see example above).

<br /><br /><a href="#top">Back to the top &#10548;</a>