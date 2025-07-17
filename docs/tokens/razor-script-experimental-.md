---
id: razor-script-experimental-
title: Razor Script (experimental)
sidebar_label: Razor Script (experimental)
---

> Audience: `Citizen Developer`
>
> Skill Prerequisites: `Tokens`, `Razor Syntax`

# Razor Script (experimental)

The **Razor Script (experimental)** token type enables advanced logic, layout, and rendering by leveraging Microsoft’s [Razor Web Pages](https://learn.microsoft.com/en-us/aspnet/web-pages/overview/getting-started/introducing-razor-syntax-c) syntax. Unlike the legacy Razor tokens, this new type is designed to support the full power of Razor Web Pages syntax and ecosystem—making it easier for developers to access modern Razor documentation and examples, and unlock more sophisticated scenarios within Plant an App.

> **Note**: This feature is marked as experimental. The API or behavior may change based on community feedback and ongoing improvements.


## Typical Use Cases

* Generate dynamic HTML views with rich C# (or VB) logic, loops, and branching.
* Build reusable partials for repeatable layouts or lists.
* Incorporate advanced Razor features like `@functions`, helpers, layouts, and `@RenderPage`.
* Directly manipulate and output data from Plant an App (e.g., users, modules, portal, custom queries).
* Easily edit and version control scripts as files via standard tools like VS Code.

****

## Key Features

* **Full Razor Web Pages Syntax** – Use modern Razor features, not limited to Plant an App’s legacy subset.
* **Supports C# and VB.NET** – Select your preferred language. Content is saved as `.cshtml` or `.vbhtml` based on your choice.
* **File-based Editing** – Razor script files are written to disk (with proper folder structure), allowing versioning and direct editing outside the Plant an App UI.
* **Token and Context Models** – Get access to Plant an App tokens, the current user, portal, page (tab), module, and runtime parameters.
* **Separation of Definition and Code** – Token metadata is kept in the database, but all script logic lives in a separate file on disk for easy management.
* **Version-Control Friendly** – Script files and their definitions are easily tracked in source control systems like Git.

****

## Where are Scripts Stored?

The script files are stored on disk, not in the database, using a structure like:

```
Portals/_default/PlantAnApp/Scripts/<TokenNamespace>/<TokenName>.<cshtml|vbhtml>
```
If the namespace is not global (not available on all portals), the path will be:
```
Portals/<PortalID>/PlantAnApp/Scripts/<TokenNamespace>/<TokenName>.<cshtml|vbhtml>
```
* **Namespace** is used for folder naming, and **Token Name** for the filename.
* **File Extension** depends on your language selection: `cshtml` for C#, `vbhtml` for VB.NET.

****

## Variables and Context Available in Scripts

Inside a Razor Script (experimental) token, you have access to the following context properties:

| Variable | Description |
|----------------------|----------------------------------------------------------------|
| `Tokens` | Access all defined Plant an App tokens. |
| `User` | The current authenticated user (DNN UserInfo object). |
| `Portal` | The portal/site information (DNN PortalInfo object). |
| `Tab` | The current page info (DNN TabInfo object). |
| `Module` | The current module info (DNN ModuleInfo object). |
| `TokenParameters` | Runtime parameters (as defined in token settings/invocation). |
| `Model` | Same as `TokenParameters` – provided for Razor syntax parity. |

**Tip:** Use the `@inherits PlantAnApp.Tokens.Core.RazorTokenBase` directive (automatically inserted if missing) at the top of your scripts to get all Plant an App context.

****

## Input Parameter Reference

| Parameter | Description | Supports Tokens | Required |
|-------------------|---------------------------------------------------|-----------------|------------|
| Code Language | Choose C# or VB.NET. Determines file extension. | No | Yes |
| Script | Your Razor code (C# or VB). | Yes | Yes |

****

## Output

The output of the Razor Script token is whatever is rendered by the Razor code. You can return plain text, HTML, or even structured markup as required by your scenario.

****

## Examples

### Example 1: Output Current User Name

```csharp
@inherits PlantAnApp.Tokens.Core.RazorTokenBase

<p>Hello, @User.DisplayName!</p>
```
This script outputs the display name of the current user.

****

### Additional Examples
See the `Script Examples` topic at left for additional examples.

****

## Security Considerations

Razor code executes on the server with broad access to system and application objects. **Never allow untrusted users to edit or inject code into Razor token scripts:** a malicious user could execute arbitrary server-side code.

****

## Tips and Tricks

* **Editing in VS Code:** Since your scripts are files, you can safely version them in Git and work locally via your favorite editor.
* **Version Control:** Both the token definition and script file are included in version control (e.g., Plant an App’s MEO system).
* **Testing:** Changes saved via the file system or AppBuilder are recognized immediately on next use.

****

## Limitations & Gotchas

* **Partial Pages:** Only `RenderPage` is supported for sub-scripts, not `Html.Partial` (MVC only).
* **@model Directive:** Not supported; the `@inherits` directive is required and inserted automatically if omitted.
* **System/Global Namespaces:** Token scripts with "Available on all portals" are placed under the `_default` folder; otherwise, they use the specific portal’s ID.
* **Deleting Namespaces:** Removing a namespace will not automatically delete its script folder; clean up manually if needed.

****


## Migrating from Legacy Razor Tokens

If you are moving scripts from the legacy Razor format:
- Move your custom C# (or VB) code into the file-based Razor Script (experimental) type.
- Adjust code to use new context variables (`User`, `Portal`, `Tab`, etc.).
- Review any custom token parsing logic for compatibility with the more complete Razor Web Pages engine.

****

## Advanced Examples

See the Token Examples Library on Campfire.PlantanApp.com for full working samples, including:
- Dumping all module properties
- Using helpers and functions
- Complex HTML rendering with parameters

****

## FAQ

**Q: Can I create or edit scripts directly from the file system?**
A: Yes! Razor Script (experimental) files are designed to be edited in standard text editors and then committed via your usual version control workflow.

**Q: What happens if I edit a file outside the UI?**
A: The system detects changes and automatically clears DLL caches so the new code is used on the next execution.



