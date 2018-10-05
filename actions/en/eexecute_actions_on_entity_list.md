# Execute actions on entity list

This action will execute the given actions, for each item that belongs to the entity collection named in the EntityName option.  
To access field values from the currently iterated entity, in the actions from the list, you can use tokens that look like this:`[EntityName:EntityFieldName]`.

* Entity Name - set a name for the entity so you can reference it later by name. Can contain My Tokens.
* Filter - filter the entities in the list by setting a _field_ and its _value_. 
* Action List - actions that will be executed on each entity in the list. It refers the fields of the loaded entity through `[EntityName:EntityFieldName]` token. 
* Continue on error - continues to the next iteration even if the current one failed to execute.
* On Error - define a list of actions to run on error.  Otherwise, an error message is returned. It will contain the underlying error if debug mode is on.

![](http://static.dnnsharp.com/documentation/execute_actions_on_entity_list.png)



