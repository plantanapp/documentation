---
id: script-examples
title: Script Examples
sidebar_label: Script Examples
---

> Audience: `Citizen Developer`
>
> Skill Prerequisites: `Razor Syntax`, `Tokens`

# Razor Script (experimental): Working Script Examples

This article presents a series of fully working **Razor Script (experimental)** examples, each with a detailed description. These samples are ready for you to use as-is or adapt for your Plant an App project. Each script demonstrates different aspects of the Razor context available in this token type.

****

## 1. Working with the Module Object

**Description:**
This script lists all properties of the current DNN Module object, displaying both their names and values in a table. It also provides simple examples of how to access and print specific module properties.

```csharp
@inherits PlantAnApp.Tokens.Core.RazorTokenBase

@using System.Linq

@{
var moduleInfo = Module;
var moduleType = moduleInfo.GetType();
var moduleProperties = moduleType.GetProperties()
.OrderBy(p => p.Name)
.ToArray();
}
<h1>Module</h1>
<h2>Examples</h2>
<p>
You can display the module title using <b>@@Module.ModuleTitle</b>: @Module.ModuleTitle<br />
or the module id using <b>@@Module.ModuleID</b>: @Module.ModuleID<br />
</p>
<h2>Property Dump (Sorted A–Z)</h2>
<table style="border-collapse: collapse; width: 100%;">
<thead>
<tr>
<th style="border: 1px solid #ccc; padding: 6px;">Property</th>
<th style="border: 1px solid #ccc; padding: 6px;">Value</th>
</tr>
</thead>
<tbody>
@foreach (var prop in moduleProperties)
{
var value = "null";
try {
var propValue = prop.GetValue(moduleInfo, null);
value = (propValue != null) ? propValue.ToString() : "null";
} catch (Exception ex) {
value = string.Format("[Error: {0}]", ex.Message);
}

<tr>
<td style="border: 1px solid #ccc; padding: 6px;">@prop.Name</td>
<td style="border: 1px solid #ccc; padding: 6px;">@value</td>
</tr>
}
</tbody>
</table>
```

****

## 2. Accessing Portal (Site) Information

**Description:**
Displays all properties of the current DNN Portal (site) object and gives examples of how to print specific portal fields.

```csharp
@inherits PlantAnApp.Tokens.Core.RazorTokenBase

@using System.Linq

@{
var portalInfo = Portal;
var portalType = portalInfo.GetType();
var portalProperties = portalType.GetProperties()
.OrderBy(p => p.Name)
.ToArray();
}

<h1>Portal</h1>
<h2>Examples</h2>
<p>
You can display the <b>@@Portal.DefaultPortalAlias</b>: @Portal.DefaultPortalAlias<br />
or the <b>@@Portal.HomeDirectoryMapPath</b>: @Portal.HomeDirectoryMapPath<br />
</p>
<h2>Property Dump (Sorted A–Z)</h2>
<table style="border-collapse: collapse; width: 100%;">
<thead>
<tr>
<th style="border: 1px solid #ccc; padding: 6px;">Property</th>
<th style="border: 1px solid #ccc; padding: 6px;">Value</th>
</tr>
</thead>
<tbody>
@foreach (var prop in portalProperties)
{
var value = "null";
try {
var propValue = prop.GetValue(portalInfo, null);
value = (propValue != null) ? propValue.ToString() : "null";
} catch (Exception ex) {
value = string.Format("[Error: {0}]", ex.Message);
}

<tr>
<td style="border: 1px solid #ccc; padding: 6px;">@prop.Name</td>
<td style="border: 1px solid #ccc; padding: 6px;">@value</td>
</tr>
}
</tbody>
</table>
```

****

## 3. Exploring Tab (Page) Properties

**Description:**
Lists all properties for the current DNN Tab (page) and demonstrates how to directly access fields such as `FullUrl` or `Title`.

```csharp
@inherits PlantAnApp.Tokens.Core.RazorTokenBase

@using System.Linq

@{
var tabInfo = Tab;
var tabType = tabInfo.GetType();
var tabProperties = tabType.GetProperties()
.OrderBy(p => p.Name)
.ToArray();
}

<h1>Tab</h1>
<h2>Examples</h2>
<p>
You can display the <b>@@Tab.FullUrl</b>: @Tab.FullUrl<br />
or the <b>@@Tab.Title</b>: @Tab.Title<br />
</p>
<h2>Property Dump (Sorted A–Z)</h2>
<table style="border-collapse: collapse; width: 100%;">
<thead>
<tr>
<th style="border: 1px solid #ccc; padding: 6px;">Property</th>
<th style="border: 1px solid #ccc; padding: 6px;">Value</th>
</tr>
</thead>
<tbody>
@foreach (var prop in tabProperties)
{
var value = "null";
try {
var propValue = prop.GetValue(tabInfo, null);
value = (propValue != null) ? propValue.ToString() : "null";
} catch (Exception ex) {
value = string.Format("[Error: {0}]", ex.Message);
}

<tr>
<td style="border: 1px solid #ccc; padding: 6px;">@prop.Name</td>
<td style="border: 1px solid #ccc; padding: 6px;">@value</td>
</tr>
}
</tbody>
</table>
```

