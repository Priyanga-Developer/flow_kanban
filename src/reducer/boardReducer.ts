import type { State, Task, ColumnType } from "../types/types";

export type Action =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "MOVE_TASK"; payload: { id: string; column: ColumnType } };

export const boardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] };

    case "DELETE_TASK":
      return { tasks: state.tasks.filter(t => t.id !== action.payload) };

    case "MOVE_TASK":
      return {
        tasks: state.tasks.map(t =>
          t.id === action.payload.id
            ? { ...t, column: action.payload.column }
            : t
        ),
      };

    default:
      return state;
  }
};
