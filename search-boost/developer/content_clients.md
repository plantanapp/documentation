#### Content Clients

According to the Architecture a content client is responsible to get a stream from content. The steps to develop a custom content client would be:
- Add a configuration file in ContentClients folder
- Create your own project with a class that implements avt.SearchBoost.Core.ContentClient.IContentClient

In order to use a content client the IndexingJob.ContentClient must be equal to content client id from the config file. In this case the IndexingJob.Contents is ignored.