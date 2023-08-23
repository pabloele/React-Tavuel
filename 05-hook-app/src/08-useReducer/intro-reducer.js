const initialState = [
  {
    id: 1,
    todo: "Learn about reducers",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") return [...state, action.payload];
};

let todos = todoReducer();

console.log(todos);

const newTodo = {
  id: 2,
  todo: "New todo",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log({ state: todos });
