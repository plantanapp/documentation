---
id: server-request
title: Server Request
sidebar_label: Server Request
---

# Server Request Action

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)
> 
> Skill Prerequisites: `HTTP Protocol` `REST APIs` `JSON` `XML`

The **Server Request** action provides an advanced way to send HTTP requests from your Plant an App applications. This low-level action enables all types of HTTP(S) requests, including support for advanced security, cookies, proxy usage, and file uploads.

In version 1.26, this action is known as **Server Request (Experimental)**.  In later versions, it is known simply as **Server Request**.


## When to Use

**Typical Use Cases**
- Integrate with external systems and APIs (for example: CRM, payment gateways)
- Call REST, SOAP, or custom HTTP endpoints
- Submit forms or upload files to remote servers
- Fetch public or private web pages, sitemaps, or feeds
- Use mutual SSL authentication for secure B2B connections

**Don’t Use For**
- Reading local server files directly (use file actions for that)
- Calling APIs provided by the same Plant an App system – use "Call Local API" instead



## Related Actions

| Action Name           | Description                                                        |
|-----------------------|--------------------------------------------------------------------|
| Parse JSON            | Extract tokens from JSON returned by Server Request or any source.  |
| Regex                 | Extract or validate data using regular expressions.                |
| Execute Actions Async | Run actions (such as Server Request) in a background thread.       |
| Load Entities from JSON| Parse an array from JSON (e.g., API response) for further use.    |



## Input Parameters Reference

