---
id: send-email
title: Send Email
sidebar_label: Send Email
---

> Audience: [`Business Users`](/docs/audience#business-users)<br/>
> Skill Prerequisites: `HTML`

This action sends an email to one or multiple recipients. It also supports sending attachments along with the body of the email. The content of the email can be configured for each recipient when sending to multiple addresses. 

## `Typical Use Cases`

- Send email notifications
- Send confirmations emails
- Newsletters
- Email Campaigns with the help of our BeeFree integration [`More Details`](https://beefree.io/)

## `Don't use it to`

- Debug purposes - Use [Log Error](/docs/Actions/log-error) or [Log Debug Message](/docs/Actions/log-debug-message)

## `Related Actions`

| Action Name                                                                    | Description                                                       |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [Load Users from SQL](/docs/Actions/load-users-sql.md)                         | Load multiple users so you can send emails to all of them at once |
| [Load Entities (CSV File)](/docs/Actions/load-entities-csv-file)               | Load emails and other data to compose complex emails              |
| [Load Entities (CSV)](/docs/Actions/load-entities-csv)                         | Load emails and other data to compose complex emails              |
| [Load Entities (Excel File) XSLX](/docs/Actions/load-entities-excel-file-xslx) | Load emails and other data to compose complex emails              |
| [Load Entities (JSON)](/docs/Actions/load-entities-json)                       | Load emails and other data to compose complex emails              |
| [Load Entities (SQL)](/docs/Actions/load-entities-sql)                         | Load emails and other data to compose complex emails              |

## `Input Parameter Reference`

| Parameter                     | Description                                                                                                                                                                                                                                                               | Supports Tokens | Default                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------- |
| From                          | The email address from where the email(s) will be sent                                                                                                                                                                                                                    | Yes             | `Creator of the website`                 |
| Determine Email Automatically | If no **To** parameter is set it will try to pull the recipient email address of the logged user (current user)                                                                                                                                                           | No              | No                                       |
| To                            | Recipient(s) to send the email to. Multiple Recipients can be separated by semicolon (;)                                                                                                                                                                                  | Yes             | `Field is required`                      |
| Send email to all users       | Sends email to all users in the context loaded by [Load Users from SQL](/docs/Actions/load-users-sql.md)                                                                                                                                                                  | No              | No                                       |
| Reply To                      | It is the email address that the reply message is sent when you want the reply to go to an email address that is different than the From parameter. Multiple Recipients can be separated by semicolon (;)                                                                 | Yes             | `empty string`                           |
| CC                            | Carbon Copy. Multiple Recipients can be separated by semicolon (;)                                                                                                                                                                                                        | Yes             | `empty string`                           |
| BCC                           | Blind Carbon Copy. Multiple Recipients can be separated by semicolon (;)                                                                                                                                                                                                   | Yes             | `empty string`                           |
| Subject                       | The subject of the Email                                                                                                                                                                                                                                                  | Yes           | `Field is required`                      |
| Format                        | The format of the email body                                                                                                                                                                                                                                              | No              | `Html (And replace newline with <br />)` |
| DNN email template to use.    | Choose from a predefined email from the system                                                                                                                                                                                                                            | No              | Unset                                    |
| Body                          | The email template you want to send                                                                                                                                                                                                                                       | Yes             | `empty string`                           |
| Headers                       | Append custom headers to the email.                                                                                                                                                                                                                                       | Yes             | Unset                                    |
| Attach Portal Files           | Pick a file that you want to send as attachment via email                                                                                                                                                                                                                 | No              | Unset                                    |
| Attach Field #                | Form only parameters, provide the ability to add up to 5 Single File Uploads fields to be send as attachments to the email                                                                                                                                                | No              | Unset                                    |
| Attach from Token             | This lets you compute file path from token. It must be relative to portal home folder. Multiple items must be separated by semicolons.                                                                                                                                    | Yes             | `empty string`                           |
| Ignore Errors                 | If errors are ignored, the submission of the form continues even when there is an error sending the email. Otherwise, an error message will be displayed to the user. Note that if the email is being sent async or is placed in a pickup folder, errors won't be caught. | No              | No                                       |

## `Security`
**Note that this presents a security risk when the To, From, CC, BCC and Reply To parameter has content from untrusted sources.**

The above mentioned parameters support tokens so the values, if not from a trusted source, may be altered and emails recipients can be modified.

## `Examples`

**The FROM parameter needs to be in concordance with the application SMTP settings. (eg: `notifications@mydomain.com`).**

For Plant An App cloud hosted application the from email can be `anything@my-app.apps.plantanapp.com`

### `1. Simple Email`

Send a simple email

```json
{
    "Title": "Send Email",
    "ActionType": "SendMail",
    "Description": "Simple example, confirmation email",
    "Condition": null,
    "Parameters": {
        "From": "support@plantanapp.com",
        "DetermineEmail": "",
        "To": "support@plantanapp.com",
        "ToAllUsers": "",
        "ReplyTo": "",
        "Cc": "",
        "Bcc": "",
        "Subject": "Confirmation email",
        "Format": {
            "Expression": "",
            "Value": "Html",
            "IsExpression": false,
            "Parameters": {}
        },
        "DnnEmailTemplate": {
            "Expression": "",
            "Value": "",
            "IsExpression": false,
            "Parameters": {}
        },
        "Body": "<p>Dear Customer,</p><p>Thank you for choosing us.</p>",
        "Headers": "",
        "PortalFiles": "",
        "FileField1": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField2": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField3": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField4": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField5": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileToken1": "/Portals/0/Images/logo.png",
        "IgnoreErros": ""
    }
}
```

### `2. Simple Email with tokens`

Simple example where we use tokens to set parameters so we can obtain a more dynamic setup 

```json
{
    "Title": "Send Email",
    "ActionType": "SendMail",
    "Description": "Example using tokens",
    "Condition": null,
    "Parameters": {
        "From": "[User:Email]",
        "DetermineEmail": "",
        "To": "[User:Email]",
        "ToAllUsers": "",
        "ReplyTo": "",
        "Cc": "",
        "Bcc": "",
        "Subject": "",
        "Format": {
            "Expression": "",
            "Value": "Html",
            "IsExpression": false,
            "Parameters": {}
        },
        "DnnEmailTemplate": {
            "Expression": "",
            "Value": "",
            "IsExpression": false,
            "Parameters": {}
        },
        "Body": "<p>Dear [User:FirstName] [User:LastName],</p><p>This is an example mail using tokens.</p>",
        "Headers": "",
        "PortalFiles": "",
        "FileField1": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField2": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField3": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField4": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField5": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileToken1": "",
        "IgnoreErros": ""
    }
}
```

### `3. A more coplex setup for sending a email`

In this example we display how to use a mix of text and tokens to set parameters. You can also set the From parameter email display name as in this example: `<The Sender of the Email>support@plantanapp.com`. In addition we setup an token to the logo so we can send it with the email as attachment.  

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "A more coplex setup for sending a email",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15918762609049277",
                "Parameters": {
                    "Data": [
                        {
                            "value": "/Images/logo.png",
                            "name": "Path"
                        }
                    ]
                },
                "ActionType": "InjectData",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Context"
                    }
                }
            },
            {
                "Title": "Send Email",
                "ActionType": "SendMail",
                "Description": "Complex example",
                "Condition": null,
                "Parameters": {
                    "From": "<The Sender of the Email>support@plantanapp.com",
                    "DetermineEmail": "",
                    "To": "user1@plantanapp.com; user2@plantanapp.com; [User:Email]",
                    "ToAllUsers": "",
                    "ReplyTo": "",
                    "Cc": "user3@plantanapp.com; user4@plantanapp.com;",
                    "Bcc": "user5@plantanapp.com; user6@plantanapp.com;",
                    "Subject": "Multiple Email sent",
                    "Format": {
                        "Expression": "",
                        "Value": "Html",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "DnnEmailTemplate": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "Body": "<p>Dear Customers,</p><p>This is an example using tokens. The email was sent to&nbsp;</p>",
                    "Headers": "",
                    "PortalFiles": "",
                    "FileField1": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileField2": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileField3": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileField4": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileField5": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileToken1": "[Path]",
                    "IgnoreErros": ""
                },
                "$_uid": "action15918762609042327",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            }
        ]
    }
}
```

### `4. Sending an email with Load User from SQL action help`

In this example will load all the users in the system and send them an email. We are using the `Send mail to all users` parameter instead of setting the `To` parameter.

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Sending an email with Load User from SQL action help",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15918764465462106",
                "Parameters": {
                    "SqlQuery": "SELECT UserId from Users"
                },
                "ActionType": "LoadUsersFromSql",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Context"
                    }
                },
                "IsDeleted": false,
                "Description": "Get all the users in the system"
            },
            {
                "Id": -1,
                "$_uid": "action15918764465464449",
                "Parameters": {
                    "From": "support@plantanapp.com",
                    "DetermineEmail": "",
                    "To": "",
                    "ToAllUsers": true,
                    "ReplyTo": "",
                    "Cc": "",
                    "Bcc": "",
                    "Subject": "Example",
                    "Format": {
                        "Expression": "",
                        "Value": "Html",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "DnnEmailTemplate": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "Body": "<p>Dear Customers,</p><p>This is an example.</p>",
                    "Headers": "",
                    "PortalFiles": "",
                    "FileField1": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileField2": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileField3": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileField4": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileField5": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false
                    },
                    "FileToken1": "",
                    "IgnoreErros": ""
                },
                "ActionType": "SendMail",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Email"
                    }
                },
                "Description": "Send all the users the email"
            }
        ]
    }
}
```

