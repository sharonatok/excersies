// JavaScript – Book Utilities
// The following exercise contains the following subjects:
//  Objects
// Instructions
// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2
// books and returns the book with the smaller year.
// 4. add to to the bookUtils object a function setNewEdition, that recieves a
// book and an edition year and sets a new property latestEdition with the
// edition year, or updates an existing one.
// 5. add to to the bookUtils object a setLanguage function, that recieves a book
// and a language and sets a new property language with the languahe, or
// updates an existing one.
// 6. add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
// 7. add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.

// 1.
const book1 = {
    name: "for kids",
    author: 'John Smith',
    year: 1995,
};
const book2 = {
    name: "for adults",
    author: 'Shely Dahan',
    year: 2005,
};

// 2.
const bookUtils = {};

// 3.
bookUtils.getFirstPublished = (book1, book2) =>
book1.year < book2.year ? book1 : book2;

console.log(bookUtils.getFirstPublished(book1, book2).name);

// 4.
bookUtils.setNewEdition = (book, editionYear) => 
(book.latestEdition = editionYear);

console.log(bookUtils.setNewEdition(book1, 2005));

// 5.
bookUtils.setLanguage = (book, language) =>
(book.language = language);

// 6.
bookUtils.setTranslation = (book, language, translator) =>
(book.translation = {translator, language});

// 7.
bookUtils.setPublisher = (book, name, location) => 
(book.publisher = { name, location});

bookUtils.setPublisher(book1, 'Windus', 'Israel');

console.log(book1.publisher);

// 8.

bookUtils.isSamePublisher = (book1, book2) => {
return book1.publisher &&
       book2.publisher &&
       book1.publisher.name === book2.publisher.name &&
       book1.publisher.location === book2.publisher.location
       ? true
       : false;
};

console.log(bookUtils.isSamePublisher(book1, book1));
console.log(bookUtils.isSamePublisher(book1, book2));
