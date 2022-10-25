---
id: automation-history
title: History
sidebar_label: History
---

---
id: automation
title: Automation
sidebar_label: Automation
---

---
id: automation
title: Automation
sidebar_label: Automation
---

---
id: automation
title: Automation
sidebar_label: Automation
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)
> 
> Skill Prerequisites: `None`

## History

The history of job executions is accessible through the **`History`** button in the upper part of the Automation section menu.

<img src="/img/automation-history-main.png" alt="automation-history-main.png"></img>

The section gathers information about each job's execution as an audit trail. The default view of the History tab will show you a chronological list of the Jobs that have been triggered (with most recent Jobs at the top).

The logged parameters for each execution are:

<img src="/img/automation-history-main_2.png" alt="automation-history-main_2.png"></img>

* **`Job ID`** \- the Job's ID \(unique and automatically generated when creating a job\)\.
* **`Job Name`** \- customized name that has been defined for each Job\.
* **`Date`** \- the date when the job ran \(local time\, `MM:dd:yyyy` format).
* **`Start Time`** \- job start time \(local time\, `h:mm:ss` format).
* **`End Time`** \- job end time \(local time\, `h:mm:ss` format).
* **`Duration`** \- job execution duration time \(in seconds\, with 3 decimals\)\.
* **`Status`** \- job status \(either `Running`, `Success` or `Failed`).

The jobs list can be ordered according to each of the parameters above. A `Refresh` button is also present, which allows a History reload.

<img src="/img/automation-history-main_3.png" alt="automation-history-main_3.png"></img>

### `Details`

Each job entry is expandable by clicking the `Details` button (to collapse back, click the "X" button).

<img src="/img/automation-history-main_4.png" alt="automation-history-main_4.png"></img>

The Details section will provide you with further information about each job:

* `Report ID` \- the history log's unique ID for this particular event\.
* `Job ID` \- the ID of the job that was run\.
* `Trigger ID` \- the ID of the trigger that caused this particular job to execute\.
* `Data` \- this field is used when the `Debug Mode` box is checked in the job's settings (see the **Jobs** \> **Settings** page).

### `Search and Filters`

To help you navigate and find a particular job in the History section, a search box and multiple filters are available.

<img src="/img/history-filters.png" alt="history-filters.png"></img>

#### `Search box`

This filtering field accepts alphanumeric characters and will display all job entries that can be associated with the entered value. For example, when entering the value <strong><em>10</em></strong>, all jobs that have at least one numeric parameter (i.e. all except `Status`) corresponding or containing the specified value will be displayed.

We recommend being as specific as possible in order to get the best results.

To cancel the filter, simply click the "X" button next to it.

<img src="/img/history-filters_2.png" alt="history-filters_2.png"></img>

:::info

The `Search box` can work in conjunction with the other filters (see below).

:::

#### `Filters`

Specific filters are available to refine your search. Each filter lists all the available values for each parameter and allows you to select one or multiple values through a checkbox system. You can clear a specific filter type by clicking the "X" button or all the filters at one by clicking the `Clear All` button.

<img src="/img/history-filters_3.png" alt="history-filters_3.png"></img>

| Filter | Notes |
| ------ | ----- |
| *Job ID* | Allows to filter Jobs according to their unique numeric ID. |
| *Job Name* | Filters Jobs according to their customized name. |
| *Date* | Allows to filter Jobs by date. Has a search filed to help find a specific date, as well as `Select all`/`Clear all` shortcut buttons to help with mass list select and deselect. |
| *Status* | Filters Jobs according to their status (`Running`, `Success` or `Failed`). |

:::info

The Filters can work in conjunction with the `Search box` (see above).

:::