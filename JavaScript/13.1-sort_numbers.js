// JavaScript – sorting numbers
// The following exercise contains the following subjects:
//  sort
// Instructions
// Use the array of numbers below and answer the following
// questions:
// 1. Sort the array of numbers from descending to ascending
// order
// 2. Sort the array of numbers from ascending to decending
// order.


const numbers = [1, -5, 666, 2, 400, 11];
1.
const ascSort = numbers.slice().sort((a, b) => a-b);
2.
const descSort = numbers.slice().sort((a, b) => b-a);

console.log(ascSort);
console.log(descSort);
