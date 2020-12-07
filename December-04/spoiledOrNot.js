function spoiledOrNot(madeDates, expiryDays, givenDate) {
  // find day difference between made dates and given dates
  let result = 0;
  let difference = [];
  for (let i = 0; i < madeDates.length; i++) {
    let year = parseInt(madeDates[i][2]);
    let day = parseInt(madeDates[i][0]) + parseInt((madeDates[i][1] - 1) * 30);
    let givenYear = parseInt(givenDate[2]);
    let givenDay = parseInt(givenDate[0]) + parseInt((givenDate[1] - 1) * 30);
    if (givenYear - year > 0) {
      let daysToNextYear = 360 - day;
      difference.push(givenDay + daysToNextYear);
    } else {
      difference.push(givenDay - day);
    }
  }

  for (let i = 0; i < expiryDays.length; i++) {
    if (difference[i] > expiryDays[i]) {
      result += 1;
    }
  }
  return result;
}

module.exports = spoiledOrNot;
