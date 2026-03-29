# 🔢 JavaScript Arithmetic Operations

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | ➕ Addition | `5 + 3` | `8` |
| `-` | ➖ Subtraction | `10 - 4` | `6` |
| `*` | ✖️ Multiplication | `6 * 3` | `18` |
| `/` | ➗ Division | `20 / 4` | `5` |
| `%` | 🔢 Modulus | `10 % 3` | `1` |
| `**` | ⬆️ Exponentiation | `2 ** 4` | `16` |
| `++` | ➕➕ Increment | `let x = 5; x++` | `x = 6` |
| `--` | ➖➖ Decrement | `let x = 5; x--` | `x = 4` |

---

# 🔍 JavaScript Comparison Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal to | `5 == "5"` | `true` |
| `===` | Strict Equal to | `5 === "5"` | `false` |
| `!=` | Not Equal to | `5 != 3` | `true` |
| `!==` | Strict Not Equal to | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 7` | `true` |
| `>=` | Greater than or Equal to | `5 >= 5` | `true` |
| `<=` | Less than or Equal to | `4 <= 6` | `true` |

---

# 🔤 JavaScript Special Characters (Escape Sequences)

| Escape | Name | Example | Output |
|--------|------|---------|--------|
| `\n` | New Line | `"Hello\nWorld"` | Hello<br>World |
| `\t` | Tab | `"Hello\tWorld"` | `Hello   World` |
| `\\` | Backslash | `"C:\\Users\\name"` | `C:\Users\name` |
| `\"` | Double Quote | `"He said \"Hello\""` | `He said "Hello"` |
| `\'` | Single Quote | `'It\'s fine'` | `It's fine` |
| `\r` | Carriage Return | `"Hello\rWorld"` | `World` |
| `\b` | Backspace | `"Hello\bWorld"` | `HellWorld` |
| `\f` | Form Feed | `"Hello\fWorld"` | *(next page)* |
| `\v` | Vertical Tab | `"Hello\vWorld"` | *(vertical tab)* |
| `\0` | Null Character | `"Hello\0World"` | *(null)* |
| `\uXXXX` | Unicode | `"\u0041"` / `"\u2764"` | `A` / `❤` |
| `\xXX` | Hexadecimal | `"\x41"` / `"\x21"` | `A` / `!` |

---

# 🔤 JavaScript Strings

A string is a sequence of characters wrapped in quotes.

```js
let single = 'Hello';
let double = "World";
let backtick = `Hi there`;
```

| Quote Type | Example | Note |
|------------|---------|------|
| Single `'` | `'Hello'` | Common, simple strings |
| Double `"` | `"Hello"` | Same as single quotes |
| Backtick `` ` `` | `` `Hello` `` | Template literals, supports expressions |

### 📏 String Properties & Methods

| Method / Property | Example | Result |
|-------------------|---------|--------|
| `.length` | `"Hello".length` | `5` |
| `.toUpperCase()` | `"hello".toUpperCase()` | `"HELLO"` |
| `.toLowerCase()` | `"HELLO".toLowerCase()` | `"hello"` |
| `.trim()` | `"  hi  ".trim()` | `"hi"` |
| `.includes()` | `"Hello".includes("ell")` | `true` |
| `.indexOf()` | `"Hello".indexOf("l")` | `2` |
| `.slice()` | `"Hello".slice(1, 3)` | `"el"` |
| `.replace()` | `"Hello".replace("H", "J")` | `"Jello"` |

---

# ➕ JavaScript String Concatenation

Concatenation joins two or more strings together.

### Using `+` Operator
```js
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName); // "John Doe"
```

### Using `+=` Operator
```js
let message = "Hello";
message += " World";
console.log(message); // "Hello World"
```

### Using Template Literals (ES6)
```js
let name = "John";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// "My name is John and I am 25 years old."
```

### Concatenation with Numbers
```js
console.log("Score: " + 100);   // "Score: 100"
console.log("5" + 5);           // "55"  ← string + number = string
console.log(5 + 5 + "5");       // "105" ← numbers add first, then concat
```

> 💡 **Tip:** Prefer template literals over `+` concatenation for cleaner, more readable code.

---

# 📦 JavaScript Variables

Variables store data values. JavaScript has 3 ways to declare them.

| Keyword | Scope | Re-assignable | Re-declarable | Use Case |
|---------|-------|---------------|---------------|----------|
| `var` | Function | ✅ | ✅ | Old way, avoid using |
| `let` | Block | ✅ | ❌ | Value will change |
| `const` | Block | ❌ | ❌ | Value won't change |

```js
var oldWay = "avoid this";
let score = 10;        // can be reassigned
const PI = 3.14;       // cannot be reassigned
```

> 💡 **Tip:** Always prefer `const` by default, use `let` only when the value needs to change.

---

# 🔢 String Index

Each character in a string has a position called an **index**, starting from `0`.

```
"Hello"
 H → 0
 e → 1
 l → 2
 l → 3
 o → 4
