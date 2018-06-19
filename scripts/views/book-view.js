'use strict';

let bookView = {};



bookView.initNewArticlePage = () => {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function () {
        this.select();
    });



}

bookView.initIndexPage = () => {
    Book.all.forEach(article => {
        $('#book').append(article.toHtml())
    });
}
