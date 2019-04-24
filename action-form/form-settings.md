---
layout: default
---

# Form Settings

The **Action Form** settings, highlighted on the image below, allows you to configure the layout and appearance of the form. These settings are managed in the General Settings section. 

More info on how to change the look & feel of forms, you will find under <a href="/action-form/Apperance.html">Appearance</a> and <a href="/action-form/form-layout.html">Form Layout</a> sections.

The **Action Form** module is highly configurable so it can be set on every website with different designs. Thanks to the newest feature addition **Embed** the Action Form module can now be used on any website out there based on any CMS and platform configuration:
* DNN (aka dotnetnuke)
* WordPress
* Joomla!
* Drupal
* Shopify
* PrestaShop
* Magento
* pretty much anything that takes standard HTML code and is able to display an iframe

> The feature was introduced in Action Form 5.0.275 and is available in all versions released afterwards that are activated with an *Enterprise* or *Developer* licence type.
![Embed Form](https://static.dnnsharp.com/documentation/embed_form.png "Embed Form")


# Saving data to Reports

Action Form has an inbuilt feature that stores the submitted data to the database in the ReportFields and Reports table. Action Grid's Action Form Datasource is based on these tables as well as Action Form's Load State/Save State actions.

Starting with Action Form 5.0.391 (released on November 15<sup>th</sup>, 2018) **Enable Reports** checkbox was added under General Settings which overwrites all the Save to Reports checkboxes from within the form fields settings.
![Action Form Enable Reports](https://static.dnnsharp.com/documentation/Action_form_enable_reports.png)
In order to comply with Data Protection Regulations (GDPR), **by default, newly created forms do not save data in the Reports tables**. Existing forms will not be affected as the checkbox will be automatically enabled for them.