****

## 4. User Object: List and Access Properties

**Description:**
Displays properties and values for the current logged-in user. It includes examples of how to access user fields such as `DisplayName` and `UserID`.

```csharp
@inherits PlantAnApp.Tokens.Core.RazorTokenBase

@using System.Linq

@{
var userInfo = User;
var userType = userInfo.GetType();
var userProperties = userType.GetProperties()
.OrderBy(p => p.Name)
.ToArray();
}

<h1>User</h1>
<h2>Examples</h2>
<p>
You can display the <b>@@User.DisplayName</b>: @User.DisplayName<br />
or the <b>@@User.UserID</b>: @User.UserID<br />
</p>
<h2>Property Dump (Sorted A–Z)</h2>
<table style="border-collapse: collapse; width: 100%;">
<thead>
<tr>
<th style="border: 1px solid #ccc; padding: 6px;">Property</th>
<th style="border: 1px solid #ccc; padding: 6px;">Value</th>
</tr>
</thead>
<tbody>
@foreach (var prop in userProperties)
{
var value = "null";
try {
var propValue = prop.GetValue(userInfo, null);
value = (propValue != null) ? propValue.ToString() : "null";
} catch (Exception ex) {
value = string.Format("[Error: {0}]", ex.Message);
}

<tr>
<td style="border: 1px solid #ccc; padding: 6px;">@prop.Name</td>
<td style="border: 1px solid #ccc; padding: 6px;">@value</td>
</tr>
}
</tbody>
</table>
```

****

## 5. Using @functions: Show Squares of Numbers

**Description:**
Demonstrates defining and using a function inside a Razor Script. The function computes the square of an integer, which is applied to a sample list of numbers.

```csharp
@inherits PlantAnApp.Tokens.Core.RazorTokenBase

@*
Razor Script: Display Numbers and Their Squares

Description:
Demonstrates how to define and use a function inside a Razor script.
This script declares a list of integers, defines a `Square` function,
and renders a list of each number alongside its square.

*@

@{
// Define a list of integers
var numbers = new List<int> {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
}

<h2>Numbers and Their Squares</h2>

<ul>
@* Iterate over each number and display its square *@
@foreach (var n in numbers)
{
<li>@n squared is @Square(n)</li>
}
</ul>

@functions {
// Function to return the square of an integer
public int Square(int x)
{
return x * x;
}
}
```

****

## 6. Razor Helper: Render a List of Fruits

**Description:**
Shows how to define a Razor `@helper` to generate an unordered HTML list (`<ul>`) from a list of strings. The example renders a fruit list.

```csharp
@inherits PlantAnApp.Tokens.Core.RazorTokenBase

@* Define a helper that generates an unordered list from a list of strings *@
@helper RenderList(List<string> items)
{
<ul>
@* Loop through each string in the list and create a <li> element *@
@foreach (var item in items)
{
<li>@item</li>
}
</ul>
}

@{
// Create a sample list of fruit names
var fruits = new List<string> {"Apple", "Banana", "Cherry", "Orange"};
}

<h2>Fruit List</h2>

@* Render the fruit list using the helper function *@
@RenderList(fruits)
```

****

## 7. Using TokenParameters with Fallback Values

**Description:**
Demonstrates safe access of runtime token parameters, using try/catch blocks to provide default (fallback) values if a parameter is not present when the token is invoked.

```csharp
@inherits PlantAnApp.Tokens.Core.RazorTokenBase

@*
This Razor script is designed to read custom Token Parameters passed into the script at runtime.
It includes error handling to assign fallback (default) values when a parameter is not provided.
*@
@{
// Attempt to retrieve 'MinimumValue' from TokenParameters.
// If it does not exist, fall back to 0.
object minValue;
try {
minValue = TokenParameters.MinimumValue;
} catch {
minValue = 0;
}

// Attempt to retrieve 'MaximumValue' from TokenParameters.
// If it does not exist, fall back to 99.
object maxValue;
try {
maxValue = TokenParameters.MaximumValue;
} catch {
maxValue = 99;
}

// Attempt to retrieve 'Category' from TokenParameters.
// If it does not exist, fall back to a default string.
object category;
try {
category = TokenParameters.Category;
} catch {
category = "(default category)";
}
}

<h1>TokenParameters</h1>

<h2>Explanation</h2>
<p>
This script demonstrates how to safely access Token Parameters passed into a Plant an App Razor token.<br />
Each parameter is wrapped in a try/catch block to ensure the script remains functional even if some values are missing.<br />
Default values are used as fallbacks to prevent runtime errors.
</p>

<h2>Examples</h2>
<p>
The value of <b>@@TokenParameters.MinimumValue</b>: <code>@minValue</code><br />
The value of <b>@@TokenParameters.MaximumValue</b>: <code>@maxValue</code><br />
The value of <b>@@TokenParameters.Category</b>: <code>@category</code>
</p>
```

****

## How to Use These Examples

* Copy any example and use it as a **Razor Script (experimental)** token in Plant an App.
* If you want to test a TokenParameters example, make sure you invoke the token with the expected parameters set.
* Use the reflection/dump property scripts to explore the underlying DNN objects and discover available data fields for custom logic and display.
