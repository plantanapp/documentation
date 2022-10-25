---
id: automation-jobs-triggers
title: Job Triggers
sidebar_label: Job Triggers
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)
>
> Skill Prerequisites: `None`

## Automation Triggers

A list of Automation triggers handled by Plant an App, by category.

## `App Events`
|Trigger|Details|
|---|---|
|*App End*|Activated when an application is shutdown by IIS.|
|*App Error*|Fires when an unhandled exception is thrown; in the job context, the tokens `[Exception]`, `[ExceptionType]`, `[ExceptionMessage]` and `[ExceptionStack]` will be available with details of the error.|
|*App Idle*|Triggered when the application uses the CPU less than the threshold set. Useful to run background tasks that are not time critical.</br>**Has specific parameters** (see below).|
|*App Start*|This trigger fires once after an application (re)start.|
|*Begin Request*|This trigger fires at the beginning of every request.|
|*End Request*|This trigger fires at the end of every request.|

### ***`App Idle`*** triggers specific parameters
- `CPU Idle Threshold` - Allows definition of a CPU consumption percentage under which it will be considered at idle. Supported range: 20% (min) to 60% (max). This field supports tokens (see `Tokens` section).
- `Ideal CPU Frequency` - Defines the frequency with which this trigger fires if the CPU is at idle. Minimum frequency is 1 second. This field supports tokens (see `Tokens` section).
- `Maximum delay` - Specify the number of seconds that this trigger will wait if the CPU is busy at the moment of the *Ideal Frequency* (see above). The default and minimum value is 1 second. The trigger will always fire at the end of this period regardless of CPU load. This field supports This field supports tokens (see `Tokens` section).
- `Skip If Running` - Checking this option will cause the automation to skip executing this Job as long as the last execution is still in progress. This ensures that the job will not have multiple instances running in parallel.  

## `Database`
|Trigger|Details|
|---|---|
|*On Database Delete*|Fires when data is deleted from a predefined table. The job is fired once for every row that was deleted. Tokens are built automatically using column names, so you can reference the deleted row values inside actions using `[ColumnName:Before]` token syntax.|
|*On Database Insert*|Activates when data is inserted into a predefined table. The job is fired once for every row that was inserted. Tokens are built automatically using column names, so you can reference inserted values inside actions using the `[ColumnName]` token syntax.</br> The trigger also generates a token containing a JSON object with all the row data. You can reference it by using the `[Row:JsonData]` token.</br>|
|*On Database Update*|Activates when data is updated in a predefined table. The job is fired once for every row that was inserted. Tokens are built automatically using column names, so you can reference inserted values inside actions using the `[ColumnName]` token syntax.</br> The original value is available using the `[ColumnName:Before]` syntax. The trigger also generates a token containing a JSON object with all the row data (with the old and new values). You can reference it by using the `[Row:JsonData]` token.</br> If you need the JSON containing only the columns where data was actually modified, use the `[Row:ModifiedJsonData]` token.|
|*On Database Update Column*|Activates when data is updated in a named column. The job is fired once for every row that was inserted. Tokens are built automatically using column names, so you can reference inserted values inside actions using the `[ColumnName]` token syntax.</br>  The original value is available using the `[ColumnName:Before]` syntax .The trigger also generates a token containing a JSON object with all the row data (with the old and new values). You can reference it by using the `[Row:JsonData]` token.</br> If you need the JSON containing only the columns where data was actually modified, use the `[Row:ModifiedJsonData]` token.|

:::caution

⚠ Be careful when using a Trigger that updates and executes an Action (e.g. `Run SQL Query`) on the same table; it might recursively trigger the Action, resulting in database timeouts.

:::

## `Time`
|Trigger|Details|
|---|---|
|*Cron Trigger (advanced)*|Create a time trigger using a <a href="http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html" target="_blank">Cron Expression syntax</a>. Specify time in UTC.</br>. This field supports tokens (see `Tokens` section).|
|*One Time*|A trigger that will fire once, at a specified date and time (in UTC).|
|*Repeat Daily*|A trigger that fires every day at the specified time (in UTC).|
|*Repeat on Interval*|Create a trigger that will fire regularly, at a predefined interval. Set the `First Run` date and time (in UTC - the subsequent run times will be calculated from this reference point), the repeat `Interval` (integer) and the repeat time unit (*Seconds*, *Minutes*, *Hours* or *Days*).|

### ***`Time`*** triggers specific parameters
- `Skip If Running` - Checking this option will cause the automation to skip executing this Job as long as the last execution is still in progress. This ensures that the job will not have multiple instances running in parallel (does not apply to the `One Time` Trigger). 
- `On Misfire` - Determines what should be done if the precise time when the trigger should have been fired was missed, for example because all other threads were busy with other jobs. The two possible values are: `Run Now` or `Do Nothing`.


## `Users`

|Trigger|Details|
|---|---|
|*User AutoLogin Event*|Listens to the Plant an App *AutoLogin* events. The `[User:*]` tokens can be used to identify the account that was just logged in, and the `[ImpersonatorUserId]` token to identify the user that triggered the *AutoLogin*, if any. Otherwise its value is `-1`.|
|*User Created*|Activates when a new user is created. Tokens with user information are automatically added to the present context (such as `[UserID]`, `[Username]`, `[FirstName]`, `[LastName]`, `[Email]` or `[DisplayName]`).|
|*User Login Event*|Listens to the Plant an App user authenticated events. The `[User:*]` tokens can be used to identify the user that was just logged in.|