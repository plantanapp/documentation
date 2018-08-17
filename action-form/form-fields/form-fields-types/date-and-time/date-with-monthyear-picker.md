# Date \(with Month/Year Picker\)

Show month and year dropdowns in place of the static month/year header to facilitate navigation through large timeframes.

### Options:

* Initial Value

  * Determines which date is_ initially selected_. Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens) so you can pull data from various sources such as \[DateTime:Now\].

* Year Range

  * The range of years displayed in the year drop-down: either relative to today's year \("-nn:+nn"\), relative to the currently selected year \("c-nn:c+nn"\), absolute \("nnnn:nnnn"\), or combinations of these formats \("nnnn:-nn"\).

* Date Format

  * Optionally, provide a custom date format, for example _dd/mm/yy_. Leave empty to take the server locale default format.

* Other Options for jQuery UI Datepicker \(JSON\)

  * Optionally provide a JSON object with other options to pass into the jQuery Date Picker control. For example, write

    _{ beforeShowDay: $.datepicker.noWeekends }_ to disable selecting weekends.

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_12-00-31.png)

### Common JSON Examples:

* To disable the weekends from the date picker, write in the Other Options for jQuery UI Datepicker \(JSON\) field:

`{beforeShowDay: $.datepicker.noWeekends}`

* To enable days beginning with the system date:

`{minDate: 0}`

* To enable days between the system date and a certain date \(e.g. until the 25th of August 2014\):

`{minDate: -0,            
maxDate: '08/25/2014'}`

* To enable one month, starting with the current day, without weekends:

`{beforeShowDay: $.datepicker.noWeekends,`

`minDate: 0,`

`maxDate: 30}`

* To disable all dates except Sundays: \(Where 0=Sunday, 1=Monday ... 6 = Saturday\)

`{`

`beforeShowDay: function(date) {`

`var day = date.getDay();`

`return [(day == 0), ''];}`

`}`

