// JavaScript – text area
// The following exercise contains the following subjects:
//  the dom
// Instructions
// Create a webpage that has part of an application process for a job.
// This page should have a text area field and a button. Your user must enter at
// least 100 characters before clicking the button. If he didn’t, please give him
// the appropriate message. (using alert is forbidden)

const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");
const body = document.querySelector("body");
const h2 = document.createElement("h2");
document.body.appendChild(h2);

btn.addEventListener("click", () => {
    if (textarea.value.length < 100) {
        
        h2.innerText = 'You must enter at least 100 characters!';
        h2.style.color = "red";
        
        
    }
});   
