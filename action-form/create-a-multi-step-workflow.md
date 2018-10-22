# **Create a Multi-Step Workflow**

Integrated with Action Form and Action Grid Modules, Tabs Pro provides a facility for building and handling multi-step workflows in your applications.

Features:

* navigation \(next, back, start over\)step using TabsPro Change Tab action
* evaluate the state of the TabsPro's Tabs before changing the tab
* different validation for each step through Show Conditionally and Enable Conditionally
* open the complete Multi-Step workflow as modal
* show loading animation when Action Form or Action Grid are rendering and loading data
* actions executed on Tab Enter or on Tab Leave declared in Action Form 
* initialize or refresh Action Grid when a tab is active
* easy QueryString reference by using Initialize Action Form or Open Action Form/TabsPro PopUp actions
* closure flows through Close Action Form or TabsPro PopUp actions

# ![](https://puu.sh/xs3Zz/33e78a691f.png)

* **Navigation** - it can be defined in Action Form or Action Grid by creating buttons, labeled \(Next, Previous, etc\) within Change TabsPro Tab actions. The following JavaScript method dnnsf.api.tabspro.changeTab\({mid:421,done}\); is available to reference it from external modules.

* **Validation** - it can be set in Tabs Pro \(Items Section\) by using Boolean expressions in one of the options: Show Conditionally or Enable Conditionally. These conditions are evaluated on server side. A common example is \[QueryString:Key\] == "Value". These fields support [My Tokens](/my-tokens/index.html). See [More examples](//action-form.dnnsharp.com/conditions).![](https://puu.sh/xs9gX/e3cd2a6dfd.png)

* **Open as Modal** - this option is available in TabsPro under Settings Section. Basically, it displays the entire Multi-Step system in PopUp. This can be triggered from external modules \(a HTML module, a DNN Skin, etc\) by calling the following javascript functions:

  * dnnsf.api.tabspro.openModal\({mid:436}\); -  open the PopUp
  * dnnsf.api.tabspro.closeModal\({mid:436}\); - close the PopUp
  * dnnsf.api.tabspro.isModalOpen\(\);

![](https://puu.sh/xsakr/f5574c1180.png)

* **Show loading animation** option can be found in three modules \(Action Form, Action Grid, Tabs Pro\) under General Settings and respectively Layout Settings. It displays a bar animation CSS only that hides the content of a module until it is completely loaded. In Action Form the check boxes are mutually exclusive. If you click "Show loading animation" it unchecks "Trigger loading animation" and vice versa.

![](https://puu.sh/xx6LY/880cce960b.png)

* **TabsPro Integration with Action Form on Form Events** - these options work only if you already have a TabsPro version higher than 02.01.76 installed

  * **Tab Enter Section** - where it can be defined a list of actions to be executed after the TabsPro's Tab containing an Action Form is entered.
  * **Tab Leave Section** - where it can be defined a list of actions to be executed after the TabsPro's Tab containing an Action Form is left.

    * Refresh tab state - this setting enables all tabs' conditions to be reevaluated when a TabsPro's Tab is changed.

    * Ignore Validation - this setting enables Action Form to avoid validation \(both client and server side\).

    * Save To Reports - this setting enables Action Form to save data to reports table.

* **TabsPro Integration with Action Grid on General Settings** These options work only if you already have a [TabsPro](//www.dnnsharp.com/dnn/modules/tabs-pro) version higher than 02.01.40 installed.

  * **Load When Tab Is Activated** - if this setting is enabled the grid will be initialized when the tab is active.

  * **Refresh Grid When Tab Is Activated** - if this setting is enabled the grid will be refreshed when the tab is active.

* **TabsPro Actions available in Action Form and Action Grid**

  * **Open Action Form Popup And Continue / Stop Execution** -- it opens a selected Action Form module in modal. It can **Reinitialize Action Form when opening the popup.** The **QueryString Parameters** set in this action will be sent to the Action Form module and they will be available in the Init and PreInit actions as values of the 'QueryString:' token namespace. Can be used as regular action where the stack actions will continue or as final action that will stop the execution of the below actions. This action provides the following javascript functions: **dnnsf.api.actionForm.openPopupById\("497"\)** or **dnnsf.api.actionForm.openPopupByName\("popupName"\)** or **dnnsf.api.actionForm.isFormPopupOpen**  or **dnnsf.api.actionForm.isFormPopupOpen \("497"\).**

  * **Close Action Form Popup And Continue / Stop Execution** - it closes the modal through a selected Action Form module. Can be used as regular action where the stack actions will **continue** or as final action that will **stop** the execution of the below actions. This can be triggered from external modules by calling the following javascript function: **closePopupById\("497"\).**

  * **Initialize Action Form And Continue / Stop Execution** -it initializes a selected Action Form Module. The **QueryString Parameters** set in this action will be sent to the Action Form module and they will be available in the Init and PreInit actions as values of the 'QueryString:' token namespace. Can be used as regular action where the stack actions will **continue** or as final action that will **stop** the execution of the below actions. This action provides the following javascript functions: **dnnsf.api.actionForm.initForm\("497",{"param":"diana"}\)**,  **initForm\("497"\)**\(to manually initialize the form on the page\), showFormInline\("497"\) **\(open form in text mode\)**, **hideFormInline\("497"\)**\(hide form in text mode\)
  
  * **Open TabsPro Popup And Continue / Stop Execution**- it opens a selected TabsPro module in modal, requires **Open as modal**option enabled. This action provides the following javascript functions: **dnnsf.api.tabspro.openModal\({mid:421}\); **or** dnnsf.api.tabspro.isModalOpen **or** dnnsf.api.tabspro.refreshTabPro\({"mid":"421"}\)**

  * **Close Tabs Pro Popup And Continue / Stop Execution**-it closes the modal through a selected Tabs Pro module. This action provides the following javascript function: **dnnsf.api.tabspro.closeModal\("421"\)**

  * **Tabs Pro Change Tab And Continue / Stop Execution**- it changes the tab of a selected Tabs Pro Module. The Evaluate state **checkbox**evaluates the state of the TabsPro's Tabs before changing the tab.This action provides the following javascript function: **dnnsf.api.tabspro.changeTab\({"mid":"421","tabId":"25"}\)**