### `5. Sending an email with Load Enitites from SQL action help`

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Sending an email with Load Enitites from SQL action help",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15918774716255219",
                "Parameters": {
                    "ConnectionString": "",
                    "SqlQuery": "select Firstname, Lastname, Email, CreatedOnDate, Username from Users",
                    "BindTokens": "",
                    "EntityName": "UserDetails",
                    "EntityProps": [],
                    "OnError": []
                },
                "ActionType": "LoadEntitiesFromSql",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Entities"
                    }
                },
                "Description": "Load Email List"
            },
            {
                "Id": -1,
                "$_uid": "action15918774716251116",
                "Parameters": {
                    "EntityName": "UserDetails",
                    "Filters": "",
                    "ContextBehavior": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "ActionList": [
                        {
                            "Id": -1,
                            "$_uid": "action15918774102278206",
                            "Parameters": {
                                "From": "support@plantanapp.com",
                                "DetermineEmail": "",
                                "To": "[UserDetails:Email]",
                                "ToAllUsers": "",
                                "ReplyTo": "",
                                "Cc": "",
                                "Bcc": "",
                                "Subject": "Created date for [UserDetails:Username]",
                                "Format": {
                                    "Expression": "",
                                    "Value": "Html",
                                    "IsExpression": false,
                                    "Parameters": {}
                                },
                                "DnnEmailTemplate": {
                                    "Expression": "",
                                    "Value": "",
                                    "IsExpression": false,
                                    "Parameters": {}
                                },
                                "Body": "<p>The user: [UserDetails:Firstname] [UserDetails:Lastname] was created on date [UserDetails:CreatedOnDate]</p>",
                                "Headers": "",
                                "PortalFiles": "",
                                "FileField1": {
                                    "Expression": "",
                                    "Value": "",
                                    "IsExpression": false
                                },
                                "FileField2": {
                                    "Expression": "",
                                    "Value": "",
                                    "IsExpression": false
                                },
                                "FileField3": {
                                    "Expression": "",
                                    "Value": "",
                                    "IsExpression": false
                                },
                                "FileField4": {
                                    "Expression": "",
                                    "Value": "",
                                    "IsExpression": false
                                },
                                "FileField5": {
                                    "Expression": "",
                                    "Value": "",
                                    "IsExpression": false
                                },
                                "FileToken1": "",
                                "IgnoreErros": ""
                            },
                            "ActionType": "SendMail",
                            "$_isOpen": false,
                            "$_isLoaded": true,
                            "$_isFocus": true,
                            "Definition": {
                                "IsClientAction": false,
                                "Settings": {
                                    "Group": "Email"
                                }
                            }
                        }
                    ],
                    "ContinueOnError": "",
                    "OnError": []
                },
                "ActionType": "ExecuteActionsOnEntityList",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Entities"
                    }
                },
                "Description": "For each email"
            }
        ]
    }
}
```