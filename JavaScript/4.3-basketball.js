// JavaScript – Basketball score
// The following exercise contains the following subjects:
//  Order Of Operation
//  If statements
// Instructions
// John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
// and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
// points. Like before, log the average winner to the console.
// 5. Like before, change the scores to generate different winners, keeping in
// mind there might be draws.

let johnTeamScore = [89, 120, 103];
let mikeTeamScore = [116, 94, 123];

// 1.
const avg = (arr) => arr.reduce((a,b) => (a + b), 0) / arr.length; 

// 2.
console.log(`Mike's Team is the winner!!! your average: ${avg(mikeTeamScore)} points`);

