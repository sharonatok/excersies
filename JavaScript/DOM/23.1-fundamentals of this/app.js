// JavaScript – fundamentals of this
// The following exercise contains the following subjects:
//  context
// Instructions
// Answer the following questions:

// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope) 

console.log(this);

in this case, "this" will point to Window because is in global scope and not inside some object or function.

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.

const myObj = {
 name: "Timmy",
 greet: () => {
 console.log(`Hello ${this.name}`);
 },
};
myObj.greet();

a. in this case, "this" will point to Window because it is inside the arrow function ,
 and arrow function point to window most of the time, Except for a few cases.
 b.
 const myObj = {
    name: "Timmy",
    greet() {
    console.log(`Hello ${this.name}`);
    },
   };
   myObj.greet();

// Question 3:
// In your own words what will this point to and why?

const myFuncDec = function () {
 console.log(this);
};


in this case, "this" will point to myFuncDec function because it is inside the function and not an arrow function. 

// Question 4:
// In your own words what will this point to and why?

const myFuncArrow = () => {
 console.log(this);
};
myFuncArrow();

in this case, "this" will point to Window because it is inside the arrow function,
 and arrow function point to window most of the time, Except for a few cases.

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.

document.querySelector(".element").addEventListener(() => {
 console.log(this);
});

a. in this case, "this" will point to Window because it is inside the arrow function,
and arrow function point to window most of the time, Except for a few cases.

b.document.querySelector(".element").addEventListener(function(){
    console.log(this);
   });