//Solving the Problem: Do I purchase the hammer?
const price = 15.0;
const money = 20.0;
if (money >= price) {
  console.log("I can buy hammer");
} else {
  console.log("I can't buy hammer");
}
//results: I can buy hammer

// In JavaScript, you can represent this secondary check by using an extra if statement called an else if statement.
const weather = "sunny";
if (weather === "snowy") {
  console.log("I will wear a coat");
} else if (weather === "rainy") {
  console.log("I will wear a raincoat");
} else {
  console.log("Wear whatever you want");
}
//results : Wear whatever you want

// Here’s the logical expression used to represent Julia’s weekend plans:
var colt = "not busy";
var weathers = "nice";

if (colt === "not busy" && weathers === "nice") {
  console.log("go to the park");
}
// results : go to the park

//Sometimes, you might find yourself with the following type of conditional.

const isGoing = true;
if (isGoing) {
  color = "green";
} else {
  color = "red";
}
console.log(color);
//results: green

// The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.
// conditional ? (if condition is true) : (if condition is false)
const isGoing2 = true;
const color1 = isGoing2 ? "green" : "red";
console.log(color1);
//results:green


//The break statement will terminate the switch statement and 
// transfer control to the code following the switch statement 
// which prevents the switch statement from falling through and
//  running the code in the other case clauses.

const option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}

//For example, when your code follows a hierarchical-type structure.

const tier = "nsfw deck";
let output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
//Prints: You’ll receive one copy of the NSFW (Not Safe for Work)
//  Exploding Kittens card game and one copy of the Exploding Kittens card game.