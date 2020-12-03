// this is the main function for the performing the task.

sherlockQuest = function (roomNumber) {
  if (roomNumber % 3 !== 0) {
    return "Not Safe";
  }
  const square = roomNumber * roomNumber;
  let roomNumberLength = square.toString().length;
  let arr = square.toString().split("");
  arr = roomNumberLength % 2 === 0 ? arr : arr.unshift("0");
  let firstHalf = "";
  let secondHalf = "";
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length / 2) {
      firstHalf += arr[i];
    } else {
      secondHalf += arr[i];
    }
  }
  const left = parseInt(firstHalf);
  const right = parseInt(secondHalf);
  const isSafe = left + right === roomNumber ? true : false;
  const safetyStatus = isSafe ? "Safe" : "Not Safe";
  return safetyStatus;
};

module.exports = sherlockQuest;
