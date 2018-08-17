# Date And Time

This component consists of 2 subcomponent UI widgets: one for the date and one for the time selection process.

Allows users to select date and/or time. On submit, this field will generate the following tokens: \[&lt;FieldName&gt;\] \(which yields the value\), \[&lt;FieldName&gt;:Date\], \[&lt;FieldName&gt;Day\], \[&lt;FieldName&gt;:Month\], \[&lt;FieldName&gt;:Year\], \[&lt;FieldName&gt;:DayOfMonth\], \[&lt;FieldName&gt;:DayOfYear\], \[&lt;FieldName&gt;:Time\], \[&lt;FieldName&gt;:Hour\], \[&lt;FieldName&gt;:Minute\], \[&lt;FieldName&gt;:Iso\]

### Options

* DateTime Picker Type 
  * Date and Time
  * Date
  * Time
* DateTime Format

  * Optionally, provide a custom date/time format, the default format is _MM/dd/yyyy HH:mm_. Leave empty to take the server locale default format.

* Other Options for Datepicker \(JSON\)

  * Optionally provide a JSON object with other options to pass into the Date Picker options. For example, write _{ showWeeks: true }_, please check the [documentation](https://github.com/Gillardo/bootstrap-ui-datetime-picker).

  ![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_12-29-10.png)



