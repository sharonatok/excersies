// JavaScript – Fun with Reduce
// The following exercise contains the following subjects:
//  reduce method
// Instructions
// Write the following functions using the reduce built-in function.
// Write a function called extractOnlyValue which accepts an array of
// objects and a key and returns a new array with the value of each object at
// the key
// Submit the file to Hive.
//  Write a function called countOnlyVowels which accepts a string and
// returns an object with the keys as the vowel and the values as the number
// of times the vowel appears in the string. This function should be case
// insensitive so a lowercase letter and uppercase letter should count
// Write a function called addKeyAndValue which accepts 3 parameters an
// array of objects, key and value and returns the array of objects passed to it
// .with each object now including the key and value passed to the function

// 1.
const myArr = [
    { name: "Dani"},
    { name: "Rani"},
    { name: "Rana"},
    { name: "Ran"},
];
const extractOnlyValue = (arrOfObj, key) => {
    return arrOfObj.reduce((extractedArr, cur) => {
        extractedArr.push(cur[key]); 
     return extractedArr;
    },[]);
}

console.log(extractOnlyValue(myArr, "name"));

// 2.
const countOnlyVowels = (str) =>{
    let vowels = "aeoui"
    return str
    .toLowerCase()
    .split("")
    .reduce((acc, cur)=>{
     
        if(vowels.includes(cur)){
            acc[cur]? acc [cur++] : acc[cur] = 1;
        }
        return acc;

    } , {});
};
console.log(countOnlyVowels("Hola amigos"))
// 3.

const statusArr = [ {name: "Shaul"}, {name: "Shira"}, {name: "Amir"}];

const addKeyAndValue = (arrOfObj, key, val) => {
    return arrOfObj.reduce((acc, cur) =>{
        acc.push(cur);
        acc[index][key] = val;
        return acc;
    },[]);
};
console.log(addKeyAndValue(statusArr, "status", "student"));

// other solution 
const addKeyAndValue = (arrOfObj, key, val) => {
    return arrOfObj.reduce((acc, cur, index) =>{
    acc[index][key] = val;
    return arrOfObj;
    } , arrOfObj);
};