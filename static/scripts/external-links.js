
// open external links in new tab
document.addEventListener('click', function (e) {
    var target = e.target || e.srcElement;
    if (target.tagName !== 'A')
        return;
    var href = target.getAttribute('href');
    if (/^(https?:)?\/\//.test(target.getAttribute('href'))) {
        target.target = '_blank';
    }
});
