const myLibrary = [];

function Book(title, author, pages, yearPublished, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.yearPublished = yearPublished;
  this.read = read;
  addBookToLibrary(this);
}

function addBookToLibrary (book) {
  // adds the book that was created from the constructor to the library
  myLibrary.push(book);
}

//self adding some books to the library
const book1 = new Book("Atlas Shrugged", "Ayn Rand", 1168, 1957, true);
const book2 = new Book("The Dark Tower I: The Gunslinger", "Stephen King", 384, 2016, true);

//Loops through the array and displays each book on the page
const container = document.querySelector(".container");
function updateLibrary () {
    //removes old DOM and starts fresh
    container.innerHTML = "";
    let counter = 0;
myLibrary.forEach((book) => {

    book.index = counter;
    //creates a div and fills in the data for each book along with its data
    const htmlBook = document.createElement("div");
    htmlBook.setAttribute("class", "book");
    const htmlTitle = document.createElement("p");
    htmlTitle.setAttribute("class", "title")
    const htmlAuthor = document.createElement("p");
    htmlAuthor.setAttribute("class", "author")
    const htmlPages = document.createElement("p");
    htmlPages.setAttribute("class", "pages")
    const htmlYear = document.createElement("p");
    htmlYear.setAttribute("class", "year");
    const htmlRead = document.createElement("p")
    htmlRead.setAttribute("class", "read")
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "removeBtn");
    counter++;
    container.appendChild(htmlBook);
    htmlBook.appendChild(htmlTitle);
    htmlTitle.textContent = `"${book.title}"`;
    htmlBook.appendChild(htmlAuthor);
    htmlAuthor.textContent = `By: ${book.author}`;
    htmlBook.appendChild(htmlPages);
    htmlPages.textContent = `Pages: ${book.pages}`;
    htmlBook.appendChild(htmlYear);
    htmlYear.textContent = `Published: ${book.yearPublished}`;
    htmlBook.appendChild(htmlRead);
   
    removeBtn.textContent = "Delete"
    const readBtn = document.createElement("button");
    readBtn.setAttribute("class", "readBtn");
    //checks value of book.read and adds buttont text accordingly
    if (book.read == true) {
      readBtn.textContent = "Book Read";
    } else {
      readBtn.textContent = "Book Not Read"
    }
    //Changes button based on what it was previously
    readBtn.addEventListener("click", function() {
      if (this.textContent == "Book Not Read") {
        this.textContent = "Book Read"; 
        this.read = true;
      } else {
        this.textContent = "Book Not Read"
        this.read = false;
      }
    });
    htmlBook.appendChild(readBtn);
    htmlBook.appendChild(removeBtn);
    removeBtn.addEventListener("click", function() {
      //Removes from DOM
      this.parentElement.remove();
      //Removes from myLibrary
      myLibrary.splice(book.index, 1);
      //resets index of library
      updateLibrary();
    });

    //adds toggle button to each book card (This is a work in progress)
    /*
    switchContainer = document.createElement("div");
    switchContainer.setAttribute("class", "switchContainer");
    switchLabel = document.createElement("label");
    switchLabel.setAttribute("class", "switch");
    switchInput = document.createElement("input");
    switchInput.setAttribute("type", "checkbox");
    switchInput.setAttribute("class", "switchInput")
    switchSpan = document.createElement("span");
    switchSpan.setAttribute("class", "slider");
    switchText = document.createElement("p");
    htmlBook.appendChild(switchContainer);
    switchContainer.appendChild(switchLabel);
    switchLabel.appendChild(switchInput);
    switchLabel.appendChild(switchSpan);
    switchContainer.appendChild(switchText);
    */
    })  

  

  };
const newBookBtn = document.querySelector(".newBookBtn");
const dialog = document.querySelector("#newBookDialog");
newBookBtn.addEventListener("click", function() {
    dialog.showModal();
});

submitBtn = document.querySelector("#submitBtn");
//adds a new book and updates it into the library
submitBtn.addEventListener("click", function () {
    let titleInput = document.getElementById("bookTitle").value;
    let authorInput = document.getElementById("bookAuthor").value;
    let pagesInput = document.getElementById("bookPages").value;
    let yearInput = document.getElementById("bookYear").value;
    let readInput = document.querySelector('input[name="yes_no_radio"]:checked').value;
    new Book(titleInput, authorInput, pagesInput, yearInput, readInput);
    updateLibrary();
    document.getElementById("newBookForm").reset();
});





updateLibrary();
