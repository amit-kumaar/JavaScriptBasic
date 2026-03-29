/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output.
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
const shirtWidth = 19;
const shirtLength = 28.70;
const shirtSleeve = 8.30;

// your code goes here

if (
  shirtWidth >= 18 &&
  shirtWidth <= 19.99 &&
  shirtLength >= 28 &&
  shirtLength <= 28.99 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve <= 8.379
) {
  size = "S";
} else if (
  shirtWidth > 19.99 &&
  shirtWidth <= 20 &&
  shirtLength > 28.99 &&
  shirtLength <= 29 &&
  shirtSleeve > 8.379 &&
  shirtSleeve <= 8.38
) {
  size = "M";
} else if (
  shirtWidth > 20 &&
  shirtWidth <= 22 &&
  shirtLength > 29 &&
  shirtLength <= 30 &&
  shirtSleeve > 8.38 &&
  shirtSleeve <= 8.63
) {
  size = "L";
} else if (
  shirtWidth > 22 &&
  shirtWidth <= 24 &&
  shirtLength > 30 &&
  shirtLength <= 31 &&
  shirtSleeve > 8.63 &&
  shirtSleeve <= 8.88
) {
  size = "XL";
} else if (
  shirtWidth > 24 &&
  shirtWidth < 28 &&
  shirtLength > 31 &&
  shirtLength < 34 &&
  shirtSleeve > 8.88 &&
  shirtSleeve < 10.13
) {
  size = "2XL";
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  size = "3XL";
} else {
  size = "N/A";
}

console.log(size);
