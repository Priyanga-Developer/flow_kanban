export default function Header({ mode, setMode }: any) {

  const isDrag = mode === "drag";

  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">

      <h1 className="font-semibold text-lg">🚀 Flow Kanban</h1>

      <div className="flex items-center gap-3">

        <span className="text-sm text-gray-500">
          {isDrag ? "Drag Mode" : "Normal Mode"}
        </span>

        {/* Toggle Switch */}
        <button
          onClick={() => setMode(isDrag ? "normal" : "drag")}
          className={`w-14 h-7 flex items-center rounded-full p-1 transition
            ${isDrag ? "bg-blue-500" : "bg-gray-300"}
          `}
        >
          <div
            className={`bg-white w-5 h-5 rounded-full shadow-md transform transition
              ${isDrag ? "translate-x-7" : ""}
            `}
          />
        </button>

      </div>

    </header>
  );
}
