# Faceted Search

Faceted Search is a new feature added in 2.5 that allows users to filter down results based on categories. You can think of this as a combination of traditional search and category/menu browsing.

So basically the task to enable Faceted Search consists of setting the right categories for content. Note that there aren't restrictions on the number of categories or their name. You can create categories ad hoc. This is powerful but also comes with responsibilities, you need to ensure proper case and spelling otherwise you may end up with two different categories. 

A classic example is show in the image below:

![](/search-boost/search-engine/assets/sb-faceted-search.png)

Read sections below for more information on how to create categories.

## Subcategories

Before diving into specific categories you should know that Search Boost supports any number depth for subcategories. The effect is that after user clicks a category, then the subcategories of that category will be displayed and so on until there are no more categories to drill down.

Subcategories are created through a naming convention: Category/Subcategory/SubSubCategory/...
Note the forward slash that delimits the levels.

By putting a search item in a subcategory it will automatically be included in all parent categories as well.

## Categories for DNN Modules

Content from modules that implement ISearchable can be placed under specific categories by using the built-in tags from DNN. Search Boost will take into account tags specified both under page settings and module settings.

![](/search-boost/search-engine/assets/SearchBoost_modules_tags.png)

Also additional categories can be specified from the Search Target tree in SB Administration console by clicking the settings icon next to each page or module from the tree. The principle is the same - categories can be specified for pages in which case they will apply for all modules, or they can be specified per module.

Besides categories you also get to specify custom fields (that are available in the XSL template) or increase the priority of content from specific modules.

The categories are saved at indexing time, so changes will not reflect immediately. You can use the manual indexing functions in SB Admin if you need the content to reindex right away.

## Categories for documents

For documents, categories can be easily added through the metadata feature.
You can specify the metadata per folder - in which case it will apply for all documents indexed from that particular folder - or for an individual document. If both are specified, they are merged but the metadata per document takes priority.

Here is an example of metadata that adds 4 categories to the document(s):

```xml
<metadata>
 <categories>
     <cat>Places</cat>
     <cat>Articles</cat>
     <cat>Websites</cat>
 </categories>
    </metadata>
```

### Categories for Custom Database Rules

Custom rules have been extended to allow a list of categories for each row. This can be achieved two ways:
* **By using a database column**
Use this method if you already have a column in the database that contains the category name;

* **By specifying list of categories manually**
If you don't have a category column, you can simply type a list of categories, one category per line.