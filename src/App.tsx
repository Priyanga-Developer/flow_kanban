import { useEffect, useReducer } from "react";
import "./App.css";
import { boardReducer, initialState } from "./reducer/boardReducer";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state?.tasks));
  }, [state?.tasks]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10">
        <Header />

        <main className="max-w-6xl mx-auto px-4 py-8">
          <Board tasks={state.tasks} dispatch={dispatch} />
        </main>
      </div>
    </>
  );
}

export default App;
