#### Fluent API
In **version 3** don't use the old class IndexItem, use the new class *IndexingJob* that should be added to the indexing queue (table *avtSearchBoost_IndexingQueue*) with *indexingJob.Save()*.

In **version 2.6.0** we added a new API to simplify indexing content since the existing indexing API contained many parameters. it was also too difficult to build it all at once. The new Fluent API creates an **IndexItem** object that allows you to pass around to other components, as well as fill with content and metadata.

The following code shows how data from custom rules are passed to the index using the new Fluent API.

```javascript
IndexItem item = new IndexItem();
    item = item
        .SetType("rule")
        .SetContainerId("rule-" + rule.RuleID)
        .SetContainerName(rule.RuleName)
        .SetInstanceIds(instances)
        .SetTitle(title)
        .SetContent(GetContent(rule, sr, results))
        .SetModuleId(ParseModuleId(rule, sr, results, logger, item.Title))
        .SetTabId(ParseTabId(rule, sr, results, logger, item.Title))
        .SetPortalId(portalId)
        .SetAuthorId(ParseAuthorId(rule, sr, results))
        .SetId(id))
        .SetItemId(searchKey + "-" + item.Id)
        .SetDesc(ParseDesc(rule, sr, item.Content, item.Id))
        .SetCategories(ParseCategories(rule, sr, results))
        .SetDatePublished(ParsePublicationDate(rule, sr, results))
        .SetGetParams(ParseGetParams(rule, sr, results))
        .SetUrl(ParseUrl(rule, sr, results, item.GetParams))
        .SetData(ParseData(rule, sr, results))
        .SetBoost(rule.Boost)
        .AddRole("All Users");
```

#### API Specification

Note there are redundancies with the indexed fields. Some are there for legacy reasons, while others provide optimization.

##### SetType(string)

Sets the type of content. For custom indexers, use "plugin". The ```SetType("rule")``` function specified in the object sets the rule for the string.

##### SetSubType(string)

Sets the subtype of content. For documents, this is "pdf", "docx" and so on. For custom indexers, use a keyword that uniquely identifies your indexer.

#### SetContainerId(string)

Sets an ID that uniquely defines the container and where data comes from.  For example, it could be a rule ID for the custom rules, a folder for documents, a domain for web pages and so on. For custom indexers, use what is relevant for you. The ```SetContainerId("rule-" + rule.RuleID)``` function specified in the object passes the rule string and sets a unique id for the rule.

##### SetContainerName(string)

This is the friendly representation of the container, such as the rule name, the folder name and so on. Again, use what makes sense to you. This function is only used for display purposes. The ```SetContainerName(rule.RuleName)``` function  specified in the object sets a rule name for the rule.

##### SetContainerPath(string)

This represents the path of the container relative to paths of other containers. Folders for example, is the relative path from the portal root. It is used by Search Boost to determine if a container is a parent of another container.

##### SetItemPath(string)

This is same as above, the only difference is that it reflects the item. For example, it could be the path to a file that includes the file and extension. Search Boost uses this to determine unique items, therefore two items with the same path is considered identical.

##### SetInstanceIds(List<string>)

Items are wired to Search Boost instances, so they appear when the search is initiated in these instances.

##### AddInstanceIds(string)

Same as above, but add one instance at a time.

##### SetTitle(string)

The title is shown in search results as the header of each item, but depends on the results template.

##### SetDesc(string)

The description appears on the results page just below the title. If this is not supplied, Search Boost will build it automatically from content. If the highlighter is enabled in Search Engine settings, then this description is ignored because the description is rebuilt from content to reflect the position of the matched words.

##### SetContent(string)

This is the text that will be searchable (along with title and description, if enabled in settings). If you have multiple content sources, append all of them to the same string but separate them with spaces.

##### SetPortalId(int)

This determines which portal this item belongs.

##### SetTabId(int)

This determines which portal page this item belongs. Pass -1 if no relation exists.

##### SetModuleId(int)

This determines which module this item belongs. Pass -1 if no relation exists.

##### SetAuthorId(int)

Pass the id of the user that generated the content with this method.

##### SetId(string)

Pass the item ID as it exists in your space to be able to get back the item if needed later.

##### SetItemId(string)

This uniquely identifies the item across all indexed items. So if the same item is indexed multiple times, this field needs to be different.

##### AddCategory(string)

Assigns this item to a category. Categories are used especially for a [faceted search](search-engine/faceted_search.md).

##### AddCategories(List<string>)

Same as above, but assigns multiple categories at once.

##### SetDatePublished(DateTime)

This is the date when this content is published. When implementing a custom indexer, use this to design incremental indexing by looking only at content that was updated.

##### SetGetParams(string)

Pass a query parameter string here that will append the result URL. The string can look like "param1=value1&param2=value2"

##### SetUrl(string)

Each result must point somewhere. If this field is empty, Search Boost will determine URL from ModuleId or TabId fields.

##### SetData(Dictionary<string,string>)

Sets arbitrary data that Search Boost will pass to the search results XSL template, so you can build smarter customized output.

##### AddData(string,string)

Same as above, but add one entry at a time.

##### SetBoost(float)

SetBoost determines how important this item is, that is how high the content ranks compared to other results. Use values in range 0-1 to lower the boost, and values higher than 1 to increase it. 1 means there is no influence on the boost.

##### SetLanguage(CultureInfo)

If content is specific to one language, pass that language to have this result come up only when the current locale matches the locale provided. If this field is not specified then Search Boost will assume neutral locale and the result will come up for all languages.

##### SetRole(List<string>)

Set a list of roles that see this result. Any roles that already exist in the list is overwritten. If this is empty the content will only be visible to Administrators.

##### AddRole(string)

Same as above, but add one role at a time.

##### AddRoles(List<string>)

Append a list of roles at a time.
