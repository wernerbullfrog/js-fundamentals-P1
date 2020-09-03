# JavaScript Expressions vs Statements

---

## Expressions

---

When you open the developer tools and enter `5 + 1`, the answer is shown below:

<img
  alt="screenshot of the Chrome devtools, showing an expression being evaluated"
  src="./assets/devtools-expression.png"
/>

---

Chrome shows us the result of _evaluating an expression_.

---

We can enter a straight value:

```js
5;
```

```js
"hi";

```

```js
[1, 2, 3];
```

---

Each of these values is also an expression.

But expressions can contain expressions:

```js
5 * 2;
```

```js
`I have a box full of poptarts—${2 * 4} poptarts!`;
```

```js
1 > 2;
```

```js
(1 < 2 && 3 < 4) || 5;
```

---

_Expressions are the language equivalent to phrases._

---

## Statements

---

- The simplest statement is an expression with a `;` after it.
- A statement expresses an action to be carried out.

---

## Expressions vs Statements

- An expression can be content to just produce a value, which can then be used by the enclosing code.
- A statement stands on its own, so it amounts to something only if it _affects the world._
  - It could display something on the screen—that counts as changing the world.
  - it could change the internal state of the machine in a way that will affect the statements that come after it.

---

```js
console.log("Hello!");
```

```js
if (5 < 2) {
  console.log("Never going to happen!");
}
```
