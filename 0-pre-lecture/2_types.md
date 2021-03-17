# Fundamentals: JavaScript Types

There are 6 basic value types in JavaScript. We can use these types to create just about anything.

- Booleans
- Numbers
- Empty values
- Strings
- Arrays
- Objects

## Booleans

Boolean values are either `true` or `false`. (written as such without any quotation marks `"`)

```js
true;
false;
```

## Numbers

Numbers are exactly what you would expect them to be: numeric values.

- They are numeric values.
  - `19`
- They can be fractional.
  - `12.75`
  - `2.998e8`
- Calculations with integers will always be precise, but this is not quite true for fractional numbers.

## Empty values

There are two special values, written `null` and `undefined`, that are used to denote the absence of a meaningful value.

They are themselves values, but they carry no information.

> "The difference in meaning between `undefined` and `null` is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable." (Marijn Haverbeke, [Eloquent JavaScript](https://eloquentjavascript.net/01_values.html))

## Strings

Strings represent text. They are written/defined by wrapping the text in quotes.

- Double quotes: "Your path you must decide."
- Single quotes: 'Luminous beings are we…not this crude matter.'
- Backticks: \`Do. Or do not. There is no try.\`

They are equally good... sort of.

### Backticks

- Strings wrapped in backticks have a super power called, **interpolation**.
- Interpolation is a way of inserting JavaScript into your strings.
- To interpolate a string you use this syntax \${}

#### Interpolation Example

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

## Arrays

- An array contains multiple values, of pretty much any type.
- Arrays are sequences of anything. Strings, numbers, booleans, arrays, other things we haven't learned about yet.
- You can declare an array by using [ ] square brackets.
- We separate the elements of an array with a comma.
- Arrays are mutable.

```js
["bacon", undefined, 900, true];
```

### Accessing the values in an array

We reference the element of an array by its position (index) in the array.

Here is an array called `myFruit`.

```js
let myFruit = ["apple", "orange", "mango", "banana"];
```

In order to specify the index, we add square brackets to the array name and place the numerical index value in the brackets.

**Why do index values start at 0, and not 1?** The name of the array is actually just a _pointer_, a reference to the location in memory that contains the values of the array. We use the index value as a reference of the _distance_ it is from the pointer in memory. Logically, the first element of an array is located 0 elements away from the pointer. Most programming languages, including JavaScript, use this terminology.

> ⚠️Indexing starts at 0

1. The value of `myFruit[0]` is "apple".
1. The value of `myFruit[1]` is "orange".
1. The value of `myFruit[2]` is "mango".
1. The value of `myFruit[3]` is "banana".

Arrays can be also be nested inside other arrays. Arrays can contain arrays that contain arrays that contain arrays that... _you get the idea_

Here is an array of arrays.

```js
let table = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];
```

In order to retrieve a value in a nested array, we can chain our square brackets to zero in on the required value. For example, the _location_ of the value 10 in the `table` is retrieved by writing `table[1][3]`.

Let's break that down.

- `table[1]` is equal to `[7, 8, 9, 10, 11, 12]`
- `table[1][3]` will get us the value located at index 3 of `table[1]`.

## Objects

Very broadly, an object can be defined as an unordered collection of key/value pairs.

`{'givenName': 'Yoda', 'surname': undefined, 'age': 900}`

This object has 3 properties.

- It has a property with name `givenName` and value of `'Yoda'` of type string.
- It has a property with name `surname` and value of `undefined` of type empty value.
- It has a property with name `age` and value of `900` of type number.

### Accessing values in objects

Values in objects can be referenced with either dot notation or bracket notation. _TODO: EXPLAIN, ELABORATE._

#### dot notation

Here is an object named `person`. It is assigned the key/value pairs of `name: "Bob"` and `age: 23`.

```js
let person = { name: "Bob", age: 23 };
```

When we want to reference any of those values, we can use dot notation. If we wanted to retrieve the value "Bob" from the object, we would write `person.name`. `person` refers, points to the location in memory of the object, and `name` points to the location in the object of the value "Bob".

- `person` references the entire object `{ name: "Bob", age: 23 }`
- `person.name` references the value 'Bob'
- `person.age` references the value 23

#### bracket notation

Bracket notation is similar to dot notation, but instead of using a dot to provide the key of the value, we provide the key as a **string** inside of square brackets.

- `person` references the entire object `{ name: "Bob", age: 23 }`
- `person['name']` references the value 'Bob'
- `person['age']` references the value 23

Both dot notation and bracket notation are equivalent and you may use them intercheangably most of the time.

## Truthy and Falsy

As well as a type, each value also has an inherent boolean value, generally known as either _truthy_ or _falsy_.

The following values are ALWAYS _falsy_:

- `false`
- `0` (zero)
- '' or "" (empty string)
- `null`
- `undefined`
- `NaN`

EVERYTHING else is _truthy_. Everything else.

- '0' (a string)
- 'false' (the word false as a string)
- `[]` (an empty array) _more on arrays in a bit_
- `{}` (an empty object) _more on objects in a bit_
- `function() {}` (an empty function) _more on functions in a bit_

For more details, you can check out this [Sitepoint page](https://www.sitepoint.com/javascript-truthy-falsy/)

## Exceptions, special cases and just-plain-annoying side-effects

- `Infinity` and `-Infinity`
- `NaN` stands for "Not a number" even though it has itself a value of type "number" 🤦‍♂️
- `NaN` is not equivalent to anything – including another `NaN`!
- Automatic type conversion 😲

```js
// Examples of type conversion
8 * null; // equals 0
"5" - 1; // equals 4
"5" + 1; // equals 51
```
