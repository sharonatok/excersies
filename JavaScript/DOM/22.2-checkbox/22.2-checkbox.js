// JavaScript – checkbox
// The following exercise contains the following subjects:
//  events
// Instructions
// Create a webpage that has a checkbox. If the checkbox is checked, make a
// photo appear. If it is not, make it disappear.

const checkbox = document.querySelector("input");
// const body = document.querySelector("body");
const image = document.createElement("img");
image.src = "./png_smiley_91659.png";
image.style.width = "20px";
image.style.height = "20px";


checkbox.addEventListener("checked", (e) => {
    if(e.target.checked){
        console.log(e.target.checked);
        document.body.appendChild(image);
    }
})