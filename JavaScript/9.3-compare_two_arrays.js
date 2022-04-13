// compare the arrays
// 
//for loop
//
// You are given two arrays:
// const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
// "Cucumber", "Olives"];
// const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
// "Hamburgers"];
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

const func = (arr1, arr2) => {
    const newArr = new Array();
    for ( i = 0; i < arr1.length; i++){
      for (j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j] ){
        newArr.push(arr1[i]);
        }
      }
    }

    return newArr[0] ? newArr : false;
};

console.log(func(food, food1));
       
