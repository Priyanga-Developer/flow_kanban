export default function TaskCard({ task, dispatch }: any) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-3 flex flex-col justify-center items-center">
      <h3 className="font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600 wrap-break-word">
  {task.description}
</p>


      <div className="flex gap-2 mt-2 flex-wrap">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded text-xs"
          onClick={() =>
            dispatch({
              type: "MOVE_TASK",
              payload: { id: task.id, column: "todo" },
            })
          }
        >
          ToDo
        </button>

        <button
          className="px-2 py-1 bg-yellow-500 text-white rounded text-xs"
          onClick={() =>
            dispatch({
              type: "MOVE_TASK",
              payload: { id: task.id, column: "inprogress" },
            })
          }
        >
          Progress
        </button>

        <button
          className="px-2 py-1 bg-green-500 text-white rounded text-xs"
          onClick={() =>
            dispatch({
              type: "MOVE_TASK",
              payload: { id: task.id, column: "done" },
            })
          }
        >
          Done
        </button>

        <button
          className="px-2 py-1 bg-red-500 text-white rounded text-xs"
          onClick={() =>
            dispatch({
              type: "DELETE_TASK",
              payload: task.id,
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}
