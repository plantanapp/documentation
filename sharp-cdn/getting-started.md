# Getting Started with SharpCDN

SharpCDN is very easy to setup, just few seconds and a couple of clicks, and you're all set! Here's a small tutorial on how to download, install and setup the SharpCDN module:

1. Download the latest version of SharpCDN from our website: www.dnnsharp.com;
2. Install/Upgrade the module on your DNN powered website;
3. Install the module, add it to an existing page or create a new one;
4. Once the SharpCDN settings are accesed for the first time, you will be asked to enter the license and the host name. You can find the license on the email received after you ordered SharpCDN;
5. When the module is activated, you can start setting it up:

![Getting Started - Status View](/sharp-cdn/assets/getting-started.jpg)

* **CDN Status**: The status of CDN. If it's Online, this means that all files are loaded from cloud;
* **Access Key**: Your license key;
* **Origin Host**: The website/portal from where CDN connects to fetch static files for distribution across the world;
* **Subscription Status**: The number of page views left and the expiration date of the current subscription. You can change your subscription by clicking the "Change our subscription" link;
* **Prepaid Credits**: The status of your prepaid credits (page views). Those will be used in case the pageviews from subscription are used. You can purchase credits by clicking the "Purchase prepaid credits" button.

![Getting Started - Minification Settings](/sharp-cdn/assets/getting-started2.jpg)
Minifying resources (CSS and JavaScript files) reduces their sizes, increasing the fetch speed, and decreasing the page load times
* **Minify JS**: Minify JS files to improve page load speed;
* **Minify CSS**: Minify CSS files to improve page load speed;
* **Exclude from Minification**: Provide relative paths of files to ignore from minification, one per line. For example: */Portals/_default/default.css*. Supports My Tokens;
* **Exclude from Minification (Regex)**: Provide Regex rules to exclude files from minification, , one per line. For example: *\/Portals\/_default\/.\*.css* will exclude all CSS fils in */Portals/_default* folder. Supports My Tokens.

![Getting Started - Images Settings](/sharp-cdn/assets/getting-started3.jpg)

* **Quality on Large Screens**: Sacrifice jpeg quality in order to improve download speed. You can optimize images from 10% to 90% compression rate;
* **Quality on Small Screens**: Sacrifice jpeg quality in order to improve download speed when page is displayed on mobile devices. You can optimize images from 10% to 90% compression rate.

## **Composite Files Support**

Starting with version [05.00.48](https://www.dnnsharp.com/products/download?p=SHARPCDN&v=05.00.48) SharpCDN supports DNN Composite Files, meaning it will serve these bundled resources directly from cloud.

**What are composite files**: DNN Composite Files option combines the resources into less files to reduce the number of file requests that the browser makes, thus lowering the load on the hosting server.

**How DNN works**: When you enable the Composite Files from DNN, the first page request will generate a mapping with the files needed to create the bundle and instead of generating lots of

```javascript
    <script src="/myscript.js" type="text/javascript"></script>
```

 in the HTML of the page, it will reduce all of these to a few lines having the form

 ```javascript
    <script src="/DependencyHandler.axd/4e5e890acf5f756312f238ba57c98e75/148/js" type="text/javascript"></script>
```

 Being on the first page load, the bundled files will be created **on request** only, meaning they will get created on first access.

**Using SharpCDN with Composite Files**: When you enable CDN and Composite files, the above bundle links will change to

```javascript
    <script src="//yourId4fkzwlu.cloudfront.net/<behavior_hashcode>/DependencyHandler.axd/4e5e890acf5f756312f238ba57c98e75/148/js?_cdnv=131915967693885033-1010" type="text/javascript"></script>
```

**NOTE**: When you activate SharpCDN and Composite Files option, due to DNN behavior, the first page load will bring the original URLs of bundled files to let DNN create them first. On the second page load, the bundled files should have the CDN URLs.