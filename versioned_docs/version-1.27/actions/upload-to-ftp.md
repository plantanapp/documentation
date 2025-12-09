---
id: upload-to-ftp
title: Upload to FTP
sidebar_label: Upload to FTP
---


Upload a list of files to a FTP server.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| FTP URL | The URL to the FTP Server. It can include a port number and it will be used instead of the default. Supported formats: ftp://{domain}:{port}, {domain}:{port}, ftp://{domain}, {domain}. Can contain Tokens | No | None |
| Username | The username used to login to the FTP Server. Can contain Tokens | No | None |
| Password | The password used to login to the FTP Server. Can contain Tokens | No | None |
| Use Passive | Connect to the FTP Server using the passive mode (EPSV or PASV). This is recommended if supported by the FTP server. | No | None |
| Use SSL | Connect to the FTP Server using a secured SSL channel. | No | None |
| Encryption Mode | Supported values: Auto, Implicit, Explicit. Default: Auto. Recommended values: Explicit or Auto. The Explicit mode will enforce connecting using TLS/SSL, otherwise failing to connect. The Auto mode will try to establish an Explicit FTPS connection, otherwise it will fallback to plaintext. The Implicit mode is deprecated by the FTP standard, but some implementations require it and you can easily identify those implementations because they will require connection on port 990 and will most likely block any connection on port 21 (which makes Auto or Explicit modes unusable). | No | None |
| Disable TLS 1.0 | When this is checked only TLS 1.1 and 1.2 connections will be possible. | No | None |
| Destination Path | The path on the FTP server where the files will be uploaded. Resulting path: '{DestinationPath}/{FileNameWithExtension}'. Supports tokens. | No | None |
| File list | Files separated by new line or pipe (&#124;) character | No | None |
