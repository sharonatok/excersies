// JavaScript – Data massaging
// The following exercise contains the following subjects:
//  Array
// Instructions
// We are getting this data from an API:
// We are not getting the data as we want it. We are going to need to massage
// the data.
// Create separate functions for each questions below:
// 1. Create a function that returns all the names from the array.
// 2. Create a function that returns all the objects that are born before 1990.
// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.
// Example:
// { hamburgers: 3,
//  sausages: 1,
//  salmon: 3,
//  pike: 2,
//  steak: 1,
//  lamb: 2,
//  tuna: 2,
//  barracuda: 1,
//  ham: 1,
//  chicken: 1,
//  bird: 1,
//  rooster: 1,
//  anchovies: 1 }

 const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];

   // 1.

   const allNames = (arr) => {
      return arr.map((obj) => obj.name)
   }
   console.log(allNames(data))

   // 2.
   const bornBefore90 = (arr) => {
      return arr.filter((obj) => obj.birthday.split("-")[2] < 1990);
   }
   console.log(bornBefore90(data))

   // 3.

   const differentFoods = (arr) => {
      const result = {};
      arr.forEach((obj) => {
        obj.favoriteFoods.meats.forEach((meal) => {
          if (result[meal]) {
            result[meal] += 1;
          } else {
            result[meal] = 1;
          }
        });
        obj.favoriteFoods.fish.forEach((meal) => {
          if (result[meal]) {
            result[meal] += 1;
          } else {
            result[meal] = 1;
          }
        });
      });
      return result;
    };
    
    console.log(differentFoods(data));