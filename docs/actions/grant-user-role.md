---
id: grant-user-role
title: Grant User Role
sidebar_label: Grant User Role
---


Grants the currently logged user the specified security role. The expiration time is reset for each submit.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Role | Select the security role to grant. Supports expressions so you can also use DNN tokens and My Tokens. If multiple roles are specified, separate them by comma | Yes | None |
| Other Role Names | This allows to freely input the role names, so you can also use DNN tokens and My Tokens. If multiple roles are specified, separate them by comma. | Yes | None |
| Role Validity | Selecting the role validity period can be done in multiple ways:For a number of days (starting now) - the role is made valid from the current date, for the specified amount of days. Leave empty for indefinite validity.Date interval - the start and expiry date are selected through Date Pickers.For a number of days - Start Date will be selected using a picker, the expiry will be an offset in days from the Start Date. Leave empty for indefinite validity.Date interval (with tokens) - Specify both dates using tokens. Note that both dates must be in ISO format (YYYY-MM-DDThh:mm:ssTZD where TZD is Z for UTC or an offset in hours 00:00). You can use the [DateTime:Utc&#124;o] MyTokens token. Leave empty for indefinite validity. Extend a role validity period - If the role is already granted, this option will extend the expiration date by the number of extension days set. If the role is not already granted, this option will grant the role starting from today and it will be granted for the number of extension days set. If you enter a negative number, you will remove days from the expiration date or you will grant a role that already expired. | No | None |
| Extension Days | The number of days by which to extend a role | No | None |
| Start Date |  | No | None |
| Start Date Token |  | No | None |
| Expire Date |  | No | None |
| Expire Date Token |  | No | None |
| Role Expiration (days) | Select after how many days will the role expire. Leave blank to never expire. | No | None |
