// JavaScript – Fun with Reduce
// The following exercise contains the following subjects:
//  reduce method
// Instructions
// Write the following functions using the reduce built-in function.
// 1. max
// 2. sum of even numbers
// 3. average

// 1.
const num = [4, 5 , 10 , 2 , 3];
const maxNum = num.reduce((max,currVal) => {
    return Math.max(max,currVal)
});
console.log (maxNum);

// 2.
const sumNum = num.reduce((sum,currVal) => {
    return sum + currVal;
    });
    console.log (sumNum);
    
// 3.
const num1 = [4, 5 , 10 , 2 , 3];
const avrNum = num1.reduce((sum,currVal) => (sum + currVal)) / num1.length;

console.log (avrNum);

