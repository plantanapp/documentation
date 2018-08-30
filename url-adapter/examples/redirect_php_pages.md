# Redirect PHP Pages

##How to redirect PHP pages to DNN

This process is similar to the process of redirecting `.html` to `.aspx` pages:

In Custom URLs, go to your new page to see the existing aliases. We have the following:

    URL Adapter: /about-us/employment -- Default
    DNNFriendlyUrl: /AboutUs/Employment -- Alternative URL
    
We're going to redirect the old page `/about_employment.php` to the new page `/about-us/employment` just by adding to the Custom URL `/about_employment.php`, and set it to "Disabled". This tells the old "Disabled" `.php` page to go to the "Default" page. Be carefully to add the extension type for the Custom URL.

Firstly, you have to make sure that the `.php` extensions are handled by the ASP.NET handler, if not, IIS would either throw a 404 error or call the php handler. In this case, the DNN websites and URL Adapter don't get to execute.

Like it was the case with the `.html` page, the solution is to try to map `.php` files to aspx handler. This can be done in IIS. 