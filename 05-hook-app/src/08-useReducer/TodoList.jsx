import TodoItem from "./TodoItem";

export const TodoList = ({
  todos = [],
  handleDeleteTodo,
  handleToggleTodo,
}) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};
