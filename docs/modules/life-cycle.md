---
id: life-cycle
title: Life Cycle
sidebar_label: Life Cycle
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)
> 
> Skill Prerequisites: `Actions`

# `Lifecycle`

Action Form starts out simple, but as soon as you start adding actions and manipulating data, it can get quite complex. Without understanding the life cycle of how Action Form operates with data, you’re down to trial and error, which can be a reason for frustration. This page demystifies this process.

## `Form Initialization`

When the form first loads, data can be preloaded into the form using many different settings. It’s very important to understand the order in which these apply, so you can plan the best architecture.

1) **A new blank form context is created.**
The context is just a repository where all data lives. Values of the form fields are automatically loaded into context, but you can also load data manually using actions such as Execute SQL or Inject Data.

2) **PreInit actions are executed.**
These are a stack of actions defined under the Form Events section. At this stage, load data into a context that you need to use inside the form fields (for example in default values or in the list of values of a dropdown).

3) **Load Default Values**
At this stage, Action Form injects the form tokens into the context, initializing them with the default values. If during the PreInit phase you’ve loaded data with a name the same as a form field, it will get overwritten by the field default value. If you want that to stick, move the action in the Init event.

4) **Load existing entry**
If a parameter named entry is present in the query string, Action Form will try to find a matching entry in the internal reports table. If it finds one, it loads its value into the interface, overwriting all values that were computed so far. This is how the Action Grid integration works.

5) **Init actions are executed.**
This is the final stage of initialization. Anything you inject into the context at this point will overwrite existing data. For example, add an SQL Action and match columns to field names.