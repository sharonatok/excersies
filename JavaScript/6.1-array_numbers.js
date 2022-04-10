// for loop

// Create array with numbers :
// const arr = [1,7,3,0,-5,7,3,9];
// 1. Print with for loop all the number.
// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
// 3. Create function “arraySum” , the function return the sum of all elements in array.
// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array.


const arr = [1,7,3,0,-5,7,3,9];

// 1.

for (let x = 0; x < arr.length; x++){
    console.log(arr[x])
}
// 2.

    (function arrayLength(arr) { 
        let count = 0
        for (let i = 0; i < arr.length; i++){
           if (arr[i] != "undefined") {
              count++;
           }
        }
        console.log(count);
        
    } )(arr);
// 3. 

    const arraySum = (arr) => {
        let sum = 0
        for (let i = 0; i < arr.length; i++){
            if (arr[i] != "undefined") {
               sum += arr[i];
            }
         }
         return sum;
    }
    console.log(arraySum(arr));

// 4. 

const arrayMulti = (arr) => {
    let multiplicat = 1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != "undefined") {
            multiplicat *= arr[i];
        }
    } 
        return multiplicat;
}
console.log(arrayMulti(arr));



