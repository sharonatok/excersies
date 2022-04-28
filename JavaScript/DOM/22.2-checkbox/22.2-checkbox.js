// JavaScript – checkbox
// The following exercise contains the following subjects:
//  events
// Instructions
// Create a webpage that has a checkbox. If the checkbox is checked, make a
// photo appear. If it is not, make it disappear.

const checkbox = document.querySelector("input");
// const body = document.querySelector("body");
const image = document.querySelector("img");


checkbox.addEventListener("checked", () => {
    image.classList.toggle("appear");
});