// JavaScript – Maps with Objects
// The following exercise contains the following subjects:
//  Maps
//  loops
// Instructions
// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
// 3. Iterate over the Map object with the for..of loop.
// - log the name and id


// 1.
const obj1 = {name: "Dan"};
const obj2 = {name: "Ran"};
const obj3 = {name: "Ilan"};

// 2.
const map = new Map([
    [obj1, "44446"],
    [obj2, "45254"],
    [obj3, "44584"],
]);

// 3.
for (let key of map) {
    console.log(`Name: ${key[0].name}, ID: ${key[1]}`);
  }



