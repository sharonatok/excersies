// JavaScript – number of siblings
// The following exercise contains the following subjects:
//  if/else
//  ==, ===
//  prompt
// Instructions
// Prompt method
// Use the prompt method to get information from the user.
// The Exercise
// 1. Declare a variable 'numSiblings' based on a prompt input
// like this:
// prompt('How many siblings do you have?');
// 2. If you have one sibling, log to the console '1 sibling!'
// (use loose equality == for now)
// 3. Use an else-if block to log 'More than 1 sibling' in case
// 'numSiblings' is greater than 1
// 4. Use an else block to log 'No siblings' (this block will be
// executed when 'numSiblings' is 0 or any other value)

let numSiblings = prompt('How many siblings do you have?');
if (numSiblings == 1) {
    console.log("1 Sibling!");
  } else if (numSiblings > 1) {
    console.log("More than 1 sibling");
  } else {
    console.log("No siblings");
  }