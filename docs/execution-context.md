---
id: execution-context
title: Execution Context
sidebar_label: Execution Context
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `C#` `Data Structures` `JavaScript`

## Introductions

The execution context(Action Context) is the container in which all contextual information and dynamic information(tokens) during the execution of a workflow exists. The purpose of this container is to give you access to data, help us log failures and generally make your life easier by letting you know about what happens during the workflow.

## Context data and the types of workflows

There are two different type of workflows.
Inline workflows, which are defined in forms, grids and other modules.
And normal workflows, those which you can define in the Workflows section of the app.

One thing which should be noted about contextual data in both workflows is that they do not persist between runs and they are not shared across different inline workflows(i.e. initialization workflow and submit workflow of a form). The inline workflows execute at different times and all represent a different part of the life cycle of a module. While this statement will always hold true, no matter the number of workflows and which event they are defined on, data will be available to all actions in the same workflow in a subsequent order with the exception of some actions which will take a copy of the context and leave it untouched even after they executed.

## The contents of the context

The context holds data about the current environment, such as the user or the page, but also, information that is automatically injected such as:

- Form fields in the case of form
- Grid fields in the case of grids
- Input parameters for normal workflows
- Query String and POST data for APIs
- Database columns for database triggers and email information for mail triggers

More so, the data that is stored in the context is available in different forms for the user.

- Tokens when used inside actions
- C# variables when used in Razor actions
- JS variables when used in JavaScript actions

Depending on where it's used, a token can either come as a string, or be casted to it's actual type in the case of the Razor/JavaScript actions. Plant An App also tries to cast the values used for conditions to booleans whenever possible.

## Actions and their interactions with the context

Depending on the action used, it interacts differently with the context. Some actions take the context as it is during it's execution while others make a copy of the context and either leave the parent context untouched or it merges the modifications back in the original one, but no matter the behavior it has, after the end of the flow, the context is destroyed after the last action has executed or when a final action is used. In the case of async actions, which do one part of their execution at a moment and the another part at a later time, the context is saved in a persistent cache which is brought back from the database as soon as it's needed. An a form can also save it's field values as a type of mock context through the State actions.

There are some actions which can modify the metadata information inside the context such as  Load User, but this is generally an exception and it only applies to the Load User action.
Non-metadata information is easier to overwrite, usually done executing the Inject Data action, beware that injecting an empty string into a token of the context will not delete that token from the context, it will simply bring back an empty string every time that it's used after the Inject Data action.

In the case of recursive tokens, those which refer other tokens, they won't be replaced recursively unless a Apply Token actions is used with the necessary number of recursions.

The context is created from scratch every single run, this ensures no collisions or synchronization issues take place between the runs.
