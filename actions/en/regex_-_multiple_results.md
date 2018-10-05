### Regex - Multiple Results

When you want to parse multiple values at once from the same **Input**, you can set this as action on your method. An example where we used this action, is provided on the **API Methods** page, on the case where we created a method which is invoked from Server side from an HTTP request. Practically, pretty much the same action as **Regex**, just that gives you the possibility to display multiple results per request. Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **[SomeField] == "Some Value"**. This field supports **My Tokens**. 
* **EntryId**. A guid that uniquely identifies an entry. Can contain form tokens (for example **[Email]**) and **My Tokens**.
* **Input**. Can contain form tokens (for example **[Email]**) and **My Tokens**.
* **Regex Pattern**. Provide a rule to parse the Input expression (which can be a token that contains the value from another field or action) into new tokens.
* **Store CSV in token**. Format matched results as csv. Can contain form tokens (for example **[Email]**) and **My Tokens**.
* **CSV Field Separator**. Use semicolon if you open CSV Files with Excel and your region Format is set to other than English (United States). Left unselected , defaults to comma.
* **Store JSON in token**. Format matched results as json. Can contain form tokens (for example [Email]) and My Tokens.
* **Store xml in token**. Format matched results as xml. Can contain form tokens (for example **[Email]**) and **My Tokens**.
