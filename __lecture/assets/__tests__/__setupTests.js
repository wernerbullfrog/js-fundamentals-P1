beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
  expect(console.log.mock.calls.length).toBe(0);
});
