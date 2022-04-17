//  functions

// 1. The world population is 7900 million people. Create a
// function declaration called 'percentageOfWorld1' which
// receives a 'population' value, and returns the percentage of
// the world population that the given population represents.
// For example, China has 1441 million people, so it's about
// 18.2% of the world population.
// 2. To calculate the percentage, divide the given 'population'
// value by 7900 and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries
// of your choice, store the results into variables, and log
// them to the console
// 4. Create a function expression which does the exact same
// thing, called 'percentageOfWorld2', and also call it with 3
// country populations (can be the same populations)

const  theWorldPopulation = 7900000000;
const percentageOfWorld1 = (population) => {
    return (population / theWorldPopulation * 100); 
}

const ChinaPopulation = 1441000000;
const IsraelPopulation = 9000000;
const UnitedStatesPopulation = 329500000;


console.log(percentageOfWorld1(ChinaPopulation).toFixed(2));
console.log(percentageOfWorld1(IsraelPopulation).toFixed(2));
console.log(percentageOfWorld1(UnitedStatesPopulation).toFixed(2));
 
const percentageOfWorld2 = (population) => (population / theWorldPopulation * 100); 

console.log(percentageOfWorld2(ChinaPopulation).toFixed(2));
console.log(percentageOfWorld2(IsraelPopulation).toFixed(2));
console.log(percentageOfWorld2(UnitedStatesPopulation).toFixed(2));