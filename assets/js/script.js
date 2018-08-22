(function () {
    //EVENTS
    $('#search-input').on('click', function (e) {
        $('#results-container').show();
        event.stopPropagation();
        $(document).on('click.outsideSearch', function (event) {
            event.stopPropagation();
            var container = $("#results-container");

            //check if the clicked area is dropDown or not
            if (container.has(event.target).length === 0) {
                $('#results-container').hide();
                $(document).off('click.outsideSearch');
            }
        });
    });
    //END EVENTS

    // DECLARE FUNCTIONS
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    function expandTreeToElement(element) {
        do {
            element = element.parentElement;
            element.setAttribute("aria-expanded", true);
        } while (element.parentElement)
    }

    function parseUrlForSearchResults(url) {
        const replaceObject = {
            "/": " -> ",
            "-": " ",
            ".html": ""
        }
        //need to eliminate the first slash and then replace the other strings
        return url.substring(1).replace(/\/|-|.html/gi, function (matched) {
            return replaceObject[matched]
        });
    }

    function searchResults(prop, value, template) {
        if (prop === 'path') {
            let parseResult = parseUrlForSearchResults(value);
            return toTitleCase(parseResult);
        }
    }
    //END DECLARE FUNCTIONS

    // MAIN CODE
    var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json',
        success: Function.prototype,
        searchResultTemplate: '<li><a class="list-group-item list-group-item-action" href="{url}">{title}<br><span class="search-result-location">{path}</span></a></li>',
        templateMiddleware: searchResults,
        sortMiddleware: function () {
            return 0;
        },
        noResultsText: 'No results found',
        limit: 5,
        fuzzy: false
    });

    if (location.pathname !== '/' && location.pathname !== '/index.html') {
        let element = document.querySelector("a[href='" + location.pathname + "']");
        element && expandTreeToElement(element);
    }

})()