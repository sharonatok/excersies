// logical operators

// 1. Create a function called ‘countryToLiveIn’ that takes 4
// parameters:
// language, isIsland, population and country.
// isIsland’s argument value should be true or false.
// population’s argument value should be an integer.
// country should be a string of a country.
// Language should be a string.
// 2. Let's say Sarah is looking for a new country to live in.
// She wants to live in a country that speaks English, has less
// than 50 million people and is not an island.
// 3. Write an if statement inside your function to help Sarah
// figure out if your country is right for her.
// You will need to write a condition that accounts for all of
// Sarah's criteria. Take your time with this, and check part of
// the solution if necessary.

const countryToLiveIn = (language, isIsland, population, country) => {
 if (language === "English" && isIsland === "isIsland" && population < 50000000 ){
 console.log(` ${country} is right for you!`);
 }else{
 console.log (` ${country} is not for you!`);
 }   
};
countryToLiveIn("Hebrew", "notIsland", 9000000 , "Israel")
countryToLiveIn("English", "isIsland", 40000000 , "New York")