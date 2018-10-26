# Page Parameters

This type of redirect allows matching based on page state. This includes reading and evaluating Query String parameters (from GET operations), Form Data (from POST operations) and Browser Cookies.

<div style="text-align:center">

![](\../assets/redirect-by-request-parameters.png)

</div>

## Properties

* **GET Query String** - Matches against a named parameter from the Query String; this is the part in the URL that appears after the question mark, for example in url *Default.aspx?tabid=111* there is one parameter named tabid (note that sometime the parameters can be masked by rewriting engines, for example in DNN often this url looks like */tabid/111/Default.aspx*)
* **POST Data** - Matches against data submitted to the page via POST operations.
* **Browser Cookie** - Matches against data saved in browser cookies.
* **Any** - Redirect toolkit looks in all the above sources for a match of the named parameter.