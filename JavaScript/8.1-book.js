//  Objects
// Instructions
// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book,
// that will return the following description from your book
// object:
// `The book <book name> was written by <author name> in
// the year <publishing yeary

// 1.
const book1 = {
    bookName: "for kids",
    authorName: "Shelly Dahan",
    publishingYear: "1992",
    illustrator: "Eli Dahan",
};

// 2.
const theBook = (book) => {
    console.log(`The book "${book1.bookName}" was written by ${book1.authorName} in
    the year ${book1.publishingYear}.`
    )};
theBook(book1)
 

