const exercise8 = require("../../..//__2-workshop//exercise-8");

test("Exercise 8", () => {
  exercise8();
  expect(console.log.mock.calls.join()).toBe("The sum is 3127500");
});
