export function getAppointmentsForDay(state, day) {
  const findCorrectDay = state.days.find(
    (currentDay) => currentDay.name === day
  );
  console.log(findCorrectDay)
  if (!findCorrectDay) {
    return [];
  }
  if (!findCorrectDay.appointments) {
    return [];
  }
  const appointmentsArray = findCorrectDay.appointments;
  console.log(appointmentsArray)
  return appointmentsArray.map(
    (appointment) => state.appointments[appointment]
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
    (interviewer) => state.interviewers[interviewer]
  );
}
