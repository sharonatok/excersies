// JavaScript – Maps vs Objects performance
// The following exercise contains the following subjects:
//  Maps
//  Objects
//  loops
// Performance analysis
// One important practice is performance analysis. The
// JavaScript engines have made astounding strides in the
// performance of JavaScript, but that’s no excuse for writing
// sloppy and inefficient code.
// A good way to measure your performance is with
// console.time
// const maxCount = 1000000;
// console.time("My operation")// <---- Starts the timer
// for(let i =0; i < maxCount; i++){
// //Perform the operation to be measured multiple times
// }
// console.timeEnd("My operation") // <---- Stops the time
// Because a single operation of a given code happens much
// to quickly to measure reliably, we need to perform the code
// many times to get a measurable value. Usually we should
// perform the code tens of thousands of times, or even
// millions depending on the code being measured.
// Though the exact times can change depending on your
// system and version of Node.js you can get the general idea
// of how fast or slow your code is.
// Instructions
// Lets investigate who is performant, Maps or Objects!
// Setup:
// 1. Who can add key and value pairs faster in a for loop?
// • Create an empty Object and assign it to a variable.
// • Create a start timer for your object to be measured.
// • Create a for loop that will iterate a million times. Inside
// your for loop on each iteration create a new key, value
// pair to your object using the variable I.
// • Do the same procedure for a Map object.
// • Compare the times.
// You may be surprised from the results :)
// 2. Who can find faster a specific property from itself?
// Now that we populated 100000 properties to our
// object’s find the following:
// • Find out how long time would it take for the Object to
// find a specific property from itself.
// • Find out how long time would it take for the Map to find
// a specific property from itself.
// 3. Who is faster in adding a single entry?
// 4. Who is faster in deleting a single entry?

// 1.
const obj = {};
console.time("My obj process time");

for (let i = 0; i<1000000; i++){
    obj[i] = i
}

console.timeEnd("My obj process time");

const map = new Map();
console.time("My map process time");

for (let i = 0; i<1000000; i++){
    map.set(i, i);
}

console.timeEnd("My map process time");

// 2.
console.time("My operation");

if (935674 in obj) {
    console.log("Yes");
}

console.timeEnd("My operation");

console.time("My operation");

if (map.has(935674)) {
    console.log("Yes");
}

console.timeEnd("My operation");

// 3.
console.time("My operation adding to obj");
obj[10000000] = 10000000;
console.timeEnd("My operation adding to obj");
console.time("My operation adding to map");
map.set(10000000, 10000000);
console.timeEnd("My operation adding to map");

// 4.
console.time("My operation delete from obj");
delete obj[1000000];
console.timeEnd("My operation delete from obj");
console.time("My operation delete from map");
map.delete(1000000);
console.timeEnd("My operation delete from map");