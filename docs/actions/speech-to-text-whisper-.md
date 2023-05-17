---
id: speech-to-text-whisper-
title: Speech to Text (Whisper)
sidebar_label: Speech to Text (Whisper)
---

> Audience: [`Citizen Developers`](audience.md#developers)
>
> Skill Prerequisites: `Tokens`

This action extracts text from an audio file using the OpenAI Whisper API.

## `Typical Use Cases`

- Convert speech to text in an audio file
- Transcribe audio recordings into written content

## `Don't use it to`

- Extract text from non-audio files
- Transcribe audio content not supported by OpenAI Whisper

## `Related Actions`

_None_

## `Input Parameter Reference`

| Parameter           | Description                                                     | Supports Tokens | Default        | Required |
| ------------------- | --------------------------------------------------------------- | --------------- | -------------- | -------- |
| OpenAi API Key      | The API key for Open AI.                                        | Yes             | `empty string` | Yes      |
| Audio file          | Identifier for the audio file. Can be: RelativeUrl, AbsoluteUrl, LinkClickUrl, or PhysicalPath. | Yes             | `empty string` | Yes      |
| Response Format     | Choose from the following: json, text, srt, verbose_json, vtt. | Yes             | `json`          | No       |
| Prompt              | Optionally, provide additional instructions for OpenAi to use while creating the transcript. | Yes             | `empty string` | No       |


## `Output Parameters Reference`

| Parameter         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| Output Token Name | Stores the extracted text in a token with the specified name.         |

## `Examples`

### `1. Basic Example`

Extract text from an audio file and store the result in a token named "Transcript".

```json
[
  {
    "Id": -1,
    "ActionErrorMessage": null,
    "ActionType": "OpenAi.Whisper",
    "Condition": null,
    "Description": null,
    "IsDeleted": false,
    "EventName": "",
    "Parameters": {
      "ApiKey": "your_openai_api_key",
      "AudioFileIdentifier": "path/to/your/audio/file.mp3",
      "ResponseFormat": {
        "IsExpression": false,
        "Expression": null,
        "Value": "text"
      },
      "Prompt": null,
      "OutputTokenName": "Transcript"
    }
  }
]
```

For example, you can import this JSON content into a workflow using the "Import Actions" button.