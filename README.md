# How to contribute

## Markdown

We are using Github Pages for this site so you need to use [GitHub Flavored Markdown](//guides.github.com/features/mastering-markdown/)

## First steps

  1. Create a [github](//github.com) account.
  2. Fork our [repository](//github.com/plantanapp/plantanapp.github.io) and clone it locally using GIT or you can even edit it directly on github.
      - Now you have your own copy at github.com/**YOUR_USERNAME**/plantanapp.github.io
  3. If you write documentation locally, we recommend [Visual Studio Code](//code.visualstudio.com/) and those two extensions for markdown:
      - [markdownlint](//marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
      - [markdown all in one](//marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## Menu

- The menu structure is represented in JSON format. You can find the files in `_data/menu` folder
- As you can see, each product has its own JSON file but those are loaded from the main.json

### Example - Action Grid in main.json

#### main.json

```json
{
    "title": "Modules",
    "subpages": [{
        "title": "Action Grid",
        "ref": "actiongrid",
        "url": "/action-grid/index.html"
}]
```

You can see here that every main product is child to the object with the title `Modules`.

The `ref` property links `main.json` to the other JSON files; to be used only in this file's objects.

Every object needs a `title` property.

The objects that point to pages also have the `url` property.

To define an expandable object (category), you can define the `subpages` property which is an array of objects.

## Folder structure

- Each JSON corresponds to a folder. You can find the folders in the root of the project.
- Each category in the menu corresponds to a sub-folder.
- Assets like images should be placed inside the folder's `assets` sub-folder.
