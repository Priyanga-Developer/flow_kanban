import { useEffect, useReducer } from "react";
import "./App.css";
import { boardReducer, initialState } from "./reducer/boardReducer";
import Board from "./components/Board";

function App() {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state?.tasks));
  }, [state?.tasks]);

  return (
    <>
      <div className="p-6">
        <Board tasks={state.tasks} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
