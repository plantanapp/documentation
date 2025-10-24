---
id: updating-custom-actions-for-plant-an-app-version-1-28
title: Updating Custom Actions for Plant an App Version 1.28
sidebar_label: Updating Custom Actions for Plant an App Version 1.28
---

# `Updating Custom Actions for Plant an App Version 1.28`

> Audience: [`Pro-Coders`](/audience.md#pro-coders)  
> Skill Prerequisites: `Custom Code Development`

This guide provides the required steps to update your custom actions to ensure compatibility with Plant an App version 1.28. These updates involve modifications due to significant changes between versions 1.27 and 1.28. Please ensure that your development environment is upgraded to version 1.28 before beginning this process.

## `Typical Use Cases`

- Ensuring custom actions remain functional after a Plant an App update.
- Leveraging new libraries and methodologies introduced in version 1.28.

## `Example`
Watch a [video](https://www.loom.com/share/1aa6544806ea4316923e3468458d71fe) of a simple project being updated for version 1.28.

## `Essential Steps for Updating Custom Actions`

1. **Upgrade Development Environment**:  
   First, upgrade your development environment to version 1.28 to access the necessary DLL files.

2. **Add References**:  
   Include required references in your project:

   - Add a reference to `PlantAnApp.Abstractions.dll`:
     - Right-click your project in Visual Studio.
     - Select `Add -> Select Assembly Reference...`.
     - Search for `Plantanapp.Abstractions` and click "OK".<br /><img src="/img/ver_128_migrating_actions_VS_Add_Assembly.PNG" alt="ver_128_migrating_actions_VS_Add_Assembly.PNG"></img><br /><img src="/img/ver_128_migrating_actions_abstractions.PNG" alt="ver_128_migrating_actions_abstractions.PNG"></img>

   - If your action uses `IActionResult`, also add a reference to `PlantAnApp.Actions.dll`.

3. **Namespace Imports**:  
   In your action file, import the following namespaces using `using`:

   ```csharp
   using PlantAnApp.Actions;
   using PlantAnApp.Actions.Context;
   using PlantAnApp.Actions.Result;
   ```

4. **Token Context Changes**:  
   If tokenization is used, replace calls from `context.ApplyTokens` to `context.Tokenizer.ApplyTokens`.

5. **Update Data Store References**:  
   Substitute `context.DataStore` with `context.Data`.

6. **Field and Parameters Changes**:  
   - Replace `ContextField` with `ContextObjectField`.
   - Replace `TokenParameters` with `ITokenizer`.

7. **Context Entity Changes**:  
   Instead of `ContextEntity`, use `ContextObject` 

## `Modernizing Migrated Actions`

To fully modernize your migrated actions, consider the following steps:

1. **Switch to `IAction`**:  
   Transition from `IActionImpl` to `IAction`.<br /><img src="/img/ver_128_migrating_actions_switch_to_IAction.PNG" alt="ver_128_migrating_actions_switch_to_IAction.PNG"></img>


2. **Use Dependency Injection**:  
   Implement dependency injection through constructor parameters instead of `IoCInjectable`.<br /><img src="/img/ver_128_migrating_actions_di_through_constructor.PNG" alt="ver_128_migrating_actions_di_through_constructor.PNG"></img>

3. **Remove Obsolete Code**:  
   - Remove `IoCInjectable` from inheritance.<br /><img src="/img/ver_128_migrating_actions_remove_IoCInjectable.PNG" alt="ver_128_migrating_actions_remove_IoCInjectable.PNG"></img>
   
   - Discard `[IoCService]` decorator.<br /><img src="/img/ver_128_migrating_actions_remove_IoCService_Decorator.PNG" alt="ver_128_migrating_actions_remove_IoCService_Decorator.PNG"></img>

   - Ensure you add a parameterized constructor to facilitate dependency injection.<br /><img src="/img/ver_128_migrating_actions_parameterized_constructor.PNG" alt="ver_128_migrating_actions_parameterized_constructor.PNG"></img>



## `Additional Notes`

- Ensure all empty usages of `DnnSharp.Common.Actions` are cleaned up from the codebase to prevent compilation errors.
- The switch from `TokenUtil.eTokenContext` to `PlantAnApp.Tokens.TokenContentContext` should be addressed by importing `PlantAnApp.Tokens` and using `TokenContentContext.Plain`.

Revised 10/24/2025