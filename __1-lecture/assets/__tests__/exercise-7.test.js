const exercise7 = require("../../..//__2-workshop//exercise-7");

test("Exercise 7", () => {
  exercise7();
  expect(console.log.mock.calls.join()).toBe(
    "It's 0h. Time to sleep!,It's 1h. Time to sleep!,It's 2h. Time to sleep!,It's 3h. Time to sleep!,It's 4h. Time to sleep!,It's 5h. Time to sleep!,It's 6h. Time to eat!,It's 7h. Time to train!,It's 8h. Time to train!,It's 9h. Time to train!,It's 10h. Time to train!,It's 11h. Time to train!,It's 12h. Time to eat!,It's 13h. Time to train!,It's 14h. Time to train!,It's 15h. Time to train!,It's 16h. Time to train!,It's 17h. Time to train!,It's 18h. Time to eat!,It's 19h. Time to train!,It's 20h. Time to train!,It's 21h. Time to train!,It's 22h. Time to sleep!,It's 23h. Time to sleep!"
  );
});
