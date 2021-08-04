---
id: add-article
title: Add Article
sidebar_label: Add Article
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| User Id | Id of the user who will create the event. If left empty it will take it from the current user. If left empty and the user is not logged in, it will use the portal's AdministratorId. Can contain My Tokens | Yes | None |
| Article URL | SEO option. This field should contain the SEO Title of your article (ex: my-new-article). Can contain My Tokens | Yes | None |
| Title Tag | SEO option. This should contain the title of your Web Page that will be displayed in the search results (ex: My Web Page). You can find the Title of your page in the Title Tag of your HTML. Can contain My Tokens | Yes | None |
| Meta Description | SEO option. Description of the event. Can contain My Tokens | Yes | None |
| Meta Keywords | SEO option. Keywords of the event. Can contain My Tokens | Yes | None |
| Title | Title of the event. Can contain My Tokens. | Yes | None |
| Subtitle | Subtitle of the event. Can contain My Tokens | Yes | None |
| Categories | Obsolete. If there are duplicate category names, all of them will be added to the event. Use the parameter below if this is not what you want. Categories of the event. Can contain My Tokens | Yes | None |
| Category Ids | Ids of the categories to add to the event. Can contain My Tokens | Yes | None |
| Summary | Summary of the event. Can contain My Tokens | Yes | None |
| Detail Type |  | No | Text |
| Gallery Display Type | The type of gallery you want to use. Can contain My Tokens | Yes | lightbox |
| Description | Description of the event. Can contain My Tokens | Yes | None |
| Detail Type Data | Article Details. For Page provide a PageId, for Link a full Url and for File provide a relative Path. Can contain My Tokens | Yes | None |
| Detail Target | Select target for the Article Details. Can contain My Tokens | Yes | None |
| Publish Date Time | PublishDateTime of the event. If the date is empty, the Publish Date Time will be Datetime.Now by default. Can contain My Tokens | Yes | None |
| Expire Date Time | ExpireDateTime of the event. If the date is empty, the Expire Date will be Datetime.Now 100 years by default. Can contain My Tokens | Yes | None |
| Approved | Is the article approved? Can contain My Tokens | Yes | None |
| Featured | Is the article featured? Can contain My Tokens | Yes | None |
| Fields Template Name | The Template name of the custom fields you want to add. Can contain My Tokens | Yes | None |
| Custom Fields | Optionally provide an association table to parse custom fields.Can contain My Tokens | Yes | None |
| Instance Id | This is the Easy DNN News instance ID. You can find this in Easy DNN admin. Can contain My Tokens | Yes | None |
| Tags | Here you can enter tags, separated by commas. | No | None |
| Portals | This is the Easy DNN News instance ID. You can find this in Easy DNN admin. Can contain My Tokens | Yes | None |
| ArticleId Token | Store EventID in this token. | No | None |
