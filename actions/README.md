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

There are cases when the environment doesn't support chunked transfers on which the flushable actions rely in order to properly function. In this situation, even though the action is supposed to return a partial response to the front-end (browser/user), this is going to happen only after all actions are executed (at the end of the execution). This leads to situations in which multiple partial results are sent to the browser the same time with the final result.

A test for the chunked transfers functionality was introduced in Action Form and Action Grid in order to warn you if you're using an environment(hosting) that doesn't support it and the flushable actions might not work as expected.
> The test was introduced in **ActionForm 5.0.422** and **ActionGrid 5.0.147**

![Flushable Actions Test](https://static.dnnsharp.com/documentation/flushable_actions_test.png)

The warning might show up if the HTTP protocol version used is HTTP2.
This is a new protocol which keeps the connections open in order to increase the load speed of pages. IIS 10, which currently ships with Windows Server 2016, negotiates and uses HTTP2 protocol with compatible client browsers (most of them already support HTTP2) **only on HTTPS connections** and uses by default chunked transfers.
> The test cannot detect HTTP2 protocol in versions before **ActionForm 5.0.502** and **ActionGrid 5.0.190**

If you want to double check that flushable actions work, despite the warning, you can use a simple action setup:

1. Add a 'Display Toast and Continue Execution' action with any message with a 'Hide (with transition^) after (ms)' property with 2000ms display time and set '2' as 'Stack Length'
2. Add a 'Run SQL Query' action with the following query, which will wait for 5 seconds:

    ```sql
    WAITFOR DELAY '00:00:05';
    ```

3. Add a 'Display Toast and Stop Execution' action with any message with a 'Hide (with transition^) after (ms)' property with 2000ms display time and set '2' as 'Stack Length'

If both toasts messages are displayed simultaneously after 5 seconds from submitting, then your environment does not support chunked transfers.
If the first toasts shows exactly when you click on the submit button, then the seconds one displays after 5 seconds from submitting, then your environment supports chunked transfers.
