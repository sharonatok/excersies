// JavaScript – 27.1-pokeman
// The following exercise contains the following subjects:
//  prototypes
// Instructions
// You are given a function, Pokeman, that takes three parameters,
// pokemonName, pokemonType, an array of different pokemon attack methods,
// pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in a variable.
// 2. Using prototype properties, add the following methods:
// • A method called callPokemon that will print the following: “I choose
// you, <pokemon name>
// • A method called attack that takes one parameter, an attack number,
// that will print the specific attack method from the pokemonAttackList
// array as the following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:
// Submit your answer to Hive.
function Pokemon(pokemonName, pokemonType, pokemonAttackList){
this.name = pokemonName;
this.type = pokemonType;
this.attackList = pokemonAttackList;
}

const pokemon1 = new Pokemon("Pikachu", "Electric", ["Thunder Shock", "Wild Charge", "Iron Tail"]);
const pokemon2 = new Pokemon("Charmander", "Fire", ["Blaze", "Solar Power"]);
const pokemon3 = new Pokemon("Squirtle", "Water", ["Torrent", "Rain Dish"]);

Pokemon.prototype.callPokemon = function(){
    console.log(`i choose you, ${this.name}!`)
}

Pokemon.prototype.attack = function(attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber]}`);
}

pokemon1.callPokemon();
pokemon2.callPokemon();
pokemon3.callPokemon();
pokemon1.attack(2);
pokemon2.attack(0);
pokemon3.attack(1);