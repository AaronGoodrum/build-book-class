// Properties:
//     books
//     patrons
// Methods:
//     addBook()
//     addPatron()

class Library{
  constructor(){
    this.book = [];
    this.patrons = [];
  }
  addBook(book){
    this.books.push(book)
  }
  addPatron(patron) {
    this.patrons.push(patron);
  }

}