# 🧩 JavaScript Functions

## What Are Functions?

Functions are **reusable chunks of code** — write once, use many times!

> 🍕 **Analogy: Microwave Pizza Reheat Button**
> Instead of calculating power level and time every time James is hungry, he just presses the **Pizza Reheat** button.
> - **Input:** Number of slices
> - **Output:** Reheated pizza 🎉

```js
function reheatPizza(slices) {
  const time = slices * 45; // 45 seconds per slice
  return `Heat at 80% power for ${time} seconds`;
}

console.log(reheatPizza(2)); // "Heat at 80% power for 90 seconds"
console.log(reheatPizza(4)); // "Heat at 80% power for 180 seconds"
```

---

## 📌 What You'll Learn

- ✅ Declare and run functions
- ✅ Use `return` statements
- ✅ Parameters vs Arguments
- ✅ Returning vs Logging
- ✅ Scope (`let` and `const`)
- ✅ Hoisting
- ✅ Function Expressions
- ✅ Inline (Arrow) Functions

---

## 1️⃣ Declaring & Running Functions

```js
// Declare
function greet() {
  console.log("Hello, World!");
}

// Run (call)
greet(); // Hello, World!
greet(); // Hello, World! — reuse as many times as you want!
```

---

## 2️⃣ Return Statements

`return` sends a value **back** to whoever called the function.

```js
function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result); // 8
```

> ⚠️ Once `return` runs, the function **stops**. Code after it is ignored.

```js
function earlyExit() {
  return "I'm done!";
  console.log("This never runs"); // ❌ unreachable
}
```

---

## 3️⃣ Parameters vs Arguments

| Term | What it is | Example |
|------|-----------|---------|
| **Parameter** | Placeholder in the function definition | `name` in `function greet(name)` |
| **Argument** | Actual value passed when calling | `"James"` in `greet("James")` |

```js
function greet(name) {       // 'name' is the PARAMETER
  return `Hello, ${name}!`;
}

greet("James");  // "James" is the ARGUMENT → Hello, James!
greet("Alice");  // "Alice" is the ARGUMENT → Hello, Alice!
```

---

## 4️⃣ Returning vs Logging

```js
function withReturn(x) {
  return x * 2;   // ✅ value can be stored & reused
}

function withLog(x) {
  console.log(x * 2); // ⚠️ only prints, can't be stored
}

const doubled = withReturn(5); // doubled = 10
console.log(doubled + 1);      // 11 ✅

const logged = withLog(5);     // prints 10
console.log(logged + 1);       // NaN ❌ (logged is undefined)
```

> 💡 **Rule of thumb:** Use `return` when you need the value later. Use `console.log` for debugging.

---

## 5️⃣ Scope

Scope determines **where an identifier (variable/function) is accessible**.

### 🌍 Global Scope — Available Everywhere

If an identifier is declared in global scope, it's available everywhere.

```js
const greeting = "Hello!"; // global scope

function sayHi() {
  console.log(greeting); // ✅ accessible inside any function
}

function sayBye() {
  console.log(greeting); // ✅ accessible here too
}

sayHi();           // Hello!
sayBye();          // Hello!
console.log(greeting); // ✅ Hello!
```

> ⚠️ **Global identifiers are a bad idea.** They can lead to bad variable names, conflicting variable names, and messy code.

```js
// ❌ Bad — globals clash and pollute the namespace
var name = "James"; // conflicts with built-in window.name in browsers!
var data = [];      // vague, hard to track
```

---

### 🔒 Function Scope — Available Inside the Function (and Nested Functions)

If an identifier is declared in function scope, it's available in the function it was declared in — even in functions declared inside that function.

```js
function outer() {
  const message = "I'm in outer!";

  function inner() {
    console.log(message); // ✅ inner can access outer's variables
  }

  inner(); // I'm in outer!
}

outer();
console.log(message); // ❌ ReferenceError — not accessible outside
```

---

### 📦 Block Scope — `let` / `const` vs `var`

- `var` declared in a block is available **in the block and the outer scope** — it leaks out.
- `let` / `const` declared in a block are **only available inside that block**.

```js
if (true) {
  var withVar     = "var ignores block scope";
  let withLet     = "let respects block scope";
  const withConst = "const respects block scope";

  console.log(withVar);   // ✅ works
  console.log(withLet);   // ✅ works
  console.log(withConst); // ✅ works
}

console.log(withVar);   // ✅ var leaks out of the block!
console.log(withLet);   // ❌ ReferenceError
console.log(withConst); // ❌ ReferenceError
```

