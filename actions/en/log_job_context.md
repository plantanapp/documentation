# Log Job Context

Does exactly what it says: simply logs the job context. Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **[SomeField] == "Some Value"**. This field supports **My Tokens**. 
* **Message**. Optionally send a message into the log. Can contain context tokens (for example **[ContextTokenName]**) and **My Tokens**.

![](log_job_context.png)