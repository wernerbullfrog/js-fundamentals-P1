const exercise13 = require("../../../workshop/exercise-13");

test("Exercise 13", () => {
  exercise13();
  expect(console.log.mock.calls[0][0]).toEqual(7778742049);
});
