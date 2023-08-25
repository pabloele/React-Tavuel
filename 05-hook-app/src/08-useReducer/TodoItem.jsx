const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <>
      <li
        key={todo.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : null
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => handleToggleTodo(todo)}
          aria-label="span"
        >
          {todo.description}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteTodo(todo)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};

export default TodoItem;
