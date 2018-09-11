# CSV File

The CSV file stores a report of all searches conducted in the Search Boost portal. Follow the Download CSV File section below to download and view the search report.

## Download CSV File

1. Click on the Download as CSV link, identified on Figure 1, to download the CSV file. 

2. After the CSV file is completely downloaded, open it with Microsoft Excel or a CSV compatible application.

  * The CSV file provides details about searches performed by users in the Search Boost portal. It includes several columns with specific details relevant to the each search.
  
## CSV File Specifications

The CSV file, displayed in Figure 2, provides specifications about each search, such as the search term, url id and the date of the search. The bullet list below Figure 2 specifies a description of each column.

![](/search-boost/reports/assets/CSVFile.png)

  * **Id**
  
The Id column specifies a unique number for each search. This number differentiates each search. It is identified in the search URL below as logid.  

`/SearchBoost_Page1.aspx?sb-search=Rules&sb-inst=390&sb-logid=1-ip5gyr74xm2fai7b` 

  * **UrlId**
  
The UrlId column specify a unique url id assigned to each search. A Urlid is different for each search. You can find the url id at the end of each search URL at the time the search is conducted. It is identified in the search URL below.

`/SearchBoost_Page1.aspx?sb-search=Rules&sb-inst=390&sb-logid=1-ip5gyr74xm2fai7b` 

  * **InstanceId**
  
The InstanceId column is an instance id number that uniquely identifies a device on the operating system. It is the same throughout each search. It is identified in the search URL below as inst=390. 

`/SearchBoost_Page1.aspx?sb-search=Rules&sb-inst=390&sb-logid=1-ip5gyr74xm2fai7b` 

  * **PortalId**
  
The PortalId column provides the portal id number that is used to access the portal. This number is usually constant. 

  * **SearchTerms**
  
The SearchTerms column specifies the search terms entered by the user in the Search Boost portal. 

  * **Filters**
  
The Filters column specifies any search filters used by the user. The search filter allows the user to refine the search and provide more specific results.

  * **TotalResults**
  
The TotalResults column specifies the number of results returned for the search.

  * **RawURL**
  
The RawURL column specifies the search URL generated at the time of the search. The RawURL, displayed on Figure 3 specifies the Search Page, Search Term, Instance id, id or logid and Url id.

![](/search-boost/reports/assets/RawURL.png)

  * **MaxPageViewed**
  
 The MaxPageViewed column specifies the maximum number of views for each search.

  * **ClickedResultId**
  
The ClickedResultId column specifies the result id of each clicked result by the user. The result page(if any) can be for example, a text page such as /searchboost_page1/text/html. It is the location of the search term specified by the user.

  * **ClickedResultIndex**
  
The ClickedResultIndex column specifies the number of times the result page was clicked by the user.

  * **ClickedResultURL**
  
The ClickedResultURL column specifies the URL where the result is located.

  * **UserId**
  
The UserId column specifies the user identification number of the user that performed the search. 

  * **RemoteAddress**
  
The RemoteAddress column specifies the remote address or the IP address of the user. It is a unique number assigned to each user on the internet. This address is generally assigned by the user's internet service provider.

  * **DateSearch**

The DateSearch column specifies the date and time when search was performed by the user.

For a  better understand of how to perform a search and download the CSV file, go to  the Reports Example page.