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

// $('#thebutton').on('click', handleform);

// function handleForm(event) {
//     event.preventDefualt();
//     let formData = {
//         formData.author = $('#author').val(),
//         formData.title = $('#title').val(),
//         formData.isbn = $('#isbn').val(),
//         formData.image_url = $('#image_url').val(),
//         formData.description = $('#description').val(),
//     })
//     console.log('clicky');
// }


