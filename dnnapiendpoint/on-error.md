# On Error Section

Beginning with build 1.1.17, we've created On Error section where a list of actions can be defined so that whenever the API actions fails, the list of On Error action gets executed. In order to have a better view of the method actions which have failed, you can use the following tokens:

* [ActionId] - where the error occurred
* [ActionName]
* [ActionDescription]
* [ErrorType] - type of exception
* [ErrorMessage] - exception.Message
* [StackTrace]

Scenario:

1. create a GET method with Load Entities SQL as action 
2. set on it an incorrect select sql statement
3. add Send Email action on the On Error section
4. use in the body of the email the tokens posted above
5. execute the method you've created and check the email