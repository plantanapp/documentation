---
id: test-connector
title: Test Connector
sidebar_label: Test Connector
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
> 
> Skill Prerequisites: `Connectors`, `Tokens`

The **Test Connector (Experimental)** action determines whether a connector can successfully connect to a remote service using its current configuration. This is particularly beneficial for verifying integration points before performing actual operations.

## `Typical Use Cases`

- Ensure connectors are correctly configured before deploying automation sequences.
- Debug connector issues by checking for specific error messages or exceptions.
- Automate testing of multiple connectors in batch processing scenarios.

## `Input Parameter Reference`

| Parameter            | Description                                                                                              | Supports Tokens | Default | Required |
|----------------------|----------------------------------------------------------------------------------------------------------|-----------------|---------|----------|
| Connector            | The specific connector to be tested. This will list all available connectors configured in the system.   | Yes             | `empty string` | No       |
| Output Token Name    | Optionally provide a token name to store the test results. This includes whether the test was successful, and detailed error messages if not. | Yes             | `empty string` | No       |

## `Output Parameters Reference`

| Parameter           | Description                                                             |
|---------------------|-------------------------------------------------------------------------|
| Output Token Name   | The given token name will store the result. It generates tokens:         |
|                     | - `[:IsSuccess]`: Boolean indicating the success status.    |
|                     | - `[:ErrorMessage]`: Captures any error message if failed. |
|                     | - `[:Exception]`: Captures any exception details if failed.|

## `Security`

**Caution**: Performing test connections to remote services should be handled securely. Ensure that connector credentials are properly secured and not exposed to unauthorized entities. Always review and verify connector configurations to prevent unintended data leaks or security vulnerabilities.

## `Examples`

### `1. Test a specific connector and capture outcomes`

In this example, we test a connector called "CRMConnector" and store the outcomes under a token named `TestResultToken`.

```json
{
    "Title": "Test Connector (Experimental)",
    "ActionType": "Connectors.Test",
    "Parameters": {
        "EntryId": "CRMConnector",
        "OutputTokenName": "TestResultToken"
    }
}
```

### `2. Multiple connector tests with dynamic results storage`

Testing two connectors and storing results in dynamically named tokens.

```json
{
    "Title": "Multi Connector Test",
    "ActionType": "ExecuteActions",
    "Parameters": {
        "ActionList": [
            {
                "Title": "Test Connector (CRM)",
                "ActionType": "Connectors.Test",
                "Parameters": {
                    "EntryId": "CRMConnector",
                    "OutputTokenName": "CRMTestResult"
                }
            },
            {
                "Title": "Test Connector (PaymentGateway)",
                "ActionType": "Connectors.Test",
                "Parameters": {
                    "EntryId": "PaymentGatewayConnector",
                    "OutputTokenName": "PaymentGatewayTestResult"
                }
            }
        ]
    }
}
```

## `Troubleshooting`

- **Connection Fails but No Error?** Double-check connector credentials and network configurations.
- **Unexpected Exceptions?** Investigate exception details captured in `[:Exception]`. This data is useful for debugging and might suggest configuration mismatches or service connectivity issues.

****
Revised 07/31/2025