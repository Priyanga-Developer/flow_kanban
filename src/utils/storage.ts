import { initialState } from "../reducer/boardReducer";
import type { State } from "../types/types";

export function loadState() {
  try {
    const data = localStorage.getItem("kanban");
    return data ? JSON.parse(data) : initialState;
  } catch {
    return initialState;
  }
}

export function saveState(state: State) {
  localStorage.setItem("kanban", JSON.stringify(state));
}
