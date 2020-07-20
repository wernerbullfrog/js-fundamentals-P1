# JavaScript Fundamentals - Part 1

Today we will be learning the fundamentals of JavaScript!

## Setup

Look at [SETUP.md](SETUP.md) for the instructions.

## The Workshop

Each question is a `JS` file, except for the first 2. The question, including guidelines and hints, are also located each exercise file. You don't need to retype the code from the exercises, it is already available in the JS files.

### Exercise 1

_This is a series of theory questions for you to answer. Open [exercise-1.md](workshop/exercise-1.md) and answer in the file._

### Exercise 2

_This a series of code jumble questions. Answer directly in the [exercise-2.md](workshop/exercise-2.md) file._

### Exercise 3 - Fix this program

It is supposed to print to the console the numbers 1, 2, 3, 4, 5.

```js
for (let number = 2; number < 5; number++) {
  console.log(number);
}
```

### Exercise 4 - Fix this program

It should output the squares of all numbers between 0 and 12

```js
// eg:
// 0, 1, 4, 9, 16, ...

for (let number = 0; number < 12; number++) {
  console.log("the square of ", number, " is ", square);
}
```

### Exercise 5 - Fix this program

It should output all of the odd numbers between 1 and 25 (including 1 and 25).

```js
for (let number = 0; number < 25; number++) {
  if (number % 2) {
    console.log(number);
  }
  console.log(number);
}
```

### Exercise 6

This exercise contains 5 questions that all start with _Write a loop that ..._

### Exercise 7

Write a loop that will output every hour of the day (0 to 23) and determine whether it is time to sleep, eat or train. Life in the army is regimented! These are the hours alloted to each activity.

- Sleep between 22h and 5h
- Eat at 7h, 13h and 18h
- The rest of the time is spent training.

The output should look something like

```
It's 11h. Time to train!
It's 12h. Time to train!
It's 13h. Time to eat!
```

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

### Exercise 8

Write a program that will output the sum of all of the multiples of four between 0 and 5000

### Exercise 9

Write a program that goes through every number between 1 and 100, and follows the following rules:

- If the number is divisible by 3 (eg. 6), print "Fizz"
- If the number is divisible by 5 (eg. 10), print "Buzz"
- If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
- For all other numbers, print the number itself.

### Exercise 10

Write a loop that makes seven calls to console.log to output the following triangle:

```
#
##
###
####
#####
######
#######
```

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

### Exercise 11 - Stretch

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either an "\_" or a "#" character. The characters should form a chessboard.

```
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
```

### Exercise 12 - Stretch

Write a program that generates a list of all prime numbers between 1 and 200.

A prime number is a number that is ONLY divisible by 1 and itself.

- 6 -> NOT prime (2 \* 3)
- 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
- 12 -> NOT prime (3 _ 4, 2 _ 6)
- 37 -> PRIME ()

NOTE: 1 and 2 are both prime numbers.

```
EXPECTED OUTPUT: [1, 2, 3, 5, 7, 11, 13, ...]
```

### Exercise 13 - Stretch

The Fibonacci sequence is a sequence of numbers where every value is the sum of the previous 2 values.

It looks like this:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Why?

13 + 21 = 34
8 + 13 =21
5 + 8 =13

See? Every number in the sequence is the result of adding the two numbers to
the left. The sequence starts with "0, 1", and every number beyond that
can be calculated by adding the previous 2 numbers.

Write a program which calculates the 50th number in the fibonacci sequence
