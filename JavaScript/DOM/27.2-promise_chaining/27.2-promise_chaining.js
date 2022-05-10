// JavaScript – promise_chaining
// The following exercise contains the following subjects:
//  promises
// Instructions
// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.
// Submit the file to Hive
arrayOfWords = ["why", "what", "where", "when"];
arrayOfAll = ["hello", "hi", 1, true, "bye"];

const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach((word) => {
      if (word !== "string") {
        reject();
      } else {
        resolve();
      }
    });
  });
};
makeAllCaps(arrayOfAll)
  .then(() => {
    const upper = arr.map((element) => {
      return element.toUpperCase();
      console.log("good!");
    });
  })
  .catch((err) => {
    console.log("error");
  });

// const sortWords = (arr) => {
//   const sortingArr = arr.sort();
//   return sortingArr;
// };

// console.log(sortWords(arrayOfWords));

// console.log(makeAllCaps(arrayOfWords));
// console.log(makeAllCaps(arrayOfAll));
// .includes(/[^a-z]/)
