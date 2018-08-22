#### Advanced Search Syntax

Search Boost perms searches based on configuration. However, it still allows some flexibility for end users to influence how searches at performed. Below are a few examples.


  * *search terms*: Searches for entries that contain either search or terms. Higher precedence is given to content that contains both. Note that this is configurable through the multi-word search setting.

  * *"search terms"*: Searches for entries containing the two words right next to each other. Note that some noise is allowed through the use of phrase slop settings.

  * **search -terms*: Searches for entries that contain the word search but not terms.

  * **+search +terms*: Searches for entries containing both search and terms.

Search Boost also has an autocomplete function - that is, once a certain term has been searched for 3 times, it will be automatically displayed as a suggestion for future searches that match part of that word.