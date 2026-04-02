//The ability to generalize code for a variety of possible inputs is a powerful tool when creating easy to understand,
//  non-repetitive code.
function reverseString(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Amit"));

// Let's break it down:

// The function has one parameter -- a variable named reverseMe.
// reverseMewill store the argument -- the value of the string that we want the function to operate on.
// The variable reversed is intialized as an empty string. It will be used to store the reversed string as as it is being constructed.
// The function loops through each character the reverseMe string using string indexes, from the end to the beginning and adds each character to reversed.
// When the loop is complete, reversed is returned.
//Annotated Function
// Set one parameter to hold the value of the input string
function reverseString(reverseMe) {
  // Declare a variable with an empty string to store the reversed string
  let reversed = "";

  // Loop through the `reverseMe` string from back to front
  for (let i = reverseMe.length - 1; i >= 0; i--) {
    // Add each character to the end of `reversed`
    reversed += reverseMe[i];
  }
  return reversed;
}

// Return the completed string when the loop is complete return reversed; }
console.log(reverseString("Julia"));

// prime number
function isPrime(integer) {
  for (var x = 2; x < integer; x++) {
    if (integer % x === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(12));

//------------book seeker----------------------

const bookSeeker = "James";
const book = "Great Expectations";
function library() {
  const librarian = "Julia";
  console.log(bookSeeker + " asked " + librarian + " for book" + book);
  function classicLiterature() {
    const shelf = "Dickens";
    console.log(bookSeeker + " found " + book + " on the " + shelf + " shelf!");
  }
  classicLiterature();
}

console.log(library());

////---------------------------
// A block is a group of statements in between curly braces.
//  You've seen blocks in conditional statements:

const x = 5;
if (x < 6) {
  const double = x * 2;
  console.log(double);
} else {
  const half = x / 2;
  console.log(half);
}


for (let i = 0; i < 5; i++) {
  let triple = x * 3;
  console.log(triple);
}

//Shadowing occurs when variables in different scopes have the same name. 
// When this happens the variable in the inner scope overrides the variable in the outer scope.

//scope shadowing

let bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
    bookTitle = 'The Little Prince';
    console.log(bookTitle);
}

displayBookEnglish()
console.log(bookTitle);   


// To avoid scope override, always declare a new variable inside your function. This prevents JavaScript from reassigning the value of the variable in the outer scope.

// Example: no shadowing

let bookTitle2 = "Le Petit Prince2";
console.log(bookTitle2);

function displayBookEnglish2() {
    let bookTitle2 = 'The Little Prince2';
    console.log(bookTitle2);
}

displayBookEnglish2()
console.log(bookTitle2); 