# Content Sources

According to the Architecture a content source is responsible to get new content to be indexed. The steps to develop a custom content source would be:
- Add a configuration file in _ContentSources_ folder (see local .readme.txt)
- Create your own project with a class that implements `DnnSharp.SearchBoost.Core.ContentSource.IContentSource`
    - implement the Query method that returns a `IEnumerable<Core.Indexing.IndexingJob>`. 
    - implement _ComputeResultUrl_ method. The default should be:
 `return new GenericUrlResolver(searchResult, searchContext).GetUrlForSearchResult();`

Here is a sample (works with SearchBoost >= 3.1.43):

```csharp
using DnnSharp.SearchBoost.Core.ContentSource;
using DnnSharp.SearchBoost.Core.Indexing;
using DnnSharp.SearchBoost.Core.Search;
using DnnSharp.Common.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
 
namespace avt.SearchBoost.TestPlugin.ContentSources
{
    public class TestContentSource : IContentSource
    {
        public void Query(TypedLogger<SearchInstance> logger, Core.Indexing.LuceneStorage dataStore, Core.IEngineSettings config, Core.Indexing.IndexingStatistics stats) {
            
        }
 
        public IEnumerable<Core.Indexing.IndexingJob> Query(SearchInstance instance, DateTimeOffset? since, TypedLogger<SearchInstance> logger) {
            List<IndexingJob> toReturn = new List<IndexingJob>();
 
            // creating a new indexing job using the contructor with required properties:
            IndexingJob job = new IndexingJob(instance, contentSourceId: "MyContentSourceId", action: "add", type: "plugin",
                itemId: "uniqueJobId", title: "Title", portalId: 0);
 
            // we want the item to be indexed right away
            job.Due = DateTime.Now;
            // the job will have a higher priority
            job.Priority = ePriorityIndexingJob.High;
 
            // let's say the item was last modified yesterday
            job.Metadata.DatePublished = DateTime.Now.AddDays(-1).ToUniversalTime();
 
            // show item in results for all users (using DNN user roles)
            job.Metadata.Roles = new List<string> { "All Users" };
 
            job.Metadata.OriginalName = "Item original name";
            // the item result url will have added the following query string params:
            job.Metadata.QueryString = "Param1=value&Param2=otherValue";
 
            // the content that will be indexed and used for result description:
            job.Contents = Encoding.UTF8.GetBytes("xyz content");
             
            // show this description (if "Highlight search terms" is disabled)
            job.Metadata.Description = "custom description";
 
            // this is saved in index (not searchable)
            // can accessed in your custom output template with <xsl:value-of select="data/field[@name='somekey']"></xsl:value-of> (returns first element = data1) 
            // you can also filter by appending query string param sbc-somekey=filterValue
            job.Metadata.Data.Add(new Core.Model.CustomData {
                Name = "somekey",
                Values = new List<string> { "data1", "data2" }
            });
 
            // other properties:
            job.Metadata.ContainerId = "container id";
            job.Metadata.ContainerName = "container name";
 
            toReturn.Add(job);
 
            return toReturn;
        }
 
        public string ComputeResultUrl(Core.Search.SbSearchResult searchResult, Core.Search.SearchContext searchContext) {
            return new GenericUrlResolver(searchResult, searchContext).GetUrlForSearchResult();
        }
    }
}
```
