# Getting Started with SharpCDN

SharpCDN is very easy to setup, just few seconds and a couple of clicks, and you're all set! Here's a small tutorial on how to download, install and setup the SharpCDN module:
1. Download the latest version of SharpCDN from our website: www.dnnsharp.com;
2. Install/Upgrade the module on your DNN powered website;
3. Install the module, add it to an existing page or create a new one;
4. Once the SharpCDN settings are accesed for the first time, you will be asked to enter the license and the host name. You can find the license on the email received after you ordered SharpCDN;
5. When the module is activated, you can start setting it up:

![](/sharp-cdn/assets/getting-started.jpg)

* **CDN Status**: The status of CDN. If it's Online, this means that all files are loaded from cloud;
* **Access Key**: Your license key;
* **Origin Host**: The website/portal from where CDN connects to fetch static files for distribution across the world;
* **Subscription Status**: The number of page views left and the expiration date of the current subscription. You can change your subscription by clicking the "Change our subscription" link;
* **Prepaid Credits**: The status of your prepaid credits (page views). Those will be used in case the pageviews from subscription are used. You can purchase credits by clicking the "Purchase prepaid credits" button.

![](/sharp-cdn/assets/getting-started2.jpg)

* **Note**: Composite Files option combines the resources into less files to reduce the number of file requests that the browser makes, thus lowering the load on the hosting server  
Minifying resources (CSS and JavaScript files) reduces their sizes, increasing the fetch speed, and decreasing the page load times  
**SharpCDN minification conflicts with DNN composite files, because files are minified after DNN combines the resources.**<br/><br/>
This can lead to minification errors, resulting in malformed files.<br/>
SharpCDN serves the content from Cloud servers, meaning it will find the closest server to the client location, in order to gain the maximum speed. This means that resource requests are made to other servers than DNN server, allowing the webserver IIS to process more concurrent requests. Also, the files are cached on the CDN servers, so the load time decreases drastically, opposite to DNN and ASP.Net which needs to process the file request and return a response  
* **Minify JS**: Minify JS files to improve page load speed;
* **Minify CSS**: Minify CSS files to improve page load speed;
* **Exclude from Minification**: Provide relative paths of files to ignore from minification, one per line. For example: _/Portals/_default/default.css_. Supports My Tokens;
* **Exclude from Minification (Regex)**: Provide Regex rules to exclude files from minification, , one per line. For example: _\/Portals\/_default\/.*.css_ will exclude all CSS fils in _/Portals/_default_ folder. Supports My Tokens.

![](/sharp-cdn/assets/getting-started3.jpg)

* **Quality on Large Screens**: Sacrifice jpeg quality in order to improve download speed. You can optimize images from 10% to 90% compression rate;
* **Quality on Small Screens**: Sacrifice jpeg quality in order to improve download speed when page is displayed on mobile devices. You can optimize images from 10% to 90% compression rate.
