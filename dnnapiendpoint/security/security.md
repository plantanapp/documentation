# Security

### Summary

* DNN API Endpoint shows generic errors for non-admins (full error is in DNN logs)
* If possible, always restrict API methods to trusted domains
* You can create API keys for desktop/module/server apps to be able to audit requests
* Use validation to ensure input is in correct format

This section is created in two parts. In first one we detail the [API Keys](api-keys.html) functionality, why and in which cases is recommended to be used and how to test if the restriction of the web page to the key is working as expected. The second one is [Cross Domain Policy](cross-domain-policy.html) option where we provide the details about the existing options and how they should work.