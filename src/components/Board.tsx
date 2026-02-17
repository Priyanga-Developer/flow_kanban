import Column from "./Column";
import AddTask from "./AddTask";

export default function Board({ tasks, dispatch }: any) {
  return (
    <div>
      <AddTask dispatch={dispatch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Column title="To Do" type="todo" tasks={tasks} dispatch={dispatch} />
        <Column
          title="In Progress"
          type="inprogress"
          tasks={tasks}
          dispatch={dispatch}
        />
        <Column title="Done" type="done" tasks={tasks} dispatch={dispatch} />
      </div>
    </div>
  );
}
