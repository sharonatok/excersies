// JavaScript – simley
// The following exercise contains the following subjects:
//  the dom
// Instructions
// Create a webpage with one field and one button.
// The user can choose the number of smileys, and you have
// to make them appear on the screen.
// If the user enters an input that is not a number show him
// an error message.Ninja
// Remove all smilies when entering new ones

const submit = document.querySelector("button");
const input = document.querySelector("input");
const smilesDiv = document.querySelector('.smiles-container');


const message = document.createElement("h2");
message.innerText = "error!!! please enter a number";

submit.addEventListener("click", function() {
    smilesDiv.innerHTML = '';
    let number = Number(input.value);
    if (isNaN(number)) {
        document.body.appendChild(message);
    }else{
    let smileysStr = '';
    for (let i = 0; i < number; i++) {
    const smiley = document.createElement("img");
    smiley.src = "./png_smiley_91659.png";
    smiley.style.width = "30px";3
    smiley.style.height = "30px";
    document.body.appendChild(smiley);
};
    }
    number.value = "";
});



