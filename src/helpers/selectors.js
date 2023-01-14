export function getAppointmentsForDay(state, day) {
  const findCorrectDay = state.days.find(
    (currentDay) => currentDay.name === day
  );
  if (!findCorrectDay) {
    return [];
  }
  if (!findCorrectDay.appointments) {
    return [];
  }
  return findCorrectDay.appointments.map((id) => state.appointments[id]);
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

