import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const doneCount = todos.filter((t) => !t.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "addTodo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (todo) => {
    const action = {
      type: "deleteTodo",
      payload: todo.id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (todo) => {
    const action = {
      type: "toggleTodo",
      payload: todo,
    };

    dispatch(action);
  };

  const todosCount = todos.length;

  return {
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
    todos,
    doneCount,
    todosCount,
  };
};
