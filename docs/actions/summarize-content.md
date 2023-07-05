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

## `About "Detail Level"`
[](#inlinedoc-detail-level)
The selection of a summarization Detail Level results in specific instructions being passed to OpenAI to guid the summarization.

| Detail Level | Instructions to OpenAI |
|---|---|
| Brief |You are an assistant that creates brief summaries. Return just the summary.|
|Normal|You are an assistant that creates rich summaries. Make sure to capture all ideas that are not considered public knowledge. Return just the summary.|
|Detailed|You are an assistant that creates structured, detailed and accurate descriptions from content. Make sure to capture details of all ideas, and capture extra details when the content is likely not public knowledge. Skip mentioning conclusions.|


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


### `2. Summarizing a Documentation Page`

In the examples below, the Plant an App [Audience](https://learn.plantanapp.com/docs/current/audience) documentation page was summarized using different Detail Levels.

#### Brief

Plant an App is a low-code development platform meant for various stakeholders involved in the development process. The platform caters to different roles, including Business Users, Citizen Developers, Low-Code Engineers, Software Developers, and System/Security Administrators. 

- Business Users from the stakeholder side are able to make many application changes independently, reducing back and forth communication. 
- Citizen Developers perform most of the application development while understanding business requirements and processes. 
- Low-code Engineers write custom code and understand Plant an App to connect the code with other elements in the Execution Context. 
- Software Developers use Plant an App’s numerous extension points to add new platform functionalities without being forced to adopt a new development paradigm. 
- System/Security Administrators handle configuration of authentication for external systems, deployments, maintenance, and auditing of performance and security aspects. 

The platform is designed to be inclusive, flexible, and interactive to accommodate a range of business and technical skills.

#### Normal

Plant an App is a collaborative low-code development platform designed for various roles involved in application development. This includes Business Users, Citizen Developers, Low-code Engineers, Software Developers, and System/Security Administrators. 

Business Users usually come from the stakeholder side of a project, playing a critical role in making micro-decisions regarding the application such as email templates and form fields. 

Citizen Developers are technically savvy individuals who understand technology and concepts like HTTP Requests, back-end and front-end technologies, and database structure. 

Low-code Engineers, on the other hand, cater to the need for custom code, providing flexibility in the application. They understand low-code and have prior coding experience, primarily working with SQL, HTML/CSS, C#, and JavaScript.

Software Developers are responsible for extending the platform's functionalities by tapping into its over 30 extension points. They usually work with tools like Visual Studio and GitHub for functionality extension.

Lastly, System/Security Administrators handle tasks related to configuring authentication credentials for external systems, deployments, maintenance, and auditing for performance and security issues. 

The platform is designed to provide flexibility and enable different roles to contribute to an application's development process, fostering collaboration and efficiency.

#### Detailed

Plant an App is a collaborative low-code development platform designed for a range of roles involved in the software development process. These roles include business users, citizen developers, low-code engineers, software developers, and system/security administrators.

1. Business Users
These roles predominantly come from the stakeholder side of a project and are responsible for most micro-decisions regarding the application, such as email templates and form fields. They possess decision-making abilities, business understanding, and know-how of business tools. Examples include project managers, business analysts, small and midsize business owners (SMBs), department leads, and digital transformation leaders among others.

2. Citizen Developers
Citizen developers handle most of the application development, about 80% on average. Their role encompasses understanding business requirements and translating them into software. They are familiar with technical concepts like HTTP requests, backend and frontend technologies, and basic programming language skills, but they rarely have coding experience.

3. Low-code Engineers
This role necessitates advanced skills in a low-code environment along with prior coding experience. Low-code engineers write custom code and understand Plant an App's environment. They may also build the entire application in some cases. Identifiable as database developers and architects, backend software engineers, and frontend developers, among others.

4. Software Developers
Software Developers extend the Plant an App platform. They use traditional tools to add new functionalities like creating new actions and views. Even Software development teams not native to .NET can extend the platform through Microservices. The platform is designed to integrate existing tools like Visual Studio or GitHub. 

5. System/Security Administrators
Unlike the roles mentioned earlier, these tasks are oriented towards system configurations, external system authentication, deployment, maintenance, auditing performance, and security. Although listed under a single title, these tasks are usually divided among different individuals or teams. Examples include system administrators, security administrators, and compliance auditors. 

The documentation for Plant an App assigns each section to the appropriate audience, thus acknowledging the blend of skills needed for each role. The system is designed to save time by enabling users to make changes without a middleman directly and to accommodate the love for coding by not imposing a new development paradigm.