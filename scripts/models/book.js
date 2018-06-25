'use strict';

// let bookView = {};
// let errorView = {};
// let app = app || {};


Book.all = [];
Book.one = [];
Book.limited = [];
// formData =[];


function Book(bookObj) {
    Object.keys(bookObj).forEach(key => this[key] = bookObj[key]);

}

Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#book-list-template').text());

    return template(this);
}

// Book.prototype.one.toHtml = function () {
// let template = Handlebars.compile($('#book-detail-template').text());
//     return template(this);
// }


//sumbit form 

$('#thebutton').on('click', handlForm);
function handlForm(event) {
    event.preventDefault();
    let formData = {};
    formData.author = $('#author').val(),
    formData.title = $('#title').val(),
    formData.isbn = $('#isbn').val(),
    formData.image_url = $('#image-url').val(),
    formData.description = $('#description').val(),
    
    
    console.log(formData);
    // $.post('https://localhost:5000/api/v1/books',formData)
    
    $.post('https://chi-nick-booklist.herokuapp.com/api/v1/books',formData)
    .then(data => console.log(data));
    
}

// update books
// Book.prototype.updateBook = function (callback) {
//     $.ajax({
//         url: `https://chi-nick-booklist.herokuapp.com/api/v1/books/${this.book_id})`,
//         method: 'PUT',
//         data: {
//             author: this.author,
//             title: this.title,
//             isbn: this.isbn,
//             image_url: this.image_url,
//             book_id: this.book_id
//         }
//     })
//         .then(console.log)
//         .then(callback);
// };
