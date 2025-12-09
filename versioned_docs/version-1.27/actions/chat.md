---
id: chat
title: Chat
sidebar_label: Chat
---

> Audience: [`Citizen Developers`](audience.md#developers)
>
> Skill Prerequisites: `Tokens`

This action uses the OpenAI Chat API to get responses from AI.

## `Typical Use Cases`

- Get AI-generated responses for chatbots
- Generate text content based on user input
- Implement AI-powered virtual assistants

## `Don't use it to`

- Replace human-generated content entirely
- Process sensitive or private user data

## `Related Actions`

_None at the moment._

## `Input Parameter Reference`

| Parameter              | Description                                                  | Supports Tokens | Default        | Required |
| ---------------------- | ------------------------------------------------------------ | --------------- | -------------- | -------- |
| OpenAi API Key         | The API key for Open AI.                                     | Yes             | `empty string` | Yes      |
| Model                  | Choose from the following models: <br/> - gpt-3.5-turbo <br/> - gpt-4 | Yes             | `empty string` | Yes      |
| Instructions           | Provide instructions on how the AI should handle the messages. A typical example is to say "You are an helpful support assistant". | Yes             | `empty string` | Yes      |
| Previous Messages      | If you are implementing a conversation, pass the previous messages as JSON, e.g. [{"role": "user", "content": "Hello!"}]. | Yes             | `empty string` | No       |
| Message                | The message that will get sent to OpenAi. It can be plain text, or a JSON conversation that follows this format [{"role": "user", "content": "Hello!"}]. | Yes             | `empty string` | Yes      |


## `Output Parameters Reference`

| Parameter                   | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| Store Output Message        | Stores the AI-generated response in the specified token.    |
| Store Entire Conversation JSON | Stores the entire JSON of messages exchanged between the user and the AI in the specified token. |
| Store Entire Output         | Stores the entire JSON response from OpenAI in the specified token. |

## `Examples`

### `1. Basic Chat`

This example demonstrates how to use the Chat action to get a response from the AI.  For example, you can import this JSON content into a workflow using the "Import Actions" button.

```json
[
  {
    "Id": -1,
    "ActionErrorMessage": null,
    "ActionType": "OpenAi.Chat",
    "Condition": null,
    "Description": null,
    "IsDeleted": false,
    "EventName": "",
    "Parameters": {
      "ApiKey": null,
      "Model": {
        "IsExpression": false,
        "Expression": null,
        "Value": "gpt-3.5-turbo"
      },
      "Instructions": "You are an helpful support assistant.",
      "PreviousMessageJson": null,
      "Message": "How can I fix my printer?",
      "StoreMessage": "AIResponse",
      "StoreEntireConversationJson": null,
      "StoreJsonResponse": null
    }
  }
]
```

This will send a message to the OpenAI API asking for help with a printer problem. The API response will be stored in the `AIResponse` token.