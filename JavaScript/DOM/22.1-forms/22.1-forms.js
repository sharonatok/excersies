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



const data = document.querySelectorAll("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  let confirmMsg = "";
  let text = "check your data please : \n";

  for (let input of data) {
    text += input.value;
    text += "\n";
  }

  if (confirm(text)) {
    confirmMsg = "Congratulations you successfully sent this form!";
  } 

  const msg = document.createElement("p");
  msg.innerText = confirmMsg;
  btn.parentElement.appendChild(msg);
});