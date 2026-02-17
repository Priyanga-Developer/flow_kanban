import { TASK_ACTIONS } from "../constants/taskActions";
import type { Task } from "../types/types";

interface Props {
  task: Task;
  dispatch: React.Dispatch<any>;
}

export default function TaskCard({ task, dispatch }: Props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-gray-800">{task?.title}</h3>

      <p className="text-sm text-gray-600 wrap-break-word">
        {task?.description}
      </p>

      <div className="flex gap-2 mt-2 flex-wrap">
        {TASK_ACTIONS.map((action) => (
          <button
            key={action.label}
            className={`px-2 py-1 ${action.color} text-white rounded text-xs`}
            onClick={() => {
              if (action.type === "MOVE_TASK") {
                dispatch({
                  type: action?.type,
                  payload: { id: task?.id, column: action?.column },
                });
              } else {
                dispatch({
                  type: action?.type,
                  payload: task?.id,
                });
              }
            }}
          >
            {action?.label}
          </button>
        ))}
      </div>
    </div>
  );
}
