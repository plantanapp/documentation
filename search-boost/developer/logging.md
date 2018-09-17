# Logging

Starting with version 1.7.2 Search Boost provides advanced logging capabilities for both the indexing process and for when people do searches on the front-end. The logging detail is configured separately for the two processes and also they're located in separate locations:
- Search Logs are located in the `Portal Home Directory/Logs/SearchBoost`
- Indexing Logs are located in `Portals/_default/Logs/SearchBoost` (as indexing is more of a host task)
One thing to keep an eye for is the size of the logs. Make sure to regularly archive the logs and cleanup the disk. Also, a common mistake is to forget the loggers set at Info or Debug levels which generate lots of content.

To configure the loggers,
1. Login with Super User account and go to Search Boost Administration Console

2. Locate and click the General Settings -> Advanced Settings. The following options appear:

![](/search-boost/developer/assets/SearchBoost-logging-settings.png)

3. Locate the two loggers at the bottom of the dialog
    - DEBUG: User Search logging 
    - DEBUG: Enable Search Indexing logging 

4. Set each logger to desired level of detail and click Save

Now, whenever a search is done or when the indexer kicks in, Search Boost will generate log information that you can use for audit, error reporting, tweaking, debugging and so on.

**Logging Levels**

Following levels of logging are used:
* **Off**
Disable logging; this is the default

* **Error**
Log errors that prevent normal functionalities or parts of the code from executing correctly; it's recommended to keep the loggers at this level for production

* **Info**
This level will log additional information that reflects the step that Search Boost is taking while executing; this is the recommended level when you tweak the search engine

* **Debug**
When this level is set, besides the info logging from above, Search Boost also logs debug information that will help developers track issues.

**Important**: If you contact us regarding a "Results from documents are not shown...."  type of question it would help up if you can also send the logs that you recorded at Debug level.

Search Boost 3.2 brings forth better logging and debugging, which is easily accessible via the buttons at the bottom of the settings page:

![](/search-boost/developer/assets/logging.png)