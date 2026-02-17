import { useDroppable } from "@dnd-kit/core";

export default function DeleteZone({ mode }: any) {

  const { setNodeRef, isOver } = useDroppable({
    id: "delete-zone",
  });

  if (mode !== "drag") return null;

  return (
    <div
      ref={setNodeRef}
      className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-lg
      transition-all cursor-pointer
      ${isOver ? "bg-red-600 text-white scale-110" : "bg-red-500 text-white"}
      `}
    >
      🗑 Drop here to delete
    </div>
  );
}
