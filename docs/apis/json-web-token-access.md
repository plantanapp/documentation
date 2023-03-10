---
id: json-web-token-access
title: JWT Access
sidebar_label: JWT Access
---

> Audience: [`Citizen Developers`](https://learn.plantanapp.com/docs/audience#citizen-developers), [`Low-code Engineers`](https://learn.plantanapp.com/docs/audience#low-code-engineers), [`Software Developers`](https://learn.plantanapp.com/docs/audience#software-developers) [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

## Overview

The [JSON Web Token (JWT)](https://en.wikipedia.org/wiki/JSON_Web_Token) is an open standard (IETF [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)) data format that is *compact*, *self-contained*, and *secure*. It is intended for passing information where space is limited, such as HTTP headers and URI queries.

* **Compact** - Because the JWT is comprised of encoded [JavaScript Object Notation (or "JSON")](https://en.wikipedia.org/wiki/JSON) objects (i.e. a lightweight format for storing and transporting data), it is compact enough to be sent through a URL query, a [POST parameter](https://en.wikipedia.org/wiki/POST_(HTTP)), or an [HTTP header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields). JSON objects are simpler and more compact than Security Assertion Markup Language (SAML) assertions, which use XML. Due to its smaller size, it can also be transmitted faster.
* **Self-contained** - The JWT can contain all the required information about the user and therefore avoids querying the database more than once.
* **Secure** - The JWT can be digitally signed through one of two methods:

  1. With the [HMAC algorithm](https://en.wikipedia.org/wiki/HMAC) (hash-based), by using a secret
  2. Through the [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) or [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) algorithms, by using a public/private key pair

JWT is ideal for applications that can not or do not want to use cookies, such as mobile native apps and desktop apps. In a standard web-forms application, the user logs into a website and receives a session/token cookie that the browser sends back with each subsequent request to the site, in order to avoid checking the user's credentials with each request. JWT simply replaces the cookie with a token that is both smaller and faster to transmit.

## About JWT Authentication

Here is a generic description of the JWT authentication process: 

<img src="/img/gra-jwtprocess.png" alt="gra-jwtprocess.png"></img>

1. The user logs in with their [username and password](#jwt-user-credentials) (or other security credentials). The browser or the client app sends a `POST` request with the user credentials to the server, which are sent over an HTTPS connection.
2. The user's credentials are checked against the login database. If valid, the server [creates and encrypts an access JWT](#server-response-with-jwt), which is stored in the [body of the response](https://en.wikipedia.org/wiki/HTTP_message_body).
3. When the user requests a page, the browser or client app stores the access JWT inside the `Authorization` section of the request.
4. The server verifies the JWT signature and extracts the user information from the [JWT payload](#jwt-access-token) (part of the JWT that contains verifiable security statements, such as the identity of the user and the permissions they are allowed).
5. The requested page or resource is sent to the client.

Below is a deep-dive on some of the concepts involved.

### JWT User Credentials

To understand the concept, here is a sample of a POST request for the user "`username`" and the "`password123`" password:

```
 curl --location --request POST 'https://my.site.plantanapp.com/DesktopModules/JwtAuth/API/mobile/login' \
--header 'Content-Type: application/json' \
--data-raw '{"u":"username","p":"password123"}'
```

### Server Response with JWT

When the server responds to the user's browser, the JSON object that is returned contains three properties.

| Property name | Description |
| ------------- | ----------- |
| *displayName* | The display name of the user. |
| *accessToken* | A JWT must be included with each subsequent request to the various Web API endpoints for servers. The server obtains the user information from the access token itself, which is faster than retrieving the information from the database again. The access token is valid for 60 minutes and must be renewed using the renewal token. |
| *renewalToken* | The JWT is required to renew the access token when it expires. The renewal token becomes invalid after 14 days, after the user logs out, or when the user changes their credentials (such as the login password) for the web site. |

Here is an example of a JSON object sent to the browser after validating a user named "`Site Manager`":

```
HTTP/1.1 200 OK
Cache-Control: no-cache
Pragma: no-cache
Content-Type: application/json; charset=utf-8
Expires: -1
Date: Wed, 23 Dec 2015 00:54:43 GMT
Content-Length: 425

{
"displayName":"Site Manager",
"accessToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWQiOiJkYmViMjlhYTMyYjg0MTMxYTA0NjY4MDAyNzAxNWEwZSIsInJvbGUiOlsiQWRtaW5pc3RyYXRvcnMiLCJSZWdpc3RlcmVkIFVzZXJzIiwiU3Vic2NyaWJlcnMiXSwiaXNzIjoidGVzdHNpdGVjZS5sdmgubWUiLCJleHAiOjE0NTA4MzU2ODMsIm5iZiI6MTQ1MDgzMTc4M30.Yf3mmBJ8nV_IozqvvLc8L34dDklU2J7z0uXn3jsICp0",
 "renewalToken":"qjjd1vmgbtWb23fPK4J9ttUQBKpgC6k1yFmnteU+9mlFxcHeC3rJlly8oGBBAIzw"
 }
```

### JWT Access Token

The decoded access token is comprised of three parts separated by dots.

```
header.payload.signature       
```

| Component | Description |
| --------- | ----------- |
| *JWT header* | This is a JSON object containing the JWT protocol identifier and the signature scheme. The header is converted to a JavaScript Object Signing and Encryption ("JOSE") header as UTF-8 octets and then encoded as a Base64 string. Example:` { "typ":"JWT", "alg":"HS256" }` |
| *JWT payload* | A JSON object that contains the JWT claims set (asserted information about the user) or other information. Encoded as a Base64 string. The DNN JWT claims set includes the following:<ul><li>`sid`: the session id, which is fixed for the lifetime of the renewal token.</li><li>`role`: is the list of roles assigned to the user. It is used in authorization to determine which areas of the site the user can access.</li><li>`iss`: the portal alias of the site that issued the token.</li><li>`exp`: is the expiration time of the access token. The token is rejected after this time (plus a small grace period to compensate for latencies) expires. It is expressed in [Unix time](https://unixtime.org/).</li><li>`nbf`: is the "not-before" time. The token is rejected before this time. Expressed in Unix time.</li></ul>Example:` { "sid":"eecb9bf34bbb4c8eb87dbba3aa1523c6", "role":["Administrators","Registered Users","Subscribers"], "iss":"testsitece.lvh.me", "exp":1450834762, "nbf":1450830862 }` |
| *JWT signature* | The hash/encryption of the header and payload. The encryption method is stated in the header. Encoded as a Base64 string. |

## How to make an API call with the access token

Available as tokens: "`[ApiKeyName]`" and "`[ApiKeyValue]`".

API looks in multiple places for the presence of the API Key: the `Authorization HTTP header` or the `Query String`, `POSTed data`, `Cookies` for a parameter named `apikey`. If the API runs on the client side on the same site, the API key will not be required if the current user is Administrator.

<br /><br /><a href="#top">Back to the top of the page</a>