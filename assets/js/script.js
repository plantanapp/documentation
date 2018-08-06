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
    if (location.pathname !== '/' && location.pathname !== '/index.html') {
        var element = document.querySelector("a[href='" + location.pathname + "']");
        element && expandTreeToElement(element);
    }
})()