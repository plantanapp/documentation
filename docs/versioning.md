---
id: versioning
title: Versioning
sidebar_label: Versioning
---

## `General introduction`

Plant an App features an integration with [GitHub](https://github.com/) for version control. All the configurations of the app are pushed to a GitHub repository of your choice. This will help during development to track work, modifications and provides an easy way to revert work in case of mistakes. 

## `What is versioning`

Versioning is the creation and management of multiple releases of a product, all of which have the same general function but are improved, upgraded or customized. The term applies mostly to operating systems (OSs), software and web services. Version control is the practice of ensuring collaborative data sharing and editing among users of systems that employ different versions of a product. 

## `Why is it important`

Version control (also known as source control) is the management of file changes within a version control system. These systems automatically maintain character level changes for all files stored within, allowing for a complete retrace of all versions of each file, the author of those versions and a complete rollback of all changes from the beginning of version control.

For developer-oriented work, it is critical to utilize version control systems for all non-binary files (read Notepad readable) to enable multiple developers or teams to work in an isolated fashion without impacting the work of others. This isolation enables features to be built, tested, integrated or even scrapped in a controllable, transparent and maintainable manner.

The basics of version control are saving changes made to files while retaining the changes from all previous versions. All changes made within Git receive a unique version identifier alongside a user-written comment where the changes can be described.

## `Step-by-step instructions`

<iframe width="560" height="315" src="https://www.youtube.com/embed/jexNBLopRcw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. Go to the configuration page
2. Go to `Connectors` from the left menu
3. Click `NEW` on the top button to open the Add dialog
4. In the dialog enter the Name of the Connector (eg: GitHub)
5. Choose the connector type to be `GitHub`. 2 more fields will pop-up: Username and Personal Access Token
6. Type in the GitHub username
7. For the Personal Access Token go to GitHub, click on your picture on the top right and from the dropdown menu choose `Settings`.
8. On the Settings page, in the left menu at the bottom click on `Developer Settings`
9. On the Developer Settings page in the left menu click on `Personal Access Token`
10. On the Personal Access Token page in the top right corner click on `Generate new token`
11. On the new token page type in the name of the app in the `Note` field and check the `repo` from the scopes to give access to the repository
12. Click `Generate token` at the bottom of the page
13. Copy the access token that was generated
14. Paste the token in the Personal Access Token field in Plant an App connector dialog
15. Click `Save` to add the connector
16. (Optional) You can test the Connector to be sure it working
17. Go to `General` from the left menu
18. In the `Version Control` dropdown choose your GitHub Connector
19. (Optional) If you don't have a repository, please go to GitHub and create a repository
20. Paste the GitHub repository URL next to the dropdown.
21. Click on `SAVE` in the right top corner
22. The application will automatically do an initial commit with the current configuration on branch named `production`

## The structure of the repository

```
.
├── .settings
├── Apis
│   └── <mid>
│       └── API_Methods_Export.json
├── Pages
│   └── Page Name
│       ├── Subpages<if any>
│       │   └── module_export.xml
│       └── module_export.xml
└── Variables
    └── Custom
        └── Variable_Name.json

```

### `.settings`

This is a folder of metadata's that help Plant an App to track the current state of the platform. `Should not be modified.`

### `API/<mid>`

It contains the export of all the APIs in the platform for each API module on the platform. 
`mid` is the unique module id for each API Module so the exports are stored in a structured way.

### `Pages`

Contains all the pages from the app. Folders inside it are actual pages from the platform and contain the module exports.

### `Variables`

Contains the Custom tokens exports available in the Platform.

:::note
At the moment reverting can only be done manually by copying the desired export and manually import it into the application.
Automation for reverting components is scheduled for development but the release date is unknown. 
:::
