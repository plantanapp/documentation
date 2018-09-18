# Context

## Change User

This action identifies the existing user by the ID, Username or Email address and allows you to set up some actions so that the users can be changed. 

## Inject Data

The context is like a container where actions can read and write data. The Inject Data action can manually write data into the context and each piece of data in the context is stored under a name and can be accessed through tokens using that name. You can use this action to load data that other actions down the stack need. The values inserted into context can be constant text or tokens, including tokens created with My Tokens. When loading over a name that already exists will overwrite the existing data.

## Load User

A method is executed and runs in the context of a user action. It could be the current user performing the action or it could be the result of other actions. This action lets you manually set a user.