import { Todo, newTodo, patchTodo } from "./types";

export async function getAllTodo(): Promise<Todo[]> {
  const raw = localStorage.getItem("todos");
  return raw ? (JSON.parse(raw) as Todo[]) : [];
}

export async function getOneTodo(params: number): Promise<Todo> {
  const raw = localStorage.getItem("todos");
  const todos: Todo[] = raw ? JSON.parse(raw) : [];
  return todos.find((t) => t.id === params) as Todo;
}

export async function postTodo(req: newTodo): Promise<Todo> {
  const raw = localStorage.getItem("todos");
  const todos: Todo[] = raw ? JSON.parse(raw) : [];

  const nextId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

  const created: Todo = { id: nextId, done: false, ...req };

  todos.push(created);
  localStorage.setItem("todos", JSON.stringify(todos));

  return created;
}
export async function deleteTodo(params: number): Promise<void> {
  const raw = localStorage.getItem("todos");
  if (!raw) return;
  const todos: Todo[] = raw ? (JSON.parse(raw) as Todo[]) : [];
  const updated = todos.filter((t: Todo) => t.id !== params);
  localStorage.setItem("todos", JSON.stringify(updated));
}

export async function modifyTodo(
  params: number,
  req: patchTodo,
): Promise<Todo> {
  const raw = localStorage.getItem("todos");
  const todos: Todo[] = raw ? JSON.parse(raw) : [];
  const idx = todos.findIndex((t) => t.id === params);
  if (idx === -1) throw new Error("Todo not found");
  const updated: Todo = { ...todos[idx], ...req };
  todos[idx] = updated;
  localStorage.setItem("todos", JSON.stringify(todos));
  return updated;
}
