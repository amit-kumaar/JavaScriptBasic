# 🔁 Loops — Repeat Blocks of Code

> Conditional statements control flow **once** — loops control flow **repeatedly**.

---

## 💡 What Are Loops?

Think of a loop like a **washing machine** 🫧 — it keeps spinning until the clothes are clean (condition is met), then it stops.

Conditional statements are one way to control the flow of code:
- ✅ If a condition is **true** → execute this block
- ❌ Otherwise → execute that other block

**Loops** are another way to control flow by allowing us to **execute a block of code multiple times** — automatically!

Without loops, printing 1 to 5 looks like this 😩:
```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

With a loop, it's just this 😎:
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

## 📚 What We Will Cover

| # | Topic | Description |
|---|-------|-------------|
| 1 | 🔄 `while` loops | Repeat while a condition is true |
| 2 | 🔢 `for` loops | Repeat a set number of times |
| 3 | 🪆 Nested loops | Loops inside loops for complex tasks |
| 4 | ✏️ Assignment operators | Write more concise loop code |
| 5 | 🛑 `break` & `continue` | Control loop flow mid-way |
| 6 | 🧪 Challenges | Practice with solved examples |

---

## 1️⃣ `while` Loop

Runs **as long as** the condition is `true`. Think of it as:

> *"Keep doing this WHILE this is still true."*

```js
let count = 1;

while (count <= 5) {
  console.log("Count is: " + count);
  count++;  // ← moves us closer to stopping
}

// Output:
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4
// Count is: 5
```

### 🔍 How it works step by step:

| Step | `count` | Condition `count <= 5` | Action |
|------|---------|------------------------|--------|
| 1 | 1 | ✅ true | print, then count = 2 |
| 2 | 2 | ✅ true | print, then count = 3 |
| 3 | 3 | ✅ true | print, then count = 4 |
| 4 | 4 | ✅ true | print, then count = 5 |
| 5 | 5 | ✅ true | print, then count = 6 |
| 6 | 6 | ❌ false | **loop stops** |

> ⚠️ Always update the variable inside the loop — otherwise it runs **forever** (infinite loop)!

---

## 2️⃣ `for` Loop

Best when you know **exactly how many times** to repeat.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Step: " + i);
}

// Output:
// Step: 1
// Step: 2
// Step: 3
// Step: 4
// Step: 5
```

### 🔍 Anatomy of a `for` loop:

```
for ( start    ;  condition  ;  update )
   let i = 1      i <= 5        i++
       ↑              ↑           ↑
  Run once        Check       Run after
  at start      each time    each loop
```

| Part | What it does | Example |
|------|-------------|---------|
| `let i = 1` | Sets the starting point | Start counting from 1 |
| `i <= 5` | Keep looping while this is true | Stop after 5 |
| `i++` | Update after each loop | Add 1 each time |

### 💡 Looping Backwards:

```js
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// Output: 5, 4, 3, 2, 1
```

### 💡 Looping by 2s:

```js
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
```

---

## 3️⃣ Nested Loops

A loop **inside** another loop. Think of it like a **clock** 🕐:
- The **minute hand** (inner loop) completes a full round for every single tick of the **hour hand** (outer loop).

```js
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(`Row ${row}, Col ${col}`);
  }
}

// Output:
// Row 1, Col 1 → Row 1, Col 2 → Row 1, Col 3
// Row 2, Col 1 → Row 2, Col 2 → Row 2, Col 3
// Row 3, Col 1 → Row 3, Col 2 → Row 3, Col 3
```

> 🧠 The inner loop runs **completely** for every single step of the outer loop.

---

## 4️⃣ Assignment Operators (Concise Code)

Instead of writing `count = count + 1`, use shorthand:

| Long way | Shorthand | Meaning |
|----------|-----------|---------|
| `i = i + 2` | `i += 2` | Add 2 |
| `i = i - 1` | `i -= 1` | Subtract 1 |
| `i = i * 3` | `i *= 3` | Multiply by 3 |
| `i = i / 2` | `i /= 2` | Divide by 2 |
| `i = i + 1` | `i++` | Add 1 |
| `i = i - 1` | `i--` | Subtract 1 |

```js
let score = 0;

for (let i = 1; i <= 5; i++) {
  score += 10; // same as: score = score + 10
  console.log("Score: " + score);
}

// Output:
// Score: 10
// Score: 20
// Score: 30
// Score: 40
// Score: 50
```

---

## 5️⃣ `break` and `continue`

### 🛑 `break` — Exit the loop early

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // stop when i reaches 5
  console.log(i);
}

// Output: 1, 2, 3, 4
```

### ⏭️ `continue` — Skip one iteration

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  console.log(i);
}

// Output: 1, 2, 4, 5
```

> 💡 Think of `break` as an **emergency exit** 🚪 and `continue` as **skipping a turn** ⏭️.

---

## 🆚 `while` vs `for` — When to Use Which?

| Use `while` when... | Use `for` when... |
|---------------------|-------------------|
| You don't know how many iterations | You know the exact count |
| Waiting for a condition to change | Looping through a fixed range |
| Reading user input until valid | Iterating over a list |

---

## 🧪 Challenges — Try It Yourself!

---

### 🟡 Challenge 1: Print Even Numbers (2 to 20)

**Task:** Print all even numbers from 2 to 20 using a `for` loop.

**Hint:** Even numbers are divisible by 2, or you can just count by 2s using `i += 2`.

```js
// ✅ Solution
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
```

---

### 🟡 Challenge 2: Countdown & Blast Off! 🚀

**Task:** Use a `while` loop to count down from 10 to 1, then print "🚀 Blast off!".

**Hint:** Start at 10, decrease by 1 each time, stop when you reach 0.

```js
// ✅ Solution
let countdown = 10;

while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}

console.log("🚀 Blast off!");

// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 🚀 Blast off!
```

---

### 🟡 Challenge 3: Print a 4×4 Star Grid ⭐

**Task:** Use nested loops to print a 4×4 grid of `*`.

**Hint:** The outer loop handles rows, the inner loop builds each row by adding `*` to a string.

```js
// ✅ Solution
for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let col = 1; col <= 4; col++) {
    line += "* ";
  }
  console.log(line);
}

// Output:
// * * * *
// * * * *
// * * * *
// * * * *
```

---

### 🔴 Bonus Challenge: Multiplication Table

**Task:** Print the multiplication table for the number 5 (from 1×5 to 10×5).

```js
// ✅ Solution
for (let i = 1; i <= 10; i++) {
  console.log(`${i} × 5 = ${i * 5}`);
}

// Output:
// 1 × 5 = 5
// 2 × 5 = 10
// 3 × 5 = 15
// ...
// 10 × 5 = 50
```

---

### 🔴 Bonus Challenge: Sum of Numbers

**Task:** Use a loop to find the sum of all numbers from 1 to 100.

```js
// ✅ Solution
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Sum:", sum); // Sum: 5050
```

---

## 🗺️ Quick Reference — Loop Cheat Sheet

```js
// while loop
while (condition) {
  // code to repeat
}

// for loop
for (let i = 0; i < 10; i++) {
  // code to repeat
}

// break — exit loop early
if (condition) break;

// continue — skip current iteration
if (condition) continue;
```

---

> 💡 **Tip:** Follow each module in order for the best learning experience. Practice makes perfect — try modifying the challenge solutions to see what happens!
