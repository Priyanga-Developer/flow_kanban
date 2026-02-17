import { useState } from "react";
import { nanoid } from "nanoid";

export default function AddTask({ dispatch }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const add = () => {
    if (!title.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: nanoid(),
        title,
        description,
        column: "todo",
      },
    });

    setTitle("");
    setDescription("");
  };

  return (
<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 flex gap-3 justify-center">
      <input
        id="task-title"
        name="title"
        placeholder="Title"
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        id="task-description"
        name="description"
        placeholder="Description"
        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={add}
      >
        Add
      </button>
    </div>
  );
}
