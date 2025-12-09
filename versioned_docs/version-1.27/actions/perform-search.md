---
id: perform-search
title: Perform Search
sidebar_label: Perform Search
---

# Perform Search

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)

> Skill Prerequisites: `Understanding of Tokens`

The "Perform Search" action in Plant an App allows users to execute a search based on specified criteria. This action leverages the Search Boost feature, enabling users to perform efficient searches tailored to specific behaviors.

## `Typical Use Cases`

- To perform a personalized search within a specific behavior defined in Search Boost.
- To filter search results based on custom criteria.
- To paginate large sets of search results efficiently.

## `Additional Resources`
- This action was featured in [Episode 190](https://youtu.be/wGdh5LA2xrE?si=fd_lxswr6-jRNsUF&t=699) of the Low-Code Café.    
- A working model of the action has been posted on the Low-Code Campfire website.  See [Precision Search for Large Datasets](https://campfire.plantanapp.com/Contributions/Dale-Warner/2025/09/Borrower-Lookup).


## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Behavior ID | The Search Boost behavior ID to perform the search on. This can be identified in the Search Boost admin. | Yes | N/A | Yes |
| Page Size | Number of results to return per page. | Yes | 10 | No |
| Page Number | Specifies from which page to start retrieving the results. | No | 1 | No |
| Search Terms | Terms to execute the lookup on. | Yes | N/A | Yes |
| Filters | Optional filters for refining search results. | Yes | N/A | No |

## `Output Parameters Reference`

| Parameter | Description |
| --------- | ----------- |
| Results Output | A token name to store the JSON result with `metadata` and `results`. |

## `Security`

The search capabilities provide powerful tools for fetching and displaying data. However, it's crucial to ensure that data access is appropriately restricted based on user permissions to prevent unauthorized data visibility or leakage.

## `Examples`

### `1. Basic Search Action`

This example demonstrates performing a basic search using a specified behavior and search terms.

```json
{
    "Title": "Perform Search",
    "ActionType": "PerformSearch",
    "Parameters": {
        "BehaviorId": "123456",
        "PageSize": "10",
        "PageNumber": "1",
        "SearchTerms": [
            {
                "SearchTerm": "technology news"
            }
        ],
        "ResultsOutputTokenName": "SearchResults"
    }
}
```

### `2. Search with Custom Filters`

This example showcases performing a search with additional filters to narrow down results.

```json
{
    "Title": "Perform Search with Filters",
    "ActionType": "PerformSearch",
    "Parameters": {
        "BehaviorId": "123456",
        "PageSize": "10",
        "PageNumber": "1",
        "SearchTerms": [
            {
                "SearchTerm": "latest updates"
            }
        ],
        "Filters": [
            {
                "FilterName": "Category",
                "FilterValues": "News\nTechnology"
            }
        ],
        "ResultsOutputTokenName": "FilteredSearchResults"
    }
}
```

### `3. Paginated Search`

Executing a search with pagination to manage large data sets.

```json
{
    "Title": "Paginated Search",
    "ActionType": "PerformSearch",
    "Parameters": {
        "BehaviorId": "123456",
        "PageSize": "20",
        "PageNumber": "2",
        "SearchTerms": [
            {
                "SearchTerm": "innovations"
            }
        ],
        "ResultsOutputTokenName": "PaginatedSearchResults"
    }
}
```

## Conclusion

The "Perform Search" action provides a robust mechanism to conduct searches within the Plant an App platform efficiently. By utilizing behaviors, terms, and filters, users can customize their search operations to fit specific needs, ensuring relevant results are retrieved swiftly.

Revised 09/29/2025