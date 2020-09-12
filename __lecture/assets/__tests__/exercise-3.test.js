const exercise3 = require("../../../__workshop/exercise-3");

// https://devhints.io/jest

test("Exercise 3", () => {
  exercise3();
  expect(console.log.mock.calls.join()).toBe("1,2,3,4,5");
});
