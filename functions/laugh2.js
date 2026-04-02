/*
 * Programming Quiz: Laugh it Off 2
 *
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return a string with `num` number of `"ha"`s.
 * - The string should end with an exclamation point.
 */

function laugh(num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += "ha";    
    }
    return result + "!";
}

console.log(laugh(3));  // "hahaha!"
console.log(laugh(5));  // "hahahahaha!"
