# Default Values

Starting with version 1.6.1 it's possible to specify default values for tokens when there is no data to return.

There are two ways to specify default values:

* **Define Default Values in Token Wizard**

This method works only for custom tokens

* **Define Default Values Inline**

Default values are supplied when the token is invoked, this method works for any token and it will override the default value that is specified for custom tokens when they are defined.

The syntax is: **[MyNamespace:MyToken = My text value that is displayed if there is data returned by the token]**

For example, **[GET:SomeParam=21]** will return 21 if a parameter with name SomeParam doesn't exist in Query String.