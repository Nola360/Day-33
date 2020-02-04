class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;

  }
}

class UI {




  // Methods
  addBookToList(book) {
    const list = document.querySelector('#book-list');

    // Create Table Row
    const row = document.createElement('tr');
    console.log(row)

    // Insert columns

    row.innerHTML =
      `<td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>`

    list.appendChild(row);
  }






  showAlert(message, className) {
    // Create Div
    const div = document.createElement('div');

    // Add Class
    div.className = `alert ${className}`;

    // Add Text
    div.appendChild(document.createTextNode(message));

    // Get Parent
    const container = document.querySelector('.container');

    // Get Form
    const form = document.querySelector('#book-form');

    // Insert Alert
    container.insertBefore(div, form);

    // Timeout after 3 seconds
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }




  deleteBook(target) {
    // Deletes book targetting parent parent
    UI.prototype.deleteBook = function (target) {
      if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
      }

    }
  }




  clearFields() {
    // Clear Fields
    UI.prototype.clearFields = function () {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
    }
  }
}


// Local Storage Class
class Store {
  // Get Book
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  // Display Book
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI;

      // Add Book to UI

      ui.addBookToList(book);


    })
  }

  // Add Book
  static addBook(book) {

    const books = Store.getBooks();
    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  // Remove Book
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function (book, index) {

      if (book.isbn === isbn) {
        books.splice(index, 1);
      }

    })

    localStorage.setItem('books', JSON.stringify(books));
    console.log(isbn);

  }


}

// DOM Load Event

document.addEventListener('DOMContentLoaded', Store.displayBooks)


document.getElementById('book-form').addEventListener('submit', function (e) {
  // console.log('test');
  // Get form values
  const title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value
  // console.log(title, author, isbn)


  // Instanciate book content
  const book = new Book(title, author, isbn);
  // console.log(book);

  // Instanciate UI
  const ui = new UI();


  // Validate
  if (title === '' | author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {

    // Add book to list
    ui.addBookToList(book);

    // Add to Local Storage
    Store.addBook(book);

    // Show Success
    ui.showAlert('Book Added!', 'success');


    // Clear fields
    ui.clearFields();

  }



  // // Method is apart of prototype book list
  //   console.log(ui);

  e.preventDefault();
})


// Event Listener for delete
document.querySelector('#book-list').addEventListener('click', function (e) {

  // Instanciate UI
  const ui = new UI();

  // delete book
  ui.deleteBook(e.target);

  // Remove From Local Storage

  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert('Book Removed!', 'success');



  // Active when clicked anywhere in field (needs to be targeted)
  // console.log(123)

  e.preventDefault();
}) 