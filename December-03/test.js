const meetAndGreet = require("./meetAndGreet");
describe("Test Cases:", () => {
  test("Example Test Case:", () => {
    const expected = [
      ["1100", "1200"],
      ["1330", "1430"],
    ];
    const actual = meetAndGreet([
      ["0930", "1100"],
      ["1200", "1330"],
      ["1530", "1630"],
    ]);
    console.log(actual[1]);
    console.log(expected[1]);
    expect(actual[0]).toEqual(expected[0]);
    //  expect(actual[1]).toEqual(expected[1]);
  });
});
