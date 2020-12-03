const sherlockQuest = require("./sherlockQuest");
const safe = "Safe";
const notSafe = "Not Safe";
describe("Test Cases:", () => {
  test("if it can work for room number that is valid", () => {
    const roomNumber = 45;
    const safety = sherlockQuest(roomNumber);
    expect(safety).toBe(safe);
  });
  test("if it doesn't work for an invalid roomnumber", () => {
    const roomNumber = 36;
    const safety = sherlockQuest(roomNumber);
    expect(safety).toBe(notSafe);
  });
  xtest("if it can work for room number that is valid whose square is odd digits", () => {
    // const roomNumber = ;
    // const safety = sherlockQuest(roomNumber);
    // expect(safety).toBe(safe);
  });
  xtest("if it doesn't work for an invalid roomnumber whose square has odd digits", () => {
    // const roomNumber = ;
    // const safety = sherlockQuest(roomNumber);
    // expect(safety).toBe(notSafe);
  });
});
