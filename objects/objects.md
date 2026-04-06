# 🗂️ Objects — Wrap Data & Functionality Together

> **Objects allow us to wrap up pieces of related data and functionality into one single container.**

Arrays are a special type of object in JavaScript with methods including `length`, `.reverse()`, `.sort()`, `push()`, and `pop()` — but objects are much more than arrays. JavaScript includes a lot of other built-in objects.

In this lesson, we'll learn all about how we can create our own objects that contain both **data** and **functions** that we can use to manipulate or operate on that data.

---

## 🎯 By the End of This Lesson You Will Be Able To:

- ✅ Create a JavaScript object
- ✅ Use **dot notation** and **bracket notation** to access object elements
- ✅ Use `typeof` to check the type of a variable
- ✅ Add and access **methods** in JavaScript objects
- ✅ Use JavaScript **naming conventions** for property names

Let's get started!

---

## 🤔 Why Objects?

Imagine you're building a product page for an umbrella. Without objects, you'd need separate variables for every piece of data:

```js
let umbrellaColor = "red";
let umbrellaPrice = 12.99;
let umbrellaInStock = true;
let umbrellaWeight = 0.5;
```

This gets messy fast. With an **object**, all related data lives in one place:

```js
let umbrella = {
  color: "red",
  price: 12.99,
  inStock: true,
  weight: 0.5
};
```

Clean, organized, and easy to work with! 🎉

---

## 🏗️ How to Create a JavaScript Object

An object is a collection of **key-value pairs** wrapped in **curly braces `{}`**.

```
{
  key: value,
  key: value,
  key: value
}
```

- Each **key** is called a **property**
- Each property has a **value** (any data type)
- Properties are separated by **commas**

### Basic Example

```js
let umbrella = {
  color: "red",
  price: 12.99,
  inStock: true
};

console.log(umbrella);
// { color: 'red', price: 12.99, inStock: true }
```

### Object with Mixed Value Types

```js
let product = {
  name: "Laptop",
  price: 999.99,
  inStock: true,
  rating: 4.5,
  tags: ["electronics", "computers"]  // array as a value!
};
```

> 💡 Object values can be **any data type** — strings, numbers, booleans, arrays, or even other objects!

---

## 🔍 Accessing Object Properties

There are **two ways** to access properties in an object.

---

### 1️⃣ Dot Notation — Most Common

```js
let umbrella = {
  color: "red",
  price: 12.99,
  inStock: true
};

console.log(umbrella.color);    // "red"
console.log(umbrella.price);    // 12.99
console.log(umbrella.inStock);  // true
```

Think of it like: `object.property`

---

### 2️⃣ Bracket Notation — More Flexible

```js
console.log(umbrella["color"]);   // "red"
console.log(umbrella["price"]);   // 12.99
```

Think of it like: `object["property"]`

---

### 🆚 Dot vs Bracket — When to Use Which?

| Situation | Use |
|-----------|-----|
| Normal property access | Dot notation `obj.name` |
| Property name has spaces or special characters | Bracket notation `obj["first name"]` |
| Property name is stored in a variable | Bracket notation `obj[variable]` |

```js
let person = {
  "first name": "James",   // space in key — must use bracket notation
  age: 30
};

console.log(person["first name"]); // ✅ "James"
console.log(person.first name);    // ❌ SyntaxError

// Using a variable as the key
let key = "age";
console.log(person[key]); // ✅ 30
```

---

## 🔎 Using `typeof` to Check Variable Types

`typeof` is a JavaScript operator that returns the **type** of a variable as a string.

```js
let umbrella = {
  color: "red",
  price: 12.99,
  inStock: true
};

console.log(typeof umbrella);         // "object"
console.log(typeof umbrella.color);   // "string"
console.log(typeof umbrella.price);   // "number"
console.log(typeof umbrella.inStock); // "boolean"
```

### `typeof` Quick Reference

```js
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"  ← known JS quirk!
console.log(typeof []);          // "object"  ← arrays are objects!
console.log(typeof {});          // "object"
```

> 💡 Arrays and `null` both return `"object"` with `typeof` — this is a well-known JavaScript quirk!

---

## ✏️ Modifying Objects

### Add a New Property

```js
let umbrella = {
  color: "red",
  price: 12.99
};

umbrella.weight = 0.5;
console.log(umbrella);
// { color: 'red', price: 12.99, weight: 0.5 }
```

### Update an Existing Property

```js
umbrella.price = 14.99;
console.log(umbrella.price); // 14.99
```

### Delete a Property

