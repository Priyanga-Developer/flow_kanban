export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-10 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
          🚀 Flow Kanban
        </h1>

        <p className="text-sm text-gray-400 hidden sm:block">
          Manage your tasks efficiently
        </p>
      </div>
    </header>
  );
}
