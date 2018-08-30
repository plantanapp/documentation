# Debugging

## How to debug

You can debug your Sharp Scheduler Job by using the [Log Job Context](actions/log-job-context.html) action in order to generate logs.

You can find the debugging files on:

* ``/Portals/_default/Logs/SharpScheduler`` folder (note that this is your portal home directory, so it may look different but you get the idea)

Logs are added to a separate log file each separate day.

## How to submit debug files

When submitting debugging information to us for investigation, please make sure to provide the following:

* Steps to reproduce the error, if possible.
* Admin access to your site to reproduce the issue ourselves would be even better.
* If an error occurs, go to Admin > Event Viewer and locate the error message along with the Stack Trace; for the error to be relevant, the Stack Trace must contain the word SharpScheduler.
* DNN version and Sharp Scheduler version.
* Export the SQL Tables for us to review. Usually you can just open tables in view mode, select all and copy in clipboard, then paste to excel.
