// Write a function that calculates the circle area by a given radius as an
// argument. Print the area as it is calculated and then print it rounded to two
// decimal places.

function circleRadius(radius){
   circleArea = ((radius**2) * Math.PI);
   console.log(circleArea);
   console.log(circleArea.toFixed(2));
}
circleRadius(5)
 
