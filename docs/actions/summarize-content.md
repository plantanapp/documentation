---
id: summarize-content
title: Summarize Content
sidebar_label: Summarize Content
---

> Audience: [`Citizen Developers`](audience.md#Developers)
>
> Skill Prerequisites: `Tokens`

This action uses OpenAI to generate a summary of the given content.

## `Typical Use Cases`

- Summarize large pieces of text into smaller, more digestible summaries
- Create brief or detailed summaries based on desired detail level

## `Don't use it to`

- Summarize very short content where summarization is not necessary


## `Input Parameter Reference`

| Parameter        | Description                                     | Supports Tokens | Default        | Required |
| ---------------- | ----------------------------------------------- | --------------- | -------------- | -------- |
| OpenAi API Key   | The API key for Open AI.                       | Yes             | `empty string` | Yes      |
| Model            | The OpenAI model to use for summarization. Choose from the following: <br/> -gpt-3.5-turbo <br/> -gpt-4 | Yes | gpt-3.5-turbo | Yes |
| Instructions     | Optionally, provide additional instructions to improve how the content is summarized. | Yes | `empty string` | No |
| Content          | The content to be summarized.                   | Yes             | `empty string` | Yes      |
| Large Content Strategy | Specifies how to handle large content. Can be 'Truncate' or 'Split'. With 'Split', multiple calls to OpenAi are performed which will increase costs. | Yes | Truncate | Yes |
| Detail Level     | Determine the level of detail to capture in the summary. Choose from the following: <br/> -Brief <br/> -Normal <br/> -Detailed | Yes | Normal | Yes |

## `Output Parameters Reference`

| Parameter         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| Store Summary     | Provide a token name to store the summary.                            |
| Store Chunk Count | Provide a token name to store the number of chunks created from the token. It's only relevant for the Split strategy. |
| Store JSON Response | Provide a token name to store the entire JSON response from OpenAi.  |


## `Examples`

### `1. Summarize an article`

Summarize an article using the `gpt-3.5-turbo` model with the default `regular` detail level and store the summary in a token.  For example, you can import this JSON content into a workflow using the "Import Actions" button.

```json
[
  {
    "Id": -1,
    "ActionErrorMessage": null,
    "ActionType": "OpenAi.SummarizeContent",
    "Condition": null,
    "Description": null,
    "IsDeleted": false,
    "EventName": "",
    "Parameters": {
      "ApiKey": "your_openai_api_key",
      "Model": {
        "IsExpression": false,
        "Expression": null,
        "Value": "gpt-3.5-turbo"
      },
      "Instructions": null,
      "Content": "your_article_content",
      "LargeContentStrategy": {
        "IsExpression": false,
        "Expression": null,
        "Value": "Truncate"
      },
      "DetailLevel": {
        "IsExpression": false,
        "Expression": null,
        "Value": "regular"
      },
      "StoreSummary": "SummaryToken",
      "StoreChunkCount": null,
      "StoreJsonResponse": null
    }
  }
]
```

This action will call the OpenAI API, passing the given content to be summarized, and store the resulting summary in the `SummaryToken` token.