'use strict';



// let app = app || {};

let bookView = {};
let errorView = {};



// bookView.initIndexPage = () => {
//     // $('.container').hide();
//     $('.book-view').show();
//     Book.all.forEach(bookApp => $('#book-list').append(bookApp.toHtml()));
// }



errorView.initErrorPage = (err) => {
    // $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    Handlebars.compile($('#error-template').text(err));
};




//sort author not nesscary
Book.loadAll = rows => {
    Book.all = rows.map((info) => new Book(info));
}

Book.loadOne = (info) => {
    Book.one[0] = new Book(info);

}

Book.fetchAll = callback => {
    // $.get('./data/books.json')
    $.get('https://chi-nick-booklist.herokuapp.com/api/v1/books')
        .then(results => {
            Book.loadAll(results);
            callback();
        })
};


Book.fetchOne = callback => {
    // $.get('./data/books.json')
    $.get('https://chi-nick-booklist.herokuapp.com/api/v1/books/:id')
        .then(results => {
            Book.loadOne(results);
            callback();
        })
};



$(document).ready(function () {
    Book.fetchAll(bookView.initIndexPage);
    Book.fetchOne(bookView.initOnebook);
});