---
id: check-pdf-signature
title: Check PDF Signature
sidebar_label: Check PDF Signature
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
> 
> Skill Prerequisites: `Tokens`, `File Upload`

This action checks if a PDF document contains an electronic signature by analyzing its structure. The result (True/False) is stored in a token for use in your workflow.

## `Typical Use Cases`

* Verify if a digitally signed contract or agreement is uploaded.
* Ensure only signed PDFs move forward in onboarding or compliance processes.
* Automate validation of user-submitted PDF documents before further processing.


## `Input Parameter Reference`

| Parameter         | Description                                                                                                     | Supports Tokens | Default        | Required |
|-------------------|-----------------------------------------------------------------------------------------------------------------|-----------------|----------------|----------|
| Source file       | Identifier for the source file. Can be RelativeUrl, AbsoluteUrl, LinkClickUrl, or PhysicalPath. Supports tokens.| Yes             | `empty string` | Yes      |

## `Output Parameters Reference`

| Parameter           | Description                                                         |
|---------------------|---------------------------------------------------------------------|
| Output Token Name   | The token where the result (True or False) is stored as configured. |

## `Security`

**Ensure only trusted users and sources can specify the file to check.**  
Improper use of file paths or unsanitized input could potentially expose system files or sensitive information. Always validate and control where the file identifiers and output tokens originate.

## `How does this work?`

This action locates the provided PDF file and inspects it for electronic signature features using industry-standard PDF form fields. The result is stored in the output token you specify, making it easy to branch your workflow.

You must provide the Output Token Name parameter—a token into which the action will write True (if the PDF is signed) or False (if not).

## `Examples`

### `1. Check if a user-uploaded PDF is signed`

Suppose users upload contracts via a form. After upload, you check if the file is signed and save the result in `[IsDocumentSigned]`.

```json
{
  "Title": "Check PDF Signature",
  "ActionType": "CheckPdfSignature",
  "Parameters": {
    "FileIdentifier": "[Form:ContractUpload]",
    "OutputTokenName": "IsDocumentSigned"
  }
}
```
Now, `[IsDocumentSigned]` contains `True` or `False`.

****

### `2. Use the signature check in a conditional workflow`

Check if an uploaded PDF is signed, and only send a confirmation email if it is.

```json
[
  {
    "Title": "Check PDF Signature",
    "ActionType": "CheckPdfSignature",
    "Parameters": {
      "FileIdentifier": "[Form:SignatureUpload]",
      "OutputTokenName": "IsSigned"
    }
  },
  {
    "Title": "Send Email",
    "ActionType": "SendEmail",
    "Condition": "[IsSigned]=True",
    "Parameters": {
      "To": "[User:Email]",
      "Subject": "Signed Contract Received",
      "Body": "Thank you for submitting a signed contract."
    }
  }
]
```

****

## FAQ

**What does "True" mean?**

When the result is `True`, it indicates the PDF contains the relevant signature flags (i.e., is electronically signed) according to PDF standards.

**Is this action compatible with all types of PDFs?**

This action works best with PDFs generated or signed using standard electronic signature tools. Some proprietary or unusual signature schemes may not be detected.

**If the action cannot read the PDF, what happens?**

If the file cannot be read or parsed, the output token is set to `False` and the workflow continues. Check logs for detailed error information if needed.

****

## Troubleshooting

- **Signed but returns False?**  
  Ensure the PDF uses standard signature fields. Some e-signature systems might use non-traditional methods.
- **File not found error:**  
  Double-check your file identifier and ensure the file exists in the expected location/context.
- **Large or encrypted files:**  
  Very large PDFs or encrypted files might not be processed successfully. Test with a standard, unencrypted file.
