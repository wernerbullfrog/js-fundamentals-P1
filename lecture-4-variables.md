# 2.1.4 JavaScript Variables (bindings)

---

- Variables are used to hold data values.
- Variables are essentially data containers.
- They can also hold functions
- There are 3 ways to declare variables.

```js
var name = 'Rick';
const profession = 'Scientist';
let grandson = 'Morty';
```

---
## Defining variables

- Never use `var`. It really should be deprecated...
- Use either `const` or `let`
    - `const` for variables that _will never change_
    - `let` for variables that _may change_

---

## Naming conventions

- Can be just about anything.
- Cannot contain spaces.
- Can contain numbers but cannot start with a number.

```js
// Example

```

---

### Camel Case, dashes, and underscores

For clarity, we often want to name variables with multi-word expressions.

There are many ways to do this.

- Camel Case
    - ``
- Dashes
    - ``
- Underscores
    - ``

---

In the course, we will be using `camelCase`.

---

### Reserved words

These words cannot be used as variable names. JavaScript reserves them for its own internal use.

```js
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
```

---