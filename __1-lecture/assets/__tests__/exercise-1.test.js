const exercise1 = require("../../..//__2-workshop//exercise-1");

describe("Exercise 1 - Theory Questions", () => {
  test("Question 1", () => {
    exercise1.question1();
    expect(console.log.mock.calls[0][0]).toMatch("1.1. ( )");
    expect(console.log.mock.calls[1][0]).toMatch("1.2. ( )");
    expect(console.log.mock.calls[2][0]).toMatch("1.3. (x)");
    expect(console.log.mock.calls[3][0]).toMatch("1.4. (x)");
    expect(console.log.mock.calls[4][0]).toMatch("1.5. ( )");
    expect(console.log.mock.calls[5][0]).toMatch("1.6. (x)");
    expect(console.log.mock.calls[6][0]).toMatch("1.7. (x)");
    expect(console.log.mock.calls[7][0]).toMatch("1.8. (x)");
    expect(console.log.mock.calls[8][0]).toMatch("1.9. ( )");
  });

  test("Question 2", () => {
    exercise1.question2();
    expect(console.log.mock.calls[0][0]).toMatch("2.1. ( )");
    expect(console.log.mock.calls[1][0]).toMatch("2.2. (x)");
    expect(console.log.mock.calls[2][0]).toMatch("2.3. (x)");
    expect(console.log.mock.calls[3][0]).toMatch("2.4. (x)");
    expect(console.log.mock.calls[4][0]).toMatch("2.5. (x)");
    expect(console.log.mock.calls[5][0]).toMatch("2.6. ( )");
    expect(console.log.mock.calls[6][0]).toMatch("2.7. ( )");
  });

  test("Question 3", () => {
    exercise1.question3();
    expect(console.log.mock.calls[0][0]).toMatch("3.1. (x)");
    expect(console.log.mock.calls[1][0]).toMatch("3.2. ( )");
    expect(console.log.mock.calls[2][0]).toMatch("3.3. (x)");
    expect(console.log.mock.calls[3][0]).toMatch("3.4. ( )");
    expect(console.log.mock.calls[4][0]).toMatch("3.5. ( )");
    expect(console.log.mock.calls[5][0]).toMatch("3.6. (x)");
    expect(console.log.mock.calls[6][0]).toMatch("3.7. (x)");
  });

  test("Question 4", () => {
    exercise1.question4();
    expect(console.log.mock.calls[0][0]).toMatch("4.1. ( )");
    expect(console.log.mock.calls[1][0]).toMatch("4.2. ( )");
    expect(console.log.mock.calls[2][0]).toMatch("4.3. (x)");
    expect(console.log.mock.calls[3][0]).toMatch("4.4. (x)");
    expect(console.log.mock.calls[4][0]).toMatch("4.5. ( )");
    expect(console.log.mock.calls[5][0]).toMatch("4.6. (x)");
  });

  test("Question 5", () => {
    exercise1.question5();
    expect(console.log.mock.calls[0]).toEqual([
      "5.1. Number of elements (3)",
      ["string", "number", "string"],
    ]);
    expect(console.log.mock.calls[1]).toEqual([
      "5.2. Number of elements (4)",
      ["array", "number", "string", "boolean"],
    ]);
    expect(console.log.mock.calls[2]).toEqual([
      "5.3. Number of elements (0)",
      [],
    ]);
    expect(console.log.mock.calls[3]).toEqual([
      "5.4. Number of elements (2)",
      ["array", "boolean"],
    ]);
    expect(console.log.mock.calls[4]).toEqual([
      "5.5. Number of elements (2)",
      ["object", "object"],
    ]);
  });

  test("Question 6", () => {
    exercise1.question6();
    expect(console.log.mock.calls[0]).toEqual(["6.1.", "string", "bob"]);
    expect(console.log.mock.calls[1]).toEqual(["6.2.", "number", 45]);
    expect(console.log.mock.calls[2]).toEqual(["6.3.", "boolean", false]);
    expect(console.log.mock.calls[3]).toEqual([
      "6.4.",
      "array",
      [
        { name: "Morty", age: 3 },
        { name: "Summer", age: 7 },
      ],
    ]);
  });
});
