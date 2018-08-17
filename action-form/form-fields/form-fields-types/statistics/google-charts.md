# Google Charts

###### Important! Google Chart only works when My Tokens is installed because of a bug that exists in standard DNN token replacement.

###### There are two possibilities to display a Google chart in Action Form:

* ###### with HTML - you need to copy the HTML code from the charts gallery: for example: [https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart](https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart) - and paste it into the HTML Code field;
* ###### with tokens as in the example bellow:

###### 1.create a database token with:

Namespace = LogReports

title = ErrorsByType

source=Database

Input Database Query:

SELECT LogTypeKey as ErrorType, count\(\*\) as ErrorCount

FROM EventLog

group by LogTypeKey

Column Names ErrorType ErrorCount

###### 2.create a Razor Script token with:

Namespace = LogReports

title = ErrorsByTypeJson

Template Engine = Razor Code

Language = C\

Script Body = @LogReports.ErrorsByType.ToJsonArrays\(false\)

###### 3.create a constant string token with:

Namespace = LogReports

title = ErrorsByTypePie

Source = Constant String

Input Constant String \(here you have to add the code generated on Google Charts page and add the Razor Script token\):

&lt;script type="text/javascript" src="[https://www.google.com/jsapi"&gt;](https://www.google.com/jsapi)

&lt;/script&gt;

&lt;script type="text/javascript"&gt;

google.load\("visualization", "1", {packages:\["corechart"\]}\);

google.setOnLoadCallback\(drawChart\);

function drawChart\(\) {

var token = \[LogReports:ErrorsByTypeJson\],

headValue = \['Task', 'Hours per Day'\];

token.unshift\(headValue\);

var data = google.visualization.arrayToDataTable\(token\);

var options = { title: 'My Daily Activities' };

var chart = new google.visualization.PieChart\(document.getElementById\('piechart'\)\);

chart.draw\(data, options\); }

&lt;/script&gt;

&lt;div id="piechart" style="width: 900px; height: 500px;"&gt;&lt;/div&gt;

###### 4.add the Constant String Token on the Google Chart field in Action Form



