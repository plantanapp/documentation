---
id: ip-whitelist
title: IP Whitelist
sidebar_label: IP Whitelist
---

# Network Security Considerations

(rev May 30, 2024 - version 1.25)

Ensuring your network is secure and functional, especially when dealing with services like Plant an App (PaA), involves several critical considerations. This article covers two key aspects: IP whitelisting and enabling the correct TLS (Transport Layer Security) ciphers.

## IP Whitelist

An **IP Whitelist** is a security feature that controls access to networks and services by allowing connections only from specified IP addresses or domains. For services that rely on external connections, such as automatic installation routines, maintaining an up-to-date whitelist is critical to avoid access disruptions.

### Plant an App Access

For those using Plant an App and encountering issues due to tightened network security measures, it is essential to know which domains need to be whitelisted to ensure smooth operation and connectivity. The following domains are necessary for various Plant an App services and should be added to your network's whitelist:

- `dl.dnnsharp.com`
- `dl.plantanapp.com`
- `services.plantanapp.com`
- `console.plantanapp.com`

These domains support different aspects of the Plant an App service, including downloading necessary components and accessing the administration console.

### How to Whitelist Domains

To add these domains to your whitelist, follow your network's security system or firewall's configuration. Generally, this involves specifying these domains as allowed in your firewall settings. Consult your firewall's documentation or your network administrator for exact procedures.

### Maintaining the Whitelist

As services evolve, required domains and IP addresses can change. It's crucial to stay updated to avoid any service interruption. Regular communication with Plant an App and monitoring of provided updates will ensure ongoing connectivity.

### Community Contributions

If you discover additional domains or IP addresses that need to be whitelisted for Plant an App services not listed here, sharing this information can help maintain an up-to-date whitelist. Community contributions enhance the service's reliability by identifying critical endpoints.

## Enabling TLS Ciphers

Securing data in transit is essential, and for Plant an App, this involves ensuring the correct TLS (Transport Layer Security) ciphers are enabled. 


### Required TLS Configuration

Plant an App services, including those hosted on AWS (such as `dl.dnnsharp.com`), utilize the TLSv1.2_2018 configuration. AWS provides a list of supported ciphers, and ensuring the required ciphers are enabled in your environment is critical. 

#### Recommended Steps

1. **Check Current TLS Configurations**: Verify which TLS versions and ciphers are enabled on your network infrastructure.
2. **Enable Necessary Ciphers**: Ensure that the required TLS 1.2 ciphers are enabled. Refer to AWS's list of [supported ciphers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html).

### Importance of TLS 1.2

Using TLS 1.2 not only aligns with modern security best practices but also ensures compatibility with Plant an App services. As noted, our servers exclusively use TLS 1.2 and can download and install modules seamlessly, provided the correct ciphers are enabled.

## Conclusion

Managing network security for Plant an App requires diligent IP whitelisting and enabling the correct TLS ciphers. Constant vigilance and regular updates to your network settings are key to ensuring uninterrupted service. By following these guidelines, you can maintain a secure and functional environment.

For further assistance or updates, please contact the Plant an App support team or your network administrator.