import { act, renderHook } from "@testing-library/react";
import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo todo",
      done: false,
    },
  ];

  test("debe regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe agregar un todo", () => {
    const action = {
      type: "addTodo",
      payload: { id: 2, description: "Nuevo TODO" },
      done: false,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe eliminar un todo ", () => {
    const action = {
      type: "deleteTodo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("Debe realizar el toggle ", () => {
    const action = {
      type: "toggleTodo",
      payload: {
        id: 1,
        description: "Demo todo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0]).toBeTruthy();
  });
});
