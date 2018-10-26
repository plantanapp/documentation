# Page View Count

This type of redirect matches against the number of types current rule was evaluated. Based on how the rule is setup, the count can represent total number of checks, number of checks per user or number of checks per session.

<div style="text-align:center">

![](\../assets/redirect-by-view-count.png)

</div>

## Properties

Following properties are exposed:

* **Page View Count** - This property measures against the total number the rule has been evaluated. Note that DNN Core doesn't support this so the count is actually saved in the Rule.
* **View Count per User** - This property returns the number of times the rule was evaluated for current user. Note that Redirect Toolkit creates a new User Profile Property that it uses to save the counts.
* **View Count per Server Session** - This is basically same as View Count per User except the counts are saved in server session. The server session expires after a time of inactivity, at that time counts are reset. This is best understood if you think of it as View Count per Visit.
* *View Count per Browser Cookie**

## Operations

All properties are numbers and therefore all Number Operators apply.

## Examples

So when would you need this kind of redirect?
Here are just a few examples, they're not suppose to be limiting to what you can do with this type of redirect, only limit is imagination.

* **Inform users of outstanding event** (for example update to service agreement) - Set condition to *View Count per User Equals 0* to redirect to a Info page describing what's new. Next time user goes to original page the View Count per User is 1 so the rule won't execute again.
* **Measure item impact** - For example, let's say you have some promotions that you want to test before releasing them and you want to test each one on 100 visits to see how many clicks you get for each. Set rule so when *Page View Count Greater or Equal To 100* it redirects to a different page (maybe the second promotion you want to test).