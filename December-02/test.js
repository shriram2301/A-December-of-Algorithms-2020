const theConvo = require("./theConvo");

describe("Test Case: ", () => {
  test("Works on test case given", () => {
    const cases = ["da", "db", "dc", "ea", "eb", "ec", "fa", "fb", "fc"];
    const input = "32";
    const convo = theConvo(input);

    expect(convo).toEqual(cases);
  });
  test("throws error on invalid number input", () => {
    const input = "11";
    try {
      const convo = theConvo(input);
    } catch (err) {
      expect(err.message).toBe("Error: Invalid Input");
    }
  });
});
