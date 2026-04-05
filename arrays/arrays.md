# 📦 Arrays — Store Lists of Data

> Arrays allow us to store **lists of data** in a single variable.
> Instead of creating a separate variable for every donut in our shop, we can store them all in one array!

---

## 🍩 Why Arrays?

Without arrays, tracking donuts looks like this:

```js
let donut1 = "Glazed";
let donut2 = "Chocolate";
let donut3 = "Sprinkles";
```

With an array, it's much cleaner:

```js
let donuts = ["Glazed", "Chocolate", "Sprinkles"];
```

---

## 🏗️ How Arrays Are Structured

An array is a list of items wrapped in **square brackets `[]`**, separated by **commas**.

```
Index:    0          1            2
        ["Glazed", "Chocolate", "Sprinkles"]
```

- Each item is called an **element**
- Each element has a numbered position called an **index**
- Indexes always **start at 0**, not 1

---

## ✅ How to Create Arrays

### Empty Array
```js
let donuts = [];
```

### Array with Items
```js
let donuts = ["Glazed", "Chocolate", "Sprinkles", "Jelly", "Maple"];
```

### Array with Mixed Types
```js
let mixedShelf = ["Glazed", 12, true, "Chocolate"];
```

---

## 🔍 How to Use Arrays

### Access an Element by Index
```js
let donuts = ["Glazed", "Chocolate", "Sprinkles"];

console.log(donuts[0]); // "Glazed"
console.log(donuts[1]); // "Chocolate"
console.log(donuts[2]); // "Sprinkles"
```

### Get the Number of Items
```js
console.log(donuts.length); // 3
```

### Access the Last Item
```js
console.log(donuts[donuts.length - 1]); // "Sprinkles"
```

---

## ✏️ Modifying Arrays

### Change an Element
```js
donuts[1] = "Boston Cream";
console.log(donuts); // ["Glazed", "Boston Cream", "Sprinkles"]
```

### Add to the End — `push()`
```js
donuts.push("Jelly");
console.log(donuts); // ["Glazed", "Boston Cream", "Sprinkles", "Jelly"]
```

### Remove from the End — `pop()`
```js
donuts.pop();
console.log(donuts); // ["Glazed", "Boston Cream", "Sprinkles"]
```

### Add to the Beginning — `unshift()`
```js
donuts.unshift("Maple");
console.log(donuts); // ["Maple", "Glazed", "Boston Cream", "Sprinkles"]
```

### Remove from the Beginning — `shift()`
```js
donuts.shift();
console.log(donuts); // ["Glazed", "Boston Cream", "Sprinkles"]
```

---

## 🔁 Looping Through Arrays

### `for` Loop
```js
let donuts = ["Glazed", "Chocolate", "Sprinkles"];

for (let i = 0; i < donuts.length; i++) {
  console.log("Donut: " + donuts[i]);
}
// Donut: Glazed
// Donut: Chocolate
// Donut: Sprinkles
```

### `for...of` Loop (cleaner syntax)
```js
for (let donut of donuts) {
  console.log("Serving: " + donut);
}
```

### `forEach()` Method
```js
donuts.forEach(function(donut) {
  console.log(donut + " is ready!");
});
```

---

## 🔎 Searching Arrays

### Check if Item Exists — `includes()`
```js
let donuts = ["Glazed", "Chocolate", "Sprinkles"];

console.log(donuts.includes("Chocolate")); // true
console.log(donuts.includes("Vanilla"));   // false
```

### Find the Index — `indexOf()`
```js
console.log(donuts.indexOf("Sprinkles")); // 2
console.log(donuts.indexOf("Vanilla"));   // -1 (not found)
```

---

## ✂️ Slicing & Joining

### `slice()` — Copy Part of an Array
```js
let donuts = ["Glazed", "Chocolate", "Sprinkles", "Jelly", "Maple"];

let topTwo = donuts.slice(0, 2);
console.log(topTwo); // ["Glazed", "Chocolate"]
```

### `join()` — Convert Array to String
```js
let menu = donuts.join(", ");
console.log(menu); // "Glazed, Chocolate, Sprinkles, Jelly, Maple"
```

---

## 🛒 Donut Shop — Putting It All Together

