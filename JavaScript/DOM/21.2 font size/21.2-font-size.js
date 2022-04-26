// JavaScript – Font size changer
// The following exercise contains the following subjects:
//  DOM
// Instructions
// Create a webpage that has some text and two buttons with ‘+’ and ‘-‘
// Clicking the ‘+’ button should increase the text’s font-size and clicking the ‘-‘
// should decrease it.
// Limit the font size to be between 6px and 100px.
// Submit the file to Hive.

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const h4 = document.querySelector("h4");
let font = window.getComputedStyle(h4).fontSize;
font = parseInt(font);

plus.addEventListener("click", function() {
        h4.style.fontSize = `${font+=3}px`;
        console.log("plus");
        
})

minus.addEventListener("click", function() {
    h4.style.fontSize = `${font-=3}px`;
    console.log("minus");
})

