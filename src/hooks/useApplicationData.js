import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function bookInterview(id, interview) {
    // create new apt object with values copied from existing apt
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    // replace existing record with the matching id
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, appointment).then((res) => {
      const days = updateSpots(state, appointments);
      //apply changes above
      setState({
        ...state,
        appointments,
        days
      });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then((res) => {
      const days = updateSpots(state, appointments);
      setState({ ...state, appointments, days });
    });
  }

  const updateSpots = function (state, appointments) {
    // get/find the day
    const dayObj = state.days.find(day => day.name === state.day);

    // count the null appointments
    let spots = 0;
    for (const id of dayObj.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }

    const day = { ...dayObj, spots };
    return state.days.map(d => d.name === state.day ? day : d);
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
