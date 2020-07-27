const exercise4 = require("../../../workshop/exercise-4");

test("Exercise 4", () => {
  exercise4();
  expect(console.log.mock.calls.join()).toBe(
    "0,1,4,9,16,25,36,49,64,81,100,121,144"
  );
});
