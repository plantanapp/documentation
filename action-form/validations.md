---
layout: default
---
# Validations

## Client Side Validation

Client side form validation is essential because it saves time and bandwidth. It gives you more options to point out to the users where they are filling the form in a wrong way. This doesn't mean that you don’t need server side validation; server side validation is implicit and cannot be deactivated. It is possible that the people who visit your website to use an old browser or they have JavaScript disabled, which will break client side only validation. Client side and server side validations complement each other and they should not be used independently.

Client Side Validation is good to be used because of this two main reasons:

It is a fast form validation; if the user is filling the form in a wrong way, the alarm is activated when transmitting the form.
It sets up to display only one error at a time and focus on the wrong field; this way you help and ensure that the user is filling in correctly all the form fields.
In Action Form we've set-up an option to enable or disable the client side validation. Why? So that you can treat the Event on Validation Failed or maybe you want to implement your own validation logic.

![client side validation](/action-form/images/client-side-validation.png "client side validation")

## Validate form before submit

If you are trying to implement a minimum purchase amount on one of your forms and to create an action "if total < 25 then display message", in a Submit Button add the Display Error Message action, and in Condition add the syntax : **[Total] < 25** and add Message as you please. On Authorize.net action add the syntax: **[Total] >= 25.**

## Dynamically mark a field as required

Add 2 text fields, mark the second as required and under Validation > Condition use, for example, the following condition:

<b>[Field1] != ""</b>

So that the second field is required only when the first one is filled in - otherwise the validation doesn't occur.

## Validation when [Amount] > '0'

**Scenario:**

I have the following fields
Dock>Option 1|50.00>Option 2|100.00
Amount (this field has bind expression value [Dock])

Date2
this field has a bind expression show of [Amount] > '0'
I am trying to add a validation condition of [Amount] > 0

So I only want Date2 to show if [Amount] > '0' and only do validation if [Amount] > 0 but the validation is not working

**Solution:**

validation condition is evaluated server side.
This means that [DockR1] > 0 will never be true when the form is first rendered on server side.
After that, client side validation is still enabled.
The validation condition is evaluated again on server side on submit. But in order to get to the server side, the javascript validation must be disabled.

## Credit card validation

This is a regex that matches **Visa**, **MasterCard**, **American Express**, **Diners Club**, **Discover**, and **JCB**.
