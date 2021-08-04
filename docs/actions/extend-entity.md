---
id: extend-entity
title: Extend Entity
sidebar_label: Extend Entity
---


Extends an entity with new properties. This action can be used both to bulk update all entities of a type, or update entities one by one when used inside an "Execute actions on entity list" action.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Entity Name | Name the entity type that will wish to update. Can contain My Tokens. | Yes | None |
| Properties | Both property name and value columns can contain My Tokens. | Yes | None |
| Entity Object Properties | You can add or replace properties on the entity which references previously created entity objects. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. Can contain My Tokens. | Yes | None |
| List Properties | You can add or replace properties on the entity which references previously created entity lists. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. Can contain My Tokens. | Yes | None |
