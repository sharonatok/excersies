// JavaScript – light bulb
// The following exercise contains the following subjects:
//  events
// Instructions
// Create a webpage that has an image of a lightbulb.
// When the user clicks the lightbulb, it should be turned on, clicking it again
// will turn it off.

// const img1 = document.querySelector("img");
// const img2 = document.createElement("img");
// img2.src = "./ONbulb.jpg";


// img1.addEventListener("click", function() {
//     img1.target(img),toggle(img2);
//   img1.target.img();
// });
//     if(img.src = "./OFFbulb.jpg"){
//     img.src = "./ONbulb.jpg";
//     }else {
//         img.src ="./OFFbulb.jpg";
//     }
// });
const box = document.querySelector(".box");
box.addEventListener("click", function() {
    box.classList.toggle("on");
});