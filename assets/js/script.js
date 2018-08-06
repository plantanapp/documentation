(function () {
    // DECLARE FUNCTIONS
    function expandTreeToElement(element) {
        do {
            element = element.parentElement;
            element.setAttribute("aria-expanded", true);
        } while (element.parentElement)
    }
    //END DECLARE FUNCTIONS

    // MAIN CODE
    var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json'
      })

    if (location.pathname !== '/' && location.pathname !== '/index.html') {
        var element = document.querySelector("a[href='" + location.pathname + "']");
        element && expandTreeToElement(element);
    }
    
})()