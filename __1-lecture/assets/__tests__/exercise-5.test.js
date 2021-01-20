const exercise5 = require("../../..//__2-workshop//exercise-5");

test("Exercise 5", () => {
  exercise5();
  expect(console.log.mock.calls.join()).toBe(
    "1,3,5,7,9,11,13,15,17,19,21,23,25"
  );
});
