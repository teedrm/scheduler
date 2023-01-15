export function getAppointmentsForDay(state, day) {
  // find the matching day that from mock data to match passed-in day
  const findCorrectDay = state.days.find(
    (currentDay) => currentDay.name === day
  );
  console.log("fday",findCorrectDay)
  if (!findCorrectDay) {
    return [];
  }
  if (!findCorrectDay.appointments) {
    return [];
  }
  const appointmentsArray = findCorrectDay.appointments;
  console.log("apt",appointmentsArray)
  return appointmentsArray.map(
    (appointmentID) => state.appointments[appointmentID]
  );
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerInfo = state.interviewers[interview.interviewer];

  return {
    student: interview.student,
    interviewer: interviewerInfo,
  };
}

export function getInterviewersForDay(state, day) {
  const findCorrectDay = state.days.find(
    (currentDay) => currentDay.name === day
  );
  if (!findCorrectDay) {
    return [];
  }
  if (!findCorrectDay.appointments) {
    return [];
  }
  const interviewerArray = findCorrectDay.interviewers;
  return interviewerArray.map(
    (interviewerID) => state.interviewers[interviewerID]
  );
}
