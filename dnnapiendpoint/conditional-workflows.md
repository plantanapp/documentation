# Conditional Workflows

## Summary

* Fields, Actions and Validations can be dynamically enabled based on Conditions
* A condition is a server side C# expression that evaluates to Boolean true/false
* Use conditions to control the flow of execution

On Input Data section, each field we add has three Condition boxes, a generic one which when is set to false it has the purpose to completely disable the field in order to not be used at all, and other two Conditions on the Validation and on the validation rules. Here you have the possibility to use tokens, let's say, that I want a field to be displayed only on mobile device, I should use a token like [Browser:IsMobileDevice] or, if I want to display a filed only on a certain browser, for example, on Internet Explorer, I have to use in Condition a token like: [BrowserIsInternetExplorer].

As for the validations, the Input Data fields have the a validation section where you can use the predefined rules we've implemented, more of this can be found on the [Validation](validation.html) page of the documentation.