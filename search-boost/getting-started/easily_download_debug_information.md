### Easily Download Debug Information

In case there is a problem and you need to contact us, we made it super easy to share with us the logs and other debug information. There are 3 separate buttons for General Info, Instance Index and Log Files:
![](/search-boost/getting-started/Assets/1.png)

These buttons gets some info or archives some files from the server. At the moment it gets the following information:
* **Server information and SearchBoost state** - file **GeneralInfo.txt**;
* **SearchBoost log files and DNN log files** - file **Logs.zip**;
* **The SearchBoost index** (if it exists) - file **Index.zip** - keep in mind that by sharing this file you are giving us access to all the informations **SearchBoost** is indexing;

So every time you have a problem you can easily get this files and send us what we probably need to solving your problem.

**Important note:** Many times it helps to log a little extra, especially when there are no obvious errors. So to do that you can set logging to '**Debug mode**' (Logging). After this reproduce the problem again.

**NOTE:** If you can not access **SearchBoost** settings page you can use this direct url to download General Info: **{host}/DesktopModules/DnnSharp/SearchBoost/AdminApi.ashx?method=DownloadDebugInfo&_alias={portalAlias}&_mid=-1&instanceId={SearchBoostInstanceId = ModuleId}**.

For older versions (starting with 3.00.55 and until 3.1.21) there was only one button "**Download Debug Info!**".
This should download all 3 files described above but some browsers might block the second and third files from downloading. For example in Google Chrome:

![](/search-boost/getting-started/Assets/2.png)