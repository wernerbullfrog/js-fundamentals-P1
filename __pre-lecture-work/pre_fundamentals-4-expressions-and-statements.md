# Fundamentals: Expressions and Statements

## Expressions

Expressions are the language equivalent to phrases.

These are all expressions:

- `5`
- `'hi'`
- `[1, 2, 3]`

Expressions can contain expressions:

- `5 * 2`
- `I have a box full of poptarts—${2 * 4} poptarts!`
- `1 > 2`
- `1 < 2 && 3 < 4 || 5`

---

## Statements

- The simplest statement is an expression with a `;` after it.
- A statement expresses an action to be carried out.

```js
console.log('Hello!');
```

---

## Expressions vs Statements

- An expression can be content to just produce a value, which can then be used by the enclosing code.
- A statement stands on its own, so it amounts to something only if it _affects the world._
  - It could display something on the screen—that counts as changing the world.
  - it could change the internal state of the machine in a way that will affect the statements that come after it.
