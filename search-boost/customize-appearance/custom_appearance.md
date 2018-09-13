# Customize Appearance

Search Boost uses templates to render both the input box and the search results. The templates provide full customization capabilities because they are made of:

* XSL Template that is used to transform the XML result used to generate the HTML structure;
* CSS File that applies styles to the HTML structure.

All templates are located at ```WebsiteRoot/DesktopModules/DnnSharp/SearchBoost/templates```. You can create your own templates or develop an understanding of the customization capabilities, which is the place to start. The two subfolders have similar templates but they are used for different purposes:
* **Input Folder**. The Input Folder contains templates for the Search Input Box. The templates include a text box, a search button, the optional portal filter, the settings link (for skin objects) and other custom elements such as javascript effects, image, and others.
Read more about Search Box templates.

* **Output Folder**. The Output Folder contains templates for the Search Results. They display a list of entries with pagination and some text summaries.  Each entry features a title, a small description and a link. This type of template is less restrictive - there are people that built templates which are photo albums or product listings. Read more about Search Results templates.

There is more to appearance than templates. There are settings to control the page size, maximum description length and allows HTML in it and so on. Read Search Box and Search Result pages for more information.

Most of the appearance settings are grouped under UI Settings tab of the Search Boost Administration Console as shown below. Note this is subject to change in future releases as we plan to better separate settings based on topic. You can access the Search Boost Administration Console through the Search Input box on your Search Boost portal. Follow the directions below to open UI Settings.

1. **Open UI Settings**

2. In your Search Boost portal, go to your Search Input box and select the Manage > Search Settings option to open Search Boost Administration Console;

3. Click on the UI Settings tab to open UI Settings.