```js
delete umbrella.weight;
console.log(umbrella);
// { color: 'red', price: 14.99 }
```

---

## ⚙️ Methods — Functions Inside Objects

A **method** is a function stored as a property of an object. Methods let objects **do things**, not just store data.

```js
let umbrella = {
  color: "red",
  price: 12.99,
  inStock: true,
  // method — a function inside an object
  describe: function() {
    return "This umbrella is " + umbrella.color + " and costs $" + umbrella.price;
  }
};

console.log(umbrella.describe());
// "This umbrella is red and costs $12.99"
```

### Using `this` Inside Methods

Instead of referencing the object by name, use `this` — it refers to the **current object**:

```js
let umbrella = {
  color: "red",
  price: 12.99,
  inStock: true,
  describe: function() {
    return "This umbrella is " + this.color + " and costs $" + this.price;
  },
  applyDiscount: function(percent) {
    this.price = this.price * (1 - percent / 100);
    return "New price: $" + this.price.toFixed(2);
  }
};

console.log(umbrella.describe());          // "This umbrella is red and costs $12.99"
console.log(umbrella.applyDiscount(10));   // "New price: $11.69"
console.log(umbrella.price);              // 11.69
```

> 💡 `this` always refers to the object the method belongs to. It's safer than using the object's name directly!

---

## 🎨 `paintPicture()` — A Method in Action

Let's use a **painting** example to really understand how methods work inside objects.

Imagine you have a `painter` object. A painter has **data** (name, color, tool) and can **do things** (paint a picture). That "doing something" is a method!

### Step 1 — Object with Data Only

```js
let painter = {
  name: "Bob",
  color: "blue",
  tool: "brush"
};
```

This stores data — but the painter can't *do* anything yet.

---

### Step 2 — Add `paintPicture()` as a Method

```js
let painter = {
  name: "Bob",
  color: "blue",
  tool: "brush",

  paintPicture: function() {
    return this.name + " paints a picture using a " + this.tool + " in " + this.color + "!";
  }
};

console.log(painter.paintPicture());
// "Bob paints a picture using a brush in blue!"
```

`paintPicture()` is a **method** — a function that lives inside the object and uses `this` to access the object's own properties.

---

### Step 3 — Methods Can Change Object Data

Methods aren't just for reading data — they can **update** it too:

```js
let painter = {
  name: "Bob",
  color: "blue",
  tool: "brush",

  paintPicture: function() {
    return this.name + " paints with a " + this.tool + " in " + this.color + "!";
  },

  changeColor: function(newColor) {
    this.color = newColor;
    console.log(this.name + " switched to " + this.color);
  },

  changeTool: function(newTool) {
    this.tool = newTool;
    console.log(this.name + " is now using a " + this.tool);
  }
};

console.log(painter.paintPicture()); // "Bob paints with a brush in blue!"

painter.changeColor("red");          // "Bob switched to red"
painter.changeTool("palette knife"); // "Bob is now using a palette knife"

console.log(painter.paintPicture()); // "Bob paints with a palette knife in red!"
```

> 💡 Notice how `paintPicture()` gives a **different result** after calling `changeColor()` and `changeTool()` — because `this.color` and `this.tool` were updated!

---

### Step 4 — Multiple Painters, Same Method

The real power of objects: you can create **multiple objects** with the same structure, each with their own data:

```js
let painter1 = {
  name: "Bob",
  color: "blue",
  tool: "brush",
  paintPicture: function() {
    return this.name + " paints with a " + this.tool + " in " + this.color + "!";
  }
};

let painter2 = {
  name: "Alice",
  color: "green",
  tool: "sponge",
  paintPicture: function() {
    return this.name + " paints with a " + this.tool + " in " + this.color + "!";
  }
};

console.log(painter1.paintPicture()); // "Bob paints with a brush in blue!"
console.log(painter2.paintPicture()); // "Alice paints with a sponge in green!"
```

Same method name, different results — because `this` refers to **each object's own data**.

---

### Step 5 — Check Types with `typeof`

```js
let painter = {
  name: "Bob",
  color: "blue",
  tool: "brush",
  paintPicture: function() {
    return this.name + " paints with a " + this.tool + " in " + this.color + "!";
  }
};

console.log(typeof painter);                  // "object"
console.log(typeof painter.name);             // "string"
console.log(typeof painter.paintPicture);     // "function"
console.log(typeof painter.paintPicture());   // "string"  ← type of the returned value
```

> 💡 `typeof painter.paintPicture` → `"function"` (the method itself)
> `typeof painter.paintPicture()` → `"string"` (the value the method *returns*)

