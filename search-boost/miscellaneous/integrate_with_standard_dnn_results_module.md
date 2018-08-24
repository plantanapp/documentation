#### Integrate with Standard DNN Results Module

Sometimes you just want to customize the search box from Search Boost and ignore the rest of the features. If this is the case, you can link the Search Boost Input module directly to the Standard DotNetNuke Search Results module and skip the logic that Search Boost adds to implement targeted searches for example.

The standard way Search Boost works on the web is through a text box that receives input from user, then on submit it transports it to a result page via Query String (the URL). On Google, the parameter is named q (as in http://www.google.com/search?q=dotnetnuke).

For DotNetNuke Standard Search, the name of the parameter is Search (as in your.site/Results.aspx?Search=dotnetnuke)

In Search Boost, the Query String default name for the parameter is avtSearch (as in your.site/Results.aspx?avtSearch=dotnetnuke). But this can be modified from the UI Settings and changed to match the DotNetNuke standard search.



**To change the name of the Query String parameter that transports the search terms:**

![](/search-boost/miscellaneous/assets/search-query-string-param.png)

1. Click Manage on the Search Input module and then click Search Settings. This takes you to the Search Boost Administration Console.
2. Go to the UI Settings tab.
3. Then locate Name of Query String Param setting at the bottom of the screen and change it to Search.
4. Save the changes by clicking on the Save UI Settings button.

Now, we have to point the Search Boost input box to the DotNetNuke Results page. To do this:
1. Go to Admin menu then Pages.
2. Find the Search Results page. 
3. Click Edit on the page and get tab ID from the URL
4. Now go back to Search Boost Administration Console > UI Settings tab
5. In the Type TabId box put the ID of the Search Results page you found out at step 2
6. Save and go back to the front-end

![](/search-boost/miscellaneous/assets/search-results-page-byid.png)

Initiate a search from the Search Boost input module to demonstrate the setup is complete.
