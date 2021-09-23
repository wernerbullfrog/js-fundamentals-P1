# Fundamentals: Exercises

_We will correct these exercises in class._

## Exercise 1

```js
// Look at these expressions below and determine whether they evaluate to true or false

1. true || false -> true
2. false && false -> true
3. 1 < 2 && 2 > 1 -> true
4. 31 < 13 || 1 < 2 && 3 > 1  ->  false
5. 400 <= 400 && 399 < 400 && (30 > 31 || 400 > 31) -> true
6. true && false && false || false && true -> false
7. true && false || true || false -> false
8. true && false && false || false && true ? true && false && false || false && true : 1 < 2 && 2 > 1 -> false
```

---

## Exercise 2

Given this data structure:

```js
let data = [0, [], [], [1, 2, 3, [4]]];
```

1. How would you access the value `0`? data[0][0]
2. How would you access the value `3`? data[3][3]
3. How would you access the value `4`? data[4][0]

---

## Exercise 3

- List the number of properties for each object.
- For each property, indicate its key and its value.
- For each property value, indicate its type.

```js
{ label: 'corn', price: 5.3 + '$' };
{ ISBN: 53532, isAvailable: true, author: 'Nakamoto' };
```

object 1 has 2 properties
the keys are label and price
the value of it's keys are corn and 5.3 respectively

object 2 has three properties
the keys are isbn, isavailable and author
and their values are 53532, a boolean of true and Nakamoto respectively

---

## Exercise 4

```js
// Given
let person = { name: "Bob", age: 23 };
```

What is the value of the following expressions?

1. person.name -> Bob
2. person['name'] -> Bob
3. person[name] -> 0
