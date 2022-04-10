// Switch

// Create a function that receives one argument, a string color.
// Create a switch statement that:
// 1. If the color is yellow, pink or orange return from the function “light color”.
// 2. If the color is blue, purple, brown return from the function “dark color”.
// 3. If the color is none of the above return “Unknown color”.
// Note:
// It shouldn’t be case sensitive

stringColor = "YELLOW"

    switch (stringColor){
        case "yellow":
        case "yellow".toUpperCase():
        case "pink":
        case "pink".toUpperCase():
        case "orange":
        case "orange".toUpperCase():
        console.log("light color");
        break;
        case "blue":
        case "blue".toUpperCase():
        case "purple":
        case "purple".toUpperCase():
        case "brown":
        case "brown".toUpperCase():
        console.log("dark color");
        break;
        default:
        console.log("Unknown color");
    }