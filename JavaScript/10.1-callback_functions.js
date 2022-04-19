//  callback functions
// Instructions
// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function.

// 1.
const callbackString = (string) => {
    console.log(string);
  };

const isString = (str , callback) => {
if ( typeof str === "string") {
    callback(str);
}
};
isString ("good morning", callbackString)

// 2.
const callBackFunc = (newStr) => {
   return newStr.split(' ').join("-");
}

const firstWordUpperCase = (str1, callBackFunc1) => {
    const upper = str1.split(" ");
    upper[0]= upper[0].toUpperCase();
    return callBackFunc(upper.join(" "));    
};
// 3.
console.log(firstWordUpperCase("have a good day", callBackFunc));

// 4.
const str1 = "good morning ";
const str2 = "have a good day";

const callback2 = (str, anotherStr) =>{
    console.log (str + anotherStr);

}

const good = (callback) => {
    return callback; 
}

console.log(good(callback2(str1,str2)));