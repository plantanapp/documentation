# Debug

Summary

* Enable debug mode from General Settings
* In debug mode, Action Grid generates log files under `/<Portal Home Foder>/Logs/ActionGrid`
* Action Form data source uses a Lucene index to cache data, located at `/<Portal Home Folder>/Cache/ActionGrid/<module id>-<unique id>`
* Always check `Admin > Event Viewer` first when you experience weird behaviour
* Action Grid is powered by javascript, make sure to check `F12 Developer Tools > Console` for javascrtipt errors that could affect functionality
* Use `Message > Display Error Message` to output debug strings while implementing actions