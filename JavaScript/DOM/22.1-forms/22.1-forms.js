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
// const formData = {};

// for(let input of class) {
// input.addEventListener(input, (e) =>{
//   formData[e.target.name] = e.target.value;
// })
// }
// btn.addEventListener("submit", function(){
//     e.preventDefault();
//     ptompt("check your data please")

// });


// let person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//   document.getElementById("demo").innerHTML =
//   "Hello " + person + "! How are you today?";
// }

const form = document.querySelector("form");
const name1 = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");

const confirmation = document.createElement("div");
confirmation.classList.add("confirmation");

const btnConfirm = document.createElement("button");
btnConfirm.innerText = "confirm";
const btnChange = document.createElement("button");
btnChange.innerText = "change";

const h3 = document.createElement("h3");
h3.innerText = "congratulations you successfully sent this form";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    confirmation.innerText = 
    `name: ${name1.value}
    age: ${age.value}
    email: ${email.value}
    `;
    form.style.display = "none";
    document.body.appendChild(confirmation);
    confirmation.append(btnConfirm);
    confirmation.append(btnChange);
})

btnConfirm.addEventListener("click", () => {
    document.body.appendChild(h3);
})

btnChange.addEventListener("click", () => {
    confirmation.remove();
    h3.remove();
    form.style.display = "flex";
})