```js
let donutShop = [];

// Add donuts to the shop
donutShop.push("Glazed");
donutShop.push("Chocolate");
donutShop.push("Sprinkles");
donutShop.push("Jelly");

console.log("Today's Menu:");
donutShop.forEach(function(donut, index) {
  console.log((index + 1) + ". " + donut);
});
// 1. Glazed
// 2. Chocolate
// 3. Sprinkles
// 4. Jelly

// A customer orders the last donut
let sold = donutShop.pop();
console.log(sold + " was sold!");       // "Jelly was sold!"
console.log("Remaining: " + donutShop.length); // "Remaining: 3"

// Check if Glazed is still available
if (donutShop.includes("Glazed")) {
  console.log("Glazed is available!");
}
```

---

## 💪 Arrays Are Powerful Data Structures

Arrays come with built-in **properties** and **methods** that make managing lists of data easy and powerful.

---

### 📏 `length` Property

Just like strings, arrays have a `length` property that tells you how many elements are in the array.

```js
const donuts = ["Glazed", "Chocolate", "Sprinkles", "Jelly"];

console.log(donuts.length); // 4
```

Compare with a string:
```js
const name = "Glazed";
console.log(name.length);   // 6  ← number of characters

const donuts = ["Glazed", "Chocolate", "Sprinkles"];
console.log(donuts.length); // 3  ← number of elements
```

> 💡 `length` always equals the **last index + 1** since indexes start at 0.

---

### 🔄 `reverse()` — Flip the Order

`reverse()` reverses the array **in place** — it modifies the original array.

```js
const donuts = ["Glazed", "Chocolate", "Sprinkles", "Jelly"];

donuts.reverse();
console.log(donuts); // ["Jelly", "Sprinkles", "Chocolate", "Glazed"]
```

Before and after:
```
Before: ["Glazed", "Chocolate", "Sprinkles", "Jelly"]
After:  ["Jelly", "Sprinkles", "Chocolate", "Glazed"]
```

> ⚠️ `reverse()` changes the original array — it does not create a new one.

---

### 🔤 `sort()` — Sort the Elements

`sort()` sorts elements **alphabetically** by default (A → Z).

```js
const donuts = ["Sprinkles", "Glazed", "Jelly", "Chocolate"];

donuts.sort();
console.log(donuts); // ["Chocolate", "Glazed", "Jelly", "Sprinkles"]
```

Sorting numbers — use a compare function for correct numeric sort:
```js
const prices = [15, 5, 30, 10, 25];

prices.sort();                        // ⚠️ [10, 15, 25, 30, 5]  ← wrong! sorts as text
prices.sort((a, b) => a - b);         // ✅ [5, 10, 15, 25, 30]  ← correct numeric sort
prices.sort((a, b) => b - a);         // ✅ [30, 25, 15, 10, 5]  ← descending
```

> ⚠️ `sort()` also modifies the original array.

---

### ➕ `push()` — Add to the End

`push()` adds one or more elements to the **end** of the array.

```js
const donuts = ["Glazed", "Chocolate"];

donuts.push("Sprinkles");
console.log(donuts); // ["Glazed", "Chocolate", "Sprinkles"]

// Push multiple at once
donuts.push("Jelly", "Maple");
console.log(donuts); // ["Glazed", "Chocolate", "Sprinkles", "Jelly", "Maple"]
```

`push()` also returns the **new length** of the array:
```js
const newLength = donuts.push("Boston Cream");
console.log(newLength); // 6
```

---

### ➖ `pop()` — Remove from the End

`pop()` removes the **last element** from the array and returns it.

```js
const donuts = ["Glazed", "Chocolate", "Sprinkles", "Jelly"];

const lastDonut = donuts.pop();
console.log(lastDonut); // "Jelly"       ← the removed element
console.log(donuts);    // ["Glazed", "Chocolate", "Sprinkles"]
```

Donut shop use case — a customer buys the last donut:
```js
const donuts = ["Glazed", "Chocolate", "Sprinkles"];

const sold = donuts.pop();
console.log(sold + " was just sold!");          // "Sprinkles was just sold!"
console.log("Remaining donuts: " + donuts.length); // "Remaining donuts: 2"
```

---

### 🍩 All Together — Donut Shop in Action

