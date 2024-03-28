---
id: ip-whitelist
title: IP Whitelist
sidebar_label: IP Whitelist
---

# IP Whitelist for PlantAnApp Services

(rev March 28, 2024 - version 1.25)

An **IP Whitelist** is a security feature often used to control access to networks and services, ensuring only specified IP addresses or domains can connect. For services reliant on external connections, such as automatic installation routines, having a clear, accessible whitelist is critical for network teams to avoid undesired access blocks.

## PlantanApp Access

For those using PlantanApp (PaA) and encountering issues due to tightened network security measures, it is essential to know which domains need to be whitelisted to ensure smooth operation and connectivity. The following domains have been identified as necessary for various PlantanApp services and should be added to your network's whitelist:

- `dl.dnnsharp.com`
- `dl.plantanapp.com`
- `services.plantanapp.com`
- `console.plantanapp.com`

These domains are used for different aspects of the PlantanApp service, including downloading necessary components and accessing the administration console.

## How to Whitelist Domains

To add these domains to your whitelist, the precise method will depend on your network's security system or firewall. In general, you will need to access your firewall's settings to specify these domains as allowed. It might involve adding them to a list of safe or trusted domains. Consult your firewall's documentation or your network administrator for detailed instructions.

## Maintaining the Whitelist

As services evolve, the domains and IP addresses required for full functionality might change. It's crucial to keep abreast of such changes to avoid any service disruption. PlantanApp or your network's security team may update these lists, so regular communication and review will ensure ongoing connectivity.

## Community Contributions

If you come across other domains or IP addresses that need to be whitened to ensure the functionality of PlantanApp services not listed here, sharing this information can be invaluable for maintaining an up-to-date whitelist. Contributions like these enhance the service for all users by helping identify essential endpoints that might not be widely recognized.