// <!-- JavaScript – dom walk
// The following exercise contains the following subjects:
//  DOM
// Instructions
// Please make the following changes to the html file while navigating the DOM.
// Create a variable that holds the <li> element with the class “start-here”.
// Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another sub title with the text “sub title 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of your
// Note:
// On the next page you have the HTML code -->
// 6. why not to use innerHTML?

const myList = document.querySelector("li.start-here");
console.log(myList);
// 1.
myList.textContent = "main title";
// 2.
const myListSibling_li = myList.nextElementSibling;
const myListSiblingChild_Ul = myListSibling_li.firstElementChild;


const newSubTitle = document.createElement("li");
const textList = document.createTextNode("sub title 4");
newSubTitle.appendChild(textList); //מכניס ילד אחרון לתוך אלמנט  
myListSiblingChild_Ul.appendChild (newSubTitle)
console.dir(myListSiblingChild_Ul);

// 3.
const lastLi = myList.nextElementSibling.nextElementSibling;


const lastLi1 = li.nextElementSibling;
lastLi1.remove()

const parent = myList.parentElement
console.dir(myListSiblingChild_Ul);

// 4.
const title = document.querySelector("title");
title.textContent = "Master Of The Dom";
console.log(title);

// 5.
const p = document.querySelector("p");
p.innerText = "Hello My Friends";
console.log(p);
