import TaskCard from "./TaskCard";

export default function Column({ title, type, tasks, dispatch }: any) {
  const columnTasks = tasks.filter((t: any) => t.column === type);

  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="font-bold mb-4">{title}</h2>

      {columnTasks.length === 0 && (
        <p className="text-gray-400">No tasks in this column</p>
      )}

      {columnTasks.map((task: any) => (
        <TaskCard key={task.id} task={task} dispatch={dispatch} />
      ))}
    </div>
  );
}
