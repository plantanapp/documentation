# Indexing

Search engine indexing collects, parses, and stores data to facilitate fast and accurate information retrieval.

In Search Boost there are 3 types of indexing:

- normal indexing
- incremental (delta) indexing
- real-time indexing

**Normal indexing** (from scratch) it's the initial collection of data and storing of it.

**Incremental indexing** it's the collection of only modified data. This is available only for following types of indexing: Modules (only for DNN version 7.1+), Documents, URLs, Custom database rules and it's possible to implement it in Custom content sources. Also in SearchBoost add-ons: DMX and Live Tabs add-ons. Please keep in mind that for `Custom database rules` you have to configure this.

**Real-time indexing** it's the collection of modified data right after the modification. This is available only for following types of indexing: Documents.
