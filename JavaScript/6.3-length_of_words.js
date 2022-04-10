// Array

// Write a function that will receive an array of strings and will return a new
// array containing all the lengths of all the strings in the array it got as a
// parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

const stringArray = ["boo", "doooo", "hoo","ro"]
const stringArr = (array) =>{
    const lengthArr = [];
    for (let i=0; i<array.length; i++){
        stringArray[i] = array[i].length;
    }
    return stringArray
    }
    
    console.log(stringArr(stringArray))
    
    
