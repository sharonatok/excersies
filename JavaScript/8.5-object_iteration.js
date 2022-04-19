// JavaScript – object iteration
// The following exercise contains the following subjects:
//  Objects
// Instructions
// 1. Create a function that receives 1 argument, an object and returns a new
// object with the properties and values swapped.

const book1 = {
    bookName: "for kids",
    authorName: "Shelly Dahan",
    publishingYear: "1992",
    illustrator: "Eli Dahan",
};

const swappedObj = (obj) => {
   const newObj = {};
   for (let key in obj) {
    newObj[obj[key]] = key;
  }
   return newObj;
}

console.log(swappedObj(book1));