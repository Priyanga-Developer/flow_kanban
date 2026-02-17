export type ColumnType = "todo" | "inprogress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  column: ColumnType;
}

export interface State {
  tasks: Task[];
}

type MoveTaskAction = {
  label: string;
  type: "MOVE_TASK";
  column: ColumnType;
  color: string;
};

type DeleteTaskAction = Omit<MoveTaskAction, "column" | "type"> & {
  type: "DELETE_TASK";
};

export type TaskAction = MoveTaskAction | DeleteTaskAction;

