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

const firstWordUpperCase = (str1, callBackFunc) => {
    const upper = str1.split(" ");
    upper[0]= upper[0].toUpperCase();
    return callBackFunc(upper.join(" "));    
};
console.log(firstWordUpperCase("have a good day", callBackFunc));


// const makeDashes = (str2) => {
//     console.log(str2.split(" ").join("-"));
//   };
  
//   const firstWordUpperCase = (str2, func2) => {
//     const [first, ...rest] = str2.split("");
//     func2([first.toUpperCase(), ...rest].join(""));
//   };
//   console.log(
//      firstWordUpperCase('hellow to you, have a nice day')
//    );

// 3.1
// const reverse = (str) => {
//     return;
// };
// console.log (
//     firstWordUpperCase( "have a good day", (str) => str.replaceAll(" ", "$")
//     );

// // 4.
const callback = (str1, str2) =>{
    console.log (str1 + str2);

}

const good = (callback) => {
    return callBack("good evening", "my dear"); 
}
