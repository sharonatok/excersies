// JS – remove duplicates
// The following exercise contains the following subjects:
//  arrays
//  indexof
// Instructions
// Create a function that received an array of integers as a
// parameter.
// Return a new array without any duplicates inside. You
// indexOf as part of your solution.
// Example:
// [3,4,4,3,6,3] --→ [3,4,6]


const arrIntegers = [3,4,4,3,6,3] 
 const withoutDuplicates = (arr) => {
     const newArr = [];
    for (let num of arr){
        if (newArr.indexOf(num) === -1){
            newArr.push(num);
        }
    }
    return newArr;
     };

 console.log(withoutDuplicates(arrIntegers));
