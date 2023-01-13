export function getAppointmentsForDay(state, day) {
  //find the correct first matching day
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
