# DMX SearchBoost add-on

This add-on gets the files (no other type of content) from **Document Exchange** module and enables SearchBoost to index and search through the content.

To index DMX files you have to select which DMX folders you want to index in Portals -> Folders -> Document Exchange (DMX). You should see in `Dashboard -> Portal files` the number of indexed DMX files, e.g.: `10 (7 from DMX).`

**Notes**:

* You may see a *DMX* folder in Portals -> Folders. You shouldn't use this but instead leave it unchecked and use the `Document Exchange (DMX)` - this is using the special integration. Advantages: much faster and this indexes private files also (of course, for authorized roles).
* If you select a synchronized DMX folder and also check it in Portal -> Folders then this will be indexed twice.
* The integration indexes all types of files for which there is support. You can check what are the supported file types by taking a look at File Types section checkboxes (it doesn't matter if it is checked or unchecked, it matters if it is enabled or not).
* At the moment the special folder always show (0 items). We will correct this in the next release.

**Heads up:**

* You will see in the DMX_Log sql table some activity because of our integration: one entry for each file, every hour, with `Action=Download` and `UserId=1`. This happens because SearchBoost needs to gather all DMX content and only when the user makes a search it will filter content not authorized for the search user (as per DMX permissions).
  
**Compatibility:**

* SearchBoost 3.1.85+ <=> DMX Add-on 1.0.13+ (this means: if you have SearchBoost version 3.1.85 or greater than you must DMX add-on version at least 1.0.13 & if you have `DMX Add-on 1.0.13+` then you must have SearchBoost version `at least 3.1.85)`
* SearchBoost 3.1.2+ <=> DMX Add-on 1.0.0+