'use strict';

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
        if (element.length) {
            while (!element.parent().hasClass('tree') && !element.is('body')) {
                element = element.parent();
                if (element.hasClass('parent_li')) {
                    element.find(' > span > i').addClass('fa-minus-circle').removeClass('fa-plus-circle');
                    element.find(' > ul > li').show();
                }
            }
        }
    }

    function parseUrlForSearchResults(url) {
        const replaceObject = {
            "/": " -> ",
            "-": " ",
            ".html": "",
            "_": " "
        }
        //need to eliminate the first slash and then replace the other strings
        return url.substring(1).replace(/\/|-|.html/gi, function (matched) {
            return replaceObject[matched]
        });
    }

    function searchResults(prop, value) {
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
        searchResultTemplate: '<li><a class="list-group-item list-group-item-action text-left" href="{url}"><span class="search-result-title">{title}</span><br><span class="search-result-path">{path}</span></a></li>',
        templateMiddleware: searchResults,
        sortMiddleware: function () {
            return 0;
        },
        noResultsText: 'No results found',
        limit: 5,
        fuzzy: false
    });

    $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    if (location.pathname !== '/' && location.pathname !== '/index.html') {
        let element = $("a[href='" + location.pathname + "']");
        element && expandTreeToElement(element);
        element.parent('span').addClass('tree-current-item');
    }
    window.matchMedia("(min-width: 768px)").matches && $("#wrapper").toggleClass("toggled");

})();