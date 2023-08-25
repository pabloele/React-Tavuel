import { fireEvent, render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";
jest.mock("../../src/hooks/useTodos");
describe("Pruebas en <TodoApp/>", () => {
  useTodos.mockReturnValue({
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    todos: [
      { id: 1, description: "Todo nro 1", done: false },
      { id: 2, description: "Todo nro 2", done: true },
    ],
    doneCount: 1,
    todosCount: 2,
  });
  test("debe mostrar el componente correctamente ", () => {
    render(<TodoApp />);
    screen.debug();
    expect(screen.getByText("Todo nro 1")).toBeTruthy();
    expect(screen.getByText("Todo nro 2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