| Parameter              | Description                                                                                                                                      | Supports Tokens | Default            | Required                  |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|--------------------|--------------------------|
| **URL**                | The address where to send the request. Can be an absolute or relative URL.                                                                      | Yes             | _(none)_           | Yes                       |
| **URL Token Encoding** | Determines how tokens in the URL are replaced. - *URL Encoding*: recommended default to safely escape reserved chars. - *No Encoding*: literal. | No              | `Url Encoding`     | No                        |
| **Enforce SSL**        | If checked, forces request to use HTTPS even if the URL is plain HTTP.                                                                          | No              | _(off)_            | No                        |
| **Certificate**        | **Thumbprint of a client certificate** (from Windows Local Machine certificate store) for mutual SSL authentication.                             | No              | _(none)_           | No (Enterprise only)      |
| **HTTP Method**        | One of: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`. Determines how data is sent.                                                           | No              | `GET`              | Yes                       |
| **Timeout**            | How many seconds to wait for a response before stopping.                                                                                        | Yes             | `100`              | No                        |
| **Data**               | For `POST`, `PUT`, and `PATCH`: data to send. Format depends on Content-Type. For `GET`: options for key=value lines appended as params.        | Yes             | _(none)_           | No                        |
| **Do Not Escape Tokens** | By default, tokens are XML-escaped. Enable this only for raw XML payloads (when Content-Type is xml/soap).                                   | No              | _(off)_            | No                        |
| **Files**              | List of form-data files by key and file identifier (file ID or path). Used for file upload in form data.                                        | Yes (both name and value) | _(none)_  | No             |
| **File Identifiers**   | Comma-separated list of files to upload; key is computed from file name. Combines with Files above.                                             | Yes             | _(none)_           | No                        |
| **Disable Referer Header** | By default the referer (current URL) is sent; disable this if the server rejects such headers.                                            | No              | _(off)_            | No                        |
| **Headers**            | Additional HTTP headers to send. Typically used for `Authorization`, `Content-Type`, custom headers, etc.                                       | Yes             | _(none)_           | No                        |
| **Use DNN Proxy Settings** | Enable to use DNN’s system-wide proxy configuration when sending this request.                                                             | No              | _(off)_            | No                        |
| **Add Current Cookies** | If enabled, sends the current user's cookies with the request. Useful for authentication.                                                      | No              | _(off)_            | No                        |
| **Ignore Errors**      | If enabled, errors during the request do not stop execution. ‘On Error’ events will still trigger.                                              | No              | _(off)_            | No                        |
| **On Error**           | Actions to run if this action fails. Access the error using `[<OutputTokenName>:ErrorResponse]` and `[<OutputTokenName>:ErrorCode]` tokens.     | *(n/a)*         | _(none)_           | No                        |
| **Cookie Container**   | Name for a cookie container to store/reuse cookies between Server Requests.                                                                     | No              | _(none)_           | No                        |
| **Output Token Name**  | Variable to store the raw response content for later use (e.g. `[MyResponse]`).                                                                 | No              | _(none)_           | No                        |
| **Output Headers**     | List of output tokens to retrieve specific headers. Each item is: header name → output token.                                                   | Yes (token name)| _(none)_           | No                        |


### Parameter Explanations

#### **Certificate** (Enterprise Only)

- Supply the **thumbprint** of a client certificate (from Windows Local Machine certificate store).  
- This allows for **mutual SSL authentication** (where the server requires proof of client identity).
- Steps:  
  1. Install a certificate (issued by your partner or trusted CA) on your server’s Local Machine store.
  2. Get the **thumbprint** from the certificate details (no spaces), and paste here.
  3. The Server Request action will pick up and send this certificate when calling the external API.
- If the certificate is not present or accessible, the action fails and logs an error.

#### **Files and File Identifiers**

- These parameters enable **file uploads via multipart/form-data**.
- Use for submitting files to APIs or external servers.
- `Files`: explicit mapping of form key (field name) → file identifier (ID or path).
- `File Identifiers`: comma-separated list; each file sent with its filename as the form key.
- You can use both in combination; explicit **Files** take precedence where keys overlap.

#### **Output Headers**

- Create tokens for response headers, for further use in subsequent actions.
- If a header is present multiple times, you may use `[MyToken:Json]` for a JSON array or `[MyToken:Csv]` for CSV.


## Output Parameters Reference

| Output                   | Description                                                                           |
|--------------------------|---------------------------------------------------------------------------------------|
| **Output Token Name**    | The token holding the raw response body. Access as `[YourToken]`.                     |
| **Cookie Container**     | Stores cookies so they can be reused on a subsequent Server Request.                  |
| **Output Headers**       | Named output tokens for response headers (supports mapping headers to token names).    |



## Events Reference

| Event Name     | Description                                              |
|----------------|---------------------------------------------------------|
| On Error       | If the request fails, trigger these actions.             |



## Examples

### 1. Simple GET Request with Output Token

Fetch employee data and save it for further use.

```json
{
  "URL": "http://dummy.restapiexample.com/api/v1/employees",
  "HttpMethod": "GET",
  "OutputTokenName": "Employees"
}
```

You can access the API response using `[Employees]`.



### 2. POST a JSON Object (with Auth Header)

Submit a new record using JSON payload and API key.

```json
{
  "URL": "https://api.example.com/objects",
  "HttpMethod": "POST",
  "Headers": [
    {
      "Name": "Content-Type",
      "Value": "application/json"
    },
    {
      "Name": "Authorization",
      "Value": "Bearer [APIKey]"
    }
  ],
  "Data": "{ \"name\": \"[FirstName]\", \"age\": \"[Age]\" }",
  "OutputTokenName": "ApiResponse"
}
```



### 3. Upload Files (Multipart Form Data)

Upload selected files to a server.

```json
{
  "URL": "https://example.com/api/upload",
  "HttpMethod": "POST",
  "Files": [
    { "Key": "document", "Value": "[UploadedFileId]" }
  ],
  "Data": "description=Sales agreement",
  "OutputTokenName": "UploadResponse"
}
```



### 4. Request With Client Certificate (Mutual SSL)

Secure B2B call using a client certificate.

```json
{
  "URL": "https://secure.partner.com/api/data",
  "HttpMethod": "POST",
  "Certificate": "4EC9725E9F0D361A193EDB02AA914360A7BB30D9",
  "Headers": [
    { "Name": "Content-Type", "Value": "application/json" }
  ],
  "Data": "{ \"payload\": \"important data\" }",
  "OutputTokenName": "PartnerApiResult"
}
```


## Using the Certificate Parameter for Mutual SSL Authentication

Some APIs and partner systems require that your server proves its identity by providing a client certificate as part of the HTTPS request. This is known as **Mutual SSL/TLS Authentication**. The `Certificate` parameter enables this in the Server Request action.

### What does the Certificate Parameter Do?

When you fill in the `Certificate` parameter:
- The Server Request action will locate the certificate with the specified **thumbprint** in your **Windows Certificate Store (\Local Machine)**.
- That certificate is attached to the outgoing HTTPS request, enabling **mutual authentication**.
- The server can validate your application’s identity using that certificate.

### Steps to Use a Client Certificate

**1. Obtain or Create a Client Certificate**
- You may receive a certificate from your external API provider or generate one yourself, depending on the API’s requirements.
- The certificate must be trusted by the remote server you’re calling.
- The certificate should be imported (with private key) to the **Local Machine** certificate store of the server hosting Plant an App/DNN.

**2. Install the Certificate on Your Server**
- Open Windows’ Certificate Manager:
  - Press `Win + R`, type `certlm.msc`, press Enter.
- Import the certificate (usually a `.pfx` or `.crt` with private key) into “Personal > Certificates” or another appropriate location under Local Machine.
- Confirm the certificate is visible and correctly installed.

**3. Find the Thumbprint**
- In `certlm.msc`, locate your certificate.
- Double-click to open it.
- Go to the **Details** tab and scroll to the **Thumbprint** field.
- Copy the thumbprint (it’s a long hexadecimal string - you may need to paste in Notepad to remove spaces or invisible characters).
- Result example: `4EC9725E9F0D361A193EDB02AA914360A7BB30D9` (case-insensitive, no spaces).

**4. Set up the Server Request Action**
- Paste the thumbprint in the `Certificate` field of your action.
- Fill other required parameters (URL, method, etc).
- Save the action.

**5. (If Needed) Check Application Pool/User Permissions**
- Ensure your web application (IIS AppPool) has permission to access the certificate.
- If you get access/permissions errors, you may need to set correct permissions for the certificate’s private key.

**6. Test the Integration**
- Trigger the action (via a workflow, form submission, or manually).
- If the certificate is found and correct, the request should authenticate successfully.
- On failure, errors such as “Certificate with thumbprint ... could not be found” or access permission problems will be logged.

### Troubleshooting

- **Thumbprint not found?**  
  Double-check there are no spaces or invisible characters, the certificate is in the Local Machine store, and the thumbprint is correct.
- **Permission denied?**  
  Make sure the application pool identity running DNN/Plant an App has permissions to use the certificate’s private key.
- **Request rejected by API?**  
  Ensure the remote server is configured to **trust your certificate** for mutual SSL, and that you’re using the right certificate.

### Security Considerations

- Keep client certificates secure and never publicly share or email them.
- Only install certificates required for your application’s integrations.
- Regularly review and audit certificate usage on your infrastructure.



### Example – Using Certificate Parameter

```json
{
  "URL": "https://secure.partner.com/api/data",
  "HttpMethod": "POST",
  "Certificate": "4EC9725E9F0D361A193EDB02AA914360A7BB30D9",
  "Headers": [
    { "Name": "Content-Type", "Value": "application/json" }
  ],
  "Data": "{ \"payload\": \"secure info\" }"
}
```



#### Further Reading

- [Mutual TLS in APIs (Cloudflare Blog)](https://developers.cloudflare.com/ssl/reference/client-certificates/)
- [Microsoft Docs – Manage Certificates](https://learn.microsoft.com/en-us/windows/win32/seccrypto/managing-certificates)
- [Plant an App Docs](https://learn.plantanapp.com/docs/current/)
