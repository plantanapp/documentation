---
id: crawl-site
title: Crawl Site
sidebar_label: Crawl Site
---

> Audience: [`Citizen Developers`](audience.md#Developers)
>
> Skill Prerequisites: `Tokens`

This action crawls a website by following all links that match criteria. It is useful for extracting information from a site, indexing its content, or detecting changes in its structure.

## `Typical Use Cases`

- Extract information from a website for data analysis
- Index a website's content for search functionality
- Monitor a website for changes in its structure or content

## `Don't use it to`

- Scrape copyrighted content without permission
- Overwhelm a website with excessive requests, which may lead to blacklisting



## `Input Parameter Reference`

| Parameter        | Description                                     | Supports Tokens | Default        | Required |
| ---------------- | ----------------------------------------------- | --------------- | -------------- | -------- |
| Base URL | The base URL of the website to crawl. Make sure you are allowed to crawl the website.  | Yes             | `empty string` | Yes       |
| Follow Links | Determines if the action should follow links from the page. The Process actions will be called for each individual page. | Yes             | `false` | No       |
| Maximum Pages | Determines the maximum number of pages to crawl. Can contain Tokens. | Yes             | `0` | No       |
| Ignore NoFollow | Links can specify a rel=nofollow attribute. This instructs the search engines not to get content from the respective pages. By ticking this option, those pages would be crawled as well. | Yes             | `false` | No       |
| Include Paths | List of paths to include in the crawl. If empty, the entire website is crawled. Can contain Tokens. | Yes             | `empty list` | No       |
| Exclude Paths | List of paths to exclude from the crawl. Can contain Tokens. | Yes             | `empty list` | No       |
| Parallelization | Number of parallel requests to make during the crawl. This will cause the crawler to be faster, but can lead to websites blacklisting the caller. Can contain Tokens. | Yes             | `1` | No       |
| Pause Between Requests | Time in milliseconds to pause between requests. This setting has the purpose to avoid being blacklisted by websites and also control the processing intensity of crawling a site. Can contain Tokens. | Yes             | `0` | No       |
| Process Page | Action event to process each crawled page. The following tokens are available to access the content: [Crawler:RawHtml], [Crawler:PageTitle], [Crawler:PageUrl], [Crawler:RelativePath], [Crawler:LastModified] | Yes             | `empty event` | No       |
| Modified Since | Crawl only pages modified since this date. Can contain Tokens. | Yes             | `empty string` | No       |


## `Output Parameters Reference`

| Parameter         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| Store Crawled Pages | A token containing the crawled pages as a list. |
| Store Crawled Pages JSON | A token containing the crawled pages as JSON. |
| Store Number of Crawled Pages | A token containing the number of crawled pages. |

## `Examples`

### `1. Example: Basic Web Crawl`

This example crawls a website, following links and storing the crawled pages in a token.

```json
[
  {
    "Id": -1,
    "ActionErrorMessage": null,
    "ActionType": "WebCrawler.CrawlSite",
    "Condition": null,
    "Description": null,
    "IsDeleted": false,
    "EventName": "",
    "Parameters": {
      "BaseUrl": "https://example.com",
      "FollowLinks": true,
      "MaxPages": "100",
      "IgnoreNoFollow": null,
      "IncludePaths": [],
      "ExcludePaths": [],
      "Parallelization": "5",
      "PauseBetweenRequests": "1000",
      "ProcessPage": [],
      "ModifiedSince": null,
      "StoreCrawledPages": "crawledPages",
      "StoreCrawledPagesJson": null,
      "StoreNumberOfCrawledPages": null
    }
  }
]
```

For example, you can import this JSON content into a workflow using the "Import Actions" button.