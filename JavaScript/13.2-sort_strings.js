// JavaScript – sorting strings
// The following exercise contains the following subjects:
//  sort
// Instructions
// Answer the following questions:
// a. Array of words

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// a.1. Sort the array of strings from descending to ascending
// order
// a.2. Sort the array of strings from ascending to descending
// order.
// b. Lets sort an array of words that includes a word with an
// uppercase:
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
   ];
//    b.1. Sort the array of strings from descending to ascending
// order.
// b.2. Sort the array of strings from ascending to descending
// order.
// c. Longest word
const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];
// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function

// a.1. 
 const foodsDescToAsc = foods.slice().sort().reverse();
console.log(foodsDescToAsc);
// a.2. 
const foodsAscToDesc = foods.slice().sort();
console.log(foodsAscToDesc);
// b.1.
const foodsWithUpperCaseDescToAsc = foodsWithUpperCase.slice().sort().reverse();
console.log(foodsWithUpperCaseDescToAsc);

// other solution
const foodsWithUpperCaseDescToAsc1 = foodsWithUpperCase.slice().sort( (a,b) => a.toLowerCase - b.toLowerCase);
console.log(foodsWithUpperCaseDescToAsc1);


//  b.2.
const foodsWithUpperCaseAscToDesc = foodsWithUpperCase.slice().sort()
console.log(foodsWithUpperCaseAscToDesc);

// c.1
const longestToShortest = words.sort((a,b) => a.length-b.length).reverse();
console.log(longestToShortest);

// other solution with if condition
const longestToShortest1 = words.sort((a,b) => a.length>b.length ? -1 : 1)

console.log(longestToShortest1);
