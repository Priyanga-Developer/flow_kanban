import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { TASK_ACTIONS } from "../constants/taskActions";
import type { Task } from "../types/types";

interface Props {
  task: Task;
  dispatch: React.Dispatch<any>;
  mode: string;
}

export default function TaskCard({ task, dispatch, mode }: Props) {

  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({
      id: task.id,
      disabled: mode !== "drag",
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(mode === "drag" ? listeners : {})}
      {...(mode === "drag" ? attributes : {})}
    className={`bg-white rounded-lg border p-4 shadow-sm
  ${mode === "drag" ? "cursor-grab active:cursor-grabbing" : ""}
`}

    >
      <h3 className="font-semibold text-gray-800">{task?.title}</h3>

      <p className="text-sm text-gray-600 break-all">
        {task?.description}
      </p>

      {mode === "normal" && (
        <div className="flex gap-2 mt-2 flex-wrap">

          {TASK_ACTIONS.map((action) => (
            <button
              key={action?.label}
              className={`px-2 py-1 ${action?.color} text-white rounded text-xs`}
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
      )}

    </div>
  );
}
