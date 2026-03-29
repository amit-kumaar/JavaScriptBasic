/*
 * Programming Quiz: String Equality for All (2-4)
 *
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `answer`
 * 2. Your code should have "ALL Strings are CrEaTeD equal" on the left side
 * 3. Your code should use `==` comparison operator
 * 4. The comparison should evaluate to true
 * 5. The right side of your expression should match the left side
 */

// fix the right side of the expression
const answer =
    "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal";
console.log(answer);
// result should be false because the right side of the expression does not match the left side.
const answer2 =
  "All Strings are created equal" == "All Strings are created equal";
console.log(answer2);
//result true