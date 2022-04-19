// JavaScript – fun with arrays
// The following exercise contains the following subjects:
//  Arrays
// Instructions
// 1. Fill an array with 100 of a same object using array fill
// method.
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
// 3. Convert only values of an object into one array.
// 4. Convert an array into one object.
// 5. Find out if an array is an array.
// 6. Copy an array.
// • Create a copy of an array that won’t effect the original
// array if modified.

// 1.

const myObj = {name: "Ran"};
const fieldArr = Array(100).fill ({name: "Ran"});
console.log(fieldArr)

// 2.
const numsArr = Array.from({length: 100}, (e,i) => i+1);
console.log(numsArr)

// 3.
const obj = {val:1, val2:2, val3: 3 };
console.log(Object.values(obj));

// 4.
console.log(Object.assign(obj, ['hello', 'hello', 'hello']));
const obj2 = { ...numsArr };
console.log(obj2);

// 5.
console.log(Array.isArray(obj));
console.log(Array.isArray(numsArr));

// 6.
const numsArr2 = numsArr.slice().sort();

console.log(numsArr);
console.log(numsArr2);

