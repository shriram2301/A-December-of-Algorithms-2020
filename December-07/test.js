const temperatureScreening = require("./temperatureScreening");

describe("Test Cases:", () => {
  test("works for test case given", () => {
    const expected =
      "Karthik  Neha  Aditi  Suman  Prakash  Gautham  Ravi  Shreya";
    const counterA = "Aditi  Gautham  Ravi  Shreya";
    const counterB = "Karthik  Neha  Suman  Prakash";
    const result = temperatureScreening(counterA, counterB);

    expect(result).toEqual(expected);
  });
});
