export function loadState() {
  const data = localStorage.getItem("kanban");
  return data ? JSON.parse(data) : undefined;
}

export function saveState(state: any) {
  localStorage.setItem("kanban", JSON.stringify(state));
}
