# JavaScript Types

---

There are 6 basic types in JavaScript.

- Booleans
- Numbers
- Empty values
- Strings
- Arrays
- Objects

<!-- Prompt students for examples of each type. -->

```js
// Examples
```

---

If ever you are not sure of the type of a given value, you can use `typeof <VALUE>`

---

## Strings: Interpolation Example

<!-- Break down this example in class. -->

```js
let pi = 3.14;
let diameter = 30;
let radius = diameter / 2;

// declare a string
let introduction = `The area of a circle is πr².`;

// declare a string with interpolation
let example = `A ${diameter}cm pizza has an area of ${
  pi * radius * radius
}cm².`;

// Concatenate the strings
let text = introduction + " " + example;

console.log(text);
```

---

<!-- Reiterate how to access values in an array. -->

## Arrays: Accessing the values in an array

⚠️⚠️ Indexing starts at 0 ⚠️⚠️

```js
let anArray = ["bacon", undefined, 900, true];
```

1. What is the value of `anArray[0]`?
2. How do we access the value `900`?

---

<!-- Reiterate how to access values in an object. -->

## Objects: Accessing values in objects

Values in objects can be accessed with

- dot notation
- bracket notation

```js
// Example
let person = { name: "Bob", age: 23 };
const otherPerson = { name: "Joe", age: 31, height: "170cm" };
```

---

# JavaScript Operators

---

- Arithmetic
- Comparison operators
- Logical operators

Comparison operators and logical operators are usually combined in an expression to create a boolean value, like this `2 > 1 && -1 < 0` (2 is greater than 1 and -1 is less than 0), which is `true`.

---

# Exercises

<!-- Go over _some_ of the answers to the exercises -->

---

## Exercise 1

```js
// Look at these expressions below and determine whether they evaluate to true or false

1. true || false
2. false && false
3. 1 < 2 && 2 > 1
4. 31 < 13 || 1 < 2 && 3 > 1
5. 400 <= 400 && 399 < 400 && (30 > 31 || 400 > 31)
6. true && false && false || false && true
7. true && false || true || false
8. true && false && false || false && true ? true && false && false || false && true : 1 < 2 && 2 > 1
```

---

## Exercise 2

Given this data structure:

```js
let data = [0, [], [], [1, 2, 3, [4]]];
```

1. How would you access the value `0`?
2. How would you access the value `3`?
3. How would you access the value `4`?

---

## Exercise 3

- List the number of properties for each object.
- For each property, indicate its key and its value.
- For each property value, indicate its type.

```js
{ label: 'corn', price: 5.3 + '$' };
{ ISBN: 53532, isAvailable: true, author: 'Nakamoto' };
```

---

## Exercise 4

```js
// Given
let person = { name: "Bob", age: 23 };
let name = "John";
```

What is the value of the following expressions?

1. person.name
2. person['name']
3. person[name]

---

## Exercise 5

```js
// Given
let person = { name: "Bob", age: 23 };
let key = "name";
```

What is the value of the following expressions:

1. person.key
2. person['key']
3. person[key]
