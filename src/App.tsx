import { useReducer } from "react";
import "./App.css";
import { boardReducer } from "./reducer/boardReducer";

function App() {
  const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  };
  const [state, dispatch] = useReducer(boardReducer, initialState);
  return (
    <>
      <div className=" text-amber-200 flex"></div>
    </>
  );
}

export default App;
