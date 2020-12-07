// this code is done with the assumption that date time libraries cannot be used.
function meetAndGreet(timeSlots) {
  const beginningTime = "0900";
  const endTime = "1700";

  let time_slots_times = [];
  try {
    // first calculate between start time and first meeting
    let firstMeetingDiff = calculateTimeDifference(
      beginningTime,
      timeSlots[0][0]
    );

    if (firstMeetingDiff.length > 0) {
      time_slots_times.push(firstMeetingDiff);
    }
    for (let i = 0; i < timeSlots.length; i++) {
      if (i < timeSlots.length - 1) {
        const meetingTimeDiff = calculateTimeDifference(
          timeSlots[i][1],
          timeSlots[i + 1][0]
        );
        if (meetingTimeDiff.length > 0) {
          time_slots_times.push(meetingTimeDiff);
        }
      } else if (i === timeSlots.length - 1) {
        console.lo;
        const meetingTimeDiff = calculateTimeDifference(
          timeSlots[i][1],
          endTime
        );
        if (meetingTimeDiff.length > 0) {
          time_slots_times.push(meetingTimeDiff);
        }
      }
    }
  } catch (err) {
    throw Error(err.message);
  }

  return time_slots_times;
}

function calculateTimeDifference(time1, time2) {
  const timeA = time1.split("");
  const timeB = time2.split("");
  const hour1 = parseInt(timeA[0] + timeA[1]);
  const hour2 = parseInt(timeB[0] + timeB[1]);
  const min1 = parseInt(timeA[2] + timeA[3]);
  const min2 = parseInt(timeB[2] + timeB[3]);
  const hourDiff = hour2 - hour1;
  if (hourDiff < 1) {
    return [];
  }
  const minDiff = 60 - min1 + min2;
  if (minDiff < 60 && hourDiff === 1) {
    return [];
  }
  const endTime = (hour1 + 1).toString() + timeA[2] + timeA[3];

  return [timeA.join(""), endTime];
}
module.exports = meetAndGreet;
