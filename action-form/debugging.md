---
layout: default
---

# Debugging

In Action Form, you have the option to put the form in Debug Mode so you can trace any anomaly that is bothering you. We set up this option so that you can easily see the XML file with the data structure of the form. This info is very useful when you create your own template or when you try to customize the default templates. It is also very useful to track any mistakes you've made when you've created a new form.  You just have to check the box for the Debug Mode option and click on the Save button.

![debug](/action-form/images/debug.png "debug")

For front end you can use browser web development tools like Firebug that facilitates the debugging, editing, and monitoring of any website's CSS, HTML, DOM, XHR, and JavaScript.

Debugging is also a methodical process of finding and reducing the number of bugs or defects. Normally the first step in debugging is to attempt to reproduce the problem. If you are unlucky and you're encountering problems, you can generate some reports and send the files to us via email (or setup a place where we can download the reports if the files are too big) and we'll do our best to find a solution. When submitting debugging information to us for investigation, please make sure to provide the following:

* Steps to reproduce the error, if possible.
* Admin access to your site - we need this to reproduce the issue by ourselves on your environment because sometimes, an issue is dependent on the environment settings and there is a high change to not reproduce the issue on our side, so isolating it on your environment is the best choice if you need a fix for a problem.
* When an error occurs, go to Admin -> Event Viewer and locate the error message along with the Stack Trace; for the error to be relevant, the Stack Trace must contain the word ActionForm.
* We also need you to provide us with the DNN version where you encounter the problem.
* If possible, export the form settings/content so we can see the exact settings you have made on the form. You can export these settings following the following steps: click on the manage menu -> settings -> export content -> select the destination where you want the file to be exported. Usually, the exported file can be found in the root folder of your site.
* Send us the Report in order to review it. You can do this by exporting the CSV Report. See the images below:
  
<div style="text-align:center"><b>Click on Reports option</b>
    <img style="max-width:100%" src="/action-form/images/save-reports.png" />
</div>

<div style="text-align:center"><b>After selecting the start and end date, click on Download as CSV</b>
    <img style="max-width:100%" src="/action-form/images/download-reports.png" />
</div>