# Plant An App Documentation

## Getting started

In order to get started contributing to the documentation, you will need the following:

* [Visual Studio Code](https://code.visualstudio.com/)
* [GitExtensions](http://gitextensions.github.io/)

First of all, you will need GitExtensions and Visual Studio Code installed in order to have control over the repository and be able to modify the documentation.

You will also have to install [Node](https://nodejs.org/en/download/), the minimum version currently requested by Docusaurus is Node >= 10.9.0.

We recommend installing the following Visual Studio Code extensions for markdown:

* [markdownlint](//marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
* [markdown all in one](//marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

The quick set-up procedure is the following:  

  1. Clone the repository into your folder of choice. 
  2. Navigate inside the folder of the project you cloned.
  3. Use the key combo `Shift + Right-Click` in order to bring up menu and select  'Open Powershell Window here'
  4. Inside the new window run the command `npm install` which will install all the necessary dependencies to run Docusaurus locally.
  5. After the command finishes, run the command `npm start` which will start your local server and open a new tab with the site in your browser.

## Publish documentation

  1. Run `npm run build` command line in the root of the local copy of the repository
  2. Connect to the S3 bucket called `learn.plantanapp.com`
  3. Not sure if it matters, but perhaps it's good to delete all files from that bucket before uploading the new ones to avoid leftovers.
  4. Copy all files from the `/build` folder of the local copy of the repostiroy to the S3 bucket 
  5. `learn.plantanapp.com` is actually a CDN mapped over that bucket. It's unclear yet if the CDN would upload instantly or if we need to invalidate the cache.

  
