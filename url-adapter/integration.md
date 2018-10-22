# Integration

## DNN Blog and news modules integration

Since the release of URL Adapter version 1.4, we've worked on its integration with some of the most popular DNN blogs, news and directories modules, such as: [SunBlogNuke](//www.sunblognuke.com/){:target="_blank"}, [EasyDNNnews](//www.easydnnsolutions.com/Modules/EasyDNNnews/Overview){:target="_blank"} and others.

You can use URL Adapter when you want to restructure the pages within your blog and news modules (or within your DNN portal), and you want to ensure that people who have bookmarked old URLs don't break when you move pages around. URL Adapter enables you to transparently forward requests to the new page location without breaking browsers. 

For example, you have created an article and the link looks like this: 

`example.com/resources/news?tabid=275&artmid=1255&articleid=5`

You can create with URL Adapter an advanced rule to rewrite the ugly URL from above to a nice one like: 

`example.com/about-redirects. `

URL Adapter can help you to improve the search relevancy of pages on your blog and news module (or DNN portal) with search engines like Google. URL Adapter can make it easier to embed common keywords into the URLs of the pages on your DNN portal, which can often increase the chance of someone clicking your link.

## Integration with XMOD

As practical example, you're using XMOD for product listings and you want that each product detail page to have a custom URL, so, from: `/ProductDet/tabid/103/Default.aspx?pid=146` you want to have: `/ProductDet/Example_Product_Name`.
In this case, you only need to add some extra fields to your product table to store the `Example_Product_Name` and change your stored procedure or select statement to filter by this "extra field" and not by the `RowId`. 

You need to create an advanced rule like this:

    Match in: Relative Path 
    Condition: /ProductDetail/{Name_SEO} 
    Target : /ProdDet/tabid/103/Default.aspx?pid={Name_SEO} 
    Type: Rewrite 

Then adjust the select statement or StoredProcedure in XMOD PRO.

First of all, if you want every product to have its own page with the url `/ProductDetail/Your_Product_Name` you have to change the links in the product page. If you use `/ProdDet/tabid/103/Default.aspx?pid=123` the rewrite rules are not triggered. So first of all you have to change accordingly to the rule you have writen. 

Assuming that the URL is `/ProductDetail/Your_Product_Name URL_ADAPTER` assign at the token `{NameSEO}` the value of `Your_Product_Name` so you need to edit your select statement to filter on the field where you had stored `Your_Product_Name`.
