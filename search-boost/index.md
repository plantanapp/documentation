# Introduction

<img style="float: right; height: 200px; width: 200px;" src="getting-started/assets/sb.jpg"/>

**Search Boost** is a **DNN** component that extends search functionalities with powerful new ones such as document search, fully customize appearance or chose one from many available templates, restrict results to specific sets of modules and so on. Everything is made easy through powerful **AJAX** based **Administration Console**.

## Key Features:
* Fully Customize Appearance (based on Razor+CSS templates);
* Restrict search results to specific portals/tabs/modules;
* Search documents;
* Live Search;
* Fuzzy Search;
* Exact Phrase Search;
* Contextual Highlighting;
* Index Custom Data from the database;
* Search across multiple portals (with the possibility to display a portal filter);
* Use as Skin Object.

**Search Boost** package contains two modules:

* **SearchBoost.Input** - Represents the text box that initiates the search. Additionally, it provides the means to the configure Search Boost instance.
* **SearchBoost.Results**. Represents the result pages. Note that the results module can't be configured separately, it uses the settings of the instance that initiated the search. This allows you to link multiple **SearchBoost.Input** instances to the same results module, add render differently accordingly.
