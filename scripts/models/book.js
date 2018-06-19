'use strict';


function Book(rawDataObj) {
    this.title = rawDataObj.title;
    this.author = rawDataObj.author;
    this.isbn = rawDataObj.isbn;
    this.image_url = rawDataObj.image_url;
    this.description = rawDataObj.description;
    // this.all = [];
}

Book.all = [];


Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#book-list-template').text());

    return template(this);
};


Book.loadAll = bookData => {

    bookData.forEach(bookObject => Book.all.push(new Book(bookObject)))
    bookView.initIndexPage();
}



Book.fetchAll = () => {
  
    if (localStorage.bookData) {
      let storedBlogs = JSON.parse(localStorage.bookData);
      Book.loadAll(storedBlogs)
  
    } else {
      $.ajax({
        url: 'https://chi-nick-booklist.herokuapp.com/api/v1/books',
        method: 'GET',
        headers: {},
        success: function (data, message, xhr){
         localStorage.setItem("bookData", JSON.stringify(data));
        }
      })
    Book.fetchAll();
    }
  };

  Book();