> Always prefer `let` and `const` — `var` leaking out of blocks causes hard-to-find bugs.

---

### 🔍 Scope Chain — How JavaScript Looks Up Variables

When accessing an identifier, the JavaScript Engine:
1. Looks in the **current function**
2. If not found → moves to the **next outer function**
3. Keeps going outward until it reaches **global scope**
4. If still not found → `ReferenceError` ❌

```js
const level = "global";

function first() {
  const level = "first";

  function second() {
    // no 'level' here — JS walks up the chain

    function third() {
      // no 'level' here either — JS keeps walking up
      console.log(level); // ✅ found in first() → "first"
    }

    third();
  }

  second();
}

first();
console.log(level); // "global"
```

---

### 🧪 Interactive: Spot the Scope

```js
// 🤔 Guess the output before running!

const color = "blue";    // global

function paintRoom() {
  const color = "red";   // function scope — shadows global

  if (true) {
    let color = "green"; // block scope — shadows function scope
    console.log(color);  // ❓ (1)
  }

  console.log(color);    // ❓ (2)
}

paintRoom();
console.log(color);      // ❓ (3)

// Answers:
// (1) "green"  ← block scope wins inside the if block
// (2) "red"    ← block's 'green' is gone; function scope takes over
// (3) "blue"   ← global is untouched
```

---

## 6️⃣ Hoisting

Hoisting is JavaScript's behavior of **moving declarations to the top of the current scope** before code runs.

### ✅ Function Declarations — Fully Hoisted

JavaScript hoists function declarations, so you can call them before they're defined.

```js
sayHi(); // ✅ Works! → "Hi!" — called BEFORE the declaration

function sayHi() {
  console.log("Hi!");
}
```

---

### ⚠️ `var` — Declaration Hoisted, Assignment Is NOT

JavaScript hoists variables declared with `var` to the top of the current scope, but **only the declaration** — not the value.

```js
console.log(score); // undefined ← hoisted but no value yet
var score = 100;
console.log(score); // 100

// JavaScript sees it as:
// var score;           ← hoisted to top
// console.log(score);  → undefined
// score = 100;
// console.log(score);  → 100
```

---

### ❌ `let` and `const` — NOT Hoisted

Hoisting doesn't happen when variables are declared with `let` or `const`.

```js
console.log(name); // ❌ ReferenceError — cannot access before initialization
let name = "James";

console.log(PI);   // ❌ ReferenceError
const PI = 3.14;
```

---

### ❌ Function Expressions — NOT Hoisted

Variable assignments are not hoisted, so function expressions are not hoisted either.

```js
sayBye(); // ❌ ReferenceError: Cannot access 'sayBye' before initialization

const sayBye = function() {
  console.log("Bye!");
};

// Same applies to arrow functions:
greet(); // ❌ ReferenceError

const greet = () => console.log("Hello!");
```

---

### 🧪 Interactive: Hoisting Gotcha

```js
// 🤔 Guess the output before running!

console.log(a); // ❓ (1)
console.log(b); // ❓ (2)
console.log(c); // ❓ (3)

var a = 1;
let b = 2;
const c = 3;

// Answers:
// (1) undefined  ← var is hoisted (declaration only, no value)
// (2) ReferenceError ← let is NOT hoisted
// (3) never reached — (2) already threw an error
```

---

### 💡 Best Practices

- **Declare functions and variables at the top of your scripts** — so the syntax and behavior are consistent and predictable.
- **Use `let` and `const` to declare variables** — you may see `var` in legacy code, but do not use it in any new code you write.

```js
// ✅ Good — declarations at the top, let/const only
const TAX_RATE = 0.1;
let cartTotal = 0;

function calculateTotal(price, qty) {
  return price * qty * (1 + TAX_RATE);
}

// ❌ Bad — var scattered around, called before declaration
console.log(discount); // undefined (var hoisting surprise!)
var discount = 0.2;
```

---

## 7️⃣ Default Parameters

Set a fallback value when no argument is passed:

```js
function greet(name = "stranger") {
  return `Hello, ${name}!`;
}

console.log(greet("James")); // Hello, James!
console.log(greet());        // Hello, stranger! ← uses default
```

> 💡 Useful when an argument is optional.

---

## 8️⃣ Rest Parameters

Collect **any number of arguments** into an array using `...`:

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2));        // 3
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(10, 20, 30)); // 60
```

> `...numbers` gathers all arguments into an array — no matter how many!

---

## 9️⃣ Callback Functions

A **callback** is a function passed as an argument to another function.

```js
function doMath(a, b, operation) {
  return operation(a, b); // calls whatever function is passed in
}

