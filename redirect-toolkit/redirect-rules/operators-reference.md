# Operators Reference


Operators are used in Redirect Toolkit to compare a Property against a value. Note that the value could be implicit in some cases and the value textbox will be disabled (for example *Is Mobile Device* property of Browser redirect provides *Is True* and *Is False* operators which don't require specifying the value - because *Is True Equals True* sounds confusing and doesn't bring any value).

In programming languages these are called **Binary Operators** (they compare two sides of the operator) and **Unary Operators**. In the reference below they will be marked differently.

## Text Operators

These operators compare Properties that return text, such as User First Name, Browser Name and so on.

* (binary) **Any Equals**<br>
Compares that any of the property values matches exactly the string you specify in the Value text box. If there is a match the redirect is executed. Note that this operator has two variants: case sensitive and case insensitive.
* (binary) **None Equals**<br>
Negation of *Equals* operator, it return true when none of the values equals what's been specified in the Value field. Note that this operator has two variants: case sensitive and case insensitive.
* (binary) **Contains**<br>
Checks to see if any of the property values contains the string you specify in the Value text box. The string can appear anywhere inside one of the property values. If it's found, then the redirect is executed. Note that this operator has two variants: case sensitive and case insensitive.
* (binary) **None Contain**<br>
Negation of *Contains* operator, it return true when none of the values contains what's been specified in the Value field. Note that this operator has two variants: case sensitive and case insensitive.

## Number Operators
These operators interpret text returned by Properties as numbers and provide related operators such as Greater Than that wouldn't make sense otherwise.

* (binary) **Equals**<br>
Compares that property equals the number you specify in the Value text box. If this is true, then the redirect is executed.
* (binary) **Doesn't Equal**<br>
Negation of *Equals* operator.
* (binary) **Greater Than**<br>
Compares that property is greater than the number you specify in the Value text box. If this is true, then the redirect is executed.
* (binary) **Less Than**<br>
Compares that property is less than the number you specify in the Value text box. If this is true, then the redirect is executed.
* (binary) **Greater Or Equal To**<br>
Compares that property is greater or equal to the number you specify in the Value text box. If this is true, then the redirect is executed.
* (binary) **Less Or Equal To**<br>
Compares that property is less or equal to the number you specify in the Value text box. If this is true, then the redirect is executed.

## Boolean Operators

These are unary operators that compare if properties are true or false, for example apply *Is True* operator for *Is Mobile Device* property to redirect mobile devices (from domain.com to mobile.domain.com). Apply Is False operator to redirect if the caller is not a mobile device (from mobile.domain.com to domain.com).

* (unary) **Is True**<br>
Redirects Fs the property is true
* (unary) **Is False**<br>
Redirects if the property is false
* (unary) **Is Unknown**<br>
Redirects if Redirect Toolkit can't really determine if a property is true or false. Note that no Boolean property is actually returning this except on unhandled exceptions, so please contact us if this happens.

## List Operators

These operators are used to check a value against a list of possible values. The classical example is the Role Name. Since a user can belong to multiple roles the equals operator does make much sense. Instead, we're interested whether any of the roles equals a certain value or none of the roles equal a certain value. That's when List Operators come to use. Note that the applicability is no limited to roles.

## Role Operators

Role redirect use special operators because they basically need to check a collection of values. For the *Role* property the operators are *Is In Role* and its negation *Is Not In Role*, which match user security roles.

The other property, *Role Name*, is used to apply condition based on string, so for example you want to match users in all roles that contain Customer in their name (could be Customer Contact, Customer Developer and Customer Designer roles).
So the operators are adjusted to say Any or All to determine either all roles need to match the value or just one of the role.