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
const book1 = new Book("Atlas Shrugged", "Ayn Rand", 1168, 1957, "true");
const book2 = new Book("The Dark Tower I: The Gunslinger", "Stephen King", 384, 2016, "true");
const book3 = new Book("Tubes: A Journey to the Center of the Internet","Andrew Blume", 304, 2013, "true");
const book4 = new Book("Chaos: Charles Manson, the CIA, and the Secret History of the Sixties", "Tom O'Neil", 528, 2019, "true");
const book5 = new Book("The Sacred Mushroom and the Cross", "John M. Allegro", 253, 1970, "false");
const book6 = new Book("The Expanse: Leviathan Wakes", "James S.A. Corey", 592, 2011, "true");
const book7 = new Book("1984", "George Orwell", 328, 1949, "true");
const book8 = new Book("Brave New World", "Aldous Huxley", 311, 1932, "true");
const book9 = new Book("The Art of War", "Sun Tzu", 68, -500, "false");
const book10 = new Book("The Anarchist Handbook", "Michael Malice", 365, 2021, "true");
const book11 = new Book("Dune", "Frank Herbert", 896, 1965, "true");
const book12 = new Book("How to Win at the Sport of Business", "Mark Cuban", 84, 2013, "true");


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
    const removeBtn = document.createElement("img");
    const btnDiv = document.createElement("div")
    btnDiv.setAttribute("class", "btnDiv")
    removeBtn.setAttribute("src","icons/delete_FILL0_wght400_GRAD0_opsz24.svg")
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
    const readBtn = document.createElement("button");
    readBtn.setAttribute("class", "readBtn");
    //checks value of book.read and adds button text accordingly
    if (book.read == "true") {
      readBtn.textContent = "Book Read";
    } else {
      readBtn.textContent = "Book Not Read"
    }
    //Changes button based on what it was previously
    readBtn.addEventListener("click", function() {
      if (this.textContent == "Book Not Read") {
        this.textContent = "Book Read"; 
        this.read = "true";
      } else {
        this.textContent = "Book Not Read"
        this.read = "false";
      }
    });
    htmlBook.appendChild(btnDiv);
    btnDiv.appendChild(readBtn);
    btnDiv.appendChild(removeBtn);
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

const closeFormBtn = document.querySelector("#formCancel");
closeFormBtn.addEventListener("click", function() {
    //closes the form
    dialog.close();
})

submitBtn = document.querySelector("#submitBtn");
//adds a new book and updates it into the library
submitBtn.addEventListener("click", function () {

    let titleInput = document.getElementById("bookTitle").value;
    let authorInput = document.getElementById("bookAuthor").value;
    let pagesInput = document.getElementById("bookPages").value;
    let yearInput = document.getElementById("bookYear").value;
    let readInput = document.querySelector('input[name="yes_no_radio"]:checked').value;
    console.log(readInput)
    if (titleInput != "" && authorInput != "" ) {
    new Book(titleInput, authorInput, pagesInput, yearInput, readInput);
    updateLibrary();
    document.getElementById("newBookForm").reset();
    //closes the form
    dialog.close();
    }
});





updateLibrary();
