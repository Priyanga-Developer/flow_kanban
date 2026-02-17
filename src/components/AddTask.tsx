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
    <div>
  <input
  id="task-title"
  name="title"
  placeholder="Title"
  className="border p-2 rounded"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<input
  id="task-description"
  name="description"
  placeholder="Description"
  className="border p-2 rounded"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>

      <button onClick={add}>Add</button>
    </div>
  );
}
