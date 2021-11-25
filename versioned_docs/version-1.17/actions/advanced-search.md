---
id: advanced-search
title: Advanced Search
sidebar_label: Advanced Search
---


This action generates a search results url for SearchBoost. You can then use the url to redirect the user or/and use it how you see fit. The seach instance and results modules must be setup in advance.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Behavior ID | This is the Search Boost behavior ID. You can find this in Search Boost admin. Can contain form tokens (for example [Title]) and My Tokens. | Yes | None |
| Search Input Field | Select one of the fields in the form that contains the seach terms. You can also use the field below if you need more control. | No | None |
| Search Input Expression | Use this field to gain control of the search input. For example, compute it from multiple fields or hardcode the search terms so only filters or other elements of advanced search are used. Can contain form tokens (for example [SearchTerms]) and My Tokens. | Yes | None |
| Multi Word Searches | Possible values: All (results must contain all words), Any (results must contain at least one) or Exact. Can contain form tokens (for example [SearchFields]) and My Tokens. | Yes | None |
| Search Fields | This is a comma delimited list. Possible entries: Title, Content, Keywords, Description. Most of the time, you'll get away with using a Checkbox list token, which also saves selection as comma delimited. Can contain form tokens (for example [SearchFields]) and My Tokens. | Yes | None |
| Filters | Optionally provide a list of filters to apply to the search. The first column is the name of the filter. Typical values include: type, subtype, tabid, culture, roles and others. But the true power comes from the ability to create filters from Custom Data fields from Search Boost. Second column contains the value you wish to filter by. Beware that the name of the filters will be stripped of any spaces and numbers. It will be transformed to a single word. (eg. 'Division Code' goes to 'divisioncode') Can contain form tokens (for example [SearchFields]) and My Tokens. | Yes | None |
| Output Token for results url | Specify a token name to save the results url into. You can access it later using the token syntax, for example [ResultsUrl] | No | None |
