# News

## [News:AjaxFeed]

Google AJAX Feed API allows to embed a Dynamic Feed Control on your web page and let your users see customized views of the feeds.
Read more about this gadget at http://www.google.com/uds/solutions/wizards/dynamicfeed.html

* Parameters:

  - [required]	String	Feeds	List of feed URLs to aggregate items from separate with semicolon. Include bookmark at end of the feed to set a title, for example: site.com/rss.xml#My Title
  - [optional]	Enum	DisplayMode	Number and position of articles to display. Horizontal - only one article is show at a time and it changes every few seconds. Vertical - show 4 articles from one source, then switch to 4 articles from next source and so on. VerticalStacked - show 4 articles from each source upfront.
  - Default Value: VerticalStacked
  - Possible Values: Horizontal,Vertical,VerticalStacked

* Syntax:

  - [News:AjaxFeed(Feeds="(Literal String)",DisplayMode=[Horizontal,Vertical,VerticalStacked])]
  - To test the token, click Test Token button below and replace parameters (if any) with actual values.

* Examples:
  - [News:AjaxFeed(DisplayMode=Horizontal,Feeds="http://rss.people.com/web/people/rss/topheadlines/index.xml#People.com Celebrity News;http://www.eonline.com/syndication/feeds/rssfeeds/topstories.xml#E! Online Entertainment News")]
  
  - Rotates one headline from the two RSS sources.[News:AjaxFeed(Feeds="http://rss.people.com/web/people/rss/topheadlines/index.xml#People.com
  Celebrity News;http://www.eonline.com/syndication/feeds/rssfeeds/topstories.xml#E! Online Entertainment News")]

  - Embeds celebrity news by merging two sources (RSS Feeds) and stack 4 from each source.

## [News:NewsShow]

NewsShow is a Google service that embeds news article summaries matching some criteria.
Read more about this gadget at http://code.google.com/apis/newssearch/newsshow/index.html

* Parameters:
  
  + [required] String Keywords Let NewsShow know what keywords are relevant.
  + Default Value:
  + Possible Values:
  + [optional] String Topics Let NewsShow know what topics this instance should contain. This is a comma delimited list of codes as follows:
    - h - specifies the top headlines topic
    - w - specifies the world topic
    - b - specifies the business topic
    - n - specifies the nation topic 
    - t - specifies the science and technology topic
    - el - specifies the elections topic
    - p - specifies the politics topic
    - e - specifies the entertainment topic
    - s - specifies the sports topic
    - m - specifies the health topic;
  + Default Value: h,w,b,n,t,el,p,e,s,m

* Syntax:
  + [News:NewsShow(Keywords="(Literal String)",Topics="(Literal String)")]
  
    To test the token, click Test Token button below and replace parameters (if any) with actual values.

* Examples:
  + [News:NewsShow(Keywords="treaties")]
  + Returns news that refer to treaties in default topics.
  + [News:NewsShow(Keywords="treaties",Topic="h")]
  + Returns Top Stories that relate to treaties. 