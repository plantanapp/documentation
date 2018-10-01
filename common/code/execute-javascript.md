# Execute Javascript

This action will allow you to execute javascript code on a click of a button, similar to the code you usually write in the on change/click field of a button/form field.

**IMPORTANT:** The javascript code that you run using this action will execute by following the natural order of the actions on the button \(ex: first run an sql query and then run javascript code\) while the javascript code you write on the on change/click field will be executed before all actions on the button.

With this action you will also be able to:

* condition the execution of the code by using boolean expressions \(or conditions that upon execution will evaluate to true/false\)
* run multiple final actions available in the public APIs \(like initform, openpopup, closemodal,....\)

![execute](https://static.dnnsharp.com/documentation/execute_javascript.png)

You have 2 options for this action:

* Execute Javascript Code And Continue Execution
* Execute Javascript Code And Stop Execution

![js](/common\assets\stop-continue-execution.png)

The first one is recommended when you want to have another action after this one, and the second one is recommended when this action will be the last one.