'use strict';
let bookView = {};
let errorView = {};


function Book(bookObj) {
  Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);

}

Book.prototype.toHtml = function () {
  var template = Handlebars.compile($('#book-list-template').text());
  return template(this);
}

Book.all = [];
Book.limited = [];

Book.loadAll = rows => {
  rows.sort(function (a, b) {

    let authorA = a.title.toUpperCase();
    let authorB = b.title.toUpperCase();
    if (authorA < authorB) {
      return -1;
    } if (authorA > authorB) {
      return 1;
    }
    return 0;
  });

  Book.all = rows.map((info) => new Book(info));
}

Book.loadLimited = rows => {
  rows.sort(function (a, b) {

    let authorA = a.title.toUpperCase();
    let authorB = b.title.toUpperCase();
    if (authorA < authorB) {
      return -1;
    } if (authorA > authorB) {
      return 1;
    }
    return 0;
  });

  Book.limited = rows.map((info) => new Book(info));
}

Book.fetchAll = callback => {
  $.get('https://chi-nick-booklist.herokuapp.com/api/v1/books')

    // $.get('./data/books.json')

    .then(results => {
      Book.loadAll(results);
      callback();
    })
};

bookView.initIndexPage = () => {
  $('.container').hide();
  $('.book-view').show();
  Book.all.forEach(a => $('#book-list').append(a.toHtml()));
}


$(document).ready(function () {
  Book.fetchAll(bookView.initIndexPage);

});

errorView.initErrorPage = (err) => {
  $('.container').hide();
  $('.error-view').show();
  $('#error-message').empty();
  Handlebars.compile($('#error-template').text(err));
};

function errorCallback(errorObj) {
  console.log(errorObj);
  errorView.initErrorPage(errorObj);
}

Book.fetchLimited = callback => {
  $.get('https://chi-nick-booklist.herokuapp.com/api/v1/books')
    // $.get('./data/books.json')

    .then(results => {
      Book.loadLimited(results);
      callback();
    })
};