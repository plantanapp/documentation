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
- Send confirmation emails

- Newsletters
- Email Campaigns with the help of our `[BeeFree](https://beefree.io/)` integration 

## `Don't use it to`

- Debug - Use [Log Error](/docs/Actions/log-error) or [Log Debug Message](/docs/Actions/log-debug-message)


## `Related Actions`

| Action Name                                                                        | Description                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Load Users from SQL](/docs/Actions/load-users-sql.md)                             | Load multiple users so you can send emails to all of them at once                     |
| [Load Entities (CSV File)](/docs/Actions/load-entities-csv-file)                   | Load emails and other data from a CSV file to compose complex emails                  |
| [Load Entities (CSV)](/docs/Actions/load-entities-csv)                             | Load emails and other data from a CSV formatted text to compose complex emails        |
| [Load Entities (Excel File) XSLX](/docs/Actions/load-entities-excel-file-xslx)     | Load emails and other data from an Excel file to compose complex emails               |
| [Load Entities (JSON)](/docs/Actions/load-entities-json)                           | Load emails and other data from a JSON formatted text to compose complex emails       |
| [Load Entities (SQL)](/docs/Actions/load-entities-sql)                             | Load emails and other data from the database to compose complex emails                |
| [Load User](/docs/Actions/load-user.md)                                            | Load an user so you can obtain recipient information via tokens                       |
| [Execute actions on entity list](/docs/Actions/execute-actions-on-enitity-list.md) | Execute a set of actions for each entity, that can help you to compose complex emails |

## `Input Parameter Reference`

| Parameter                  | Description                                                                                                                                                                                                                                                               | Supports Tokens | Default                                  | Required |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------- | -------- |
| From                       | The email address from which the email(s) will be sent                                                                                                                                                                                                                    | Yes             | `Creator of the website`                 | No       |
| To                         | Recipient(s) to send the email to. Multiple Recipients can be separated by semicolon (;)                                                                                                                                                                                  | Yes             | `empty string`                           | Yes      |
| Send email to all users    | Sends emails to all users in the context loaded by [Load Users from SQL](/docs/Actions/load-users-sql.md)                                                                                                                                                                 | No              | No                                       | No       |
| Reply To                   | Email address that the reply message is sent back to instead of the `From` address. Multiple recipients can be separated by a semicolon (;)  or a comma(,)                                                                                                                | Yes             | `empty string`                           | No |
| CC                         | Carbon Copy. Multiple Recipients can be separated by a semicolon (;)  or a comma(,)                                                                                                                                                                                       | Yes             | `empty string`                           |  No |
| BCC                        | Blind Carbon Copy. Multiple Recipients can be separated by a semicolon (;)  or a comma(,)                                                                                                                                                                                 | Yes             | `empty string`                           |  No |
| Format                     | The format of the email. Check below for more [details](/docs/Actions/send-email.md#Formats)                                                                                                                                                                              | No              | `Html (And replace newline with <br />)` | No       |
| DNN email template to use. | Choose from a predefined email from the system                                                                                                                                                                                                                            | No              | Unset                                    | No       |
| Subject                    | The subject of the Email                                                                                                                                                                                                                                                  | Yes             | `empty string`                           | Yes      |
| Body                       | The email content to send                                                                                                                                                                                                                                                 | Yes             | `empty string`                           | No       |
| Headers                    | Appends custom headers to the email.                                                                                                                                                                                                                                      | Yes             | Unset                                    | No       |
| Attach Portal Files        | Picks existing files from the system to send as attachments.                                                                                                                                                                                                              | No              | Unset                                    | No       |
| Attach Field #             | Form only parameter. It provides the ability to add up to 5 Single File Uploads fields to be sent as attachments.                                                                                                                                                         | No              | Unset                                    |  No |
| Attach from Token          | Computes file path from token. It must be relative to the portal home folder. Multiple items must be separated by semicolons or commas.                                                                                                                                   | Yes             | `empty string`                           |  No |
| Ignore Errors              | If errors are ignored, the submission of the form continues even when there is an error sending the email. Otherwise, an error message will be displayed to the user. Note that if the email is being sent async or is placed in a pickup folder, errors won't be caught. | No              | No                                       |  No |

## `Formats`

| Format                                   | Details                                                                                                                                                                                                                          |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTML (And replace newline with `<br />`) | To simplify the input of the email we are replacing the newlines in the `Body` of the email with the HTML tag `<br>`. While it is easier to compose the email it may have strange behaviors with some email clients like Outlook |
| Text                                     | Regular text, with no formatting options such as bold, italics, underlines, or special layout. Can include URLs, such as http:// and ftp:// options.                                                                             |
| HTML(**Recommended**)                    | It’s the way web pages and email templates are coded so that text is formatted and images are added. What it is displayed in the HTML editor of `Body` will be the result that will be displayed in the email client             |

## `Security`

:::caution
Note that this presents a security risk when the `To`, `From`, `CC`, `BCC` and `Reply To` parameter have tokens from untrusted sources.
:::

The above-mentioned parameters support tokens so if the values are not coming from a trusted source they may be altered and email recipients can be modified. 
For example, if you let the user input the email address manually from a Form, it may present a security risk. The expectation is to input only one email address but the end-user may input: `my-email@company.com;other-email@othercompany.com`. Doing this he may send the emails that are meant only for him to other people or organizations. To avoid similar situations we strongly recommend using Tokens like `[User:Email]` or hardcoded email addresses when setting recipients parameters. 

## `Examples`

**The FROM parameter needs to be in concordance with the application SMTP settings. (eg: `notifications@mydomain.com`).**

For Plant An App cloud-hosted application, the `From` address can be `anything@my-app.apps.plantanapp.com` or an address from a custom domain, if configured. 


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

### `2. Simple Email with Tokens`


In this simple example, we use tokens to send the email from the current user to itself. This is done using the `[User:Email]` token. We also use the `[User:FirstName]` and the `[User:LastName]` tokens to create a dynamic email body.


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
        "Body": "<p>Dear [User:FirstName] [User:LastName],</p><p>This is an example email that is using tokens.</p>",

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

### `3. A more complex setup for sending an email`

In this example, we demonstrate how to use a mix of text and tokens to set parameters. 

Note how the `From` parameter can be configured to also have a display name, such as `The Sender of the Email<support@plantanapp.com>`. Same applies to any email field.

In addition, we set up a token for the logo so we can send it with the email as an attachment.  

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "A more complex setup for sending an email",

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
                    "From": "The Sender of the Email<support@plantanapp.com>",
                    "DetermineEmail": "",
                    "To": "user1@plantanapp.com; user2@plantanapp.com; [User:Email]",
                    "ToAllUsers": "",
                    "ReplyTo": "",
                    "Cc": "user3@plantanapp.com; user4@plantanapp.com;",
                    "Bcc": "user5@plantanapp.com; user6@plantanapp.com;",
                    "Subject": "Multiple emails sent",

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
                    "Body": "<p>Dear Customers,</p><p>This is an example using tokens. The email was sent to: user1@plantanapp.com; user2@plantanapp.com; [User:Email]</p>",
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

### `4. Send an email to a list of recipients retrieved from the database`

In this example, we will load all the existing users directly from the database and send them an email. Note that we are using the `Send mail to all users` parameter instead of setting the `To` parameter.

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Send email to all users loaded into the context",

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
                "Description": "Send email to all users loaded into the context"

            }
        ]
    }
}
```

### `5. Send email to a list of entities loaded from the database`

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Send email to a list of entities loaded from the database",

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
                "Description": "Send email for each entity"

            }
        ]
    }
}
```
