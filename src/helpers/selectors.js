export function getAppointmentsForDay(state, day) {
  // find the matching day that from mock data to match passed-in day
  const findCorrectDay = state.days.find(
    (currentDay) => currentDay.name === day
  );

  if (!findCorrectDay || !findCorrectDay.appointments) {
    return [];
  }

  const appointmentsArray = findCorrectDay.appointments;

  return appointmentsArray.map(
    (appointmentID) => state.appointments[appointmentID]
  );
}

export function getInterview(state, interview) {
  if (!interview) {
    console.log("turn null", interview)
    return null;
  }
  const interviewerInfo = state.interviewers[interview.interviewer];
console.log("intinfo", interviewerInfo)
  return {
    student: interview.student,
    interviewer: interviewerInfo,
  };
}

export function getInterviewersForDay(state, day) {
  const findCorrectDay = state.days.find(
    (currentDay) => currentDay.name === day
  );
  console.log(findCorrectDay)
  if (!findCorrectDay || !findCorrectDay.appointments) {
    return [];
  }

  const interviewerArray = findCorrectDay.interviewers;
  console.log(interviewerArray)
  console.log(state.interviewers)
  return interviewerArray.map(
    (interviewerID) => state.interviewers[interviewerID]
  );
  
}
