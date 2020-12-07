const spoiledOrNot = require("./spoiledOrNot");
describe("Test Cases:", () => {
  test("Run given test cases", () => {
    const makeDates = [
      [10, 1, 2020],
      [13, 1, 2020],
      [20, 12, 2019],
    ];
    const expiryDates = [20, 13, 20];
    const givenDate = [28, 1, 2020];
    const result = spoiledOrNot(makeDates, expiryDates, givenDate);
    expect(result).toBe(2);
  });
});
