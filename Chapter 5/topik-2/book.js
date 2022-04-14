//* array used to store the book data
const books = [];

class Book {
  constructor(params) {
    this.id = params.id;
    this.title = params.title;
    this.coverImage = params.coverImage;
    this.synopsis = params.synopsis;
    this.publisher = params.publisher;
    this.author = params.author;
    this.price = params.price;
  }

  //* method to add a book to the array
  static create(params) {
    if (books.length === 0) {
      params.id = 1;
    } else {
      params.id = books[books.length - 1].id + 1;
    }
    //* create a new book object with the params

    const book = new this(params);
    //* add the book to the array
    books.push(book);
    //* return the book
    return book;
  }

  //* find a book by its id
  static find(id) {
    const book = books.find((i) => i.id === Number(id));
    if (!book) return null;

    return book;
  }

  static update(id, params) {
    const book = this.find(id);
    if (!book) return null;
    Object.assign(book, params);
    return book;
  }

  static delete(id) {
    const book = this.find(id);
    if (!book) return null;
    books.splice(books.indexOf(book), 1);
    return book;
  }

  static list() {
    return books;
  }
}

module.exports = Book;
