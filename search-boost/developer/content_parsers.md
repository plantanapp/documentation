# Content Parsers

According to the Architecture a content parser is responsible to get text from content. The steps to develop a custom content parser would be:
- Add a configuration file in _ContentParsers_ folder (see local .readme.txt)
- Create your own project with a class that implements `DnnSharp.SearchBoost.Core.ContentParser.IContentParser`.