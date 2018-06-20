'use strict';



// let app = app || {};


Book.prototype.toHtml = function () {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
}

Book.all = [];
Book.limited = [];


bookView.initIndexPage = () => {
    $('.container').hide();
    $('.book-view').show();
    Book.all.forEach(bookApp => $('#book-list').append(bookApp.toHtml()));
}



errorView.initErrorPage = (err) => {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').empty();
    Handlebars.compile($('#error-template').text(err));
};




//sort author not nesscary
Book.loadAll = rows => {
    Book.all = rows.map((info) => new Book(info));
  }
  
  Book.fetchAll = callback => {
    // $.get('./data/books.json')
    $.get('https://chi-nick-booklist.herokuapp.com/api/v1/books')
      .then(results => {
        Book.loadAll(results);
        callback();
      })
  };
  $(document).ready(function () {
    Book.fetchAll(bookView.initIndexPage);
});
  