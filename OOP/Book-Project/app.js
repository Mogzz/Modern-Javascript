// Book contructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}



//UI constructor
function UI() {}

UI.prototype = {
  //create the method to add the book to the list on page
  addBookToList: function(book) {
    const list = document.querySelector('#book-list');
    //create element tr element #
    const row = document.createElement('tr');
    //insert columns
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;
    //add row to the liset
    list.appendChild(row)
  },
  clearFields: function() {
    //clear the values from the fields
    var fields = document.querySelectorAll('input[type=text]');
    for (var i = 0; i < fields.length; i++) {
      fields[i].value = "";
    }
  }
}
//Event Listeners -- wait for click on submit
document.querySelector("input[type=submit]").addEventListener('click', function(e) {
  // get values from input feilds
  const title = document.querySelector("#title").value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;


  //use detail and add to new object
  const book = new Book(title, author, isbn);

  //instantiate the UI
  const ui = new UI();

  //addd book to List
  ui.addBookToList(book);
  ui.clearFields();
  e.preventDefault();
});