// JavaScript – print name
// The following exercise contains the following subjects:
//  bind, call, apply
// Instructions
// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.
const person = {
  name: "Sharona",
  printName: function () {
    console.log(this.name);
  },
  printNameAfter: function () {
    setTimeout(this.printName.bind(this), 1000);
  },
};

person.printName();
person.printNameAfter();
