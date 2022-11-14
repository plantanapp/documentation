---
id: configuration-and-usage-on-prem
title: Version Control (on-prem)
sidebar_label: Version Control (on-prem)
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

## Version Control (on-prem)

This section covers the setup and usage of the Version Control feature for the self-hosted version of Plant an App.

### Prerequisites

For the on-prem deployment type, the `Version Control` feature requires the installation of the **MEO** (<em>Multi-Environment Orchestrator</em>) server as a prerequisite.

MEO allows you to push and pull changes in an environment or move them to a second environment (e.g. development or QA) by leveraging the use of a <strong><a href="https://git-scm.com/">GIT</a></strong>-based <a href="https://en.wikipedia.org/wiki/Version_control">Version Control System</a> such as <strong><a href="https://github.com/">GitHub</a></strong>.

This feature is currently marked as experimental and in the 1.23 release it can only do a (clean) push from your environment to GIT. Other features will follow in upcoming releases.

To use Version Control, you will also need to setup a GIT or [GitHub account](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account).

### Setup

For the MEO setup, please see the subsequent documentation pages found in this section:

1. `MEO Overview` \- for a general description and overview of the server\.
2. `MEO Prerequisites and Setup` \- a list of technical prerequisites for deploying the server\.
3. `MEO Installation` \- covers the installation steps of the server\.
4. `MEO Server Configuration` \- provides details on how to configure the server\.

### Configuration

Once the MEO server is installed as described in the section above, you will be able to access and use the `Version Control` section.

At the first-time use of `Version Control`, you will need to link your Plant an App to your MEO (Multi-Environment Orchestrator) server.

<img src="/img/meo_connect.png" alt="meo_connect.png"></img>

Check the IIS Manager for the MEO website that you have created in the `MEO Prerequisites and Setup` \> `IIS Site Setup` section. Please enter your MEO Server URL and click `Submit`.

Once the connection to the MEO Server is established, you will be asked to provide your GIT/GitHub connection credentials:

* Your [GIT URL](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)
* [GIT Username](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git)
* [GIT PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), or *Personal Access Token*

<img src="/img/git_connection.png" alt="git_connection.png"></img>

After having successfully logged into your GIT/GitHub account, an initial commit will be made. To understand the concept, please [see here](https://docs.gitlab.com/ee/tutorials/make_your_first_git_commit.html). Simply click the `Initialize` button.

<img src="/img/initial_commit.png" alt="initial_commit.png"></img>

If the process is successful, you will be taken to the Version Control main console screen (see below).

### Usage

Once the Setup and Configuration steps above are completed, `Version Control` is ready to use. Accessing it will bring you directly to the Version Control main console screen which contains three sections:

* `Version History`
* `Changes`
* `Included In Version`

#### **Version History**

This section lists the history of your commits along with various information about each one of them.

For each commit, you will be able to see the following parameters, listed in columns:

| Parameter | Description |
| --------- | ----------- |
| *Id* | A unique random string that identifies each commit. |
| *Title* | Provided when submitting the commit, see the ["](#included-in-version)<strong>[Included In Version](#included-in-version)</strong>["](#included-in-version) section, below. |
| *Details* | Optional field, provided when submitting the commit, see the ["](#included-in-version)<strong>[Included In Version](#included-in-version)</strong>["](#included-in-version) section, below. |
| *ComitterName* | This is the GIT <em>CommitterUsername</em>; this parameter has a default value, but can also be edited if needed. Please see the "<strong>`appsettings.override.json` file configuration</strong>" section on the "<strong>MEO Server Configuration</strong>" page for more details. |
| *CommitterEmail* | This is the GIT <em>CommitterEmail</em>; this parameter has a default value, but can also be edited if needed. Please see the "<strong>`appsettings.override.json` file configuration</strong>" section on the "<strong>MEO Server Configuration</strong>" page for more details. |
| *CommitDate* | The date and time (of the server) when the commit was made. The format is "`MM/DD/YYYY H:MM`". |

<img src="/img/version_history.png" alt="version_history.png"></img>

Additionally, you can:

* Click the "<strong>Details</strong>" button ① for each separate commit to reveal a card with all the parameters for that particular commit. Note that you are able to copy each value by clicking the "Copy" symbol.

<img src="/img/version_history_commit_details.png" alt="version_history_commit_details.png"></img>

* Search your commits by Id or keywords in the Search box ②.
* Configure your GIT credentials ③ - [GIT URL](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories), [GIT Username](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git) and [GIT PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
* Navigate through the commit pages and set the number of commit items to be displayed by page ④.

#### **Changes**

In this section the changes since your last commit are listed and you can select them individually (or in mass) to be included in your commit.

<img src="/img/version_history_changes.png" alt="version_history_changes.png"></img>

* The filters section ① allow you to look for a specific change according to a keyword or Id via the <strong>Search box</strong>, or to filter the displayed list of commits through the "<strong>Item Type</strong>" (type of object - variable, token, etc.) or "<strong>Change Type</strong>" (the type of action the object was subjected to) drop-down lists.

Note that each type from the list is individually selectable through a checkbox. If at least a filter is applied, a "<strong>Clear All</strong>" button will appear, allowing you to remove all filters in on click.

<img src="/img/version_history_changes_2.png" alt="version_history_changes_2.png"></img>

* Select ② the changes you want to include in the next commit by checking their corresponding box in the utmost left column. Alternatively, you can select all the boxes at once by checking the box atop the column.
* Include your changes to the commit by clicking their individual "<em>Include</em>" button ③ in the utmost right column. Alternatively, you can click the "<strong>Include Selected</strong>" button above the filters section; this will include all the selected changes to the commit at once.

#### **Included In Version**

This section composes the final version commit. It also allows you to remove changes from the commit.

<img src="/img/version_history_included_in_version.png" alt="version_history_included_in_version.png"></img>

* The filters section ① allow you to look for a specific change according to a keyword or Id via the <strong>Search box</strong>, or to filter the displayed list of commits through the "<strong>Item Type</strong>" (type of object - variable, token, etc.) or "<strong>Change Type</strong>" (the type of action the object was subjected to) drop-down lists.

Note that each type from the list is individually selectable through a checkbox. If at least a filter is applied, a "<strong>Clear All</strong>" button will appear, allowing you to remove all filters in on click.

<img src="/img/version_history_changes_2.png" alt="version_history_changes_2.png"></img>

* Select ② the changes you want to remove from the next commit by checking their corresponding box in the utmost left column. Alternatively, you can select all the boxes at once by checking the box atop the column. Then, click the "<strong>Remove Selected</strong>" button above the filters section to remove all the selected changes.

You can also remove changes individually, by clicking their respective "<em>Remove</em>" button ③ in the utmost right column.

* When you are happy with the changes list to be included in the commit, click the "<strong>Commit Changes</strong>" button ④.
* The "<strong>Stage Form</strong>" window will appear, allowing you to enter the "<em>Commit Title</em>" (mandatory) and "<em>Commit Description</em>" (optional). When done, click the `Commit` button.

<img src="/img/version_history_stage_form.png" alt="version_history_stage_form.png"></img>

* Finally, the "<strong><em>Committing</em></strong>" window will appear. You will be able to follow the stage of the operation via a progress bar.

<img src="/img/version_history_committing.png" alt="version_history_committing.png"></img>

Once the operation ends, you will be automatically taken back to the Version Control main console screen.