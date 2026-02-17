import type { TaskAction } from "../types/types";


export const TASK_ACTIONS: TaskAction[] = [
  { label: "ToDo", type: "MOVE_TASK", column: "todo", color: "bg-blue-500" },
  {
    label: "Progress",
    type: "MOVE_TASK",
    column: "inprogress",
    color: "bg-yellow-500",
  },
  { label: "Done", type: "MOVE_TASK", column: "done", color: "bg-green-500" },
  { label: "Delete", type: "DELETE_TASK", color: "bg-red-500" },
];