---

### 🖼️ Full Painter Example

```js
let painter = {
  name: "Bob",
  color: "blue",
  tool: "brush",
  paintings: 0,

  paintPicture: function() {
    this.paintings++;
    return this.name + " painted picture #" + this.paintings
      + " using a " + this.tool + " in " + this.color + "!";
  },

  changeColor: function(newColor) {
    this.color = newColor;
  },

  changeTool: function(newTool) {
    this.tool = newTool;
  },

  summary: function() {
    return this.name + " has painted " + this.paintings + " picture(s) total.";
  }
};

console.log(painter.paintPicture()); // "Bob painted picture #1 using a brush in blue!"

painter.changeColor("red");
console.log(painter.paintPicture()); // "Bob painted picture #2 using a brush in red!"

painter.changeTool("palette knife");
console.log(painter.paintPicture()); // "Bob painted picture #3 using a palette knife in red!"

console.log(painter.summary());      // "Bob has painted 3 picture(s) total."
```

---

## 📛 Naming Conventions for Properties

JavaScript has conventions for naming object properties:

| Convention | Rule | Example |
|------------|------|---------|
| **camelCase** | ✅ Preferred for multi-word names | `firstName`, `inStock`, `applyDiscount` |
| **Single word** | ✅ Just lowercase | `color`, `price`, `name` |
| **Spaces / hyphens** | ⚠️ Allowed but requires bracket notation | `"first name"`, `"in-stock"` |
| **Starting with number** | ❌ Not allowed as identifier | `"1stItem"` — must use bracket notation |

```js
// ✅ Good naming — camelCase
let product = {
  productName: "Umbrella",
  unitPrice: 12.99,
  isInStock: true,
  applyDiscount: function(p) { this.unitPrice *= (1 - p / 100); }
};

// ⚠️ Works but awkward — requires bracket notation to access
let product2 = {
  "product name": "Umbrella",
  "unit price": 12.99
};
console.log(product2["product name"]); // "Umbrella"
```

> 💡 **Best Practice:** Always use **camelCase** for property names — it keeps your code clean and consistent!

---

## 🛒 Putting It All Together — Product Object

```js
let product = {
  name: "Umbrella",
  color: "red",
  price: 12.99,
  inStock: true,
  sizes: ["small", "medium", "large"],

  describe: function() {
    return this.name + " (" + this.color + ") — $" + this.price;
  },

  applyDiscount: function(percent) {
    this.price = parseFloat((this.price * (1 - percent / 100)).toFixed(2));
    console.log("Discount applied! New price: $" + this.price);
  },

  checkAvailability: function() {
    return this.inStock ? this.name + " is available!" : this.name + " is out of stock.";
  }
};

// Access properties
console.log(product.name);           // "Umbrella"
console.log(product["color"]);       // "red"
console.log(product.sizes[1]);       // "medium"

// Check types
console.log(typeof product);         // "object"
console.log(typeof product.price);   // "number"
console.log(typeof product.describe);// "function"

// Call methods
console.log(product.describe());          // "Umbrella (red) — $12.99"
console.log(product.checkAvailability()); // "Umbrella is available!"
product.applyDiscount(20);                // "Discount applied! New price: $10.39"
console.log(product.describe());          // "Umbrella (red) — $10.39"

// Add a new property
product.brand = "RainGuard";
console.log(product.brand);          // "RainGuard"
```

---

## 🔁 Looping Through Object Properties

Use `for...in` to loop over all properties of an object:

```js
let umbrella = {
  color: "red",
  price: 12.99,
  inStock: true
};

for (let key in umbrella) {
  console.log(key + ": " + umbrella[key]);
}
// color: red
// price: 12.99
// inStock: true
```

---

## 📋 Quick Reference

| Concept | Syntax | Example |
|---------|--------|---------|
| Create object | `{ key: value }` | `let obj = { name: "Alice" }` |
| Dot notation | `obj.key` | `obj.name` |
| Bracket notation | `obj["key"]` | `obj["name"]` |
| Add property | `obj.key = value` | `obj.age = 25` |
| Delete property | `delete obj.key` | `delete obj.age` |
| Add method | `key: function() {}` | `greet: function() {}` |
| Call method | `obj.method()` | `obj.greet()` |
| Check type | `typeof obj` | `"object"` |
| Loop properties | `for (let key in obj)` | see above |

---

> 💡 **Remember:** Objects store **related data and functionality together**. Properties hold data, methods hold behavior. Together they model real-world things perfectly!
