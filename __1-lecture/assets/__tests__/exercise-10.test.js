const exercise10 = require("../../..//__2-workshop//exercise-10");

test("Exercise 10", () => {
  exercise10();
  expect(console.log.mock.calls.join()).toBe(
    "#,##,###,####,#####,######,#######"
  );
});
