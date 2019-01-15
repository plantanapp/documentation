# Actions

From sending emails or SMS to making web service requests, processing payments, managing email marketing subscriptions or showing simple notification messages to the users, all these come as predefined actions for our modules.

Most of the actions are available in multiple modules thanks to a **common** area. The modules that share the common base of actions are:

* Action Form
* Action Grid
* API Endpoint
* Sharp Scheduler
* Infobox

The actions are executed on the back-end(server) and one single response is sent back to the front-end(browser), except for the flushable actions which are detailed below.

## Flushable Actions

There is also a special type of actions that send intermediary responses to the front-end(browser) even though the execution is not finished and continues.

They can be easily identified by their name which is always of type **"... And Continue Execution"**.

![Flushable Actions](https://static.dnnsharp.com/documentation/flushable_actions.png)

There are cases when the environment doesn't support chunked transfers on which the flushable actions rely in order to properly function; in this situation, even though the action is supposed to return a partial response to the front-end (browser/user) this is going to happen only after all actions are executed (at the end of the execution); this leads to situations in which multiple partial results are sent to the browser the same time with the final result.

A test for the chunked transfers functionality was introduced in Action Form and Action Grid in order to warn you if you're using an environment(hosting) that doesn't support it and the flushable actions might not work as expected.
> The test was introduced in Action Form 5.0.422 and Action Grid 5.0.147
> 
![Flushable Actions Test](https://static.dnnsharp.com/documentation/flushable_actions_test.png)