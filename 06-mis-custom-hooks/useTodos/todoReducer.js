export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "addTodo":
      return [...initialState, action.payload];
    case "deleteTodo":
      return initialState.filter((todo) => todo.id != action.payload);
    case "toggleTodo":
      return initialState.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });
    default:
      return initialState;
  }
};
