---
id: using-tokens-in-themes
title: Using Tokens in Themes
sidebar_label: Using Tokens in DNN Themes
---

# Use Tokens in Themes

**Audience:** [`Developers`, `Administrators`, `Citizen Developer`]  
**Skill Prerequisites:** `Tokens`, `Themes`, `Platform`

## Overview

Plant an App version 1.27.418 (and above) introduces an updated method for embedding tokens directly into themes. This new approach is designed to simplify the integration and enhance the performance of your themes. Tokens can dynamically insert content, such as user information or the current date, into your page themes.

****

## How to Embed Tokens in Themes

To integrate tokens into your themes using the updated approach provided by Plant an App, follow the instructions below. This method allows you to display dynamic information across your themes seamlessly.

### Embedding Tokens

1. **Open Your Theme File**:  
   Start by accessing the `.ascx` file of the theme you want to modify. This is where you'll insert the token.

2. **Register the New Tag Prefix**:  
   At the beginning of the file, register the new token control with the following line:

   ```html
   <%@ Register TagPrefix="PaaTokens" Namespace="PlantAnApp.Dnn.Tokens.Controls" Assembly="PlantAnApp.Dnn" %>
   ```

3. **Place the Token Where Needed**:  
   Insert the token expression at the desired location in your theme. For example, to display the current date and time at the top of each page, use the `[DateTime:Now]` token as shown below:

   ```html
   <PaaTokens:Apply runat="server">
     Hi [User:FirstName]
   </PaaTokens:Apply>
   ```

   This setup will automatically display the current user's first name each time a page with this theme is rendered.

****

## Example Use Case

Imagine you want to include the user's email or the current date and time on every page that uses a specific theme. By embedding tokens through the method outlined above, you can effortlessly achieve this dynamic display. Here's an example showing the current date and time:

```html
<%@ Register TagPrefix="PaaTokens" Namespace="PlantAnApp.Dnn.Tokens.Controls" Assembly="PlantAnApp.Dnn" %>
<PaaTokens:Apply runat="server">
  Today's Date and Time: [DateTime:Now]
</PaaTokens:Apply>
```

When this code is integrated into a theme, every page utilizing this theme will display the current date and time at the specified location.

****

## Conclusion

Embedding tokens within your themes is now streamlined and efficient with the new method introduced in Plant an App version 1.28. This powerful capability allows you to seamlessly inject dynamic content, enhancing user experience and providing up-to-date information across your applications.

Revised 09/16/2025