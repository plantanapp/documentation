---
id: Workflows 
title: Workflows
sidebar_label: Workflows
---


## `General Description`

A workflow consists of an orchestrated and repeatable pattern of activity, enabled by the systematic organization of resources into processes that transform materials, provide services, or process information. It can be depicted as a sequence of operations, the work of a person or group, the work of an organization of staff, or one or more simple or complex mechanisms.

From a more abstract or higher-level perspective, workflow may be considered a view or representation of real work. The flow being described may refer to a document, service, or product that is being transferred from one step to another.

Workflows may be viewed as one fundamental building block to be combined with other parts of an organization's structure such as information technology, teams, projects and hierarchies.

In Plant an App we have basically, lists of actions of various types to be performed in a sequence, optionally with conditional logic.

## `Type of Workflows`

* Business logic (defined in Workflows in the admin part)
* UI Logic (used mostly for UI logic inside forms, grids, APIs, scheduled jobs or guides)
* Though business logic can also be defined inline, it's not a good practice.

## `BPMN Overview`

### `Description`

[`Business Process Model and Notation (BPMN)`](http://www.bpmn.org/) is a graphical representation for specifying business processes in a business process model.

Originally developed by the Business Process Management Initiative (BPMI), BPMN has been maintained by the Object Management Group (OMG) since the two organizations merged in 2005. Version 2.0 of BPMN was released in January 2011, at which point the name was amended to Business Process Model and Notation to reflect the introduction of execution semantics, which were introduced alongside the existing notational and diagramming elements. Though it is an OMG specification, BPMN is also ratified as ISO 19510. The latest version is BPMN 2.0.2, published in January 2014.

### `How we use it`

In Plant an App we currently use only this subset of modules:

* Start
* Exclusive Gateway
* Activities
* End

#### `Start`

Each business process has some form of initiating event. In BPMN terminology, it is called a start event. It is basically the first event of the process.

#### `Exclusive Gateway`

An exclusive gateway, or XOR gateway is used to model a decision in a process definition.

When the execution of a workflow arrives at this gateway, all outgoing sequence flows are evaluated in the order in which they are defined. The sequence flow whose condition evaluates to true, is selected for propagating the token flow.

* In general in BPMN 2.0, all sequence flows whose conditions evaluate to true are selected to continue in a parallel way. When using an exclusive gateway, only one sequence flow is selected.
* When multiple sequence flows have conditions which evaluate to true, only the first one defined is selected to continue the process.
* If no sequence flow can be selected, an exception will be thrown. To ensure a sequence flow will always be selected, have no condition on one of your flows. No condition will always evaluate to true.

#### `Activities`

Activities are the building blocks of BPMN 2.0, there would be no business process without them. In Plant an App we use activities as **Actions** which helps us build the flow model.

#### `End`

In business process modeling, every process has an ending. In BPMN, every path in every process must lead to an end event. Every process starts with a start event, moves through activities and gateways, and then reaches an end. When a business process model reached an end event, it is complete. When a sub process reaches an end event, the process flow returns to the parent process.

### `Difference`

The main difference between BMPN.io and PlantAnApp Workflows is that in our platform, we create an executable model, not only the visual part (flowcharts). When you create a Workflow, you made a sequence of actions that create behind an entire model, from creating an user and giving him some platform roles to the ability to the ability to create some invoices for a purchase.

From a technique perspective a Workflow can be considered a reusable method.

## `Workflows (Business logic)`

### `Scope isolation`

Workflows have an isolated scope which means that it will not have access to the context variables from where the workflow was executed and all the values that are required for the workflow to work need to be passed as input parameters.

Data must explicitly come in as input parameters but concept this also applies to the output parameters. To set variables in the context where the workflow was executed you will have to specify explicitly what comes out as output parametersData can come into the execution context of the workflow also from other sources except the input parameters. For example Run SQL Query or Server Request.

Consider passing the variables you need via input parameters if the data is stored in locally (eg: Entities) and use other actions to get external data in execution context. It is recommended to keep the actions inside the workflow when external data is required and not outside the workflow. Managing the workflow is easier than preparing the input variables each time before execution which results in less code to maintain.

### `Input Parameters`

#### `Naming Constraints`

Only Alphanumeric characters are allowed (A-Z+0-9, case insensitive) and no white spaces.

#### `Types`

There are 2 types of input parameters **Primitive** and **Entities**.

Primitive input parameters will restrict the variables that come in to be of that type (eg: Number) or validate them to be in the right format (eg: Email). The token will contain the exact value that was passed.

Entities input parameters need to be passed as Id's of the Entities (integers). The workflow will validate if the row of entity exists.  The tokens generated will contain the data about the whole row.

Examples:

* `[InputParams]` - Display Name
* `[InputParams:Id]` - id of the record
* `[InputParams:<PropertyName>]` - gives access to entity properties value

*Input parameters are optional.*

### `Output Parameters`

Naming Constraints

Only Alphanumeric characters are allowed (A-Z+0-9, case insensitive) and no white spacesYou will need to specify the name of the output variable and the value of it. The values that are outputted can be either a free text or a token from inside the workflow execution context. (eg: `[Entity:Property]` or `[MyValue]`). Those values will be passed back where the Workflow was executed from.

### `Process`

#### `What are actions`

Actions are blocks of code that are packed and ready to use in a workflow. There are various actions out of the box that can interact with the stored data (Run SQL query, Read Entity), external data (Server Request), deliver messages (Send Email),business logic (Execute JavaScript (Server)) or modules themselves (Execute JavaScript and stop ,Refresh Grid)  They only need parameters/configurations to work and deliver business logic. Usually actions need some input parameters and based on them will execute their specific code. Some of the actions also have output tokens, the result of the code being executed, that can be used in the next actions. This will give you the ability to create complex flows and obtain your custom business. When the workflow ends you can attach the output tokens from the actions to the output parameters of the workflow.

#### `How to action to a workflow`

Action can be added to from the top bar in the workflow interface from the Add action Button or Imported from another exported action by copy/pasting the JSON configuration.

Alternatively you can add a new action from the small icon set next to an existing action (or start block) when it is selected. The icon for the new action is the rectangle.

For both options an popup will open and the list of the available action will show. You can search on the top for a specific action while the list can get pretty big in time.  After you choose an action by clicking on it the configuration popup will show. Click on save at the bottom of the popup to save the action after you configure it. Configuring the action is not required at this point and it can be saved blank.

#### `How to configure them`

After you add an action you can click on it and a small icon set will appear on the right. The Action settings button is the wrench. By clicking it an settings popup will show up and you start configuring the action. When you are done click on save at the bottom of the popup to save the action.

#### `How to access input parameters`

Input parameters can be accessed as tokens directly in the actions (eg: [MyParam]).Keep in mind that the entities input parameters are expanded and you can access all the data of the entity (eg: [MyEntityParam:Property] or [ MyEntityParam :Id])

#### `How to access other data through actions or tokens`

Other data can be accessed with specific actions that read data from different sources. For example you can read other entities data based on a Server Request. This data came into the execution context without being based as an input parameter. Some actions that we can list in this category: Run SQL Query, Server Request, Read Entity Data also can come from Tokens (the module). By passing some of the input parameters to the token for example it can bring back a HTML code that can be used in Generate PDF action to obtain a PDF document.

#### `Execution Context`

The tokens available in the execution of a workflow are the input parameters and all the other output tokens that were generated form the action of the workflow.
Those tokens are available from the start of the execution of the workflow until the end. For more details read the Execution Context article

#### `Listing`

The workflow builder comes with build in validation to keep the workflow building easy and without errors. You can find the errors if any in the workflow at the bottom of the page or as a 'x' in a red circle near each action that has an error. Hovering over each error will describe the issue.

### `Testing workflows`

![Workflow](/static/img/Workflow.png)

After creating a Workflow, it can be tested using the `Test Workflow` button that looks like a play button in the right part of the page, on the workflow line that you want to test.

If the workflow doesn't have input parameters, when trying to test it, a pop-up will appear that warns about workflow not having required parameters to be executed. After this pop-up, hitting the `Run` button will execute the workflow and in the bottom of the page will appear a message displaying how long it took for the workflow to execute and if output parameters are set, they will be displayed there, with the returned values.

If the workflow does have input parameters, the previous warning pop-up will now contain the input parameter(s) name(s) and for each one an empty field to be completed. The workflow executes and returns the same thing as before after hitting the `Run` button.

If the workflow has any error, the error message will be displayed in the bottom of the page.

## `UI Logic`

After you can create the Workflow you have a very powerful tool on your hands and need to integrate it in different scenarios. It can be used as an action called `Execute Workflow` which calls it and execute the whole logic behind it  used on every product that supports the ability to execute an action, such as Form, Listing, Automation, API, Guides.

You use the workflow after you finish the frontend Actions (eg: closing an form from a pop-up, refreshing an listing grid) you then call the `Workflow` and create the backend part of the flow and use the `Output` of it in the following actions.

Common examples:

* A form that collects data from a user and on a button click generates a PDF with an graph based on the user's responses.
* From a grid, on a item button if you want to generate an Excel that contains the data from that row.
* On a specific date of the week it can be used to send a report based on the last week activity using the automation module.
