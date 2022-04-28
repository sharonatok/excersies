// JavaScript – 27.1-isSquare
// The following exercise contains the following subjects:
//  prototypes
// Instructions
// You are given a function, Square, that takes four parameters, a, b, c, d,
// denoting the length of the square edges.
// Using prototype properties, add a method to Square named isSquare that
// prints true if a Square object has equal edges and false if they are unequal.
// Here is the Square function:
// Submit your answer to Hive.
function Square(a, b, c, d){
 this.a = a;
 this.b = b;
 this.c = c;
 this.d = d;
}

Square.prototype.isSquare = function() {
if (this.a === this.b && this.a === this.c && this.a === this.d){
return true;
}else {
    return false;
}
}
let s1 = new Square(5, 7, 5, 7);
let s2 = new Square(3, 3, 3, 3);

console.log(s1.isSquare());
console.log(s2.isSquare());


