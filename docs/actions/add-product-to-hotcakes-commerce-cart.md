---
id: add-product-to-hotcakes-commerce-cart
title: Add product to Hotcakes Commerce cart
sidebar_label: Add product to Hotcakes Commerce cart
---


This action adds a product to the cart.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Product Sku | Sku of product to be added. | No | None |
| Product price | Specify a price if you don't want to use a default one. Can contain form tokens (for example [Price]) and My Tokens. | Yes | None |
| Product quantity | Specify the quantity. Can contain form tokens (for example [Quantity]) and My Tokens. | Yes | None |
| Increase quantity for same product same price | If true (the default Hotcakes behaviour) then when re-adding the same product with the same price will just increase the quantity. | No | None |
| Optional product name | Set a value if you want the cart item to appear with a name different from the default one. Can contain form tokens (for example [ProductName]) and My Tokens. | Yes | None |
| Tax schedule name | This should be equal to tax schedule name in Hotcakes. Can contain form tokens (for example [TaxScheduleName]) and My Tokens. | Yes | None |
| Choices | Optionally provide a list of choices values. Every product can have a number of predefined choices. Can contain form tokens (for example [ChoiceValue]) and My Tokens. | Yes | None |
| Product short description | Specify a custom html fragment to be displayed as the cart item description. Setting this will make the choices Not appear in the item description. Can contain form tokens and My Tokens. | Yes | None |
| Custom properties | Optionally provide a list of custom properties. This are usefull for integrating with external systems. Can contain form tokens (for example [PropertyValue]) and My Tokens. | Yes | None |
| Output Token Name | Specify a token name to save the order id into. You can access it later using the token syntax, for example [OrderId] | No | None |
