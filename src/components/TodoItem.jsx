import { useTodos } from "../context/TodoContext.jsx";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className={`todo-item ${todo.completed ? "is-done" : ""}`}>
      <label className="todo-item__main">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="todo-item__text">{todo.text}</span>
      </label>
      <button
        className="todo-item__delete"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
