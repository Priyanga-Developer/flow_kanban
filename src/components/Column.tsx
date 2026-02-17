import type { Task } from "../types/types";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  title: string;
  type: string;
  tasks: Task[];
  dispatch: React.Dispatch<any>;
  mode: string;
}

export default function Column({ title, type, tasks, dispatch, mode }: Props) {

  const columnTasks = tasks.filter((t: Task) => t?.column === type);

  //  Make column droppable
  const { setNodeRef } = useDroppable({
    id: type, //  (todo, inprogress, done)
  });

  return (
    <div
      ref={mode === "drag" ? setNodeRef : null}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 min-h-75"
    >

      <h2 className="font-bold mb-4">{title}</h2>

      {columnTasks.length === 0 && (
        <p className="text-gray-400">No tasks in this column</p>
      )}

      <div className="space-y-4">

        {columnTasks.map((task: Task) => (
          <TaskCard
            key={task.id}
            task={task}
            dispatch={dispatch}
            mode={mode}
          />
        ))}

      </div>

    </div>
  );
}