```

```js
let str = "Hello";
console.log(str[0]);        // "H"
console.log(str[4]);        // "o"
console.log(str.charAt(1)); // "e"
console.log(str[str.length - 1]); // "o" ← last character
```

| Method | Example | Result |
|--------|---------|--------|
| `[index]` | `"Hello"[1]` | `"e"` |
| `.charAt()` | `"Hello".charAt(1)` | `"e"` |
| `.charCodeAt()` | `"Hello".charCodeAt(0)` | `72` |
| `.at()` | `"Hello".at(-1)` | `"o"` (last char) |

---

# 🔒 Escaping Strings

Use a backslash `\` to escape special characters inside strings.

```js
// Without escaping — causes error
let bad = "He said "Hello"";  // ❌ SyntaxError

// With escaping — works correctly
let good = "He said \"Hello\"";  // ✅ He said "Hello"
```

```js
console.log("It\'s a \"great\" day!\nEnjoy it.");
// It's a "great" day!
// Enjoy it.
```

| Situation | Problem | Solution |
|-----------|---------|----------|
| Double quote inside `""` | Breaks string | Use `\"` or switch to `''` |
| Single quote inside `''` | Breaks string | Use `\'` or switch to `""` |
| Backslash in string | Ends early | Use `\\` |
| Multi-line string | Not allowed in `""` | Use `\n` or template literal |

---

# 🔡 Comparing Strings

Strings are compared character by character using Unicode values.

```js
console.log("apple" === "apple");  // true
console.log("apple" === "Apple");  // false ← case sensitive
console.log("b" > "a");            // true
console.log("banana" > "apple");   // true ← "b" > "a"
```

| Comparison | Example | Result | Reason |
|------------|---------|--------|--------|
| Equal | `"cat" === "cat"` | `true` | Same characters |
| Case sensitive | `"Cat" === "cat"` | `false` | `C` ≠ `c` |
| Alphabetical | `"b" > "a"` | `true` | Unicode of `b` > `a` |
| Length difference | `"abc" > "ab"` | `true` | Longer string wins if prefix matches |

```js
// Case-insensitive comparison
let a = "Hello";
let b = "hello";
console.log(a.toLowerCase() === b.toLowerCase()); // true
```

---

# ✅ JavaScript Booleans

A boolean has only two values: `true` or `false`.

```js
let isLoggedIn = true;
let hasError = false;
```

### Truthy & Falsy Values

In JavaScript, values are automatically treated as `true` or `false` in conditions.

| Falsy Values | Truthy Values |
|--------------|---------------|
| `false` | `true` |
| `0` | Any non-zero number |
| `""` (empty string) | Any non-empty string |
| `null` | `[]` (empty array) |
| `undefined` | `{}` (empty object) |
| `NaN` | Any function |

```js
if ("hello") console.log("truthy");  // ✅ runs
if (0)       console.log("truthy");  // ❌ doesn't run
```

---

# ⚖️ JavaScript Equality

JavaScript has two types of equality checks.

### `==` Loose Equality (type coercion)
```js
5 == "5"    // true  ← converts "5" to number
0 == false  // true  ← converts false to 0
null == undefined // true
```

### `===` Strict Equality (no type coercion)
```js
5 === "5"   // false ← different types
5 === 5     // true
0 === false // false ← different types
```

| Check | `==` | `===` |
|-------|------|-------|
| `5` vs `"5"` | `true` | `false` |
| `0` vs `false` | `true` | `false` |
| `null` vs `undefined` | `true` | `false` |
| `"hello"` vs `"hello"` | `true` | `true` |

> 💡 **Tip:** Always use `===` to avoid unexpected bugs from type coercion.
