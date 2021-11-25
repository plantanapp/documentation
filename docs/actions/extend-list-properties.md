---
id: extend-list-properties
title: Extend List Properties
sidebar_label: Extend List Properties
---


Extends a list with new properties. This action can be used both to bulk update all list entries of a type, or update entries one by one when used inside an "Execute Actions for each List entry" action.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| List Name | Name of the list type that you wish to update. Can contain My Tokens. | Yes | None |
| Properties | Both property name and value columns can contain My Tokens. | Yes | None |
| List Object Properties | You can add or replace properties on the list which references previously created objects. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. Can contain My Tokens. | Yes | None |
| List Properties | You can add or replace properties on the list which references previously created lists. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. Can contain My Tokens. | Yes | None |
