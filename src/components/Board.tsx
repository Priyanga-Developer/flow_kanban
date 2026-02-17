import Column from "./Column";
import AddTask from "./AddTask";
import { DndContext } from "@dnd-kit/core";
import DeleteZone from "./DeleteZone";

export default function Board({ tasks, dispatch, mode }: any) {
  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    //  delete if dropped in trash
    if (over.id === "delete-zone") {
      dispatch({
        type: "DELETE_TASK",
        payload: active?.id,
      });

      return;
    }

    dispatch({
      type: "MOVE_TASK",
      payload: {
        id: active.id,
        column: over.id,
      },
    });
  };

  const columns = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Column
        title="To Do"
        type="todo"
        tasks={tasks}
        dispatch={dispatch}
        mode={mode}
      />
      <Column
        title="In Progress"
        type="inprogress"
        tasks={tasks}
        dispatch={dispatch}
        mode={mode}
      />
      <Column
        title="Done"
        type="done"
        tasks={tasks}
        dispatch={dispatch}
        mode={mode}
      />
    </div>
  );

  return (
    <div>
      <AddTask dispatch={dispatch} />

      {mode === "drag" ? (
        <DndContext onDragEnd={handleDragEnd}>
          {columns}
          <DeleteZone mode={mode} />
        </DndContext>
      ) : (
        columns
      )}
    </div>
  );
}
