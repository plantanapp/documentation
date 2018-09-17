# SearchBoost Addons

## DMX extension

If you're using Document Exchange (DMX) module and you need to index DMX content, you have to use the Search Boost DMX extension. Once installed, you have to check in Search Settings page the types of files you need to index corresponding to the ones from DMX (e.g. PDFs, docs, txt) then index the content of the portal.

Please read the DMX add-on documentation.

## Live Tabs add on

When you want to index content from Live Tabs, you can use the Search Boost Live Tabs extension. In Search Settings page you just need to check on Portals > My Website > Pages the page which has the Live Tabs on it, then index and search after keywords form the Live Tabs content or modules included in Live Tabs. 

## Easy DNN News Articles

You can index EasyDNNNews articles by creating a custom database rule. Limitations:
- indexes all articles ignoring filters (too hard to do with a simple sql query)
- if you want search results to link to article url you will have to specify a specific module to open search results articles (even if you have multiple EasyDNNNews modules).

Steps to create the custom rule:
1. Access Search Settings panel in Search Boost;
2. Go to Database Indexing Rules and click on "New Rule" button;
3. Set your new rule name (like 'Easy DNN News articles')
4. In Input Query text box enter the following SQL query (you have different scenarios based on where you want the search results links to point to):
5. If you want the search results links to simply point to EasyDNNNews module instead of specific article:
 
```sql
SELECT *  --(or CleanArticleData)
FROM EasyDNNNews
```

6. If you want the search results to point to article link you have to 2 options:  

a) Manually specify the moduleId of the EasyDNNNews instance to open article into (this is the most reliable way to index the articles):

```sql
SELECT EasyDNNNews.*, {EasyDNNNews moduleId to index (e.g. 423)} AS ModuleId
FROM EasyDNNNews
```

  b) Take moduleId based on setting "DNN Search integration" (if you have multiple EasyDNNNews instances then leave only one of them enabled).

```sql
SELECT EasyDNNNews.*, EasyDNNNewsDNNSearchItems.ModuleID 
FROM EasyDNNNews 
INNER JOIN EasyDNNNewsDNNSearchItems ON EasyDNNNews.ArticleId = EasyDNNNewsDNNSearchItems.ArticleID 
```

   * optional: if you want to ignore deleted EasyDNNNews module instances:

```sql
INNER JOIN TabModules ON TabModules.ModuleID = {ModuleId or EasyDNNNewsDNNSearchItems.ModuleID depending on the scenario}
WHERE TabModules.IsDeleted = 0
```

1. Click on Reload Columns and results will be displayed. If there are no results, please check your query;
2. On "Columns to Index" check “CleanArticleData”;
3. On "Link results" select "by Module ID Column", then select "ModuleID". If you want to open the page with the EasyDNNNews module set to one of the specific options.
4. On "Select Id Column" select "ArticleID";
5. On "Select Title Column" select "Title";
6.  On "Select Description Column" select "Generate from content";
7.  On Additional Parameters select the following (necessary if you want results links to point to article link):
ArticleID pass as ArticleID;
TitleLink pass as TitleLink;
ModuleID pass as ArtMID.
8. Click on SAVE and REINDEX;