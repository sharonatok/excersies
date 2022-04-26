// <!-- JavaScript – user age
// The following exercise contains the following subjects:
//  events
// Instructions
// Create a webpage that has an input field for the user’s age and a button.
// If the user enters a number above 18, make the text “you can drink appear”.
// If the user enters a number below 18, make the text “you’re too young”
// appear.
// Submit the file to Hive. -->


const btn = document.querySelector("button");
const input = document.querySelector("input");
const h4 = document.createElement("h4");
document.body.appendChild(h4);

btn.addEventListener("click", function() {
    if(input.value > 18) {
        h4.innerText = "you can drink";
    } else {
        h4.innerText = "you’re too young";
    }
});