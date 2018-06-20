// 'use strict';
// let bookView = {};


// function Book(bookObj) {
//   this.title = bookObj.title;
//   this.author = bookObj.author;
//   this.isbn = bookObj.isbn;
//   this.image_url = bookObj.image_url;
//   this.description = bookObj.description;
//   // this.all = [];
// }

// function Book(bookObj) {
//   Object.keys(bookObj).forEach(key => {
//     this[key] = bookObj[key];
//   }, this);
// }

// Book.all = [];

// Book.prototype.toHtml = function () {
//   let template = Handlebars.compile($('#book-list-template').text());
//   // $(DOM).append(magic(this));
//   return template(this);
// };


// Book.loadAll = bookData => {

//   bookData.forEach(bookObject => Book.all.push(new Book(bookObject)))
//   bookView.initIndexPage();
//   $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books`)
//     .then(Book.loadAll)
//     .then(callback)
//     .callback()


// }



// Book.fetchAll = () => {

//   if (localStorage.bookData) {
//     let storedBlogs = JSON.parse(localStorage.bookData);
//     Book.loadAll(storedBlogs)

//   } else {
//     $.ajax({
//       url: 'https://chi-nick-booklist.herokuapp.com/api/v1/books',
//       method: 'GET',
//       headers: {},
//       success: function (data, message, xhr) {
//         localStorage.setItem("bookData", JSON.stringify(data));
//       }
//     })
//     Book.fetchAll();
//   }
// };

// Book();


/////START OVER\\\\\

// var app = app || {};


// function errorCallback(err) {
//   console.error(err);
//   module.errorView.initErrorPage(err);
// }

// function Book(bookObj) {
//   Object.keys(bookObj).forEach(key => {
//     this[key] = bookObj[key];
//   }, this);
// }
// Book.prototype.toHtml = function () {
//   var template = Handlebars.compile($('#book-list-template').text());
//   return template(this);
// }


