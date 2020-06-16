---
id: grant-user-role
title: Grant User Role
sidebar_label: Grant User Role
---

> Audience: [`Business Users`](/docs/audience#business-users)<br/>
> Skill Prerequisites: `Permission Scheme`

## `Typical Use Cases`

- Assign roles to new users on registration
- Give access to resources for specific users
- Temporary give access to users

## `Related Actions`

| Action Name                                             | Description                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------------ |
| [Load Users](/docs/Actions/load-user.md)                | Can be used to grant roles to a single user or to a list of users. |
| [User Registration](/docs/Actions/user-registration.md) | Can be used to grant roles to a newly created user.                |

## `Input Parameter Reference`

| Parameter        | Description                                                                                    | Supports Variables |
| ---------------- | ---------------------------------------------------------------------------------------------- | ------------------ |
| Role             | Select the security role to grant from a list with all the roles in the application.                                | Yes                |
| Other Role Names | Freely input the role name(s) you want to grant. Multiple roles are separated by comma. | Yes                |
| Role Validity    | Set a validity period to the granted role.                                                     | No                 |

## `Examples`

### `1. Grant a User Role`

The action below register a new user and grants it the '[Citizen Developers]' Role. [Import it](/docs/Actions/Import-actions) into your application to see it in action.

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Grant the Citizen Developers role to testuser",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15918664760486108",
                "Parameters": {
                    "UsernameField": {
                        "Expression": "testuser",
                        "Value": "",
                        "IsExpression": true
                    },
                    "RegisterWithEmail": "",
                    "PasswordField": {
                        "Expression": "testpassword",
                        "Value": "",
                        "IsExpression": true
                    },
                    "RandomPass": "",
                    "EmailField": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FirstName": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "LastName": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "SendDnnMail": "",
                    "LoginIfExists": "",
                    "Authorization": {
                        "Expression": "",
                        "Value": "Authorize",
                        "IsExpression": false,
                        "Parameters": {}
                    }
                },
                "ActionType": "UserManagement_UserRegistration",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "User Management"
                    }
                }
            },
            {
                "Id": -1,
                "$_uid": "action15918664760483872",
                "Parameters": {
                    "RoleId": {
                        "Expression": "",
                        "Value": "6",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "RoleNames": "",
                    "DateSelectionMode": {
                        "Expression": "",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "ExtensionDays": "",
                    "StartDate": {
                        "Date": ""
                    },
                    "StartDateToken": "",
                    "ExpireDate": {
                        "Date": ""
                    },
                    "ExpireDateToken": "",
                    "RoleExpiration": ""
                },
                "ActionType": "GrantUserRole",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "User"
                    }
                }
            }
        ]
    }
}
```

### `2. Grant a User Role for a period of time`

The action below register a new user and grants it the '[Citizen Developers]' Role just for 30 days. [Import it](/docs/Actions/Import-actions) into your application to see it in action.

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Grant the Citizen Developers role for 30 days to testuser",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15918671753468384",
                "Parameters": {
                    "UsernameField": {
                        "Expression": "testuser",
                        "Value": "",
                        "IsExpression": true
                    },
                    "RegisterWithEmail": "",
                    "PasswordField": {
                        "Expression": "testpassword",
                        "Value": "",
                        "IsExpression": true
                    },
                    "RandomPass": "",
                    "EmailField": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FirstName": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "LastName": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "SendDnnMail": "",
                    "LoginIfExists": "",
                    "Authorization": {
                        "Expression": "",
                        "Value": "Authorize",
                        "IsExpression": false,
                        "Parameters": {}
                    }
                },
                "ActionType": "UserManagement_UserRegistration",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "User Management"
                    }
                }
            },
            {
                "Id": -1,
                "$_uid": "action15918671753464006",
                "Parameters": {
                    "RoleId": {
                        "Expression": "",
                        "Value": "6",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "RoleNames": "",
                    "DateSelectionMode": {
                        "Expression": "",
                        "IsExpression": false,
                        "Parameters": {},
                        "Value": "DateWithOffset"
                    },
                    "ExtensionDays": "",
                    "StartDate": {
                        "Date": ""
                    },
                    "StartDateToken": "",
                    "ExpireDate": {
                        "Date": ""
                    },
                    "ExpireDateToken": "",
                    "RoleExpiration": "30"
                },
                "ActionType": "GrantUserRole",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "User"
                    }
                }
            }
        ]
    }
}
```

## `Frequently asked questions`

**What happens when granting a role that the user already has?**

If a role is granted again without any validity period nothing will happen. 

**What happens when grating a role that the user already has, but with a different expiration date?**

If the validity period is set, the old one will reset. For example if a user has only 20 days left, if a 30 days validity period is granted, it will have again 30 days left.

**What happens if the Role is deleted?**

The role will simply be revoked from any user that has it.
