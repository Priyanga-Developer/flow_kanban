export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">
          Flow Kanban Board
        </h1>

        <p className="text-sm text-gray-500">Manage your tasks efficiently</p>
      </div>
    </header>
  );
}