```js
const donuts = ["Jelly", "Glazed", "Sprinkles", "Chocolate"];

console.log("Total donuts: " + donuts.length); // 4

// Sort the menu alphabetically
donuts.sort();
console.log(donuts); // ["Chocolate", "Glazed", "Jelly", "Sprinkles"]

// New donut arrives
donuts.push("Maple");
console.log(donuts); // ["Chocolate", "Glazed", "Jelly", "Sprinkles", "Maple"]

// Last donut gets sold
const sold = donuts.pop();
console.log(sold + " sold!"); // "Maple sold!"

// Reverse the display order for the evening menu
donuts.reverse();
console.log(donuts); // ["Sprinkles", "Jelly", "Glazed", "Chocolate"]
```

---

## 📋 Quick Reference

| Method / Property | What It Does |
|-------------------|--------------|
| `length` | Number of elements |
| `reverse()` | Flip the order of elements |
| `sort()` | Sort elements (A→Z or custom) |
| `push()` | Add to end |
| `pop()` | Remove from end |
| `unshift()` | Add to beginning |
| `shift()` | Remove from beginning |
| `includes()` | Check if item exists |
| `indexOf()` | Find index of item |
| `slice()` | Copy part of array |
| `join()` | Convert to string |

---

> 💡 **Remember:** Array indexes start at **0**. So the first donut is always at `donuts[0]`!

---

## ❓ Why `const` Instead of `let` for Arrays?

You may have noticed arrays are often declared with `const` instead of `let`. Here's why!

### `let` vs `const` — The Real Difference

| | `let` | `const` |
|-|-------|---------|
| Can reassign the variable? | ✅ Yes | ❌ No |
| Can modify array contents? | ✅ Yes | ✅ Yes |

> The key word is **reassignment** — not change.

---

### 🔢 Primitive Types — Value is Stored Directly

Primitives are simple, single values: `String`, `Number`, `Boolean`, `undefined`, `null`

```js
let price = 1.50;
price = 2.00;  // ✅ reassigning works fine with let

const tax = 0.08;
tax = 0.10;    // ❌ TypeError: Assignment to constant variable
```

For primitives, `const` locks the value completely.

---

### 📦 Object Types — Reference is Stored, Not the Value

Arrays are **Object types**. JavaScript doesn't store all the values directly — it stores a **reference** (like a memory address) pointing to where the values live.

```
const donuts ──► [ "Glazed", "Chocolate", "Sprinkles" ]
   (reference)        (actual values in memory)
```

Even if the values inside change, the **reference stays the same** — so `const` is never violated.

```js
const donuts = ["Glazed", "Chocolate", "Sprinkles"];

// ✅ Modifying contents is allowed — reference doesn't change
donuts.push("Jelly");
donuts[0] = "Maple";
console.log(donuts); // ["Maple", "Chocolate", "Sprinkles", "Jelly"]

// ❌ Reassigning the whole array is NOT allowed
donuts = ["Boston Cream"]; // TypeError: Assignment to constant variable
```

---

### 🏠 The House Analogy

Think of a JavaScript array like a **house**:

```
const myHouse = 🏠 "123 Donut Street"
                    └── Glazed
                    └── Chocolate
                    └── Sprinkles
```

- The **postal address** = the reference stored in `const`
- The **people inside** = the values in the array

```js
const myHouse = ["Glazed", "Chocolate", "Sprinkles"];

// ✅ People (values) can move in and out — address stays the same
myHouse.push("Jelly");   // new person moves in
myHouse.pop();           // someone moves out
console.log(myHouse);    // ["Glazed", "Chocolate"]

// ❌ You can't move the variable to a brand new house
myHouse = ["Boston Cream"]; // TypeError!
```

The address (`const`) never changes — only who lives inside does.

---

### ✅ Rule of Thumb

```js
// ✅ Use const — you won't reassign the array itself
const donuts = ["Glazed", "Chocolate", "Sprinkles"];

// ✅ Use let — only if you plan to reassign the whole array to a new one
let todaysSpecial = ["Maple"];
todaysSpecial = ["Boston Cream"]; // reassignment allowed with let
```

> 💡 **Best Practice:** Always use `const` for arrays unless you specifically need to reassign the entire array to a new one.
