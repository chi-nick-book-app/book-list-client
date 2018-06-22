'use strict';

// let bookView = {};



bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    Book.all.forEach(bookApp => $('#book-list').append(bookApp.toHtml()));
}
bookView.initOnebook = () => {
    // $('.container').hide();
    $('.book-view').show()
    // Book.one = () => $('#book-detail').append(bookApp.toHtml());
    Book.one.forEach(detail => $('#book-detail').append(detail.toHtml()));

}


$("#insert-book").on("click", function () {
    $('.book-view').hide();
    $('#form-view').show();
})


$("#books-app").on("click", function () {
    $('#form-view').hide();
    $('.book-view').show();
})
