---
id: count-tokens
title: Count Tokens
sidebar_label: Count Tokens
---

> Audience: [`Citizen Developer`](audience.md#developers)
>
> Skill Prerequisites: `Tokens`

This action counts the number of tokens for an OpenAI model.

## `Typical Use Cases`

- Calculate the number of tokens in a text string for OpenAI API usage

## `Don't use it to`

- Count words or characters in a string (use other string manipulation methods instead)

## `Related Actions`

_None_

## `Input Parameter Reference`

| Parameter        | Description                                     | Supports Tokens | Default        | Required |
| ---------------- | ----------------------------------------------- | --------------- | -------------- | -------- |
| Model            | The name of the OpenAI model. Choose from the list of available models. Can contain tokens. | Yes             | `empty string` | No       |
| Content          | The text for which you want to count the tokens. Can contain tokens. | Yes             | `empty string` | No       |


## `Output Parameters Reference`

| Parameter         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| Store Token Count | The token count for the provided text and model.                      |

## `Examples`

### `1. Count tokens for GPT-3.5-turbo model (DRAFT)`

Count the number of tokens in a text string for the GPT-3.5-turbo model and store the result in a token named "TokenCount".

```json
{
    "Action": "OpenAi.CountTokens",
    "Parameters": {
        "ModelName": "gpt-3.5-turbo",
        "Content": "This is a sample text string.",
        "StoreTokenCount": "TokenCount"
    }
}
```

For example, you can import this JSON content into a workflow using the "Import Actions" button.