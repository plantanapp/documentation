'use strict';
(function () {
    $('.tree li:has(ul)').addClass('parent_li');
    $('.tree .parent_li').find('> ul > li').hide()
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).find(' > i').addClass('fa-plus-circle').removeClass('fa-minus-circle');
        } else {
            children.show('fast');
            $(this).find(' > i').addClass('fa-minus-circle').removeClass('fa-plus-circle');
        }
        e.stopPropagation();
    });
})();