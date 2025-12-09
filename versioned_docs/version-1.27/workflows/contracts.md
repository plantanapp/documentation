---
id: contracts
title: Contracts
sidebar_label: Contracts
---


> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Workflows`, `Parameters`
>
> Revised June 12, 2025

Workflow Contracts are a new feature in Plant an App (v1.27) designed to bring consistency, reuse, and structured requirements across multiple workflows. By defining standard input and output parameters in a contract, you ensure that all workflows assigned to that contract follow the same interface.

## `Typical Use Cases`

* Enforcing standard data requirements across multiple workflows.
* Ensuring all workflows related to a domain (e.g., Automobiles) accept and output the same parameters.
* Simplifying the management of integrations and automation by providing consistent workflow interfaces.
* Enabling dynamic invocation of workflows based on contracts.

## `Key Concepts`

**Contracts:**
A contract defines a fixed set of input and output parameters (including type, requirement, and description) intended to be shared by multiple workflows. Once a workflow is assigned a contract, those parameters are locked and enforced.

**Namespaces:**
Contracts and workflows can be organized into namespaces. Namespaces help group related contracts and workflows, such as all items related to “automobile”.

**Input and Output Parameters:**
Parameters defined at the contract level become required (or optional) fields that every workflow assigned to the contract must implement. Descriptions flow into all consuming workflows, improving documentation and user guidance.

**Contract Enforcement:**
When a contract is assigned to a workflow, the workflow inherits the contract’s parameters. Required fields are enforced and cannot be removed or changed in the workflow, except for providing default values for optional parameters.

## `Workflow Contracts Interface Overview`

* **Contracts Tab:** Shows all defined contracts.
* **Create New Contract:** Allows users to define standard inputs/outputs as well as namespace, names, and descriptions.
* **Edit Contract:** Modify the parameters, name, or description.
* **Duplicate Contract:** Make a copy for variation.
* **Export/Import:** Transport contract definitions between instances.
* **Delete:** Remove a contract (removes enforcement from all referencing workflows).

## `Input Parameter Reference: Contracts`

| Parameter Title (Default) | Description | Required | Example |
|-----------------------------|--------------------------------------------------------------------|----------|------------------------|
| Contract Name | The name of the contract | Yes | Automobile Information |
| Contract Description | Description of the contract | No | Info for autos |
| Namespace | Logical grouping for the contract | Yes | Automobile |

## `Input Parameter Reference: Contract Parameters`

| Parameter Title (Default) | Description | Type | Required | Example |
|---------------------------|--------------------------------------|---------------|----------|-------------------------------|
| Input Parameter Name | Name of the parameter | String | Yes | Year, Odometer |
| Type | Data type (integer, text, decimal, etc) | Selection from Dropdown | Yes | Text|
| Required | Whether parameter is mandatory | Boolean | No | checked / unchecked |
| Description | Description, shown as tooltip/help | String | No | "The four-digit year required"|

## `Output Parameter Reference: Contract Outputs`

| Parameter Title (Default) | Description | Type | Required | Example |
|---------------------------|------------------------------------|----------|----------|-------------------|
| Output Parameter Name | Name of the output parameter | String | Yes | resultJson |
| Description | Description of the output parameter| String | No | JSON response |

## `How to Use Workflow Contracts`

### `1. Creating a Contract`

1. Go to **Configuration > Workflows > Contracts Tab**.
2. Click **New** to open the contract interface with tabs: Settings, Input, Workflows, Output.
3. Fill in contract name, description, and select or create a namespace.
4. In the **Input** tab, define the input parameters, set their types, required status, and descriptions.
5. In the **Output** tab, define the output parameters (e.g., `resultJson`).
6. Save the contract.

### `2. Assigning a Contract to a Workflow`

1. Go to **Configuration > Workflows > Workflows Tab**.
2. Create or edit a workflow.
3. In workflow Settings, select the contract to enforce from the Contract dropdown.
4. The workflow will display contract-enforced input/output fields; required fields are locked and shown with description tooltips.
5. Add process logic and ensure any outputs required by the contract are set.
6. (Optional) Add additional workflow-specific inputs or outputs (these will be editable).

### `3. Importing, Exporting, and Editing Contracts`

* Use the options on the Contracts tab (pencil for edit, copy for duplicate, down-arrow for export, and trash bin for delete).
* Deleting a contract will remove contract-enforcement from all associated workflows (but leave parameters; no longer enforced).
* Re-importing a contract allows you to manually re-associate workflows with that contract.

## `Special Notes`

* When a contract is deleted, associated workflows retain the previous parameters but they become fully editable and are not contract-enforced.
* You can change a workflow from one contract to another; inputs/outputs are adapted accordingly.
* Workflow contracts show tooltips (“Enforced by Contract {ContractName}”) to indicate contract origin of parameters.

## `Interaction with the Execute Workflow Action`

The `Execute Workflow` action is able to filter and select workflows by contract. This has several benefits:

- The workflow dropdown filters to only workflows implementing the selected contract.
- When a contract is chosen, all input parameters required by the contract are available in a dropdown list for mapping.
- The `base output token name` can be used to retrieve outputs dynamically, including those defined in the contract.

### `Execute Workflow - Input Parameter Reference`

| Parameter Title (Default) | Description | Required | Example |
|-----------------------------------|--------------------------------------------------------------|----------|--------------------------|
| Filter by Contract | Restricts the workflow dropdown to those matching the contract | No | Automobile Information |
| Workflow | The selected or dynamic workflow to execute | Yes | Process Automobile |
| Workflow Inputs | Values for workflow’s input parameters | Yes | Year / 2020 |


## `Related`

| Feature/Action Name | Description |
|--------------------- |-------------------------------------------------------|
| Workflow / Execute Workflow | Run another workflow, now with contract-based filtering and input guidance.|
| Workflow / Execute {workflow name} | Actions for workflows, including new auto-generated execute actions for each workflow. |

## `Troubleshooting & Tips`

* If you delete a contract, affected workflow parameters become editable but lose contract enforcement.
* When updating a contract, review all dependent workflows for required changes.
* Use namespaces to organize contracts and workflows for clarity.
* Export contracts for backup or reuse in other environments.

