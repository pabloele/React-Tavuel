import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../src/08-useReducer/TodoItem";
describe("Pruebas en <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Testear este componente",
    done: false,
  };

  const handleDeleteTodoMock = jest.fn();
  const handleToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe mostrar el Todo pendiente de completar ", () => {
    render(
      <TodoItem
        todo={todo}
        handleToggleTodo={handleToggleTodoMock}
        handleDeleteTodo={handleDeleteTodoMock}
      />
    );
    // screen.debug();
    const liElement = screen.getByRole("listitem");
    // console.log(liElement.innerHTML);
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.innerHTML).toBe("Testear este componente");
    // console.log(spanElement.className);
    expect(spanElement.className).toBe("align-self-center null");
  });

  test("debe mostrar el Todo completado ", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        handleToggleTodo={handleToggleTodoMock}
        handleDeleteTodo={handleDeleteTodoMock}
      />
    );
    // screen.debug();
    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain(
      "align-self-center text-decoration-line-through"
    );
  });

  test("span debe llamar a ToggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        handleToggleTodo={handleToggleTodoMock}
        handleDeleteTodo={handleDeleteTodoMock}
      />
    );
    screen.debug();
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(handleToggleTodoMock).toHaveBeenCalledWith(todo);
  });

  test("button debe ejecutar deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        handleToggleTodo={handleToggleTodoMock}
        handleDeleteTodo={handleDeleteTodoMock}
      />
    );
    const button = screen.getByRole("button");
    screen.debug();
    fireEvent.click(button);
    expect(handleDeleteTodoMock).toHaveBeenCalledWith(todo);
  });
});
