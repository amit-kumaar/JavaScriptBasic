# 🔀 JavaScript Conditionals

> Control the flow of your program by making decisions in code!

---

## 📚 What You'll Learn

| # | Topic | Description |
|---|-------|-------------|
| 1 | 🔀 `if...else` & `else...if` | Make decisions based on conditions |
| 2 | 🔗 Logical Operators | Combine multiple conditions |
| 3 | ✅ Truthy & Falsy | Understand how JS evaluates values |
| 4 | ❓ Ternary Operator | Write concise one-line conditionals |
| 5 | 🔄 Switch Statement | Handle multiple conditions cleanly |

---

## 1️⃣ if...else & else...if

Think of it like a real-life decision:
> *"If it's raining, take an umbrella. Otherwise, wear sunglasses."*

### `if` Statement
Runs a block of code **only if** the condition is `true`.

```js
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside! ☀️");
}
// Output: It's hot outside! ☀️
```

### `if...else` Statement
Runs one block if `true`, another if `false`.

```js
let isRaining = false;

if (isRaining) {
  console.log("Take an umbrella ☂️");
} else {
  console.log("Wear sunglasses 😎");
}
// Output: Wear sunglasses 😎
```

### `else...if` Statement
Check multiple conditions one by one.

```js
let score = 75;

if (score >= 90) {
  console.log("Grade: A 🏆");
} else if (score >= 80) {
  console.log("Grade: B 👍");
} else if (score >= 70) {
  console.log("Grade: C 😐");
} else {
  console.log("Grade: F ❌");
}
// Output: Grade: C 😐
```

> 💡 **Tip:** JavaScript checks each condition top to bottom and stops at the first `true` match.

---

## 2️⃣ Logical Operators

Combine multiple conditions together.

| Operator | Name | Description | Example | Result |
|----------|------|-------------|---------|--------|
| `&&` | AND | Both must be `true` | `5 > 3 && 10 > 5` | `true` |
| `\|\|` | OR | At least one must be `true` | `5 > 3 \|\| 10 < 5` | `true` |
| `!` | NOT | Flips `true` to `false` | `!true` | `false` |

### AND `&&` — Both conditions must be true
```js
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Access granted ✅");
} else {
  console.log("Access denied ❌");
}
// Output: Access granted ✅
```

### OR `||` — At least one condition must be true
```js
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No work today! 🎉");
}
// Output: No work today! 🎉
```

### NOT `!` — Flips the condition
```js
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in 🔐");
}
// Output: Please log in 🔐
```

---

## 3️⃣ Truthy & Falsy Values

In JavaScript, every value is either **truthy** or **falsy** when used in a condition — not just `true`/`false`.

| Falsy Values ❌ | Truthy Values ✅ |
|----------------|-----------------|
| `false` | `true` |
| `0` | Any non-zero number (`1`, `-1`) |
| `""` (empty string) | Any non-empty string (`"hello"`) |
| `null` | `[]` (empty array) |
| `undefined` | `{}` (empty object) |
| `NaN` | Any function |

```js
let username = "";

if (username) {
  console.log("Welcome, " + username);
} else {
  console.log("Please enter a username ⚠️");
}
// Output: Please enter a username ⚠️
// because "" is falsy!
```

```js
let items = [];

if (items) {
  console.log("Array exists ✅");  // runs! [] is truthy
}
```

> 💡 **Tip:** Use `value.length === 0` to check if an array or string is truly empty.

---

## 4️⃣ Ternary Operator

A shorthand for simple `if...else` — all in **one line**!

### Syntax
```
condition ? valueIfTrue : valueIfFalse
```

### Example
```js
// Regular if...else
let age = 20;
let access;

if (age >= 18) {
  access = "Allowed ✅";
} else {
  access = "Denied ❌";
}

// Same thing with ternary ✨
let access = age >= 18 ? "Allowed ✅" : "Denied ❌";
console.log(access); // Allowed ✅
```

### More Examples
```js
let score = 85;
let result = score >= 50 ? "Pass 🎉" : "Fail ❌";
console.log(result); // Pass 🎉

let isOnline = true;
let status = isOnline ? "🟢 Online" : "🔴 Offline";
console.log(status); // 🟢 Online
```

> ⚠️ **Avoid nesting ternaries** — it makes code hard to read. Use `if...else` for complex logic.

---

## 5️⃣ Switch Statement

Use `switch` when you have **many possible values** for a single variable — cleaner than a long chain of `else if`.

### Syntax
```js
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code if no case matches
}
```

### Example
```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week 😴");
    break;
  case "Friday":
    console.log("Almost weekend! 🎉");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend! 🏖️");
    break;
  default:
    console.log("Just another weekday 📅");
}
// Output: Start of the week 😴
```

### `switch` vs `else if`

| Feature | `else if` | `switch` |
|---------|-----------|----------|
| Best for | Ranges (`> 10`, `< 5`) | Exact values |
| Readability | Gets messy with many conditions | Clean with many exact values |
| Fall-through | ❌ Not possible | ✅ Possible (without `break`) |

> 💡 **Always add `break`** at the end of each case to prevent fall-through (running the next case unintentionally).

---

## 🧠 Quick Recap

| Concept | Use When |
|---------|----------|
| `if...else` | Simple true/false decision |
| `else...if` | Multiple conditions to check |
| `&&` / `\|\|` / `!` | Combining or negating conditions |
| Truthy/Falsy | Checking if a value exists or is valid |
| Ternary `? :` | Simple one-line if/else |
| `switch` | Many exact value comparisons |
