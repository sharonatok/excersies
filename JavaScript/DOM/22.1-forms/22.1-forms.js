// JavaScript – forms
// The following exercise contains the following subjects:
//  events
// Instructions
// Create a webpage that has a form (asks the user for its name, age and email
// address) and when the user clicks submit, open a text window that writes all
// the information and ask for his confirmation. If he clicks on the confirm
// button, tell him “congratulations you successfully sent this form” if he clicks on
// change information, give him the possibility to change the information and ask
// again for his confirmation

// const btn = document.querySelector("button");

// btn.addEventListener("click", function(){

// });


let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}