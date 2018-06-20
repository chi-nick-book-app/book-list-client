'use strict';

let bookView = {};
let errorView = {};

// let app = app || {};


function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);
    
}

Book.prototype.toHtml = function () {
    var template = Handlebars.compile($('#book-list-template').text());
    return template(this);
}


