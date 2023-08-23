import { TodoList } from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const {
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
    todos,
    doneCount,
    todosCount,
  } = useTodos();

  return (
    <>
      <h1>
        Todo App: {todosCount}, <small>pendientes: {doneCount}</small>
      </h1>
      <hr />
      <div className="row ">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
          <div className="col-5"></div>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