function add(x, y) { return x + y; }
function multiply(x, y) { return x * y; }

console.log(doMath(3, 4, add));      // 7
console.log(doMath(3, 4, multiply)); // 12
```

Or pass an arrow function directly:

```js
console.log(doMath(10, 2, (a, b) => a - b)); // 8
```

> 🔑 Callbacks are everywhere — `setTimeout`, `addEventListener`, `map`, `filter` all use them.

---

## 🔟 Pure vs Impure Functions

A **pure function** always returns the same output for the same input and doesn't change anything outside itself.

```js
// ✅ Pure — predictable, no side effects
function pureAdd(a, b) {
  return a + b;
}

// ❌ Impure — modifies outside variable (side effect)
let total = 0;
function impureAdd(n) {
  total += n; // changes external state!
}
```

| | Pure | Impure |
|--|------|--------|
| Same input → same output? | ✅ Always | ❌ Not guaranteed |
| Modifies outside variables? | ❌ Never | ✅ Yes |
| Easy to test? | ✅ Yes | ❌ Harder |

> 💡 Prefer pure functions whenever possible — they're easier to debug and test.

---

## 1️⃣1️⃣ Function Expressions

Store a function in a variable:

```js
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // 12
```

---

## 1️⃣2️⃣ Inline Arrow Functions

Shorter syntax for simple functions:

```js
// Regular
const square = function(n) { return n * n; };

// Arrow function
const square = (n) => n * n;

console.log(square(5)); // 25
```

Arrow functions shine as callbacks:

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);   // [2, 4]
```

---

## 🎯 Try It Yourself!

### Challenge 1 — Pizza Calculator
```js
// Write a function that takes price per slice and number of slices
// and returns the total cost with 10% tax

function pizzaTotal(pricePerSlice, slices) {
  // your code here
}

console.log(pizzaTotal(3, 4)); // Expected: 13.2
```

### Challenge 2 — Scope Detective
```js
// What will this print? Guess before running!
const x = "global";

function test() {
  const x = "local";
  console.log(x); // ?
}

test();
console.log(x);   // ?
```

### Challenge 3 — Arrow Function
```js
// Convert this to an arrow function
function double(n) {
  return n * 2;
}

// const double = ???
```

### Challenge 4 — Default Parameters
```js
// Fix this so calling orderDrink() with no argument returns
// "One glass of water, please!"

function orderDrink(drink) {
  return `One glass of ${drink}, please!`;
}

console.log(orderDrink());        // Expected: One glass of water, please!
console.log(orderDrink("juice")); // Expected: One glass of juice, please!
```

### Challenge 5 — Rest Parameters
```js
// Write a function that accepts any number of prices
// and returns the highest price

function highestPrice(...prices) {
  // your code here
}

console.log(highestPrice(5, 12, 3, 8)); // Expected: 12
```

---

## ✅ Challenge Answers

<details>
<summary>Click to reveal answers</summary>

**Challenge 1**
```js
function pizzaTotal(pricePerSlice, slices) {
  return pricePerSlice * slices * 1.10;
}
```

**Challenge 2**
```
local   ← function has its own 'x'
global  ← outer 'x' is unchanged
```

**Challenge 3**
```js
const double = (n) => n * 2;
```

**Challenge 4**
```js
function orderDrink(drink = "water") {
  return `One glass of ${drink}, please!`;
}
```

**Challenge 5**
```js
function highestPrice(...prices) {
  return Math.max(...prices);
}
```

</details>

---

## 📝 Summary

| Concept | Key Point |
|---------|-----------|
| **Declaration** | `function name() {}` |
| **Return** | Sends value back; stops function |
| **Parameters** | Placeholders in definition |
| **Arguments** | Values passed when calling |
| **Global Scope** | Declared outside all functions — accessible everywhere (avoid!) |
| **Function Scope** | Declared inside a function — accessible there and in nested functions |
| **Block Scope (`var`)** | Leaks out of the block into the outer scope |
| **Block Scope (`let`/`const`)** | Strictly limited to the block `{}` it's declared in |
| **Scope Chain** | JS searches current → outer → ... → global until found |
| **Hoisting** | Declarations hoist; expressions don't |
| **Expression** | `const fn = function() {}` |
| **Arrow** | `const fn = () => {}` |
| **Default Params** | `function fn(x = 0) {}` |
| **Rest Params** | `function fn(...args) {}` |
| **Callback** | Function passed as an argument |
| **Pure Function** | Same input → same output, no side effects |

> 💡 **Next:** [Arrays →](../05-arrays/)
