function theConvo(input) {
  const numbers = input.split("");
  try {
    const n1 = parseInt(numbers[0]);
    const n2 = parseInt(numbers[1]);

    if (!numberCharacters[n1] || !numberCharacters[n2]) {
      throw Error("Error: Invalid Input");
    }
    const n1Arr = numberCharacters[n1];
    const n2Arr = numberCharacters[n2];
    let comboArr = [];
    for (let i = 0; i < n1Arr.length; i++) {
      for (let j = 0; j < n2Arr.length; j++) {
        comboArr.push(n1Arr[i] + n2Arr[j]);
      }
    }
    return comboArr.sort();
  } catch (err) {
    console.log(err);
  }
}

const numberCharacters = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
//theConvo("32");
module.exports = theConvo;
