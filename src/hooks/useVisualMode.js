import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {
      // adding new mode to history

      setHistory((prev) => {
        const newHistory = [...history]
        newHistory.pop();
        return newHistory
      });
    }

    //set the history to reflect that we are replacing the current mode
    setHistory((prev) => [...prev, newMode]);
  }

  function back() {
    //should not allow the user to go back past the initial mode thus 1
    if (history.length === 1) { return }
    //remove the last item from the stack
    // then setMode with the last item in the array
    // pop() removes last element then add

    const newHistory = [...history]
    newHistory.pop();
    setHistory(newHistory)
  }
  const mode = history[history.length - 1];

  return { mode, transition, back };
}