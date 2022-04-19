// JavaScript – scope & hoisting
// The following exercise contains the following subjects:
//  scope
//  hoisting
// Instructions
// Without running the code below, explain in your own words what the result
// of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.

Block 1

function funcA() {
    console.log(a); //will return undefined  because we console the variable a before setting it as variable
    console.log(foo()); //will return 2
    var a = 1;
    function foo() {
    return 2;
    }
   }
   funcA();

we can fix the faulty outputs if we console a variable after setting it.


Block 2

var fullName = 'John Doe';
var obj = {
 fullName: 'Colin Ihrig',
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName()); // will return 'Aurelio De Rosa'.
var test = obj.prop.getFullName; // will return 'John Doe' because this- global.




   Block 3

   function funcB() {
    let a = b = 0; // need to be let a = (b = 0)
    a++;
    return a;
   }
   funcB(); //will return undefined .need to be console.log(funcB();)
//    console.log(typeof a); /go to 48 line will give us the type in the func- i mean number
   console.log(typeof b);

//    return undefined and number

   Block 4

   function funcC() {
    console.log("1");
   }
   funcC();
   function funcC() {
    console.log("2");
   }
   funcC();
//    will return 2 2 the last func that replace the first func with the same name.
   

   Block 5
   function funcD1() {
    d = 1;
   }
   funcD1();
   console.log(d); // will return 1 because d is global without let
   function funcD2() {
    var e = 1;
   }
   funcD2();
   console.log(e);// will return error because the variable are inside the function. we can take this line before 77 line.
   


   BLOCK 6

   function funcE() {
    console.log("Value of f in local scope: ", f);
   }
   console.log("Value of f in global scope: ", f);// will return Value of f in global scope:  undefined - because f is already not setted
   var f = 1;
   funcE();// will return Value of f in local scope:1 - because the function called after setting the variable f and they both are in the global.
   