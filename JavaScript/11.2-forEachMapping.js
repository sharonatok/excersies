// JavaScript – forEach & map
// The following exercise contains the following subjects:
//  map
//  forEach
// Instructions
// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.

array = [0,1,2,3,4,5,6]
const doubleValues = (arr) =>{
    return arr.map((ele) => ele * 2);
}
console.log(doubleValues(array));

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

const onlyEvenValues = (arr) => {
    const res = [];
    arr.forEach((ele) => {
      if (ele % 2 === 0) {
        res.push(ele);
      }
    });
    return res;
  };

console.log(onlyEvenValues(array));

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.

const string = [ "Hello", "how are you", 22, "amigo"];
const showFirstAndLast = (arr) => {
    const newArr = [];
    arr.forEach((element,idx) => {
        if ((idx === 0 || idx === arr.length - 1) && typeof element === "string") {
            newArr.push(element);
        }
     });
     return newArr;
};

console.log(showFirstAndLast(string));

// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

const vowelCount = (str) => {
    let vowels = "aeoui"
    const res = {};
    const arr = str.toLowerCase().split("");
    arr.forEach((letter) => {
      if (vowels.indexOf(letter) !== -1) {
        if (res[letter]) {
          res[letter] += 1;
        } else {
          res[letter] = 1;
        }
      }
    });
    return res;
  };
    console.log(vowelCount("Holaaaa amigos"))

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

const capitalize = (str) => {
    const arr = str.split(" ");
    str = arr.map((word) => word.toUpperCase()).join(" ");
    return str;
}
console.log(capitalize("hello my dear"))

// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.

const shiftLetters = (str) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    const arr = str.toLowerCase().split("");
    str = arr
      .map((letter) => {
        if (alphabet.indexOf(letter) !== -1) {
          if (alphabet.indexOf(letter) === 25) {
            return alphabet[0];
          } else {
            return alphabet[alphabet.indexOf(letter) - 1];
          }
        } else {
          return letter;
        }
      })
      .join("");
    return str;
  };
  
  console.log(shiftLetters("hello my dear friend"));

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry).
const swapCase = (str) => {
    return str
      .split(' ')
      .map((word, index) => {
        return index % 2 === 1 ? word : capitalize(word);
      })
      .join(' ');
  };
  
  console.log(swapCase('hello my dear friend'));