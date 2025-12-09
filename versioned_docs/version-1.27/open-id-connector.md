---
id: open-id-connector
title: Open ID Connector
sidebar_label: Open ID Connector
---


> Audience: [`System Administrator`](/audience.md#system-administrator), [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Authentication`, `Portal Configuration`

This module provides OpenId Connect Authentication integration for DNN (DotNetNuke) portals. It enables you to configure OIDC or OAuth2 login providers and manage secure authentication flows for your users.

## `Typical Use Cases`

* Enable user login/register via an external OIDC-compliant Identity Provider (e.g., Azure AD, Okta, Google).
* Automatically redirect to external providers on DNN's login page.
* Map external user claims to DNN user profile properties and manage user creation/matching.
* Configure custom actions on user authorization and login.

## `Related Actions`

| Action Name | Description |
| ----------- | ----------- |
| User Management | Allows for management (creation, update, deletion) of user accounts. |
| Configure System OAuth Providers | System-level action for managing OAuth/OIDC providers. |
| Apply Tokens | Useful for working with claim mappings and dynamic login flows. |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Enable Authentication | Enables OIDC authentication on this portal | No | `off` | Yes |
| Auto Redirect | Automatically redirects DNN login requests to provider | No | `off` | No |
| Hide DNN login form | Hides DNN native login UI, showing only social/external logins | No | `off` | No |
| Custom CSS | Scoped CSS to style the login/register buttons | No | empty | No |
| Mobile Login Insecure | Allow HTTP for mobile login API (testing) | No | `off` | No |
| Callback URIs Insecure | Allow HTTP for login/logout URIs (testing) | No | `off` | No |

**For Providers:**

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Enable provider | Enables or disables this Provider | No | `on` | Yes |
| Provider Name | The friendly display name (shown on buttons) | No | n/a | Yes |
| Provider Type | OIDC/OAuth2 (protocol implementation) | No | `OpenIdConnect` | Yes |
| Issuer | Provider's Issuer URI (must match id_token 'iss' claim) | No | n/a | Yes |
| WellKnown Endpoint | Override the discovery endpoint | No | blank | No |
| Scopes | Space-delimited list of extra scopes | No | `openid profile email` auto-added | No |
| Client Id | OAuth client credential | No | n/a | Yes |
| Client Secret | OAuth secret | No | n/a | Yes |
| Token Endpoint | OAuth2 token endpoint, if not in metadata | No | blank | OAuth2 only |
| User Endpoint | (OAuth2) endpoint for user info | No | blank | OAuth2 only |
| OAuth2 Claim Mapping | Map external claim names to OIDC standard claims | No | blank | OAuth2 only |
| Claim Mapping | Additional custom claim mapping | No | blank | No |
| Auto Match Existing Users | Find user by email if already in DNN | No | `off` | No |
| On Authorized Actions | Actions after successful login (token access) | Yes | blank | No |
| On Match Existing User Actions | Actions during matching users | Yes | blank | No |
| Validate Access Token | Also validate access token against keys | No | `off` | No |
| Access Token aud Claim Name | Customizes the "aud" claim key | No | blank | No |
| Logout LocalOnly | Only log user out locally | No | `off` | No |
| Logout LocalFirst | Do local logout before provider logout | No | `on` | No |
| Logout URI | Overrides metadata end_session_endpoint | No | blank | No |
| Logout URI Parameter Mapping | Map query parameters on logout | No | blank | No |
| Send Id Token Hint | Passes id_token_hint in logout query | No | `on` | No |
| Send Client Id | Passes client_id in logout query | No | `off` | No |
| Mobile Login Client Id | Client ID override for mobile endpoints | No | blank | No |

## `Output Parameters Reference`

| Parameter | Description |
| --------- | ----------- |
| User Token | Successful logins set authentication cookie and user context. |
| Claims Tokens | All OIDC/OAuth user claims are provided as tokens ([Claims:claimname]). |
| Raw Claims JSON | Token [Claims] contains raw JSON with all claims. |

## `Security`

* **HTTPS Usage**: By default, all callbacks and discovery endpoints **require HTTPS**. Use the "Insecure" settings only for local or development environments.
* **User Account Matching**: If "Auto Match" is enabled, make sure user emails are unique and trusted.
* **Token Handling**: Custom actions have access to user claims—**never store/expose sensitive tokens** unless needed.

## `What happens during authentication?`

1. **User lands on Login page** — (Optional: auto-redirects to the configured provider).
2. **Authorization Request** — OIDC/OAuth flow redirects to the provider for login.
3. **Callback** — Provider calls back, code exchanged for tokens.
4. **User Claims** — User info claims fetched, mapped, and (if matched or new) a DNN user is authorized/created.
5. **Post-login Actions** — "On Authorized" actions are triggered with claim tokens.

## `Examples`

### `1. Configure a Standard OpenId Connect Provider (e.g. Microsoft Azure AD)`

```json
{
  "Portal": 0,
  "IsEnabled": true,
  "Providers": [
    {
      "IsEnabled": true,
      "ProviderName": "Azure AD",
      "ProviderType": "OpenIdConnect",
      "Issuer": "https://login.microsoftonline.com/{tenantid}/v2.0",
      "ClientId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "ClientSecret": "SECRET123",
      "Scopes": "User.Read",
      "OAuth2ClaimMapping_Sub": "oid",
      "OAuth2ClaimMapping_Email": "email",
      "OAuth2ClaimMapping_GivenName": "given_name",
      "OAuth2ClaimMapping_FamilyName": "family_name",
      "OnAuthorizedActions": [
        {
          "ActionType": "SendEmail",
          "Parameters": {
            "To": "[Claims:email]",
            "Subject": "Welcome!",
            "Body": "User [Claims:given_name] just logged in."
          }
        }
      ]
    }
  ]
}
```

### `2. Custom Logout Flow (SSO Sign-Out)`

```json
{
  "LogoutUri": "https://identity.example.com/logout",
  "LogoutUri_SendIdTokenHint": true,
  "LogoutUri_SendClientId": true,
  "LogoutUriParameterMapping": {
    "post_logout_redirect_uri": "https://portal.example.com/?ctl=logoff"
  }
}
```

### `3. Map Non-standard Claims from OAuth2 Provider`

```json
{
  "ProviderName": "Custom OAuth2",
  "Issuer": "https://sso.corp.example.com",
  "ProviderType": "OAuth2",
  "Scopes": "",
  "OAuth2ClaimMapping_Sub": "user_id",
  "OAuth2ClaimMapping_Email": "user_email",
  "OAuth2ClaimMapping_GivenName": "first_name",
  "OAuth2ClaimMapping_FamilyName": "last_name",
  "ClaimMapping": {
    "department": "dept"
  }
}
```

## `See Also`

* OAuth2 / OIDC Specification documentation
* DNN Platform User Management
* Apply Tokens
* Custom Actions Documentation
