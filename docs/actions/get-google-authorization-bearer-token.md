---
id: get-google-authorization-bearer-token
title: Get Google Authorization Bearer Token
sidebar_label: Get Google Authorization Bearer Token
---

### Get Google Authorization Bearer Token Action

The **Get Google Authorization Bearer Token** action allows you to programmatically retrieve a secure OAuth 2.0 bearer token from Google using a service account. This token can then be used to authenticate subsequent API requests to Google services such as Google Drive, Sheets, or Gmail.

#### How It Works

This action authenticates as a service account you configure in the Google Cloud Console. It grants access to Google APIs based on the scopes you define, and can optionally impersonate a user if required by certain enterprise APIs (e.g., GSuite Admin APIs). The resulting bearer token can then be passed to other actions or API calls for secure access.

#### Steps to Use

1. **Select the Google Service Account**
   - Choose a credentials entry containing the JSON key for your Google service account.
   - This should point to a previously-set-up service account in your Google project, with appropriate roles and permissions.

2. **Define Google Scopes**
   - Specify one or more [Google OAuth scopes](https://developers.google.com/identity/protocols/oauth2/scopes), each on a separate line.
   - Examples:
     - `https://www.googleapis.com/auth/drive`
     - `https://www.googleapis.com/auth/spreadsheets.readonly`
   - Scopes determine what level of access the token grants.

3. **Impersonation (Optional)**
   - Enter the email address of a Google Workspace user to impersonate, if required by the API you intend to access.
   - This is typically used when performing actions on behalf of another user via GSuite Admin or Directory APIs.
   - Leave blank for standard service account access.

4. **Output Token Name**
   - Name the output context token. This variable will hold the generated bearer token, making it available to subsequent workflow actions.
   - Example: `GoogleBearerToken`

#### Example Configuration

| Field                | Example Value                           | Description                                            |
|----------------------|-----------------------------------------|--------------------------------------------------------|
| Google Service Account | `GoogleCloudCredentials`                | Select saved credentials entry with your service account. |
| Google Scopes        | `https://www.googleapis.com/auth/drive` | Scope for accessing Google Drive. One per line.        |
| Impersonation        | `john.doe@yourdomain.com`               | (Optional) Only needed for domain-wide delegation.     |
| Output Token Name    | `GoogleBearerToken`                     | Set this to reference the token in later steps.        |

#### Usage Pattern

A typical workflow using this action looks like:

* Configure Google service account and download JSON key.
* Register credentials in your platform's credential store.
* Use **Get Google Authorization Bearer Token** to retrieve an access token.
* Pass the output token to subsequent Google API actions.
* Optionally, cache the output token for reuse (as Google tokens are typically valid for 1 hour).

#### Security and Best Practices

* Assign the minimum set of Google roles and scopes necessary (principle of least privilege).
* Keep the service account JSON key secure; treat it as a secret.
* Use impersonation only when required and ensure delegated user permissions.

#### Reference

### Parameters

| Parameter            | Description                                                                                                                                                            | Supports Tokens | Default     |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-------------|
| **Google Service Account** (`Credentials`) | Select the credential entry containing the Google Service Account JSON key you want to use. This must be set up in the credential manager first.           | Yes             | _(none)_    |
| **Google Scopes** (`Scopes`)              | Define one or more Google OAuth scopes to authenticate the token. Enter one per line. [See full scopes list](https://developers.google.com/identity/protocols/oauth2/scopes).                        | Yes             | _(none)_    |
| **Impersonation** (`Impersonation`)       | (Optional) Email address of a user to impersonate. Needed for APIs that act on behalf of a GSuite user (e.g., Administrative or Directory APIs). Leave blank for normal service account usage. | Yes             | _(none)_    |
| **Output Token Name** (`OutputTokenName`) | Name to give to the workflow context token that will store the resulting Google access token. This can then be referenced in later steps.                  | Yes             | _(none)_    |


#### Example Workflow Snippet

1. **Get Bearer Token:**
   - Action: **Get Google Authorization Bearer Token**
   - Credentials: `GoogleCloudCredentials`
   - Scopes: `https://www.googleapis.com/auth/drive`
   - Output Token Name: `GoogleBearerToken`

2. **Use Token in API Call:**
   - Use the context token `${GoogleBearerToken}` in subsequent API requests to Google.

#### Troubleshooting

* If you receive authentication errors, double-check:
  - The service account has the necessary roles in Google Cloud IAM.
  - The defined scopes match your required API access.
  - The impersonation email (if used) is correct and delegation is enabled for that service account.

#### Conclusion

The **Get Google Authorization Bearer Token** action provides a standardized and secure method to authenticate with Google APIs from your low-code workflows. By storing the token in a named context variable, you can easily integrate Google services into your applications, reuse tokens for improved efficiency, and manage authentication securely.

For more details on service accounts and scopes, refer to the [Google Identity documentation](https://developers.google.com/identity/protocols/oauth2/service-account). If you require further customization or encounter advanced scenarios, consult your administrator or the Plant an App documentation.