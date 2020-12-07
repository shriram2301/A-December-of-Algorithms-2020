function temperatureScreening(counterA, counterB) {
  const queueA = counterA.split("  ");
  const queueB = counterB.split("  ");
  let queuePosition = [];
  let queueATime = queueA.length;
  let queueBTime = queueB.length;
  while (queueBTime > 0 || queueATime > 0) {
    // let flag = false;
    //let person = "";
    if (queueBTime > 0) {
      let person = queueB.shift();
      queuePosition.push(person);
      queueBTime--;
    }
    if (queueBTime > 0) {
      let person = queueB.shift();
      queuePosition.push(person);
      queueBTime--;
    }
    if (queueATime > 0) {
      let person = queueA.shift();
      queuePosition.push(person);
      queueATime--;
    }
  }
  return queuePosition.join("  ");
}
// const expected = "Karthik  Neha  Aditi  Suman  Prakash  Gautham  Ravi  Shreya";
// const counterA = "Aditi  Gautham  Ravi  Shreya";
// const counterB = "Karthik  Neha  Suman  Prakash";
// const result = temperatureScreening(counterA, counterB);
// console.log(result);
module.exports = temperatureScreening;
