# Fundamentals: JavaScript Operators

## Arithmetic

- Basic operators:
  - add: `+`
  - subtract: `-`
  - multiply: `*`
  - divide: `/`
- Order of operations is applied... but when in doubt, add parentheses.
- `%`: The remainder operator, often called "modulo". This operator returns the remainder of a division.

```js
// Examples...
10 % 3; // equals 1 ..... because 10 / 3 = 3 remainder 1
10 % 2; // equals 0 ..... because 10 / 2 = 5 remainder 0
```

Modulo is great way to determine whether a number is odd or even.

---

## Comparison operators

| Operator | Description              | Example   |
| -------- | ------------------------ | --------- |
| `>`      | greater than             | `2 > 1`   |
| `<`      | less than                | `1 < 2`   |
| `>=`     | greater than or equal to | `2 >= 1`  |
| `<=`     | less than or equal to    | `1 <= 2`  |
| `==`     | equal to (loose)         | `2 == 2`  |
| `!=`     | not equal to (loose)     | `2 != 1`  |
| `===`    | equal to (strict)        | `2 === 2` |
| `!==`    | not equal to (strict)    | `2 !== 1` |

All of the examples in the table above evaluate to _true_. So `2 > 1` (2 is greater than 1) is `true`, and `2 < 1` (2 is less than 1) is `false`.

---

## Logical operators

Booleans can be combined to produce new boolean values.

| Operator     | Description | Example                   |
| ------------ | ----------- | ------------------------- |
| &&           | AND         | _true && true_            |
| &#124;&#124; | OR          | _true &#124;&#124; false_ |
| !            | NOT         | _!false_                  |

All of the examples in the table above evaluate to `true`.

Boolean logic is its own thing, but here's a short intro:

- _AND_ means that both sides must be true
- _OR_ means that at least 1 side must be true
- _NOT_ negates the value so that `true` becomes `false`, and `false` becomes `true`.

_Comparison operators and logical operators are usually combined in an expression to create a boolean value, like this `2 > 1 && -1 < 0` (2 is greater than 1 and -1 is less than 0), which is `true`._
