import { useEffect, useReducer } from "react";
import { boardReducer, initialState } from "./reducer/boardReducer";
import Board from "./components/Board";
import Header from "./components/Header";
import { loadState, saveState } from "./utils/storage";

function App() {
  const [state, dispatch] = useReducer(boardReducer, initialState, loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 ">
        <Header />

        <main className="max-w-6xl mx-auto px-4 py-8">
          <Board tasks={state.tasks} dispatch={dispatch} />
        </main>
      </div>
    </>
  );
}

export default App;
