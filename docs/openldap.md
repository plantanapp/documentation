---
id: openldap
title: OpenLDAP
sidebar_label: OpenLDAP
---

## Integrating OpenLDAP Authentication with Plant an App

OpenLDAP integration is essential for many organizations that rely on LDAP-based directory services for user authentication and management. This article will guide you through the process of creating a connector for OpenLDAP in Plant an App, followed by using the UserLogin (OpenLdap) action to authenticate users.

### Table of Contents
1. [Setting Up the OpenLDAP Connector](#setting-up-the-openldap-connector)
2. [Using the UserLogin (OpenLdap) Action](#using-the-userlogin-openldap-action)
3. [Common Pitfalls and Troubleshooting](#common-pitfalls-and-troubleshooting)
4. [Summary](#summary)
5. [Video](#video)

### Setting Up the OpenLDAP Connector

Before you can authenticate users against an OpenLDAP server, you need to set up a connector in Plant an App. This connector will contain the necessary credentials and server information for interacting with your LDAP server.

![OpenLDAP Connector](/Portals/0/img/OpenLDAP_Configure_Connector.PNG)

#### Steps to Create OpenLDAP Connector:

1. **Navigate to the Connectors Configuration:**
   - Go to the Plant an App Admin Dashboard.
   - Navigate to `Configuration` > `Connectors`.

2. **Add a New Connector:**
   - Click on `Add New Connector`.

3. **Configure Connector Settings:**
   - **Connector Type:** Select `OpenLDAP`.
   - **UserDN:** Enter the distinguished name (DN) of the service account that will be used to query the LDAP server (e.g., `uid=serviceUser,ou=people,dc=example,dc=com`).
   - **Password:** Enter the service account’s password.
   - **LdapServer:** Enter the LDAP server address (e.g., `ldap.example.com`).
   - **LdapPort:** Enter the LDAP server port (default `389`).

4. **Save the Connector:**
   - Save your configurations to create the connector.

### Using the UserLogin (OpenLdap) Action

With the connector set up, you can now use the UserLogin (OpenLdap) action to authenticate users. This action validates user credentials against the LDAP server, and if successful, logs the user into the Plant an App platform.

![OpenLDAP Connector](/Portals/0/img/OpenLDAP_Action.PNG)


#### Steps to Use UserLogin (OpenLdap) Action:

1. **Navigate to the Area You Want to Add the Action:**
   - Depending on your requirements, you can add the action to forms, listing buttons, or workflows. The typical usage is to add a button to a form and attach the action to the `OnClick` handler of the button.

2. **Add a New Action to the Button:**
   - In a form builder, add a new button element.
   - Go to the button settings and look for the `Actions` configuration (often under an `OnClick` or similar event handler).

3. **Configure UserLogin (OpenLdap) Action:**
   - **Type:** Select `UserLogin (OpenLdap)`.

4. **Action Parameters:**
   - **Service Connector:** Select the OpenLDAP connector created earlier.
   - **Base DN:** Specify the base distinguished name for the LDAP search (e.g., `dc=example,dc=com`).
   - **User Discriminator:** Specify the LDAP attribute that represents the username (e.g., `uid`).
   - **Platform User Prefix:** Specify a prefix for the platform usernames to avoid conflicts (e.g., `OL-`).
   - **Username:** Map this to the form field capturing the username. You can use tokens to dynamically reference form fields (e.g., `[Form:Username]`).
   - **Password:** Map this to the form field capturing the password (e.g., `[Form:Password]`).
   - **Additional User Attribute Mapping:** Click the `Add` button to add pairs of mappings, specifying the OpenLdap Attribute Name and the corresponding User Profile Attribute Name for each pair.
     - Example Pairs:
       - **OpenLdap Attribute Name:** `cn`
         **User Profile Attribute Name:** `displayName`
       - **OpenLdap Attribute Name:** `mail`
         **User Profile Attribute Name:** `email`
   - **Output Token Name:** Provide a token name where the authenticated user's information will be stored (e.g., `LdapUser`).

5. **Error Handling:**
   - Configure the `On Error` action to define what should happen in case of an error. For instance, you could show an error message or redirect users to a different page.

6. **Save the Action:**
   - Save your configurations.

#### Example Configuration:

Let's say we have a form with fields for Username and Password. We can reference these fields in the `UserLogin (OpenLdap)` Action:

- **Service Connector:** `MyOpenLdapConnector`
- **Base DN:** `dc=example,dc=com`
- **User Discriminator:** `uid`
- **Platform User Prefix:** `OL-`
- **Username:** `[Form:Username]`
- **Password:** `[Form:Password]`
- **Additional User Attribute Mapping:** 
  - Click the `Add` button to add the following pairs:
    - **OpenLdap Attribute Name:** `cn` | **User Profile Attribute Name:** `displayName`
    - **OpenLdap Attribute Name:** `mail` | **User Profile Attribute Name:** `email`
- **Output Token Name:** `LdapUser`
- **On Error:** Show error message "Login Failed. Please check your credentials."

#### Post-Login Usage:

After a successful login, the next step may be to use this information to perform other tasks. The `UserLogin (OpenLdap)` action facilitates this by providing access to user info using tokens:

- **Log in an OpenLdap user:** This action requires a username field and a password field to be present in the form to log in the user.
- **Access user info:** On successful login, access user info using the `[User:*]` tokens (for example, `[User:UserID]` or `[User:FirstName]`).
- **Additional information:** Additional information about the OpenLdap user can be found in `[OutputTokenName:$json]` token in JSON format.
- **New User Check:** To check if the user is new, use the `[OutputTokenName:IsNewUser]` token.

### Common Pitfalls and Troubleshooting

- **Incorrect Service Account Credentials:** Ensure that the username and password for the service account in the connector are correct.
- **Base DN Misconfiguration:** Double-check the Base DN to ensure it points to the correct location in the LDAP directory.
- **Attribute Names Case-Sensitivity:** LDAP attribute names can be case-sensitive, so ensure they are correctly referenced.

### Summary

Integrating OpenLDAP with Plant an App is a powerful way to centralize user authentication. By setting up a connector and configuring the `UserLogin (OpenLdap)` action, you can seamlessly authenticate users against an LDAP server and manage user profiles within Plant an App. This guide provides a comprehensive overview, making it easy to establish a secure and efficient authentication system for your application.

### Video
Learn more about OpenLDAP from [Episode 170 of the Low-Code Café](https://youtu.be/3dLkWWiHaHA?si=c2qxwsV1lkNpUAyg).