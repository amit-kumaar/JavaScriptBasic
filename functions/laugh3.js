/*
 * Programming Quiz: Laugh
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */

// your code goes here
const laugh = function(num) {
  let sound = "";
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  return sound + "!";
};

// testing your code
console.log(laugh(1));
console.log(laugh(5));
console.log(laugh(10));