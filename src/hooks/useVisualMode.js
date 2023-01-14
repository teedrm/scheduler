import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      // adding new mode to history
      history.pop();
      setHistory((prev) => [...prev, newMode]);
    } else {
      //set the history to reflect that we are replacing the current mode
      setHistory((prev) => [...prev, newMode]);
    }
  }

  function back() {
    //should not allow the user to go back past the initial mode thus 1
    if (history.length > 1) {
      //remove the last item from the stack
      // then setMode with the last item in the array
      // pop() removes last element then add
      history.pop();
      setMode(history[history.length - 1]);
    }
  }

  return { mode, transition, back };
}
