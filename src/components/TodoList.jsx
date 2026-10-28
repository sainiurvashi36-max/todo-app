import { useTodos } from "../context/TodoContext.jsx";
import TodoItem from "./TodoItem.jsx";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

function TodoList() {
  const { filteredTodos, filter, setFilter } = useTodos();
  const count = filteredTodos.length;

  return (
    <>
      <div className="filters">
        <div className="filters__tabs">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filters__tab ${filter === f.key ? "is-active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="filters__count">
          {count} {count === 1 ? "task" : "tasks"}
        </span>
      </div>

      {count === 0 ? (
        <div className="empty">
          <div className="empty__icon">📝</div>
          <p className="empty__title">Nothing here yet</p>
          <p className="empty__text">Add a task above to get started.</p>
        </div>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
