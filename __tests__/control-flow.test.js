const exercise3 = require("../workshop/exercise-3");
const exercise4 = require("../workshop/exercise-4");
const exercise5 = require("../workshop/exercise-5");
const exercise6_1 = require("../workshop/exercise-6.1");
const exercise6_2 = require("../workshop/exercise-6.2");
const exercise6_3 = require("../workshop/exercise-6.3");
const exercise6_4 = require("../workshop/exercise-6.4");
const exercise6_5 = require("../workshop/exercise-6.5");
const exercise7 = require("../workshop/exercise-7");
const exercise8 = require("../workshop/exercise-8");
const exercise9 = require("../workshop/exercise-9");
const exercise10 = require("../workshop/exercise-10");
const exercise11 = require("../workshop/exercise-11");
const exercise12 = require("../workshop/exercise-12");
const exercise13 = require("../workshop/exercise-13");

// https://devhints.io/jest

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
  expect(console.log.mock.calls.length).toBe(0);
});

describe("Control Flow", () => {
  test("Exercise 3", () => {
    exercise3();
    expect(console.log.mock.calls.join()).toBe("1,2,3,4,5");
  });

  test("Exercise 4", () => {
    exercise4();
    expect(console.log.mock.calls.join()).toBe(
      "0,1,4,9,16,25,36,49,64,81,100,121,144"
    );
  });

  test("Exercise 5", () => {
    exercise5();
    expect(console.log.mock.calls.join()).toBe(
      "1,3,5,7,9,11,13,15,17,19,21,23,25"
    );
  });

  test("Exercise 6.1", () => {
    exercise6_1();
    expect(console.log.mock.calls.join()).toBe(
      "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100"
    );
  });

  test("Exercise 6.2", () => {
    exercise6_2();
    expect(console.log.mock.calls.join()).toBe(
      "5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45"
    );
  });

  test("Exercise 6.3", () => {
    exercise6_3();
    expect(console.log.mock.calls.join()).toBe(
      "2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50"
    );
  });

  test("Exercise 6.4", () => {
    exercise6_4();
    expect(console.log.mock.calls.join()).toBe(
      "36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2,0"
    );
  });

  test("Exercise 6.5", () => {
    exercise6_5();
    expect(console.log.mock.calls.join()).toBe(
      "0 is even,1 is odd,2 is even,3 is odd,4 is even,5 is odd,6 is even,7 is odd,8 is even,9 is odd,10 is even"
    );
  });

  test("Exercise 7", () => {
    exercise7();
    expect(console.log.mock.calls.join()).toBe(
      "It's 0h. Time to sleep!,It's 1h. Time to sleep!,It's 2h. Time to sleep!,It's 3h. Time to sleep!,It's 4h. Time to sleep!,It's 5h. Time to sleep!,It's 6h. Time to eat!,It's 7h. Time to train!,It's 8h. Time to train!,It's 9h. Time to train!,It's 10h. Time to train!,It's 11h. Time to train!,It's 12h. Time to eat!,It's 13h. Time to train!,It's 14h. Time to train!,It's 15h. Time to train!,It's 16h. Time to train!,It's 17h. Time to train!,It's 18h. Time to eat!,It's 19h. Time to train!,It's 20h. Time to train!,It's 21h. Time to train!,It's 22h. Time to sleep!,It's 23h. Time to sleep!"
    );
  });

  test("Exercise 8", () => {
    exercise8();
    expect(console.log.mock.calls.join()).toBe("The sum is 3127500");
  });

  test("Exercise 9", () => {
    exercise9();
    expect(console.log.mock.calls.join()).toBe(
      "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz"
    );
  });
  test("Exercise 10", () => {
    exercise10();
    expect(console.log.mock.calls.join()).toBe(
      "#,##,###,####,#####,######,#######"
    );
  });

  test("Exercise 11", () => {
    exercise11();
    expect(console.log.mock.calls.join()).toBe(
      "#_#_#_#_,_#_#_#_#,#_#_#_#_,_#_#_#_#,#_#_#_#_,_#_#_#_#,#_#_#_#_,_#_#_#_#"
    );
  });

  test("Exercise 12", () => {
    exercise12();
    expect(console.log.mock.calls.join()).toBe(
      "2,3,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199"
    );
  });

  test("Exercise 13", () => {
    exercise13();
    expect(console.log.mock.calls[0][0]).toEqual(7778742049);
  });
});
