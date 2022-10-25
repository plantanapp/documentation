---
id: api-actions
title: API Actions
sidebar_label: API Actions
---

---
id: api_actions
title: API actions
sidebar_label: APIs actions
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

## API Actions

This section lists and details the different actions you can define for your API.

|Action|Description|
|---|---|
|**`Code`**|allows to run code directly, be it [JavaScript](https://en.wikipedia.org/wiki/JavaScript) (on the server side), a [Razor script](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor), a [Token](https://en.wikipedia.org/wiki/Access_token) (an object encapsulating the security identity of the process – considered obsolete), or run a [PowerShell script](https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.2).   |
|**`Context`**|changes the context of the action by Change User (changing the user under which the action is taken), Create/Update [Tokens](https://en.wikipedia.org/wiki/Access_token), Inject Data (lets you add data (tokens) manually to the current execution context - considered obsolete), Load a specific User, or Load Users from SQL (via an SQL Query command).|
|**`Credential Store`**| allows you to add a credential store (a repository of security data, i.e., credentials) to the action; many credential stores are supported, from GitHub, UiPath and others. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for each credential store.|
|**`Data`**|setup a data manipulation action, such as clearing a cached item, importing values from a list into a database table, executing a specified SQL query and others. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Data manipulation section.|
|**`Documents`**|enables document manipulation; multiple actions are available, such as creating a CSV, a PDF, or an Excel file (along with other associated sub-actions) amongst others. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Document manipulation section.|
|**`Dynamics (CRM, 365)`**|allows you to run Microsoft Dynamics specific actions. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters Microsoft Dynamics actions.|
|**`Email`**|enables you to send an email under certain predefined conditions. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list of supported parameters for the email action.|
|**`Entities`**|allows Reading actions on Documents, Images, Roles, and Users. Specific conditions can be defined, as well the output Token of the action.|
|**`File Management`**|as the name implies, allows for various actions on files and folders (copy, delete, rename, unpack, etc.). Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the File Management section.|
|**`Flow`**|execute predefined actions, conditionally, asynchronously, repeatedly or stop the execution. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Flow section.|
|**`Lists & Objects`**|allows for actions on Lists and Objects; various options are available, from creating a list from a JSON file, from an SQL query, and Excel file and other sources. You can also extend an object or a lists' properties, remap it and so on. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Lists & Objects actions.|
|**`Logging`**|here you can set logging on a specific Event, Error, or a Debug message in the internal logs. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Logging actions.|
|**`Message`**|enables you to send a message using the [DNN Messaging system](https://www.dnnsoftware.com/docs/developers/included-modules/module-message-center.html) to a user, role or multiple users/roles. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Message actions.|
|**`Output`**|type of actions that will output result; available outputs are [JSON](https://www.json.org/json-en.html) (list or object), a file download based on your identifier or raw response (unformatted). Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Output actions.|
|**`Parsing`**|allows you to parse and modify inputs ([JSON](https://www.json.org/json-en.html), [XML](https://en.wikipedia.org/wiki/XML), [HTML](https://en.wikipedia.org/wiki/HTML)) into an output (Tokens, JSON, etc.); Regex (regular expressions - sequence of characters that specifies a search pattern) are also supported. Please see [here](https://learn.plantanapp.com/docs/faq) for a full list and supported parameters for the Parsing actions.|
|**`Portal Management`**|allows for various actions (create, delete, update, load page/portal) on a [DNN](https://en.wikipedia.org/wiki/DNN_(software)) portal. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Portal Management actions.|
|**`Redirect`**|use redirect (a forward from one URL address to a new one) actions; redirect to a Portal, URL or to a file download are available. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Redirect actions.|
|**`Security`**|security-specific actions (encryption, decryption) and Role’s setup for the specified portal (create, update, delete). Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the Security actions.|
|**`Slack`**|allows you to send a Slack message.|
|**`UiPath`**|allows you to run a UiPath robot.|
|**`User Management`**|various actions relating to user management on a platform: authorize, create, change, register, etc. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">here</a> for a full list and supported parameters for the User Management actions.|