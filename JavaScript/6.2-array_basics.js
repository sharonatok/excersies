// Array

// For each of the questions below, answer the question’s with this array:
// const people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all of the people.
// 2. Write the command to remove "Greg" from the array.
// 3. Write the command to remove "James" from the array.
// 4. Write the command to add "Matt" to the front of the array.
// 5. Write the command to add your name to the end of the array.
// 6. Using a loop, iterate through this array and after console.log-ing "Mary",
// exit from the loop.
// 7. Write the command to make a copy of the array using slice. The copy
// should NOT include "Mary" or "Matt".
// 8. Write the command that gives the indexOf where "Mary" is located.
// 9. Write the command that gives the indexOf where "Foo" is located (this
// should return -1).
// 10. Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are done ["Greg",
// "Mary", "Elizabeth", "Artie", "James"].
// 11. Create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob".

// 1.
const people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++){
    console.log(people[i])
}
// 2.
console.log(people.shift(""))
console.log(people)
// 3.
console.log(people.pop(""))
console.log(people)
// 4.
console.log(people.unshift("Matt"))
console.log(people)
// 5.
console.log(people.push("Sharona"))
console.log(people)
// 6.
for (let i = 0; i < people.length; i++){
    console.log(people[i])
    if (people[i] === 'Mary')
    break;
}
// 7.
const copyArray = people.slice(2, 4)
console.log(copyArray);
// 8.
console.log(people.indexOf("Mary"));
// 9.
console.log(people.indexOf("Foo"));
// 10.
const newPeople = ["Greg", "Mary", "Devon", "James"];
newPeople.splice(2, 1)
newPeople.splice(2, 0, "Elizabeth", "Artie")
console.log(newPeople)
// 11.
const withBob = newPeople.concat("Bob")
console.log(withBob)